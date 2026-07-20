import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  AlertTriangle,
  Receipt,
  FileWarning,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Clock,
  Sparkles,
  Lock,
  ArrowRight,
  HelpCircle,
  FileText,
  Calculator,
  Grid,
  Check
} from "lucide-react";
import MOCKUP_IMAGE_PATH from "./assets/images/mockup_produto_1783739014078.jpg";

// Real checkout link
const CHECKOUT_LINK = "https://pay.kiwify.com.br/9vx5cN8";

export default function App() {
  // States
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [showMobileStickyBtn, setShowMobileStickyBtn] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Timer state (24h loop)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Track scroll position for sticky elements
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }

      if (window.scrollY > 400) {
        setShowMobileStickyBtn(true);
      } else {
        setShowMobileStickyBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Restart to 23:59:59
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Toggle FAQ Accordion
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans select-none selection:bg-brand-accent selection:text-brand-primary">
      
      {/* 1) STICKY HEADER (Appears on scroll) */}
      <AnimatePresence>
        {isHeaderSticky && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-40 glass-header py-3 px-4 md:px-8 flex items-center justify-between shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center text-brand-accent font-display font-extrabold text-sm tracking-tight">
                MEI
              </span>
              <div>
                <p className="font-display font-bold text-xs md:text-sm text-brand-primary tracking-tight leading-none">
                  Kit Sobrevivência MEI
                </p>
                <p className="text-[10px] text-slate-500 font-medium leading-none mt-1">
                  Reforma Tributária 2026
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Countdown badge in sticky header */}
              <div className="hidden lg:flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200">
                <Clock className="w-3.5 h-3.5 animate-pulse text-brand-accent" />
                <span>Oferta Limitada: {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>

              <a
                href={CHECKOUT_LINK}
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-display font-bold text-xs md:text-sm px-4 md:px-5 py-2 rounded-lg shadow hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
              >
                Comprar agora
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Hero Header (Non-sticky top banner) */}
      <header className="bg-brand-primary text-white py-4 px-4 md:px-8 border-b border-brand-secondary/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center text-brand-primary font-display font-black text-base tracking-tight shadow-md">
              MEI
            </span>
            <div>
              <p className="font-display font-bold text-sm md:text-base tracking-tight leading-none text-white">
                Kit Sobrevivência MEI 2026
              </p>
              <p className="text-[10px] md:text-xs text-slate-300 font-light mt-0.5">
                Guia Inteligente de Transição
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Ambiente Seguro 256-bit SSL</span>
          </div>
        </div>
      </header>

      {/* 1) HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-primary text-white pt-12 pb-20 md:py-24 px-4 md:px-8">
        {/* Subtle grid background overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-brand-secondary/50 text-brand-accent border border-brand-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>ALERTA DE TRANSIÇÃO FISCAL</span>
            </div>
            
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1]">
              A Reforma Tributária de 2026 pode te desenquadrar do MEI sem você nem perceber
            </h1>
            
            <p className="text-slate-200 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              Descubra em poucos minutos se você está em risco — e organize seu MEI com uma planilha que faz as contas por você.
            </p>
            
            <div className="w-full sm:w-auto flex flex-col space-y-3 pt-2">
              <a
                href={CHECKOUT_LINK}
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-display font-extrabold text-base px-8 py-4 rounded-xl text-center shadow-lg hover:shadow-brand-accent/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                Quero organizar meu MEI agora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-slate-300 font-medium pl-1">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Garantia de 7 dias
                </span>
                <span className="text-slate-500">•</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Acesso imediato
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-accent/20 to-brand-secondary/30 blur-xl opacity-75"></div>
            <div className="relative bg-brand-secondary/25 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-sm">
              <img
                src={MOCKUP_IMAGE_PATH}
                alt="Kit Sobrevivência MEI 2026"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-xl object-cover shadow-inner"
              />
              <div className="absolute top-6 right-6 bg-brand-accent text-brand-primary font-display font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider">
                Atualizado 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) PROBLEM / AGITATION SECTION */}
      <section className="py-20 px-4 md:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-primary tracking-tight">
              Por que isso importa agora
            </h2>
            <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 font-light mt-4 text-sm sm:text-base">
              As regras de faturamento e obrigatoriedades fiscais mudaram radicalmente. O descaso pode gerar multas e cancelamentos involuntários de CNPJ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/60 flex gap-5 group hover:border-brand-secondary/20">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-brand-primary shrink-0 transition-colors group-hover:bg-brand-primary/5 group-hover:text-brand-secondary">
                <TrendingUp className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-brand-primary leading-snug">
                  Impacto Maciço no País
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed font-normal">
                  Mais de 15 milhões de MEIs no Brasil vão sentir o impacto da Reforma Tributária em 2026.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/60 flex gap-5 group hover:border-brand-secondary/20">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-red-600 shrink-0 transition-colors group-hover:bg-red-50">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-brand-primary leading-snug">
                  Cruzamento CPF + CNPJ
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed font-normal">
                  Uma nova regra passou a somar o que você recebe como pessoa física (CPF) ao faturamento do seu CNPJ para calcular o limite do MEI.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/60 flex gap-5 group hover:border-brand-secondary/20">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-brand-primary shrink-0 transition-colors group-hover:bg-brand-primary/5 group-hover:text-brand-secondary">
                <Receipt className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-brand-primary leading-snug">
                  Nota Fiscal Obrigatória
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed font-normal">
                  A partir de 2027, emitir nota fiscal vai virar obrigatório em todas as vendas — inclusive para pessoa física.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/60 flex gap-5 group hover:border-brand-secondary/20">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-red-600 shrink-0 transition-colors group-hover:bg-red-50">
                <FileWarning className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-brand-primary leading-snug">
                  Impostos Retroativos
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed font-normal">
                  Passar do limite sem perceber pode significar pagar impostos retroativos como Microempresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) SOLUTION INTRO */}
      <section className="py-20 px-4 md:px-8 bg-brand-primary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary to-slate-900 opacity-90 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-1 bg-brand-secondary text-brand-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/5 uppercase">
            <span>Diagnóstico Definitivo</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            O Kit Sobrevivência MEI 2026 traduz tudo isso pra você
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto pt-2">
            Chega de tentar entender a Reforma Tributária sozinho. Este kit junta uma planilha inteligente e dois guias em PDF que fazem o trabalho pesado por você — em português simples, sem juridiquês.
          </p>
        </div>
      </section>

      {/* 4) WHAT'S INCLUDED (3 product cards, side by side) */}
      <section className="py-24 px-4 md:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-secondary">Conteúdo Completo</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-primary tracking-tight mt-1">
              O que você vai receber hoje
            </h2>
            <p className="text-slate-500 mt-3 text-sm sm:text-base font-light">
              Três ferramentas perfeitamente complementares para resolver sua gestão fiscal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 bg-brand-primary text-brand-accent rounded-xl flex items-center justify-center mb-6 shadow-md shadow-brand-primary/10">
                  <Grid className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-primary group-hover:text-brand-secondary transition-colors">
                  Planilha Inteligente
                </h3>
                <span className="inline-block bg-slate-200/80 text-slate-700 text-[11px] font-bold px-2 py-0.5 rounded-md mt-1 mb-4 uppercase">
                  8 abas inclusas
                </span>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Painel automático, Diagnóstico de Limite (que já soma CPF + CNPJ), simulador MEI ou ME, controle do DAS mês a mês e calendário 2026 — tudo com fórmulas prontas, você só preenche o que for pedido.
                </p>
              </div>
              <div className="border-t border-slate-200 mt-6 pt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-primary flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                  100% Automática
                </span>
                <span className="text-xs font-semibold text-slate-400">v2.4 (Excel / Sheets)</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 bg-brand-primary text-brand-accent rounded-xl flex items-center justify-center mb-6 shadow-md shadow-brand-primary/10">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-primary group-hover:text-brand-secondary transition-colors">
                  Guia da Reforma Tributária
                </h3>
                <span className="inline-block bg-slate-200/80 text-slate-700 text-[11px] font-bold px-2 py-0.5 rounded-md mt-1 mb-4 uppercase">
                  PDF, 17 páginas
                </span>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Tudo o que muda para o MEI em 2026 explicado em linguagem simples: nota fiscal obrigatória, o novo Nanoempreendedor, e como não cair no desenquadramento.
                </p>
              </div>
              <div className="border-t border-slate-200 mt-6 pt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-primary flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                  Sem juridiquês
                </span>
                <span className="text-xs font-semibold text-slate-400">Leitura rápida</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 bg-brand-primary text-brand-accent rounded-xl flex items-center justify-center mb-6 shadow-md shadow-brand-primary/10">
                  <Calculator className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-primary group-hover:text-brand-secondary transition-colors">
                  Manual de Uso da Planilha
                </h3>
                <span className="inline-block bg-slate-200/80 text-slate-700 text-[11px] font-bold px-2 py-0.5 rounded-md mt-1 mb-4 uppercase">
                  PDF Explicativo
                </span>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Passo a passo de cada aba, com prints reais, para você usar a planilha com confiança desde o primeiro dia.
                </p>
              </div>
              <div className="border-t border-slate-200 mt-6 pt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-primary flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                  Passo a passo visual
                </span>
                <span className="text-xs font-semibold text-slate-400">Guia de Início Rápido</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) BENEFITS / TRANSFORMATION */}
      <section className="py-20 px-4 md:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-secondary">Sua Nova Rotina</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-primary tracking-tight mt-1">
              O que muda pra você
            </h2>
            <div className="w-16 h-1 bg-brand-accent mt-4 rounded-full mx-auto lg:mx-0"></div>
            <p className="text-slate-600 mt-4 font-light text-sm sm:text-base">
              Esqueça planilhas confusas feitas à pressas ou desinformação de redes sociais. Tenha controle fiscal total com clareza matemática profissional.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 space-y-6">
            {/* Benefit Bullet 1 */}
            <div className="flex gap-4 items-start">
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full p-1.5 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-brand-green-dark" />
              </div>
              <div>
                <p className="text-slate-700 text-sm sm:text-base font-semibold leading-snug">
                  Saiba, em segundos, se seu faturamento está te colocando em risco de desenquadramento.
                </p>
              </div>
            </div>

            {/* Benefit Bullet 2 */}
            <div className="flex gap-4 items-start">
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full p-1.5 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-brand-green-dark" />
              </div>
              <div>
                <p className="text-slate-700 text-sm sm:text-base font-semibold leading-snug">
                  Nunca mais perca o prazo do DAS ou da declaração anual (DASN-SIMEI).
                </p>
              </div>
            </div>

            {/* Benefit Bullet 3 */}
            <div className="flex gap-4 items-start">
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full p-1.5 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-brand-green-dark" />
              </div>
              <div>
                <p className="text-slate-700 text-sm sm:text-base font-semibold leading-snug">
                  Descubra se compensa continuar MEI ou migrar para Microempresa antes de decidir com seu contador.
                </p>
              </div>
            </div>

            {/* Benefit Bullet 4 */}
            <div className="flex gap-4 items-start">
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full p-1.5 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-brand-green-dark" />
              </div>
              <div>
                <p className="text-slate-700 text-sm sm:text-base font-semibold leading-snug">
                  Entenda a Reforma Tributária de verdade, sem depender de vídeo de internet contando pela metade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) GUARANTEE SECTION */}
      <section className="py-20 px-4 md:px-8 bg-brand-primary text-white relative overflow-hidden">
        {/* Subtle radial glow representing the guarantee protection shield */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-secondary/35 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex justify-center mx-auto">
            <div className="w-20 h-20 rounded-full bg-brand-green-light flex items-center justify-center text-brand-green-dark shadow-lg ring-4 ring-brand-green-dark/30">
              <ShieldCheck className="w-12 h-12 stroke-[2.2]" />
            </div>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-accent tracking-tight">
            Garantia incondicional de 7 dias
          </h2>
          
          <p className="text-slate-100 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Se por qualquer motivo você achar que o kit não é para você, é só pedir reembolso em até 7 dias. Devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
          
          <div className="pt-2 text-xs text-slate-300 font-medium">
            🔒 Compra 100% Protegida · Processamento Criptografado
          </div>
        </div>
      </section>

      {/* 7) PRICING SECTION */}
      <section id="pricing" className="py-24 px-4 md:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-secondary bg-brand-secondary/10 px-3 py-1.5 rounded-full">Oferta Especial</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-primary tracking-tight mt-3">
              Tudo isso por um preço simbólico
            </h2>
            <p className="text-slate-500 mt-2 font-light text-sm sm:text-base">
              Preço acessível para ajudar o máximo de microempreendedores autônomos nesta transição.
            </p>
          </div>

          <div className="max-w-md mx-auto relative">
            {/* Live countdown timer widget */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-rose-600 text-white font-display font-bold text-xs px-4 py-1.5 rounded-full shadow-md z-10 uppercase tracking-wider flex items-center gap-1.5 animate-bounce">
              <Clock className="w-3.5 h-3.5" />
              <span>Oferta por tempo limitado: {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border-2 border-brand-accent shadow-xl flex flex-col justify-between relative overflow-hidden text-center pt-12">
              {/* Card visual elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/10 rounded-bl-full pointer-events-none"></div>
              
              <div>
                <p className="text-slate-400 font-medium line-through text-lg">
                  De R$ 67,00
                </p>
                <div className="mt-2 flex flex-col items-center">
                  <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">por apenas</span>
                  <p className="font-display font-black text-4xl sm:text-5xl text-brand-primary tracking-tight mt-1">
                    <span className="text-xl sm:text-2xl font-bold align-super">R$</span> 32,90
                  </p>
                </div>
                <p className="text-slate-500 text-xs mt-3 font-semibold leading-relaxed">
                  Pagamento único · Acesso vitalício · Sem mensalidade
                </p>
              </div>

              {/* Perks list inside pricing */}
              <div className="my-8 text-left space-y-3.5 border-y border-slate-200 py-6">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3.5] shrink-0" />
                  <span>Acesso completo à Planilha Inteligente (8 abas)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3.5] shrink-0" />
                  <span>Guia Completo da Reforma Tributária 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3.5] shrink-0" />
                  <span>Manual Ilustrado de Uso</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3.5] shrink-0" />
                  <span>Garantia total de devolução de 100% em 7 dias</span>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={CHECKOUT_LINK}
                  className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-display font-extrabold text-base sm:text-lg px-6 py-4 rounded-2xl text-center shadow-lg hover:shadow-brand-accent/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
                >
                  Quero garantir meu Kit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 font-medium pt-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Acesso enviado para seu e-mail imediatamente após aprovação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8) FAQ (accordion) */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-secondary flex items-center justify-center gap-1">
              <HelpCircle className="w-4 h-4" /> Perguntas Frequentes
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-primary tracking-tight mt-2">
              Dúvidas comuns respondidas
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-brand-secondary/20">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-slate-800 text-sm sm:text-base hover:text-brand-secondary focus:outline-none"
              >
                <span>Preciso ser bom em Excel para usar a planilha?</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    openFaqIndex === 0 ? "rotate-180 text-brand-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openFaqIndex === 0 ? "max-h-40 border-t border-slate-100" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="p-5 sm:p-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Não. Você só preenche as células amarelas — todo o resto (cálculos, alertas, gráficos) já vem pronto e funciona sozinho.
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-brand-secondary/20">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-slate-800 text-sm sm:text-base hover:text-brand-secondary focus:outline-none"
              >
                <span>Funciona no celular?</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    openFaqIndex === 1 ? "rotate-180 text-brand-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openFaqIndex === 1 ? "max-h-40 border-t border-slate-100" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="p-5 sm:p-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Sim, pelo Excel, LibreOffice ou Google Planilhas. Para o dia a dia de lançamentos, o computador é mais confortável, mas não é obrigatório.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-brand-secondary/20">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-slate-800 text-sm sm:text-base hover:text-brand-secondary focus:outline-none"
              >
                <span>Isso substitui um contador?</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    openFaqIndex === 2 ? "rotate-180 text-brand-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openFaqIndex === 2 ? "max-h-40 border-t border-slate-100" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="p-5 sm:p-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Não. É um material informativo que te ajuda a se organizar e a chegar mais preparado numa conversa com seu contador — decisões importantes continuam precisando de um profissional.
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-brand-secondary/20">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-slate-800 text-sm sm:text-base hover:text-brand-secondary focus:outline-none"
              >
                <span>Por quanto tempo eu tenho acesso?</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    openFaqIndex === 3 ? "rotate-180 text-brand-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openFaqIndex === 3 ? "max-h-40 border-t border-slate-100" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="p-5 sm:p-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Para sempre. Você baixa os arquivos e eles são seus, sem mensalidade e sem prazo de expiração.
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-brand-secondary/20">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-slate-800 text-sm sm:text-base hover:text-brand-secondary focus:outline-none"
              >
                <span>E se eu não gostar?</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    openFaqIndex === 4 ? "rotate-180 text-brand-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openFaqIndex === 4 ? "max-h-40 border-t border-slate-100" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="p-5 sm:p-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Você tem 7 dias de garantia incondicional. Se não fizer sentido pra você, devolvemos 100% do valor pago.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9) FINAL CTA SECTION */}
      <section className="bg-brand-primary text-white py-24 px-4 md:px-8 relative overflow-hidden">
        {/* Absolute design overlay elements */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-secondary/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="text-brand-accent text-xs uppercase font-bold tracking-widest bg-brand-secondary px-3.5 py-1.5 rounded-full border border-white/5">
            Ação Imediata
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Não deixe a Reforma Tributária te pegar de surpresa
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Em poucos minutos você já está com seu MEI organizado.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={CHECKOUT_LINK}
              className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-display font-extrabold text-base sm:text-lg px-8 py-5 rounded-2xl text-center shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              Quero garantir meu Kit MEI 2026 agora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 pt-4 text-xs text-slate-400">
            <span>🛡️ Transação Segura</span>
            <span>•</span>
            <span>💳 Liberação Imediata</span>
            <span>•</span>
            <span>🌟 Satisfação 100% Garantida</span>
          </div>
        </div>
      </section>

      {/* 10) FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4 md:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Logo and links row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-brand-accent flex items-center justify-center text-brand-primary font-display font-extrabold text-sm tracking-tight">
                MEI
              </span>
              <div>
                <p className="font-display font-bold text-sm text-white tracking-tight leading-none">
                  Kit Sobrevivência MEI 2026
                </p>
                <p className="text-[10px] text-slate-500 font-light mt-1">
                  Proteção fiscal e faturamento unificado para Microempreendedores
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
              <span>•</span>
              <a href="#pricing" className="hover:text-white transition-colors">Planos</a>
            </div>
          </div>

          {/* Disclaimer and copyright text */}
          <div className="space-y-6 text-left">
            <p className="text-slate-500 text-xs sm:text-[11px] leading-relaxed max-w-5xl">
              Kit Sobrevivência MEI 2026 é um material informativo e educacional. Não substitui a orientação de um contador ou advogado. Os valores e regras têm como base a legislação vigente em 2026 e podem ser alterados. Confirme sempre no Portal do Empreendedor (gov.br/mei) e na Receita Federal.
            </p>
            <p className="text-slate-500 text-xs sm:text-[11px] leading-none">
              © 2026 Kit Sobrevivência MEI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA BUTTON (Stays visible on mobile while scrolling) */}
      <AnimatePresence>
        {showMobileStickyBtn && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-5 left-4 right-4 z-40"
          >
            <a
              href={CHECKOUT_LINK}
              className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-display font-extrabold text-sm py-4 px-5 rounded-2xl shadow-xl border border-amber-300 text-center flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <span>Quero Garantir Meu Kit por R$ 32,90</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
