"use client";

import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";

interface QuizFooterProps {
    currentStep: number;
    totalSteps?: number;
    onBack?: () => void;
}

export default function QuizFooter({ currentStep, totalSteps = 24, onBack }: QuizFooterProps) {
    const router = useNavigateWithParams();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    };

    return (
        <div className="flex justify-between items-center mt-12 px-4 opacity-60 hover:opacity-100 transition-opacity">
            <button
                onClick={handleBack}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
            >
                <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
                <span className="font-mono text-xs tracking-wider uppercase">ANTERIOR</span>
            </button>

            {/* Stylized Progress Dots */}
            <div className="flex gap-1.5">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i + 1 === currentStep
                            ? "bg-[#4ade80] scale-125"
                            : i + 1 < currentStep
                                ? "bg-[#4ade80]/40"
                                : "bg-white/10"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
