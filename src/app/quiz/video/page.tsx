"use client";

import { useState, useEffect, memo } from "react";

// Componente separado para o botão que não afeta o player de vídeo ao renderizar
const DelayedCta = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 540000); // 540000ms = 540s (9 minutos)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mt-8 text-center px-4">
            {isVisible && (
                <a
                    href="https://pay.hotmart.com/D103907979Q?checkoutMode=10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full max-w-md mx-auto bg-[#2F5233] hover:bg-[#3a633e] text-white py-4 px-6 rounded-xl font-black text-xl uppercase tracking-wider shadow-[0_0_20px_rgba(47,82,51,0.6)] animate-pulse transition-all transform hover:scale-105 border border-[#4a7c50]"
                >
                    CONSEGUIR PROTOCOLO 🔓
                </a>
            )}
        </div>
    );
};

// Componente do Player memoizado para evitar re-renders desnecessários
const VideoPlayer = memo(() => (
    <div className="relative bg-black aspect-video">
        <div
            dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-694b3cd67fac75e58d236a83" style="display: block; margin: 0 auto; width: 100%; max-width: 100%;"></vturb-smartplayer>`
            }}
        />
        {/* Overlay Footer */}
        <div className="absolute bottom-0 left-0 w-full z-30 flex items-center justify-center gap-2 bg-gradient-to-t from-black/95 to-black/80 backdrop-blur-xl py-4 border-t border-red-500/20 shadow-[0_-4px_20px_-10px_rgba(220,38,38,0.2)]" style={{ pointerEvents: "auto" }}>
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full"></div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500 relative z-10 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"></path>
                </svg>
            </div>
            <span className="text-red-500 font-extrabold text-xs md:text-sm tracking-[0.15em] uppercase drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]">⚠️ ATENCIÓN RECLUTA</span>
        </div>
    </div>
));

VideoPlayer.displayName = "VideoPlayer";

export default function QuizVideo() {
    useEffect(() => {
        // Load vturb smartplayer script
        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/1f2331db-2453-4da3-b17f-cf644e7d0ffa/players/694b3cd67fac75e58d236a83/v4/player.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10">
            <div className="w-full max-w-3xl">
                {/* Headline Principal */}
                <h1 className="text-2xl md:text-4xl font-black text-white text-center mb-8 tracking-tight px-4">
                    🚨 SOLO QUIENES LLEGAN HASTA EL FINAL ACTIVAN SU PROTOCOLO ⚠️
                </h1>

                {/* Video Container */}
                <div className="tactical-card p-0 overflow-hidden rounded-2xl border-2 border-primary/30">
                    {/* Status Badge */}
                    <div className="bg-primary/20 border-b-2 border-primary/30 px-6 py-3 flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#00FF41] flex items-center justify-center shadow-[0_0_10px_rgba(0,255,65,0.5)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                            >
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </div>
                        <span className="text-[#00FF41] font-bold text-sm md:text-base tracking-wider font-mono drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]">
                            TU PROTOCOLO ESTÁ LISTO
                        </span>
                    </div>

                    <VideoPlayer />

                    {/* New Footer Content */}
                    <div className="p-4 md:p-6 text-center bg-gradient-to-b from-black to-neutral-900 shrink-0">
                        <h3 className="text-xl font-bold text-white mb-2 animate-pulse"></h3>
                        <p className="text-neutral-300 text-sm">Tu video ha comenzado, míralo y desbloquea el protocolo.</p>
                        <div className="mt-4 text-xs text-neutral-500 font-mono">El video debe ser visto completo para continuar.</div>
                    </div>
                </div>

                <DelayedCta />
            </div>
        </div>
    );
}
