"use client";

import { useRouter } from "next/navigation";
import QuizFooter from "./QuizFooter";

export default function QuizStep19() {
    const router = useRouter();

    const handleSelect = (value: string) => {
        console.log("Selected Smoking Habit:", value);
        router.push("/quiz/20"); // Link to next step
    };

    return (
        <div className="w-full animate-fade-in-up">
            {/* Header Title */}
            <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-8 leading-tight">
                ¿Fumas?
            </h1>

            {/* Options Stack */}
            <div className="space-y-3 md:space-y-4 max-w-xl mx-auto">
                <SmokeOption
                    label="Sí, regularmente"
                    emoji="🚬"
                    onClick={() => handleSelect("regularly")}
                />
                <SmokeOption
                    label="Solo de vez en cuando"
                    emoji="🌫️"
                    onClick={() => handleSelect("occasionally")}
                />
                <SmokeOption
                    label="Solo cuando bebo"
                    emoji="🍺"
                    onClick={() => handleSelect("socially")}
                />
                <SmokeOption
                    label="No, lo dejé"
                    emoji="🚭"
                    onClick={() => handleSelect("quit")}
                />
            </div>

            <QuizFooter currentStep={19} />
        </div>
    );
}

interface SmokeOptionProps {
    label: string;
    emoji: string;
    onClick: () => void;
}

function SmokeOption({ label, emoji, onClick }: SmokeOptionProps) {
    return (
        <button
            onClick={onClick}
            className="w-full p-3 md:p-4 rounded-xl transition-all duration-300 text-left font-sans text-sm md:text-base group relative overflow-hidden bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 flex items-center gap-4"
        >
            {/* Hover Indicator Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 bg-transparent group-hover:bg-white/10"></div>

            {/* Emoji Circle */}
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 text-2xl md:text-3xl">
                {emoji}
            </div>

            {/* Text Label */}
            <div className="flex-1 relative z-10 pl-2">
                <span className="block font-medium text-base md:text-lg transition-colors text-neutral-300 group-hover:text-white">
                    {label}
                </span>
            </div>

            {/* Radio Circle */}
            <div className="mr-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all border-white/20 group-hover:border-white/40">
                {/* Empty circle for selection state */}
            </div>
        </button>
    );
}
