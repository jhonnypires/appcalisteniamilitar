import { NextResponse } from "next/server";
import { saveEvent } from "@/lib/storage";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { sessionId, stepId, action, metadata } = body;

        if (!sessionId || !stepId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        saveEvent({
            sessionId,
            stepId,
            action: action || "view",
            timestamp: new Date().toISOString(),
            metadata
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Tracking Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
