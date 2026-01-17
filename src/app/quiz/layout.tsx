"use client";

import { usePathname } from "next/navigation";

export default function QuizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    // Extract step number from /quiz/1, /quiz/2 etc.
    const step = parseInt(pathname?.split("/").pop() || "1");
    const totalSteps = 23;
    const progress = Math.min((step / totalSteps) * 100, 100);

    return (
        <div className="min-h-screen bg-[#0f110f] text-white flex flex-col relative overflow-hidden font-mono">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <header className="px-6 py-6 max-w-2xl mx-auto w-full z-10 flex flex-col gap-6">
                {/* Logo - Hide on video page */}
                {pathname !== "/quiz/video" && (
                    <div className="flex justify-center w-full">
                        <img
                            src="/assets/logo-quiz.png"
                            alt="Calistenia Militar"
                            className="h-6 md:h-8 w-auto object-contain opacity-90 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]"
                        />
                    </div>
                )}

                <div>
                    <div className="flex justify-between text-xs md:text-sm font-bold text-[#5c7a5c] mb-2 uppercase tracking-widest">
                        <span>Pregunta {String(step).padStart(2, '0')}</span>
                        <span>{Math.round(progress)}% Completado</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1a2e1a] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-[#5c7a5c] to-[#4ade80] transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 z-10 w-full max-w-3xl mx-auto">
                {children}
            </main>


        </div>
    );
}
