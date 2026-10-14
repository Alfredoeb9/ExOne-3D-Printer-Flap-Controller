export default function Sidebar() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-120px)] w-[255px] space-y-4 p-4 bg-gray-800 text-white">
            <div className="flex flex-1 justify-between flex-col">
                <ul className="space-y-2">
                    <li id="active" className="hover:bg-gray-700 cursor-pointer p-2 rounded">
                        <a href="#">Dashboard</a>
                        </li>
                    <li className="hover:bg-gray-700 cursor-pointer p-2 rounded">
                        <a href="#">Layer Configuration</a>
                        </li>
                    <li className="hover:bg-gray-700 cursor-pointer p-2 rounded">
                        <a href="#">Manual Control</a></li>
                    <li className="hover:bg-gray-700 cursor-pointer p-2 rounded">
                        <a href="#">Settings</a>
                    </li>

                    
                </ul>

                <ul className="space-y-2">
                    <li className="hover:bg-gray-700 cursor-pointer p-2 rounded">System Status</li>
                </ul>
            </div>
            
        </div>
    );
}