"use client";

import { useState } from "react";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { Check } from "lucide-react";
import QuizFooter from "./QuizFooter";

export default function QuizStep5() {
    const router = useNavigateWithParams();

    const handleSelect = (value: string) => {
        console.log("Selected Physique:", value);
        router.push("/quiz/6"); // Or next step if there is one
    };

    return (
        <div className="w-full animate-fade-in-up">
            {/* Header Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight text-center">
                ¿Cómo describirías tu tipo físico?
            </h1>

            {/* Options Stack */}
            <div className="space-y-3 md:space-y-4 mt-8 max-w-xl mx-auto">
                <PhysiqueOption
                    label="Delgado"
                    imageSrc="https://calisteniamilitar.site/assets/physique-slim.webp"
                    onClick={() => handleSelect("delgado")}
                />
                <PhysiqueOption
                    label="Medio"
                    imageSrc="https://calisteniamilitar.site/assets/physique-medium.webp"
                    onClick={() => handleSelect("medio")}
                />
                <PhysiqueOption
                    label="Cuerpo grande"
                    imageSrc="https://calisteniamilitar.site/assets/physique-large.webp"
                    onClick={() => handleSelect("grande")}
                />
                <PhysiqueOption
                    label="Con sobrepeso"
                    imageSrc="https://calisteniamilitar.site/assets/physique-overweight.webp"
                    onClick={() => handleSelect("sobrepeso")}
                />
            </div>

            <QuizFooter currentStep={5} />
        </div>
    );
}

interface PhysiqueOptionProps {
    label: string;
    imageSrc: string;
    onClick: () => void;
}

function PhysiqueOption({ label, imageSrc, onClick }: PhysiqueOptionProps) {
    return (
        <button
            onClick={onClick}
            className="w-full p-2 md:p-3 rounded-xl transition-all duration-300 text-left font-sans text-sm md:text-base group relative overflow-hidden bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 flex items-center gap-4"
        >
            {/* Hover Indicator Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 bg-transparent group-hover:bg-white/10"></div>

            {/* Image Circle */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden bg-white/5 group-hover:bg-white/10">
                <img
                    alt={label}
                    className="w-full h-full object-cover"
                    src={imageSrc}
                />
            </div>

            {/* Text Label */}
            <div className="flex-1 relative z-10 pl-2">
                <span className="block font-medium text-lg transition-colors text-neutral-300 group-hover:text-white">
                    {label}
                </span>
            </div>

            {/* Radio Circle */}
            <div className="mr-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all border-white/20 group-hover:border-white/40">
                {/* Empty circle, could add checkmark if selected state was managed, but for instant nav it's static */}
            </div>
        </button>
    );
}
