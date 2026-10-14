export default function Header() {
    return (
        <div className="flex justify-between items-center text-3xl font-bold text-white">
            <div className="flex space-x-4">
                <h1 className="text-3xl font-bold text-blue-400">ExOne |</h1>
                <p className="text-white">3D Printer Flap Dashboard</p>
            </div>

            <div className="flex items-end space-x-4">
                <p>Oct 13, 2026 10:24 AM</p>
                <div>
                    avatar
                </div>
            </div>
        </div>
    );
}