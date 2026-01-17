"use client";

import Link from "next/link";
import { ArrowRight, Target, Zap, Shield, Users } from "lucide-react";
import { useQuiz } from "@/context/QuizContext";

const Home = () => {
  const { startQuiz } = useQuiz();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients/Effects */}
      <div className="absolute inset-0 bg-[#0f110f] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.05)_0%,_transparent_70%)] pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a2e1a] border border-[#2f4f2f] mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-[#5c7a5c]">
          Reclutamiento Abierto
        </span>
      </div>

      {/* Headline */}
      <div className="text-center max-w-4xl mx-auto mb-6 space-y-4 z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
          Consigue un físico marcado en <br className="hidden md:block" />
          solo 21 días con el <br className="hidden md:block" />
          <span className="text-[#5c7a5c]">
            Desafío de Calistenia Militar
          </span>
          <br />
          sin salir de casa.
        </h1>
        <p className="text-sm md:text-xl max-w-2xl mx-auto font-medium leading-relaxed text-gray-400 px-2">
          Identifica tu nivel actual y descubre exactamente qué hacer para <br className="hidden md:block" />
          <span className="font-bold text-[#5c7a5c]">
            secar, definir y evolucionar en casa.
          </span>
        </p>
      </div>

      {/* Hero Image Placeholder */}
      <div className="relative w-full max-w-md md:max-w-lg mx-auto mb-8 group">
        <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#5c7a5c]/30 shadow-[0_0_30px_rgba(92,122,92,0.2)]">
          <img
            src="/assets/hero-transformation.jpg"
            alt="Transformación Militar"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md mx-auto relative mb-10 z-10">
        <Link
          href="/quiz/1"
          onClick={() => startQuiz()}
          className="group relative w-full flex items-center justify-center gap-3 bg-[#1a4d1a] hover:bg-[#1a4d1a]/90 text-white text-lg md:text-xl font-black py-4 md:py-6 rounded-xl border-2 border-[#5c7a5c]/50 shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>INICIAR EVALUACIÓN TÁCTICA</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Badges Items */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
        <BadgeItem icon={Target} text="Sin Gimnasio" />
        <BadgeItem icon={Zap} text="Resultados en 21 Días" />
        <BadgeItem icon={Shield} text="Mentalidad de Combate" />
      </div>

      {/* Social Proof */}
      <div className="flex items-center gap-4 text-xs md:text-sm font-mono text-gray-400">
        <div className="flex -space-x-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#0f110f] bg-neutral-700 overflow-hidden">
            <img src="/persons/A.png" alt="Member" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-[#0f110f] bg-neutral-700 overflow-hidden">
            <img src="/persons/B.jpg" alt="Member" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-[#0f110f] bg-neutral-700 overflow-hidden">
            <img src="/persons/C.jpg" alt="Member" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-[#0f110f] bg-neutral-700 overflow-hidden">
            <img src="/persons/D.jpg" alt="Member" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#5c7a5c]" />
          <span>+500 reclutas activos</span>
        </div>
      </div>
    </main>
  );
};

function BadgeItem({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#5c7a5c]/50 transition-colors">
      <Icon className="w-4 h-4 text-[#5c7a5c]" />
      <span className="text-xs md:text-sm font-bold uppercase tracking-wide text-gray-200">
        {text}
      </span>
    </div>
  );
}

export default Home;
