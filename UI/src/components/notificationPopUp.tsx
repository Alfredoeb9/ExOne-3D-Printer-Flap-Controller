import { useState } from "react";

export default function NotificationPopUp({ message, status }: { message: string, status: "error" | "success" }) {
    const [isVisible, setIsVisible] = useState(true);
    
    if (!isVisible) return null;

    function handleClose() {
        setIsVisible(false);
    }

    return (
        <div className={`fixed bottom-4 right-4 rounded p-4 text-white ${status === "error" ? "bg-red-500" : "bg-green-500"}`}>
            <span className="cursor-pointer absolute -top-2 right-2 text-xl" onClick={handleClose}>x</span>
            {message}
        </div>
    );
}