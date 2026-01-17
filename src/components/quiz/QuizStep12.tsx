"use client";

import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import Image from "next/image";
import QuizFooter from "./QuizFooter";

export default function QuizStep12() {
    const router = useNavigateWithParams();

    const handleSelect = (value: string) => {
        console.log("Selected Difficulty:", value);
        router.push("/quiz/13"); // Link to next step
    };

    return (
        <div className="w-full animate-fade-in-up">
            {/* Header Title */}
            <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-8 leading-tight">
                ¿Tienes dificultad con alguna de las siguientes áreas?
            </h1>

            {/* Options Stack */}
            <div className="space-y-3 md:space-y-4 max-w-xl mx-auto">
                <DifficultyOption
                    label="Tensión o lesión en la parte superior de la espalda"
                    image="https://calisteniamilitar.site/assets/upper-back-pain.webp"
                    onClick={() => handleSelect("upper_back")}
                />
                <DifficultyOption
                    label="Molestia en la zona lumbar"
                    image="https://calisteniamilitar.site/assets/lower-back-pain.webp"
                    onClick={() => handleSelect("lower_back")}
                />
                <DifficultyOption
                    label="Dolor o sensibilidad en la rodilla"
                    image="https://calisteniamilitar.site/assets/knee-pain.webp"
                    onClick={() => handleSelect("knee")}
                />
                <DifficultyOption
                    label="Problemas articulares en general"
                    image="https://calisteniamilitar.site/assets/joints-issues.webp"
                    onClick={() => handleSelect("joints")}
                />
                <DifficultyOption
                    label="Otras o ninguna opción"
                    emoji="✅"
                    onClick={() => handleSelect("none_other")}
                />
            </div>

            <QuizFooter currentStep={12} />
        </div>
    );
}

interface DifficultyOptionProps {
    label: string;
    image?: string;
    emoji?: string;
    onClick: () => void;
}

function DifficultyOption({ label, image, emoji, onClick }: DifficultyOptionProps) {
    return (
        <button
            onClick={onClick}
            className="w-full p-3 md:p-4 rounded-xl transition-all duration-300 text-left font-sans text-sm md:text-base group relative overflow-hidden bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 flex items-center gap-4"
        >
            {/* Hover Indicator Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 bg-transparent group-hover:bg-white/10"></div>

            {/* Icon Container */}
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center overflow-hidden bg-white/5 group-hover:bg-white/10">
                {image ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={image}
                            alt={label}
                            fill
                            className="object-cover"
                        />
                    </div>
                ) : (
                    <span className="text-2xl md:text-3xl">{emoji}</span>
                )}
            </div>

            {/* Text Label */}
            <div className="flex-1 relative z-10 pl-2">
                <span className="block font-medium text-sm md:text-base transition-colors text-neutral-300 group-hover:text-white">
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
