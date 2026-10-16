import { useEffect, useRef, useState } from "react";
import { saveRecipe, type RecipePayload } from "../services/api";
import NotificationPopUp from "../components/notificationPopUp";

export default function LayerConfiguration() {
    const [layers, setLayers] = useState<{ id: number; flapA: string; flapB: string }[]>([]);
    const [recipeName, setRecipeName] = useState("");
    const [totalLayers, setTotalLayers] = useState(0);
    const [isSaving, setIsSaving] = useState(false);
    const [editingLayerId, setEditingLayerId] = useState<number | null>(null);
    const [isAddLayerOpen, setIsAddLayerOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [notification, setNotification] = useState<{
        id: number;
        message: string;
        status: "error" | "success";
    } | null>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isAddLayerOpen && !dialog.open) dialog.showModal();
        if (!isAddLayerOpen && dialog.open) dialog.close();
    }, [isAddLayerOpen]);

    function handleAddLayer(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newLayer = {
            id: Number(formData.get("layer")),
            flapA: String(formData.get("flapA")),
            flapB: String(formData.get("flapB")),
        };

        setLayers((currentLayers) => {
            if (editingLayerId !== null) {
                return currentLayers.map((layer) => (layer.id === editingLayerId ? newLayer : layer));
            }
            return [...currentLayers, newLayer];
        });

        setIsAddLayerOpen(false);
        setEditingLayerId(null);
    }
    
    function handleEditLayer(id: number) {
        const layerToEdit = layers.find((layer) => layer.id === id);
        if (!layerToEdit) return;

        setEditingLayerId(id);
        setIsAddLayerOpen(true);

        setTimeout(() => {
            const form = dialogRef.current?.querySelector("form");
            if (!form) return;

            (form.elements.namedItem("layer") as HTMLInputElement).value = String(layerToEdit.id);
            (form.elements.namedItem("flapA") as HTMLSelectElement).value = layerToEdit.flapA;
            (form.elements.namedItem("flapB") as HTMLSelectElement).value = layerToEdit.flapB;
        }, 0);
    }
    
    function handleDeleteLayer(id: number) {
        setLayers((currentLayers) => currentLayers.filter((layer) => layer.id !== id));
    }

    function buildRecipePayload(): RecipePayload {
        return {
            recipe_name: recipeName,
            total_layers: totalLayers,
            actions: [...layers]
                .sort((a, b) => a.id - b.id)
                .map((layer) => ({
                    layer: layer.id,
                    flap_a: layer.flapA.toLowerCase() as "open" | "closed",
                    flap_b: layer.flapB.toLowerCase() as "open" | "closed",
                })),
        };
    }

    function validateRecipe(recipe: RecipePayload): string | null {
        if (!recipe.recipe_name) return "Recipe name is required.";

        if (!Number.isInteger(recipe.total_layers) || recipe.total_layers < 1) {
            return "Total layers must be a whole number greater than 0.";
        }

        if (recipe.actions.length === 0) return "Add at least one layer.";

        if (recipe.actions.some((action) => action.layer > recipe.total_layers)) {
            return "A layer number exceeds the total layers.";
        }

        if (new Set(recipe.actions.map((action) => action.layer)).size !== recipe.actions.length) {
            return "Layer numbers must be unique.";
        }

        return null;
    }

    async function handleSaveRecipe() {
    const recipe = buildRecipePayload();
    const error = validateRecipe(recipe);

    if (error) {
        setNotification({ id: Date.now(), message: error, status: "error" });
        return;
    }

    setIsSaving(true);
        try {
            await saveRecipe(recipe);
            setNotification({ id: Date.now(), message: "Recipe saved.", status: "success" });
        } catch (err) {
            setNotification({
                id: Date.now(),
                message: err instanceof Error ? err.message : "Could not save the recipe.",
                status: "error",
            });
        } finally {
            setIsSaving(false);
        }
    }

    function handleExportJSON() {
        const recipe = buildRecipePayload();
        const error = validateRecipe(recipe);

        if (error) {
            setNotification({ id: Date.now(), message: error, status: "error" });
            return;
        }

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(recipe, null, 2));
        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `${recipe.recipe_name || "recipe"}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    return (
        <div className="flex h-full min-h-0 w-full flex-col overflow-hidden">
            <div className="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-white">Layer Configuration</h1>
                    <p className="text-slate-400">Configure the settings for each layer of your print</p>
                </div>

                <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white" onClick={() => setIsAddLayerOpen(true)}>
                    + Add Layer
                </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto">
                <table className="min-w-full bg-slate-800 text-white">
                    <thead className="sticky top-0 z-10 bg-[#12253A]">
                        <tr>
                            <th className="px-4 py-2">Layer</th>
                            <th className="px-4 py-2">Flap A</th>
                            <th className="px-4 py-2">Flap B</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {layers && layers.map((layer) => (
                            <tr key={layer.id} className="bg-[#0C1B2C]">
                                <td className="border px-4 py-2">{layer.id}</td>
                                <td className={`border px-4 py-2 ${layer.flapA === "Open" ? "bg-[#086B4B]" : "bg-[#25394D]"}`}>{layer.flapA}</td>
                                <td className={`border px-4 py-2 ${layer.flapB === "Open" ? "bg-[#086B4B]" : "bg-[#25394D]"}`}>{layer.flapB}</td>
                                <td className="flex border px-4 py-2 justify-center">
                                    <button className="cursor-pointer mr-2 rounded bg-yellow-500 px-2 py-1 text-white" onClick={() => handleEditLayer(layer.id)}>✎</button>
                                    <button className="cursor-pointer rounded bg-red-500 px-2 py-1 text-white" onClick={() => handleDeleteLayer(layer.id)}>✖</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex flex-col gap-3 border border-slate-600 p-4 bg-[#0B1A2B]">
                <h2 className="text-xl font-bold text-white">Recipe Settings</h2>
                <div className="flex flex-col gap-3 sm:flex-row">
                <input
                    type="text"
                    placeholder="Recipe Name"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    className="flex-1 rounded border border-slate-600 bg-slate-800 px-4 py-2 text-white"
                />
                <input
                    type="number"
                    min="1"
                    placeholder="Total Layers"
                    value={totalLayers}
                    onChange={(e) => setTotalLayers(Number(e.target.value))}
                    className="flex-1 rounded border border-slate-600 bg-slate-800 px-4 py-2 text-white"
                />
            </div>
            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={handleSaveRecipe}
                    disabled={isSaving}
                    className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSaving ? "Saving..." : "Save Recipe"}
                </button>
                <button
                    type="button"
                    onClick={handleExportJSON}
                    className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white"
                >
                    Export JSON
                </button>
            </div>
            </div>

            <dialog
                ref={dialogRef}
                aria-labelledby="add-layer-title"
                onCancel={(event) => {
                    event.preventDefault();
                    setIsAddLayerOpen(false);
                }}
                className="m-auto w-[min(28rem,calc(100%-2rem))] rounded-md border border-slate-600 bg-[#0B1A2B] p-0 text-white backdrop:bg-black/60"
            >
                <form onSubmit={handleAddLayer} className="space-y-4 p-5">
                    <h2 id="add-layer-title" className="text-xl font-semibold">
                        Add Layer
                    </h2>

                    <label className="block text-sm text-slate-300">
                        Layer number
                        <input
                            name="layer"
                            type="number"
                            min="1"
                            required
                            className="mt-1 w-full rounded border border-slate-600 bg-slate-800 px-3 py-2 text-white"
                        />
                    </label>

                    {(["flapA", "flapB"] as const).map((flap) => (
                        <label key={flap} className="block text-sm text-slate-300">
                            {flap === "flapA" ? "Flap A" : "Flap B"}

                            <select
                                name={flap}
                                defaultValue="Closed"
                                className="mt-1 w-full cursor-pointer rounded border border-slate-600 bg-slate-800 px-3 py-2 text-white"
                            >
                                <option className="cursor-pointer">Open</option>
                                <option className="cursor-pointer">Closed</option>
                            </select>
                        </label>
                    ))}

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setIsAddLayerOpen(false)}
                            className="rounded bg-slate-700 px-4 py-2 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded bg-blue-500 px-4 py-2 cursor-pointer"
                        >
                            Add Layer
                        </button>
                    </div>
                </form>
            </dialog>

            {notification && (
                <NotificationPopUp
                    key={notification.id}
                    message={notification.message}
                    status={notification.status}
                />
            )}
        </div>
    );
}