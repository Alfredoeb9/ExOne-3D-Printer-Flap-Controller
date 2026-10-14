import FlapStatus from "../components/FlapStatus";

const activities = [
    {
        id: "event-1",
        timestamp: "2026-10-14T10:00:00",
        message: "Flap A opened",
    },
    {
        id: "event-2",
        timestamp: "2026-10-14T10:05:00",
        message: "Layer 42 reached",
    },
    {
        id: "event-3",
        timestamp: "2026-10-14T10:10:00",
        message: "Flap A closed",
    },
    {
        id: "event-4",
        timestamp: "2026-10-14T10:00:00",
        message: "Flap A opened",
    },
    {
        id: "event-5",
        timestamp: "2026-10-14T10:05:00",
        message: "Layer 42 reached",
    },
    {
        id: "event-6",
        timestamp: "2026-10-14T10:10:00",
        message: "Flap A closed",
    },
    {
        id: "event-7",
        timestamp: "2026-10-14T10:00:00",
        message: "Flap A opened",
    },
    {
        id: "event-8",
        timestamp: "2026-10-14T10:05:00",
        message: "Layer 42 reached",
    },
    {
        id: "event-9",
        timestamp: "2026-10-14T10:10:00",
        message: "Flap A closed",
    },
    {
        id: "event-10",
        timestamp: "2026-10-14T10:15:00",
        message: "Flap B opened",
    },
    {
        id: "event-11",
        timestamp: "2026-10-14T10:20:00",
        message: "Flap B closed",
    },
    {
        id: "event-12",
        timestamp: "2026-10-14T10:25:00",
        message: "Layer 43 reached",
    },
    {
        id: "event-13",
        timestamp: "2026-10-14T10:30:00",
        message: "Flap A opened",
    }, 
    {
        id: "event-14",
        timestamp: "2026-10-14T10:35:00",
        message: "Flap A closed",
    },
    {
        id: "event-15",
        timestamp: "2026-10-14T10:40:00",
        message: "Flap B opened",
    },
    {
        id: "event-16",
        timestamp: "2026-10-14T10:45:00",
        message: "Flap B closed",
    }
];

const sortedActivities = [...activities].sort(
    (first, second) => Date.parse(second.timestamp) - Date.parse(first.timestamp),
);

const progress = "20%";

export default function Dashboard() {
    return (
        <div>
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-slate-400">Monitor system status and current print progress</p>
            </div>

            <div id="status_tabs" className="flex gap-4">
                <div className="status_tab flex flex-col justify-between flex-1 bg-slate-800 p-4 rounded">
                    <h2 className="text-lg font-semibold text-slate-400 pb-1">Printer (ExOne Innovent+)</h2>
                    <div>
                        <p className="text-green-500 pb-1">🟢Connected</p>
                    </div>
                    
                    <div className="meta_data flex flex-col gap-1">
                        <p className="text-white"><span className="text-slate-400">Current Job: </span> Demo Part 01</p>
                        <p className="text-white"><span className="text-slate-400">Progress: </span> 45%</p>
                    </div>
                </div>
                <div className="status_tab flex flex-col justify-between flex-1 bg-slate-800 p-4 rounded">
                    <h2 className="text-lg font-semibold text-slate-400 pb-1">Raspberry Pi</h2>
                    <div>
                        <p className="text-green-500 pb-1">🟢Connected</p>
                    </div>
                    <div className="meta_data flex flex-col gap-1">
                        <p className="text-[#48A3FF]"><span className="text-slate-400">IP Address: </span>192.168.1.100</p>
                        <p className="text-[#48A3FF]"><span className="text-slate-400">API: </span>Online</p>
                    </div>
                    
                </div>
                <div className="status_tab flex-1 bg-slate-800 p-4 rounded">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-400 pb-1">Current Layer</h2>
                        <p className="text-white"> <span className="text-2xl">42</span> / 100</p>
                    </div>

                    <div className="w-full bg-slate-700 h-4 rounded mt-3">
                        {parseInt(progress) >= 0 && parseInt(progress) < 100 ? (
                            <div className={`bg-yellow-500 h-4 rounded ${"transition-all duration-500"}`} style={{ width: progress }}></div>
                        ) : (
                            <div className={`bg-green-500 h-4 rounded ${"transition-all duration-500"}`} style={{ width: progress }}></div>
                        )}
                    </div>
                </div>
                <div className="status_tab bg-slate-800 p-4 rounded">
                    <h2 className="text-lg font-semibold text-slate-400 pb-1">Flap Status</h2>
                    <div className="flex pt-2">
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

            <div id="main_panels" className="flex flex-col gap-4 mt-4 xl:flex-row">
                {/* exone diagram */}
                <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                    <div id="exone_diagram" className="bg-slate-600 p-4 rounded flex-1">
                        <h2 className="text-lg font-semibold text-slate-400 pb-1">ExOne Diagram</h2>
                        {/* Diagram content goes here */}
                    </div>
                    <div id="live_view" className="min-w-0 bg-slate-800 p-4 rounded">
                        <h2 className="text-lg font-semibold text-slate-400 pb-1">Live View</h2>
                        <p className="text-white">Current flap position: visual</p>

                        <FlapStatus flapA="open" flapB="closed" />
                    </div>
                </div>
                

                {/* recent activiy */}
                <div
                    id="recent_activity"
                    className="flex h-80 min-w-0 flex-col rounded bg-slate-800 p-4 xl:w-80 xl:shrink-0 2xl:h-100"
                >
                    <h2 className="shrink-0 pb-3 text-lg font-semibold text-slate-400">
                        Recent Activity
                    </h2>

                    <div className="min-h-0 flex-1 overflow-y-auto">
                        <ul className="space-y-3 text-white">
                            {sortedActivities.map((activity) => (
                                <li key={activity.id} className="flex items-start gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500"
                                    />
                                    <div className="flex flex-row gap-2">
                                        <time
                                            dateTime={activity.timestamp}
                                            className="text-sm text-slate-400"
                                        >
                                            {new Date(activity.timestamp).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </time>
                                        <p>{activity.message}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="shrink-0 border-t border-slate-700 pt-3 mt-3">
                        <button className="rounded bg-blue-500 px-4 py-2 text-white">
                            View Log -&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}