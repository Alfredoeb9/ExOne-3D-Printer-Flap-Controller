export default function Settings() {
    return (
        <div className="flex h-full min-h-0 w-full flex-col overflow-hidden">
            <div className="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-white">Settings</h1>
                    <p className="text-slate-400">Configure the settings for your 3D printer</p>
                </div>
            </div>

            <div className="min-h-0 flex gap-6 overflow-auto">
                <div className="connection flex-1 bg-slate-800 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-white">Connections</h2>

                    <div className="printer">
                        <h3 className="text-md font-bold text-slate-300">Printer Connection</h3>

                        <div className="flex flex-row justify-between gap-3">
                            <p className="text-slate-400">🔴 Not connected</p>
                            <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">Configure</button>
                        </div>
                    </div>

                    <div className="raspberry-pi">
                        <h3 className="text-md font-bold text-slate-300">Raspberry Pi</h3>

                        <div className="flex flex-row justify-between gap-3">
                            <p className="text-slate-400">🔴 Not connected</p>
                            <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">Configure</button>
                        </div>
                    </div>
                </div>

                <div className="general flex-1 bg-slate-800 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-white">General</h2>

                    <div className="mt-2 mb-4 space-y-4">
                        <label
                            htmlFor="start-with-windows"
                            className="flex cursor-pointer items-center justify-between text-slate-300"
                        >
                            <span>Start with Windows</span>

                            <span className="relative inline-flex">
                                <input
                                    id="start-with-windows"
                                    type="checkbox"
                                    role="switch"
                                    className="peer sr-only"
                                />
                                <span
                                    aria-hidden="true"
                                    className="h-4 w-7 rounded-full bg-slate-600 transition-colors
                                        after:absolute after:left-0.5 after:top-0.5 after:size-3
                                        after:rounded-full after:bg-white after:transition-transform
                                        peer-checked:bg-blue-500 peer-checked:after:translate-x-3
                                        peer-focus-visible:outline peer-focus-visible:outline-2
                                        peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-300"
                                />
                            </span>
                        </label>
                    </div>


                    <div className="mt-4 space-y-4">
                        <label
                            htmlFor="auto-save-last-recipe"
                            className="flex cursor-pointer items-center justify-between text-slate-300"
                        >
                            <span>Auto-save last recipe</span>

                            <span className="relative inline-flex">
                                <input
                                    id="auto-save-last-recipe"
                                    type="checkbox"
                                    role="switch"
                                    className="peer sr-only"
                                />
                                <span
                                    aria-hidden="true"
                                    className="h-4 w-7 rounded-full bg-slate-600 transition-colors
                                        after:absolute after:left-0.5 after:top-0.5 after:size-3
                                        after:rounded-full after:bg-white after:transition-transform
                                        peer-checked:bg-blue-500 peer-checked:after:translate-x-3
                                        peer-focus-visible:outline peer-focus-visible:outline-2
                                        peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-300"
                                />
                            </span>
                        </label>
                    </div>

                    <div className="mt-4 space-y-4">
                        <label
                            htmlFor="enable-notifications"
                            className="flex cursor-pointer items-center justify-between text-slate-300"
                        >
                            <span>Enable notifications</span>

                            <span className="relative inline-flex">
                                <input
                                    id="enable-notifications"
                                    type="checkbox"
                                    role="switch"
                                    className="peer sr-only"
                                />
                                <span
                                    aria-hidden="true"
                                    className="h-4 w-7 rounded-full bg-slate-600 transition-colors
                                        after:absolute after:left-0.5 after:top-0.5 after:size-3
                                        after:rounded-full after:bg-white after:transition-transform
                                        peer-checked:bg-blue-500 peer-checked:after:translate-x-3
                                        peer-focus-visible:outline peer-focus-visible:outline-2
                                        peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-300"
                                />
                            </span>
                        </label>
                    </div>

                    <div className="source">
                        <h3>Layer Source</h3>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Enter layer source"
                                id="layer-source"
                                className="mt-2 pl-4 block w-full rounded-md border-slate-600 bg-slate-700 text-slate-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            />
                            <button className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Configure</button>
                        </div>
                        
                    </div>
                </div>

                
            </div>

            
        </div>
    );
}