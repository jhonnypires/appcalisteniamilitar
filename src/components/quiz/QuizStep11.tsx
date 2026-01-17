"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";
import QuizFooter from "./QuizFooter";
import { cn } from "@/lib/utils";

const FOCUS_AREAS = [
    { id: "pectorales", label: "Pectorales", image: "https://calisteniamilitar.site/assets/zones/chest.webp" },
    { id: "brazos", label: "Brazos", image: "https://calisteniamilitar.site/assets/zones/brazos.webp" },
    { id: "abdomen", label: "Abdomen", image: "https://calisteniamilitar.site/assets/zones/abdomen.webp" },
    { id: "piernas", label: "Piernas", image: "https://calisteniamilitar.site/assets/zones/piernas.webp" },
];

export default function QuizStep11() {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);

    const handleToggle = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleNext = () => {
        if (selected.length === 0) return;
        console.log("Selected Focus Areas:", selected);
        router.push("/quiz/12"); // Link to next step
    };

    return (
        <div className="w-full animate-fade-in-up">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-2 leading-tight">
                ¿Cuáles son las áreas en las que quieres enfocarte?
            </h1>
            <p className="text-neutral-400 text-sm md:text-base mb-8 font-light leading-relaxed border-l-2 border-[#5c7a5c] pl-4 max-w-xl mx-auto">
                Elige todas las opciones que apliquen.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8 max-w-xl mx-auto">
                {FOCUS_AREAS.map((area) => {
                    const isSelected = selected.includes(area.id);
                    return (
                        <button
                            key={area.id}
                            onClick={() => handleToggle(area.id)}
                            className={cn(
                                "relative rounded-xl transition-all duration-300 overflow-hidden group ring-1",
                                isSelected
                                    ? "ring-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.3)] bg-white/10"
                                    : "ring-white/10 hover:ring-white/20 bg-white/5"
                            )}
                        >
                            {/* Image Container */}
                            <div className="aspect-square bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center transition-all group-hover:from-white/10 group-hover:to-white/15 p-4">
                                <div className="relative w-full h-full">
                                    {/* Using a fallback approach implicitly if images fail, but structure expects them */}
                                    <Image
                                        src={area.image}
                                        alt={area.label}
                                        fill
                                        className="object-contain drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                                    />
                                </div>
                            </div>

                            {/* Label */}
                            <div className="p-3 text-center transition-colors text-neutral-300 group-hover:text-white bg-black/20">
                                <span className={cn("text-sm font-medium block", isSelected && "text-[#4ade80]")}>
                                    {area.label}
                                </span>
                            </div>

                            {/* Checkmark Indicator */}
                            <div
                                className={cn(
                                    "absolute top-2 right-2 transition-all duration-300",
                                    isSelected ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                )}
                            >
                                <div className="w-6 h-6 rounded bg-[#4ade80] border-2 border-white flex items-center justify-center text-black">
                                    <Check className="w-4 h-4" strokeWidth={3} />
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Continue Button */}
            <div className="mt-8 max-w-xl mx-auto">
                <button
                    onClick={handleNext}
                    disabled={selected.length === 0}
                    className="w-full bg-[#5c7a5c] hover:bg-[#4a634a] text-white py-4 md:py-5 text-lg font-bold rounded-xl shadow-[0_4px_20px_rgba(92,122,92,0.3)] hover:shadow-[0_4px_25px_rgba(92,122,92,0.5)] transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    CONTINUAR
                </button>
            </div>

            <QuizFooter currentStep={11} />
        </div>
    );
}
