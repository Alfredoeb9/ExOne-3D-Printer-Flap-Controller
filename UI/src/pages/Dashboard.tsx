
export default function Dashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p>Monitor system status and current print progress</p>
            testing

            <div id="status_tabs" className="flex gap-4">
                <div className="status_tab bg-slate-800 p-4 rounded">
                    <h2 className="text-lg font-semibold text-slate-400 pb-2">Printer (ExOne Innovent+)</h2>
                    <p className="text-green-500">🟢Connected</p>
                    <p className="text-white"><span className="text-slate-400">Current Job: </span> Demo Part 01</p>
                    <p className="text-white"><span className="text-slate-400">Progress: </span> 45%</p>
                </div>
                <div className="status_tab bg-slate-800 p-4 rounded">
                    <h2 className="text-lg font-semibold text-slate-400 pb-2">Raspberry Pi</h2>
                    <p className="text-green-500">🟢Connected</p>
                    <p className="text-white"><span className="text-slate-400">IP Address: </span>192.168.1.100</p>
                    <p className="text-white"><span className="text-slate-400">API: </span>Online</p>
                </div>
                <div className="status_tab bg-slate-800 p-4 rounded">
                    <h2 className="text-lg font-semibold text-slate-400 pb-2">Current Layer</h2>
                    <p className="text-white">42 / 100</p>
                    <div className="w-full bg-slate-700 h-4 rounded">
                        <div className="bg-green-500 h-4 rounded" style={{ width: "42%" }}></div>
                    </div>
                </div>
                <div className="status_tab bg-slate-800 p-4 rounded">
                    <h2 className="text-lg font-semibold text-slate-400 pb-2">Flap Status</h2>
                    <div className="flex">
                        <div id="left_flap">
                            <h3 className="text-slate-400">Flap A</h3>
                            <p className="text-green-500">🟢 Open</p>
                        </div>
                        <div className="border-l border-slate-600 mx-4"></div>
                        <div id="right_flap">
                            <h3 className="text-slate-400">Flap B</h3>
                            <p className="text-slate-500">🟣 Closed</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}