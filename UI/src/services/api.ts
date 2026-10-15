const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

type ManualTestResponse = {
    runId: string;
    status: "running";
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