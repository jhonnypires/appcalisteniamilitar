"use client";

import { useState, useRef, useCallback } from "react";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import QuizFooter from "./QuizFooter";

export default function QuizStep23() {
    const router = useNavigateWithParams();
    const [weight, setWeight] = useState(70);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentTranslate = useRef(0);
    const prevTranslate = useRef(0);

    const MIN_WEIGHT = 40;
    const MAX_WEIGHT = 150;
    const DEFAULT_WEIGHT = 70;
    const PIXELS_PER_UNIT = 40;

    // Calculate initial translation based on default weight
    const getInitialTranslate = () => -((DEFAULT_WEIGHT - MIN_WEIGHT) * PIXELS_PER_UNIT);

    // Initialize translation
    if (currentTranslate.current === 0 && prevTranslate.current === 0) {
        currentTranslate.current = getInitialTranslate();
        prevTranslate.current = getInitialTranslate();
    }

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }, []);

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        if (!isDragging.current) return;

        const deltaX = e.clientX - startX.current;
        currentTranslate.current = prevTranslate.current + deltaX;

        // Clamp the translation
        const minTranslate = -((MAX_WEIGHT - MIN_WEIGHT) * PIXELS_PER_UNIT);
        const maxTranslate = 0;
        currentTranslate.current = Math.max(minTranslate, Math.min(maxTranslate, currentTranslate.current));

        // Calculate weight from translation
        const newWeight = MIN_WEIGHT + Math.round(-currentTranslate.current / PIXELS_PER_UNIT);
        setWeight(Math.max(MIN_WEIGHT, Math.min(MAX_WEIGHT, newWeight)));
    }, []);

    const handlePointerUp = useCallback(() => {
        isDragging.current = false;
        prevTranslate.current = currentTranslate.current;
    }, []);

    const handleNext = () => {
        console.log("Selected Target Weight:", weight);
        router.push("/quiz/24");
    };

    return (
        <div className="w-full animate-fade-in-up">
            <div className="tactical-card p-6 md:p-10">
                {/* Header Title */}
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight">
                    ¿Cuál es el peso que quieres alcanzar?
                </h2>

                <div className="space-y-8 md:space-y-12 py-4">
                    <div className="w-full">
                        <div className="w-full flex flex-col items-center">
                            {/* Weight Display */}
                            <div className="relative mb-8 flex items-end justify-center">
                                <span className="text-8xl md:text-9xl font-black italic tracking-tighter text-white drop-shadow-lg">
                                    {weight}
                                </span>
                                <span className="text-3xl md:text-4xl font-bold italic text-primary mb-3 ml-2">
                                    KG
                                </span>
                            </div>

                            {/* Ruler Container */}
                            <div
                                className="w-full relative overflow-hidden select-none touch-none cursor-grab active:cursor-grabbing"
                                style={{ height: "100px" }}
                                onPointerDown={handlePointerDown}
                                onPointerMove={handlePointerMove}
                                onPointerUp={handlePointerUp}
                                onPointerLeave={handlePointerUp}
                                ref={containerRef}
                            >
                                {/* Center Indicator */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary z-10 transform -translate-x-1/2 pointer-events-none">
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-primary rotate-45"></div>
                                </div>

                                {/* Left Gradient */}
                                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#1c1c1c] to-transparent z-10 pointer-events-none"></div>

                                {/* Right Gradient */}
                                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#1c1c1c] to-transparent z-10 pointer-events-none"></div>

                                {/* Ruler Track */}
                                <div
                                    className="absolute top-0 h-full flex items-center left-1/2"
                                    style={{
                                        transform: `translateX(${currentTranslate.current}px)`,
                                        willChange: "transform"
                                    }}
                                >
                                    {Array.from({ length: MAX_WEIGHT - MIN_WEIGHT + 1 }).map((_, index) => {
                                        const value = MIN_WEIGHT + index;
                                        const isMajor = value % 10 === 0;
                                        const isMedium = value % 5 === 0 && !isMajor;
                                        const leftPos = index * PIXELS_PER_UNIT;

                                        return (
                                            <div
                                                key={value}
                                                className="absolute flex flex-col items-center justify-end group"
                                                style={{
                                                    left: `${leftPos}px`,
                                                    transform: "translateX(-50%)",
                                                    height: "100%",
                                                    width: "40px"
                                                }}
                                            >
                                                <div className={`
                                                bg-white/30 rounded-full transition-all duration-200
                                                ${isMajor ? 'h-12 w-0.5 bg-white' : isMedium ? 'h-8 w-0.5' : 'h-4 w-px'}
                                            `}></div>

                                                {isMajor && (
                                                    <span className="absolute top-full mt-4 text-sm font-bold text-white/50 font-mono tracking-wider">
                                                        {value}
                                                    </span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <p className="text-white/20 font-black tracking-[0.2em] text-sm mt-12 uppercase text-center select-none">
                                Arraste para ajustar
                            </p>
                        </div>
                    </div>

                    {/* Continue Button */}
                    <div className="pt-8 px-4 md:px-12">
                        <button
                            onClick={handleNext}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-bold rounded-xl shadow-[0_4px_20px_rgba(92,122,92,0.3)] hover:shadow-[0_4px_25px_rgba(92,122,92,0.5)] transition-all transform hover:-translate-y-0.5"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            </div>

            <QuizFooter currentStep={23} />
        </div>
    );
}
