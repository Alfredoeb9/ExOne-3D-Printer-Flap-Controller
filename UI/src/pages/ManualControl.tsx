const progress = "100%";

export default function ManualControl() {
    return (
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