const dummyLayers = [
    { id: 1, flapA: "Open", flapB: "Closed" },
    { id: 10, flapA: "Closed", flapB: "Open" },
    { id: 20, flapA: "Open", flapB: "Open" },
    { id: 30, flapA: "Closed", flapB: "Closed" },
    { id: 50, flapA: "Open", flapB: "Closed" },
    { id: 60, flapA: "Closed", flapB: "Open" },
    { id: 70, flapA: "Open", flapB: "Closed" },
    { id: 80, flapA: "Closed", flapB: "Open" },
    { id: 90, flapA: "Open", flapB: "Open" },
    { id: 100, flapA: "Closed", flapB: "Closed" },
    { id: 110, flapA: "Open", flapB: "Closed" },
    { id: 120, flapA: "Closed", flapB: "Open" },
    { id: 130, flapA: "Open", flapB: "Open" },
    { id: 140, flapA: "Closed", flapB: "Closed" },
    { id: 150, flapA: "Open", flapB: "Closed" },
    { id: 160, flapA: "Closed", flapB: "Open" },
    { id: 170, flapA: "Open", flapB: "Open" },
    { id: 180, flapA: "Closed", flapB: "Closed" },
    { id: 190, flapA: "Open", flapB: "Closed" },
    { id: 200, flapA: "Closed", flapB: "Open" },
    { id: 210, flapA: "Open", flapB: "Open" },
    { id: 220, flapA: "Closed", flapB: "Closed" },
];

export default function LayerConfiguration() {
    return (
        <div className="flex h-full min-h-0 w-full flex-col overflow-hidden">
            <div className="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-white">Layer Configuration</h1>
                    <p className="text-slate-400">Configure the settings for each layer of your print</p>
                </div>

                <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">
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
                        {/* Example row */}
                        {dummyLayers.map((layer) => (
                            <tr key={layer.id} className="bg-[#0C1B2C]">
                                <td className="border px-4 py-2">{layer.id}</td>
                                <td className={`border px-4 py-2 ${layer.flapA === "Open" ? "bg-[#086B4B]" : "bg-[#25394D]"}`}>{layer.flapA}</td>
                                <td className={`border px-4 py-2 ${layer.flapB === "Open" ? "bg-[#086B4B]" : "bg-[#25394D]"}`}>{layer.flapB}</td>
                                <td className="flex border px-4 py-2 justify-center">
                                    <button className="cursor-pointer mr-2 rounded bg-yellow-500 px-2 py-1 text-white">✎</button>
                                    <button className="cursor-pointer rounded bg-red-500 px-2 py-1 text-white">✖</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex flex-col gap-3 border border-slate-600 p-4 bg-[#0B1A2B]">
                <h2 className="text-xl font-bold text-white">Recipe Settings</h2>
                <div className="flex gap-3">
                    <input type="text" placeholder="Recipe Name" className="flex-1 rounded border border-slate-600 bg-slate-800 px-4 py-2 text-white" />
                    <input type="number" placeholder="Total Layers" className="flex-1 rounded border border-slate-600 bg-slate-800 px-4 py-2 text-white" />
                </div>
                <div className="flex gap-3">
                    <button className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white">Save Recipe</button>
                    <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">Export JSON</button>
                </div>
            </div>
            
        </div>
    );
}