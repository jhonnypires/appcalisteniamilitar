"use client";

import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";

export default function QuizResult() {
    const router = useNavigateWithParams();

    const handleAccessProtocol = () => {
        router.push("/quiz/video");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10">
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border border-primary/30 mb-6 relative group">
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20"></div>
                        <span className="text-4xl">🎖️</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        RECLUTA <span className="text-primary">APROBADO</span>
                    </h1>
                    <p className="text-lg text-neutral-300 font-light max-w-md mx-auto">
                        Tu perfil cumple con los requisitos para el{" "}
                        <span className="text-white font-medium">Protocolo de Fuerzas Especiales</span>.
                    </p>
                </div>

                {/* Info Card */}
                <div className="tactical-card p-8 md:p-10 rounded-2xl mb-8 border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                        <div className="text-xs font-mono text-primary tracking-widest">INFORME FINAL</div>
                        <div className="text-xs font-mono text-white/40">ID: #8X-299</div>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start group">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                                <span className="text-xl">📋</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Protocolo Generado</h3>
                                <p className="text-sm text-neutral-400 mt-1">
                                    Plan de entrenamiento adaptado a tu biotipo y objetivos actuales.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start group">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                                <span className="text-xl">🎥</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Acceso a Videos</h3>
                                <p className="text-sm text-neutral-400 mt-1">
                                    Biblioteca técnica con ejecución correcta de cada movimiento.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start group">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                                <span className="text-xl">🔥</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Garantía de Resultados</h3>
                                <p className="text-sm text-neutral-400 mt-1">
                                    Método probado en campo con tasa de éxito del 98%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-4">
                    <button
                        onClick={handleAccessProtocol}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-8 text-xl font-bold rounded-xl shadow-[0_4px_30px_rgba(92,122,92,0.4)] hover:shadow-[0_4px_40px_rgba(92,122,92,0.6)] transition-all transform hover:-translate-y-1 group"
                    >
                        <span className="flex items-center justify-center gap-3">
                            ACCEDER AL PROTOCOLO
                            <span className="text-2xl group-hover:translate-x-1 transition-transform">🔓</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
