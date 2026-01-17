"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface QuizContextType {
    hasStarted: boolean;
    startQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    // 1. Estados definidos de forma segura para evitar Hidratação (SSR vs Client = mesmo valor inicial)
    const [hasStarted, setHasStarted] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    const startQuiz = () => setHasStarted(true);

    useEffect(() => {
        // Lógica executada apenas no cliente após a montagem
        // Isso garante que não haja "flicker" de hidratação

        // Se estiver na Home ou na Etapa 1, é sempre permitido e inicia a sessão
        if (pathname === "/" || pathname === "/quiz/1") {
            if (pathname === "/quiz/1") setHasStarted(true);
            setIsChecking(false);
            return;
        }

        // Se estiver em uma etapa interna (2-23) e não tiver iniciado:
        if (!hasStarted) {
            router.replace("/");
            // Mantém isChecking true enquanto redireciona para não mostrar conteúdo protegido
        } else {
            // Se já iniciou, libera o conteúdo
            setIsChecking(false);
        }
    }, [pathname, hasStarted, router]);

    // 2. Guard Visual: Se estiver checando permissão em rota protegida, mostra loader ou nada
    // Isso evita que a "Pergunta 10" apareça por 1 segundo antes de voltar pra Home
    const isProtectedRoute = pathname?.includes("/quiz") && pathname !== "/quiz/1";

    if (isProtectedRoute && isChecking) {
        return <div className="min-h-screen bg-[#0f110f]" />; // Tela preta silenciosa
    }

    return (
        <QuizContext.Provider value={{ hasStarted, startQuiz }}>
            {children}
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}
