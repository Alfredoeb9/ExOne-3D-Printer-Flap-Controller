const progress = "100%";

export default function ManualControl() {
    return (
        // <div className="flex h-full min-h-0 w-full flex-col overflow-hidden">
        //     <div className="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-3">
        //         <div>
        //             <h1 className="text-2xl font-bold text-white">Manual Control</h1>
        //             <p className="text-slate-400">Manually control the flaps for each layer of your print</p>
        //         </div>
        //     </div>

        //     {/* Create a responsive and dynamic table with Layer flap A flab B and actions with action having two buttons (edit and delete) */}
        //     <div className="min-h-0 flex flex-row gap-4 justify-between flex-1 overflow-auto">
        //         <div className="flap_a flex-1 bg-[#0B1A2B] p-4 rounded">
        //             <h1 className="text-xl font-bold text-white">Flap A Control</h1>
        //             <p className="text-slate-400">🟢 Open</p>

        //             <div className="btns">
        //                 <div className="flex flex-row gap-3">
        //                     <button className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white mt-2">Open Flap A</button>
        //                     <button className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white mt-2">Close Flap A</button>
        //                 </div>

        //                 <div className="mt-4">
        //                     <h3 className="mb-1 text-white">Position</h3>

        //                     <div className="relative mt-6">
        //                         <span className="absolute -top-6 -translate-x-1/2 text-white" style={{ left: `${progress}` }}>
        //                             {progress}
        //                         </span>

        //                         <div className="h-4 w-full overflow-hidden rounded bg-slate-700">
        //                             <div className={`h-full transition-all duration-500 ${Number(progress.replace("%", "")) < 100 ? "bg-yellow-500" : "bg-green-500"}`} style={{ width: `${progress}` }}/>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
                    

        //             <div className="status flex flex-row justify-between">
        //                 <div className="text-white">
        //                     <h4 className="text-white">Last Command</h4>
        //                     <p>Open</p>
        //                 </div>

        //                 <div className="text-white">
        //                     <h4 className="text-white">Status</h4>
        //                     <p>🟢OK</p>
        //                 </div>
        //             </div>
        //         </div>
                
        //         <div className="flap_b flex-1 bg-[#0B1A2B] p-4 rounded">
        //             <h1 className="text-xl font-bold text-white">Flap B Control</h1>
        //             <p className="text-slate-400">🟣 Closed</p>

        //             <div className="flex flex-row gap-3">
        //                 <button className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white mt-2">Open Flap B</button>
        //                 <button className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white mt-2">Close Flap B</button>
        //             </div>

        //             <div className="mt-4">
        //                 <h3 className="mb-1 text-white">Position</h3>

        //                 <div className="relative mt-6">
        //                     <span className="absolute -top-6 -translate-x-1/2 text-white" style={{ left: `${progress}` }}>
        //                         {progress}
        //                     </span>

        //                     <div className="h-4 w-full overflow-hidden rounded bg-slate-700">
        //                         <div className={`h-full transition-all duration-500 ${Number(progress.replace("%", "")) < 100 ? "bg-yellow-500" : "bg-green-500"}`} style={{ width: `${progress}` }}/>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="status flex flex-row justify-between">
        //                 <div className="text-white">
        //                     <h4 className="text-white">Last Command</h4>
        //                     <p>Open</p>
        //                 </div>

        //                 <div className="text-white">
        //                     <h4 className="text-white">Status</h4>
        //                     <p>🟢OK</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Save recipe settings container with a recipe settings header two inputs fields one with recipe name and other total laers and two cuttons save recipe and export JSON */}
        //     <div className="mt-4 flex flex-col gap-3 border border-slate-600 p-4 bg-[#0B1A2B]">
        //         <h2 className="text-xl font-bold text-white">Test Sequence</h2>
        //         <div className="flex gap-3">
        //             <input type="text" placeholder="Recipe Name" className="flex-1 rounded border border-slate-600 bg-slate-800 px-4 py-2 text-white" />
        //             <input type="number" placeholder="Total Layers" className="flex-1 rounded border border-slate-600 bg-slate-800 px-4 py-2 text-white" />
        //         </div>
        //         <div className="flex gap-3">
        //             <button className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white">Run Test</button>
        //             <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">Stop Test</button>
        //         </div>
        //     </div>
            
        // </div>

        <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#061321] px-3 py-4 text-left text-slate-100">
            <header className="mb-3 shrink-0">
                <h1 className="text-base font-semibold leading-5">Manual Control</h1>
                <p className="mt-1 text-xs text-slate-400">Test and control the flaps manually.</p>
            </header>

            <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-y-auto 2xl:overflow-hidden lg:grid-cols-2">
                <section className="relative rounded-md border border-slate-700 bg-[#0B1A2B] p-3">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-400" />
                        <h2 className="text-sm font-semibold">Flap A</h2>
                    </div>

                    <p className="mt-1 text-xs text-emerald-400">Open</p>

                    <div className="mt-2 grid grid-cols-2 gap-2 h-20 2xl:h-[200px]">
                        <button className="cursor-pointer rounded bg-emerald-500 px-3 py-2 text-sm text-white">
                            Open
                        </button>
                        <button className="cursor-pointer rounded bg-slate-800 px-3 py-2 text-sm text-white">
                            Close
                        </button>
                    </div>

                    <div className="mt-2">
                        <p className="mb-1 text-xs text-slate-400">Position</p>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                            <div
                                className={`h-full rounded-full ${Number(progress.replace("%", "")) < 100 ? "bg-yellow-500" : "bg-green-500"} transition-[width] duration-500`}
                                style={{ width: `${progress}` }}
                            />
                        </div>
                        <p className={`mt-1 text-right text-[10px] ${Number(progress.replace("%", "")) < 100 ? "text-yellow-500" : "text-emerald-400"}`}>
                            {progress}
                        </p>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-700 pt-2 text-xs absolute bottom-0 w-full pb-4">
                        <div>
                            <p className="text-slate-400">Last Command</p>
                            <p>Open</p>
                        </div>
                        <div>
                            <p className="text-slate-400">Status</p>
                            <p className="text-emerald-400">OK</p>
                        </div>
                    </div>
                </section>

                {/* Put the matching Flap B section here */}
                <section className="relative rounded-md border border-slate-700 bg-[#0B1A2B] p-3">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-400" />
                        <h2 className="text-sm font-semibold">Flap B</h2>
                    </div>

                    <p className="mt-1 text-xs text-emerald-400">Open</p>

                    <div className="mt-2 grid grid-cols-2 gap-2 h-20 2xl:h-[200px]">
                        <button className="cursor-pointer rounded bg-emerald-500 px-3 py-2 text-sm text-white">
                            Open
                        </button>
                        <button className="cursor-pointer rounded bg-slate-800 px-3 py-2 text-sm text-white">
                            Close
                        </button>
                    </div>

                    <div className="mt-2">
                        <p className="mb-1 text-xs text-slate-400">Position</p>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                            <div
                                className={`h-full rounded-full ${Number(progress.replace("%", "")) < 100 ? "bg-yellow-500" : "bg-green-500"} transition-[width] duration-500`}
                                style={{ width: `${progress}` }}
                            />
                        </div>
                        <p className={`mt-1 text-right text-[10px] ${Number(progress.replace("%", "")) < 100 ? "text-yellow-500" : "text-emerald-400"}`}>
                            {progress}
                        </p>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-700 pt-2 text-xs absolute bottom-0 w-full pb-4">
                        <div>
                            <p className="text-slate-400">Last Command</p>
                            <p>Open</p>
                        </div>
                        <div>
                            <p className="text-slate-400">Status</p>
                            <p className="text-emerald-400">OK</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-4 shrink-0 border border-slate-600 bg-[#0B1A2B] p-4">
                <h2 className="text-xl font-bold text-white pb-1">Test Sequence</h2>
                <p className="mb-2 text-xs text-slate-400 pb-2">Run the test sequence for the flap controller.</p>
                <div className="flex gap-3">
                    <button className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white xl:px-8">Run Test</button>
                    <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white xl:px-8">Stop Test</button>
                </div>
            </div>
        </div>
    );
}