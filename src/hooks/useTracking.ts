"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useTracking() {
    const [sessionId, setSessionId] = useState("");

    useEffect(() => {
        let sid = localStorage.getItem("quiz_session_id");
        if (!sid) {
            sid = uuidv4();
            localStorage.setItem("quiz_session_id", sid);
        }
        setSessionId(sid);
    }, []);

    const trackStep = async (stepId: string, action: string, metadata: any = {}) => {
        if (!sessionId) return;

        try {
            await fetch("/api/track", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId,
                    stepId,
                    action,
                    metadata,
                }),
            });
        } catch (error) {
            console.error("Tracking Error", error);
        }
    };

    return { trackStep };
}
