"use client";

import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import Image from "next/image";

export default function QuizStep14() {
    const router = useNavigateWithParams();

    const handleContinue = () => {
        // Navigate to next step or result page (Assuming result page or next step, let's go to /quiz/result for now or /quiz/15 if there is one. User usually asks for next.)
        // Based on "Continuar mi protocolo personalizado", it usually goes to a checkout or loading screen.
        // I'll assume standard next step for now: /quiz/15
        router.push("/quiz/15");
    };

    return (
        <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
            <div className="text-center mb-6 md:mb-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-yellow-500 text-2xl md:text-3xl">⚠️</span>
                    <h1 className="text-2xl md:text-4xl font-black text-[#5c7a5c] uppercase tracking-wide">
                        ESTO VA A PASARTE A TI
                    </h1>
                </div>
                <p className="text-neutral-300 text-sm md:text-lg px-4">
                    Transformaciones reales en <span className="text-[#5c7a5c] font-bold">21 Días</span> siguiendo el Protocolo Calistenia Militar
                </p>
            </div>

            <div className="bg-[#0f110f]/50 border border-[#5c7a5c]/30 rounded-2xl p-4 md:p-6 mb-8 relative overflow-hidden">
                {/* Images Container */}
                <div className="flex gap-2 md:gap-4 mb-6">
                    {/* Before Image */}
                    <div className="flex-1 relative">
                        <div className="text-neutral-500 text-xs font-bold text-center mb-2 uppercase tracking-wider">ANTES</div>
                        <div className="relative aspect-[3/5] md:aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
                            <Image
                                src="https://calisteniamilitar.site/assets/Antes.jpeg"
                                alt="Antes"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white font-mono">
                                DÍA 0
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col justify-center items-center text-white/20">
                        {/* Visual separator or arrow could go here, keeping it minimal as per design */}
                    </div>

                    {/* After Image */}
                    <div className="flex-1 relative">
                        <div className="text-[#5c7a5c] text-xs font-bold text-center mb-2 uppercase tracking-wider">DESPUÉS</div>
                        <div className="relative aspect-[3/5] md:aspect-[4/5] rounded-lg overflow-hidden border-2 border-[#5c7a5c]/50 shadow-[0_0_15px_rgba(92,122,92,0.3)]">
                            {/* Using Unoptimized for GIF to ensure it plays */}
                            <Image
                                src="https://i.imgur.com/M79HnO9.gif"
                                alt="Después"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute top-2 right-2 bg-[#5c7a5c] px-2 py-0.5 rounded text-[10px] text-black font-bold font-mono">
                                DÍA 21
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Text */}
                <div className="text-center space-y-2">
                    <div className="text-neutral-500 text-xs">Carlos, 25 años</div>
                    <h3 className="text-lg md:text-2xl font-black text-white leading-tight">
                        De cuerpo común a MÁQUINA DE GUERRA
                    </h3>
                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
                        Este protocolo activó el modo anabólico natural de su cuerpo. 21 Días sin gimnasio.
                    </p>

                    <div className="pt-4 flex justify-center">
                        <div className="inline-block px-3 py-1 bg-[#5c7a5c]/10 rounded border border-[#5c7a5c]/30">
                            <p className="text-[#5c7a5c] font-bold text-[10px] md:text-xs">
                                ✓ Sin químicos • Sin gimnasio • Solo protocolo
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Dot */}
            <div className="flex justify-center gap-2 mb-6">
                <div className="w-8 h-1.5 rounded-full bg-[#5c7a5c]"></div>
            </div>

            {/* CTA Button */}
            <div className="text-center px-4">
                <button
                    onClick={handleContinue}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-black text-lg md:text-xl font-black rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto"
                >
                    <span>👊</span> Continuar mi protocolo personalizado
                </button>
                <p className="text-neutral-500 text-[10px] md:text-xs mt-4 font-mono">
                    ⚠️ ACCESO LIMITADO: Tu plaza está reservada por 10 minutos
                </p>
            </div>

        </div>
    );
}
