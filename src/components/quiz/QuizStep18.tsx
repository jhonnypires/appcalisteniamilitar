"use client";

import { useState } from "react";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import QuizFooter from "./QuizFooter";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function QuizStep18() {
    const router = useNavigateWithParams();
    const [selected, setSelected] = useState<string[]>([]);

    const handleSelect = (id: string) => {
        if (id === "none") {
            // If "None" is selected, clear others and toggle "None"
            if (selected.includes("none")) {
                setSelected([]);
            } else {
                setSelected(["none"]);
            }
        } else {
            // If other option is selected, remove "None" and toggle selection
            let newSelected = selected.filter((item) => item !== "none");
            if (newSelected.includes(id)) {
                newSelected = newSelected.filter((item) => item !== id);
            } else {
                newSelected.push(id);
            }
            setSelected(newSelected);
        }
    };

    const handleNext = () => {
        if (selected.length === 0) return;
        console.log("Selected Habits:", selected);
        router.push("/quiz/19"); // Link to next step
    };

    return (
        <div className="w-full animate-fade-in-up">
            {/* Header Title */}
            <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-3 leading-tight">
                ¿Tienes alguno de los siguientes hábitos?
            </h1>

            <p className="text-neutral-400 text-sm md:text-base mb-8 font-light leading-relaxed border-l-2 border-primary/30 pl-4">
                Elige todos los que apliquen.
            </p>

            {/* Options Stack */}
            <div className="space-y-3 md:space-y-4 max-w-xl mx-auto">
                <HabitOption
                    id="emotional_eating"
                    label="Comer por emoción o aburrimiento"
                    emoji="😋"
                    isSelected={selected.includes("emotional_eating")}
                    onClick={() => handleSelect("emotional_eating")}
                />
                <HabitOption
                    id="overeating"
                    label="Comer en exceso"
                    emoji="🍔"
                    isSelected={selected.includes("overeating")}
                    onClick={() => handleSelect("overeating")}
                />
                <HabitOption
                    id="late_snacking"
                    label="Picotear tarde en la noche"
                    emoji="🌙"
                    isSelected={selected.includes("late_snacking")}
                    onClick={() => handleSelect("late_snacking")}
                />
                <HabitOption
                    id="skipping_meals"
                    label="Saltar comidas con frecuencia"
                    emoji="⏭️"
                    isSelected={selected.includes("skipping_meals")}
                    onClick={() => handleSelect("skipping_meals")}
                />
                <HabitOption
                    id="none"
                    label="Ninguna de las anteriores"
                    emoji="✅"
                    isSelected={selected.includes("none")}
                    onClick={() => handleSelect("none")}
                />
            </div>

            <div className="mt-8 max-w-xl mx-auto">
                <button
                    onClick={handleNext}
                    disabled={selected.length === 0}
                    className={cn(
                        "w-full py-4 text-lg font-bold rounded-xl transition-all transform hover:-translate-y-0.5",
                        selected.length > 0
                            ? "bg-primary hover:bg-primary/90 text-white shadow-[0_4px_20px_rgba(92,122,92,0.3)] hover:shadow-[0_4px_25px_rgba(92,122,92,0.5)]"
                            : "bg-white/5 text-neutral-500 cursor-not-allowed"
                    )}
                >
                    CONTINUAR
                </button>
            </div>

            <QuizFooter currentStep={18} />
        </div>
    );
}

interface HabitOptionProps {
    id: string;
    label: string;
    emoji: string;
    isSelected: boolean;
    onClick: () => void;
}

function HabitOption({ label, emoji, isSelected, onClick }: HabitOptionProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "w-full p-3 md:p-4 rounded-xl transition-all duration-300 text-left font-sans text-sm md:text-base group relative overflow-hidden flex items-center gap-4 border",
                isSelected
                    ? "bg-white/10 border-primary/50 shadow-[0_0_15px_rgba(74,222,128,0.1)]"
                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
            )}
        >
            {/* Hover Indicator Bar */}
            <div
                className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
                    isSelected ? "bg-primary" : "bg-transparent group-hover:bg-white/10"
                )}
            ></div>

            {/* Emoji Circle */}
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 text-2xl md:text-3xl">
                {emoji}
            </div>

            {/* Text Label */}
            <div className="flex-1 relative z-10 pl-2">
                <span
                    className={cn(
                        "block font-medium text-base md:text-lg transition-colors",
                        isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                    )}
                >
                    {label}
                </span>
            </div>

            {/* Checkbox */}
            <div
                className={cn(
                    "mr-2 w-6 h-6 rounded border-2 flex items-center justify-center transition-all",
                    isSelected
                        ? "bg-primary border-primary text-black"
                        : "border-white/20 group-hover:border-white/40"
                )}
            >
                {isSelected && <Check className="w-4 h-4" strokeWidth={4} />}
            </div>
        </button>
    );
}
