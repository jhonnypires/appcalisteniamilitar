"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Check, FileText, Target, Clock } from "lucide-react";

const steps = [
    { id: 1, label: "ANALISANDO PERFIL TÁCTICO", icon: Target },
    { id: 2, label: "GENERANDO PROTOCOLO MILITAR", icon: FileText, subtext: "> Ejecutando secuencia ..." },
    { id: 3, label: "PREPARANDO TU MISIÓN DE 21 DÍAS", icon: FileText },
    { id: 4, label: "FINALIZANDO TU RECLUTAMIENTO", icon: Clock },
];

export default function QuizLoading() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animate progress bar
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 150);

        // Animate steps
        const stepTimings = [0, 3000, 6000, 9000, 12000];
        const stepTimeouts = stepTimings.map((timing, index) => {
            return setTimeout(() => {
                setCurrentStep(index + 1);
            }, timing);
        });

        // Redirect after all steps complete
        const redirectTimeout = setTimeout(() => {
            router.push("/quiz/result");
        }, 15000);

        return () => {
            clearInterval(progressInterval);
            stepTimeouts.forEach(clearTimeout);
            clearTimeout(redirectTimeout);
        };
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
            <div className="tactical-card max-w-2xl w-full p-8 md:p-12 transition-all duration-500 opacity-100 translate-y-0">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded border border-primary/30 bg-primary/10 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#22c55e] animate-pulse"></div>
                        <span className="text-xs font-mono text-primary tracking-widest uppercase drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                            Protocolo: Enero 2026 [ACTIVO]
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono tracking-wider">
                        PROCESANDO RECLUTAMIENTO
                    </h1>
                    <p className="text-sm md:text-base text-white/60 font-mono">
                        Verificando compatibilidad para nueva operación...
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-10">
                    <div className="flex justify-between items-end mb-2 px-1">
                        <span className="text-xs text-primary/60 font-mono uppercase tracking-wider">
                            Estado: Analizando
                        </span>
                        <span className="text-xs text-primary font-mono">{progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                        <div
                            className="h-full bg-primary shadow-[0_0_10px_rgba(34,197,94,0.4)] transition-all duration-300 linear"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Steps */}
                <div className="space-y-3">
                    {steps.map((step, index) => {
                        const isComplete = currentStep > index;
                        const isActive = currentStep === index + 1;
                        const isPending = currentStep < index + 1;
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.id}
                                className={`flex items-center gap-4 p-4 rounded border transition-all duration-300 ${isComplete || isActive
                                        ? "border-primary/30 bg-primary/5"
                                        : "border-white/10 bg-white/5"
                                    }`}
                            >
                                <div
                                    className={`w-10 h-10 rounded flex items-center justify-center border transition-all duration-300 ${isComplete
                                            ? "border-primary/30 bg-primary/10 text-primary"
                                            : isActive
                                                ? "border-primary/30 bg-primary/10 text-primary"
                                                : "border-white/20 bg-white/5 text-white/40"
                                        }`}
                                >
                                    {isComplete ? (
                                        <Check className="w-5 h-5" />
                                    ) : (
                                        <Icon className="w-5 h-5" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p
                                        className={`text-sm md:text-base font-bold font-mono tracking-wide transition-all duration-300 ${isComplete || isActive ? "text-white" : "text-white/40"
                                            }`}
                                    >
                                        {step.label}
                                    </p>
                                    {isActive && step.subtext && (
                                        <p className="text-xs text-primary/60 font-mono mt-1 animate-pulse">
                                            {step.subtext}
                                        </p>
                                    )}
                                </div>
                                {isActive && (
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center border-t border-white/5 pt-4">
                    <p className="text-[10px] text-white/20 font-mono uppercase tracking-[0.2em]">
                        Sistema Seguro // Acceso Limitado
                    </p>
                </div>
            </div>
        </div>
    );
}
