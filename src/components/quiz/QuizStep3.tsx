"use client";

import { useState } from "react";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { Check } from "lucide-react";
import QuizFooter from "./QuizFooter";

export default function QuizStep3() {
    const router = useNavigateWithParams();

    const handleSelect = (value: string) => {
        console.log("Selected Age:", value);
        router.push("/quiz/4");
    };

    return (
        <div className="w-full animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
                Elige tu edad
            </h1>

            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-xl mx-auto">
                <AgeCard
                    label="Edad: 18 - 29"
                    imageSrc="https://calisteniamilitar.site/assets/18-29.png"
                    onClick={() => handleSelect("18-29")}
                />
                <AgeCard
                    label="Edad: 30 - 39"
                    imageSrc="https://calisteniamilitar.site/assets/30-39.png"
                    onClick={() => handleSelect("30-39")}
                />
                <AgeCard
                    label="Edad: 40 - 49"
                    imageSrc="https://calisteniamilitar.site/assets/40-49.png"
                    onClick={() => handleSelect("40-49")}
                />
                <AgeCard
                    label="Edad: 50+"
                    imageSrc="https://calisteniamilitar.site/assets/50+.png"
                    onClick={() => handleSelect("50+")}
                />
            </div>

            <QuizFooter currentStep={3} />
        </div>
    );
}

function AgeCard({ label, imageSrc, onClick }: { label: string, imageSrc: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="relative rounded-xl transition-all duration-300 overflow-hidden group ring-1 ring-white/10 hover:ring-white/20 w-full"
        >
            <div className="aspect-square bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center transition-all group-hover:from-white/10 group-hover:to-white/15">
                <img
                    alt={label}
                    className="w-full h-full object-cover"
                    src={imageSrc}
                />
            </div>

            <div className="p-3 text-center transition-colors bg-white/5 text-neutral-300 group-hover:text-white">
                <span className="text-sm font-medium block">{label}</span>
            </div>

            <div className="absolute top-2 right-2 transition-all scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                <div className="w-6 h-6 rounded-full bg-[#4ade80] border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
        </button>
    );
}
