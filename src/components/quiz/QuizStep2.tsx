"use client";

import { useState } from "react";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { Check } from "lucide-react";
import QuizFooter from "./QuizFooter";

export default function QuizStep2() {
    const router = useNavigateWithParams();
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (id: string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const handleNext = () => {
        if (selected.length === 0) return;
        console.log("Selected Motivation:", selected);
        router.push("/quiz/3");
    };

    return (
        <div className="w-full animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-2 leading-tight">
                ¿Cuál es tu motivación para <br /> ponerte en forma?
            </h1>
            <p className="text-gray-500 text-center text-sm mb-8">
                Selecciona todas las opciones que apliquen.
            </p>

            <div className="flex flex-col gap-3 max-w-xl mx-auto mb-8">
                <CheckboxOption
                    id="atractivo"
                    emoji="😎"
                    label="Verse más atractivo"
                    isSelected={selected.includes("atractivo")}
                    onToggle={() => toggleSelection("atractivo")}
                />
                <CheckboxOption
                    id="fuerte"
                    emoji="💪"
                    label="Volverse más fuerte"
                    isSelected={selected.includes("fuerte")}
                    onToggle={() => toggleSelection("fuerte")}
                />
                <CheckboxOption
                    id="salud"
                    emoji="⚡"
                    label="Sentirse más saludable y con más energía"
                    isSelected={selected.includes("salud")}
                    onToggle={() => toggleSelection("salud")}
                />
                <CheckboxOption
                    id="tiempo"
                    emoji="❤️"
                    label="Disfrutar más tiempo con quienes amas"
                    isSelected={selected.includes("tiempo")}
                    onToggle={() => toggleSelection("tiempo")}
                />
                <CheckboxOption
                    id="otro"
                    emoji="✨"
                    label="Otro"
                    isSelected={selected.includes("otro")}
                    onToggle={() => toggleSelection("otro")}
                />
            </div>

            <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
                <button
                    onClick={handleNext}
                    disabled={selected.length === 0}
                    className={`w-full py-4 rounded-xl font-black text-lg transition-all duration-300 ${selected.length > 0
                        ? "bg-[#354f35] hover:bg-[#4ade80] hover:text-[#0f110f] text-white shadow-[0_0_15px_rgba(74,222,128,0.2)]"
                        : "bg-[#252825] text-gray-500 cursor-not-allowed"
                        }`}
                >
                    CONTINUAR
                </button>

                <QuizFooter currentStep={2} />
            </div>
        </div>
    );
}

function CheckboxOption({ id, emoji, label, isSelected, onToggle }: { id: string, emoji: string, label: string, isSelected: boolean, onToggle: () => void }) {
    return (
        <button
            onClick={onToggle}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group ${isSelected
                ? "bg-[#1a1c1a] border-gray-600"
                : "bg-[#1a1c1a]/50 border-transparent hover:bg-[#1a1c1a]"
                }`}
        >
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#252825] flex items-center justify-center text-xl">
                    {emoji}
                </div>
                <span className={`text-left font-bold text-sm md:text-base transition-colors ${isSelected ? "text-white" : "text-gray-300"}`}>
                    {label}
                </span>
            </div>

            <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${isSelected ? "bg-transparent border-gray-400" : "border-gray-700 bg-transparent"
                }`}>
                {isSelected && <Check className="w-4 h-4 text-white" />}
            </div>
        </button>
    );
}
