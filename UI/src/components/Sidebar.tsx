export default function Sidebar() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-120px)] w-[255px] space-y-4 p-4 bg-gray-800 text-white">
            <div className="flex flex-1 justify-between flex-col">
                <ul className="space-y-2">
                    <li id="active" className="hover:bg-gray-700 cursor-pointer p-2 rounded">Dashboard</li>
                    <li className="hover:bg-gray-700 cursor-pointer p-2 rounded">Layer Configuration</li>
                    <li className="hover:bg-gray-700 cursor-pointer p-2 rounded">Manual Control</li>
                    <li className="hover:bg-gray-700 cursor-pointer p-2 rounded">Settings</li>

                    
                </ul>

                <ul className="space-y-2">
                    <li className="hover:bg-gray-700 cursor-pointer p-2 rounded">System Status</li>
                </ul>
            </div>
            
        </div>
    );
}