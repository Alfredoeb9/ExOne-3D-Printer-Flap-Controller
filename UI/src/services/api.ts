const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

export type FlapName = "A" | "B";
export type FlapPosition = "open" | "closed";

export type RecipeAction = {
    layer: number;
    flap_a: FlapPosition;
    flap_b: FlapPosition;
};

export type RecipePayload = {
    recipe_name: string;
    total_layers: number;
    actions: RecipeAction[];
};

type FlapCommandResponse = {
    flap: FlapName;
    commandPosition: FlapPosition;
    status: "command";
};

type ManualTestResponse = {
    runId: string;
    status: "running";
};

type SaveRecipeResponse = {
    id: string;
    recipe_name: string;
};

async function request<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(message || `Request failed (${response.status})`);
    }

    return response.json() as Promise<T>;
}

export function runManualTest(): Promise<ManualTestResponse> {
    return request<ManualTestResponse>("/api/manual-test/run", {
        method: "POST",
    });
}

export function setFlapPosition(flap: FlapName, position: FlapPosition): Promise<FlapCommandResponse> {
    return request<FlapCommandResponse>(`/api/flap/${flap}/position`, {
        method: "POST",
        body: JSON.stringify({ position }),
    });
}

export function getRecipes(): Promise<SaveRecipeResponse[]> {
    return request<SaveRecipeResponse[]>("/api/recipes", {
        method: "GET",
    });
}

export function saveRecipe(recipe: RecipePayload): Promise<SaveRecipeResponse> {
    return request<SaveRecipeResponse>("/api/recipes", {
        method: "POST",
        body: JSON.stringify(recipe),
    });
}