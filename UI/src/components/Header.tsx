export default function Header() {
    return (
        <div className="flex justify-between items-center pb-4">
            <div className="flex space-x-4">
                <h1 className="text-xl font-bold text-blue-400">ExOne |</h1>
                <p className="text-white">3D Printer Flap Dashboard</p>
            </div>

            <div className="flex items-end space-x-4">
                <p className="text-sm">Oct 13, 2026 10:24 AM</p>
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    av
                </div>
            </div>
        </div>
    );
}