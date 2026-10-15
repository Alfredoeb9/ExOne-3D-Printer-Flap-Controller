import { useState, useEffect } from "react";

type NotificationPopUpProps = {
    message: string;
    status: "error" | "success";
    durationMs?: number;
};

export default function NotificationPopUp({
    message,
    status,
    durationMs = 4000,
}: NotificationPopUpProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setIsVisible(false);
        }, durationMs);

        return () => window.clearTimeout(timer);
    }, [durationMs]);

    if (!isVisible) return null;

    return (
        <div
            role={status === "error" ? "alert" : "status"}
            className={`fixed bottom-4 right-4 rounded p-4 pr-10 text-white ${status === "error" ? "bg-red-500" : "bg-green-500"}`}
        >
            <button
                type="button"
                aria-label="Dismiss notification"
                className="absolute right-2 top-2"
                onClick={() => setIsVisible(false)}
            >
                ×
            </button>
            
            {message}
        </div>
    );
}