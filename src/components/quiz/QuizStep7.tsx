"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import QuizFooter from "./QuizFooter";

export default function QuizStep7() {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (id: string) => {
        if (id === "ninguna") {
            // If "None" is selected, clear everything else and toggle "None"
            if (selected.includes("ninguna")) {
                setSelected([]);
            } else {
                setSelected(["ninguna"]);
            }
        } else {
            // If any other option is selected
            let newSelected = [...selected];

            // Remove "ninguna" if it exists
            if (newSelected.includes("ninguna")) {
                newSelected = newSelected.filter(item => item !== "ninguna");
            }

            // Toggle the current id
            if (newSelected.includes(id)) {
                newSelected = newSelected.filter(item => item !== id);
            } else {
                newSelected.push(id);
            }
            setSelected(newSelected);
        }
    };

    const handleNext = () => {
        if (selected.length === 0) return;
        console.log("Selected Obstacles:", selected);
        router.push("/quiz/8"); // Or next step
    };

    return (
        <div className="w-full animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-2 leading-tight">
                ¿Qué te impidió ponerte en forma antes?
            </h1>
            <p className="text-gray-500 text-center text-sm mb-8 pl-4 border-l-2 border-[#354f35]">
                Elige todas las opciones que apliquen.
            </p>

            <div className="flex flex-col gap-3 max-w-xl mx-auto mb-8">
                <CheckboxOption
                    id="motivacion"
                    emoji="😔"
                    label="Falta de motivación"
                    isSelected={selected.includes("motivacion")}
                    onToggle={() => toggleSelection("motivacion")}
                />
                <CheckboxOption
                    id="plan"
                    emoji="📋"
                    label="No tenía un plan correcto"
                    isSelected={selected.includes("plan")}
                    onToggle={() => toggleSelection("plan")}
                />
                <CheckboxOption
                    id="tiempo"
                    emoji="⏰"
                    label="Falta de tiempo"
                    isSelected={selected.includes("tiempo")}
                    onToggle={() => toggleSelection("tiempo")}
                />
                <CheckboxOption
                    id="lesiones"
                    emoji="🤕"
                    label="Lesiones o dolores"
                    isSelected={selected.includes("lesiones")}
                    onToggle={() => toggleSelection("lesiones")}
                />
                <CheckboxOption
                    id="ninguna"
                    emoji="✅"
                    label="Ninguna de las opciones anteriores"
                    isSelected={selected.includes("ninguna")}
                    onToggle={() => toggleSelection("ninguna")}
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

                <QuizFooter currentStep={7} />
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
