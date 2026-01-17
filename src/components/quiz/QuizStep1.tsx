"use client";

import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import QuizFooter from "./QuizFooter";

export default function QuizStep1() {
  const router = useNavigateWithParams();

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    router.push("/quiz/2");
  };

  return (
    <div className="w-full animate-fade-in-up">
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight text-center">¿Cuál es tu objetivo principal?</h1>

      <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8 w-full">
        {/* Option 1: Perder peso */}
        <button
          onClick={() => handleSelect("perder_peso")}
          className="relative rounded-xl transition-all duration-300 overflow-hidden group ring-1 ring-white/10 hover:ring-white/20"
        >
          <div className="aspect-video bg-[#0f110f] flex items-center justify-center transition-all group-hover:bg-[#1a1c1a]">
            <img alt="Perder peso" className="w-full h-full object-contain" src="https://calisteniamilitar.site/assets/objetivo/perder.jpg" />
          </div>
          <div className="p-3 text-center transition-colors bg-white/5 text-neutral-300 group-hover:text-white">
            <span className="text-sm font-medium block">Perder peso</span>
          </div>
          <div className="absolute top-2 right-2 transition-all scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
            <div className="w-6 h-6 rounded-full bg-[#4ade80] border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </button>

        {/* Option 2: Ganar músculo */}
        <button
          onClick={() => handleSelect("ganar_musculo")}
          className="relative rounded-xl transition-all duration-300 overflow-hidden group ring-1 ring-white/10 hover:ring-white/20"
        >
          <div className="aspect-video bg-[#0f110f] flex items-center justify-center transition-all group-hover:bg-[#1a1c1a]">
            <img alt="Ganar músculo" className="w-full h-full object-contain" src="https://calisteniamilitar.site/assets/objetivo/ganar.jpg" />
          </div>
          <div className="p-3 text-center transition-colors bg-white/5 text-neutral-300 group-hover:text-white">
            <span className="text-sm font-medium block">Ganar músculo</span>
          </div>
          <div className="absolute top-2 right-2 transition-all scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
            <div className="w-6 h-6 rounded-full bg-[#4ade80] border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </button>

        {/* Option 3: Perder grasa y ganar músculo */}
        <button
          onClick={() => handleSelect("recomposicion")}
          className="relative rounded-xl transition-all duration-300 overflow-hidden group ring-1 ring-white/10 hover:ring-white/20"
        >
          <div className="aspect-video bg-[#0f110f] flex items-center justify-center transition-all group-hover:bg-[#1a1c1a]">
            <img alt="Perder grasa y ganar músculo" className="w-full h-full object-contain" src="https://calisteniamilitar.site/assets/objetivo/ganareperder.jpg" />
          </div>
          <div className="p-3 text-center transition-colors bg-white/5 text-neutral-300 group-hover:text-white">
            <span className="text-sm font-medium block">Perder grasa y ganar músculo</span>
          </div>
          <div className="absolute top-2 right-2 transition-all scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
            <div className="w-6 h-6 rounded-full bg-[#4ade80] border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </button>

        {/* Option 4: Mejorar condición */}
        <button
          onClick={() => handleSelect("condicion_general")}
          className="relative rounded-xl transition-all duration-300 overflow-hidden group ring-1 ring-white/10 hover:ring-white/20"
        >
          <div className="aspect-video bg-[#0f110f] flex items-center justify-center transition-all group-hover:bg-[#1a1c1a]">
            <img alt="Mejorar la condición física general" className="w-full h-full object-contain" src="https://calisteniamilitar.site/assets/objetivo/mejorar.jpg" />
          </div>
          <div className="p-3 text-center transition-colors bg-white/5 text-neutral-300 group-hover:text-white">
            <span className="text-sm font-medium block">Mejorar la condición física general</span>
          </div>
          <div className="absolute top-2 right-2 transition-all scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
            <div className="w-6 h-6 rounded-full bg-[#4ade80] border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </button>
      </div>

      <QuizFooter currentStep={1} onBack={() => router.push('/')} />
    </div>
  );
}
