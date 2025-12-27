"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"


export default function PlansPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const plans = [
    {
      name: "Bot Recrutamento",
      badge: "Essencial",
      badgeColor: "bg-blue-600",
      price: "25,00",
      period: "/mês",
      originalPrice: "40,00",
      description: "Sistema completo de recrutamento com formulários e gestão de metas.",
      icon: "👥",
      gradient: "from-blue-600 via-blue-700 to-cyan-600",
      features: [
        "Formulário de recrutamento personalizado",
        "Canais de metas automatizados",
        "Sistema de definição de metas",
        "Painel de acompanhamento",
        "Notificações automáticas",
        "Relatórios de performance",
        "Suporte 24/7"
      ],
      buttonText: "Começar Agora",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      highlighted: false,
      savings: "Desconto de R$ 15,00"
    },
    {
      name: "Pacote Completo",
      badge: "Melhor Custo-Benefício",
      badgeColor: "bg-purple-600",
      popular: "⭐ Economia de R$ 35",
      price: "150,00",
      period: " + R$ 25/mês",
      originalPrice: "185,00",
      description: "Todos os 16 adicionais inclusos! Pagamento inicial com desconto.",
      icon: "🚀",
      gradient: "from-purple-600 via-purple-700 to-pink-600",
      features: [
        "TODAS as 16 funcionalidades extras",
        "Sistema de Entrada/Saída personalizado",
        "Tickets profissionais + Metas + AntiFlood",
        "Exoneração + Rank + ADV + Ausência",
        "Blacklist + Comandos específicos",
        "Banimento permanente + Expulsar todos",
        "Gestão avançada de canais e mensagens",
        "Atualizações prioritárias"
      ],
      buttonText: "Quero Tudo Agora",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      highlighted: true,
      savings: "Desconto de R$ 35,00"
    },
    {
      name: "Servidor GTA RP",
      badge: "Pagamento Único",
      badgeColor: "bg-gradient-to-r from-orange-500 to-red-600",
      price: "30,00",
      period: " única vez",
      originalPrice: "50,00",
      description: "Servidor Discord completo configurado para sua facção de GTA RP.",
      icon: "🏙️",
      gradient: "from-orange-600 via-red-600 to-red-700",
      features: [
        "Servidor completo pré-configurado",
        "Design profissional para GTA RP",
        "Cargos e hierarquia prontos",
        "Permissões configuradas",
        "Canais organizados por setores",
        "Posse transferida para você",
        "Pronto para usar em minutos"
      ],
      buttonText: "Solicitar Servidor",
      buttonColor: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700",
      highlighted: false,
      note: "Abra um ticket no Discord para solicitar",
      savings: "Desconto de R$ 20,00"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Partículas INTENSAS - Igual à página inicial */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partículas brancas pequenas */}
        {[...Array(120)].map((_, i) => {
          const opacity = Math.random() * 0.8 + 0.3;
          const size = Math.random() * 5 + 2;
          const topPos = Math.random() * 100;
          const leftPos = Math.random() * 100;
          const duration = Math.random() * 12 + 8;
          const delay = Math.random() * 8;
          const blur = Math.random() * 0.5;
          
          return (
            <div
              key={`white-${i}`}
              className="absolute rounded-full will-change-transform"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                width: `${size}px`,
                height: `${size}px`,
                top: `${topPos}%`,
                left: `${leftPos}%`,
                animation: `float-up ${duration}s infinite linear`,
                animationDelay: `${delay}s`,
                filter: `blur(${blur}px)`,
              }}
            />
          );
        })}
        
        {/* Orbs GRANDES e BRILHANTES */}
        {[...Array(30)].map((_, i) => {
          const opacity = Math.random() * 0.5 + 0.2;
          const size = Math.random() * 20 + 12;
          const topPos = Math.random() * 100;
          const leftPos = Math.random() * 100;
          const duration = Math.random() * 18 + 15;
          const delay = Math.random() * 6;
          
          return (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full blur-lg will-change-transform"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                width: `${size}px`,
                height: `${size}px`,
                top: `${topPos}%`,
                left: `${leftPos}%`,
                animation: `float-diagonal ${duration}s infinite ease-in-out`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}

        {/* Partículas cinzas médias */}
        {[...Array(60)].map((_, i) => {
          const opacity = Math.random() * 0.6 + 0.2;
          const size = Math.random() * 6 + 2;
          const topPos = Math.random() * 100;
          const leftPos = Math.random() * 100;
          const duration = Math.random() * 16 + 12;
          const delay = Math.random() * 10;
          const blur = Math.random() * 0.8;
          
          return (
            <div
              key={`gray-${i}`}
              className="absolute rounded-full will-change-transform"
              style={{
                backgroundColor: `rgba(200, 200, 200, ${opacity})`,
                width: `${size}px`,
                height: `${size}px`,
                top: `${topPos}%`,
                left: `${leftPos}%`,
                animation: `float-up ${duration}s infinite linear`,
                animationDelay: `${delay}s`,
                filter: `blur(${blur}px)`,
              }}
            />
          );
        })}
        
        {/* Partículas douradas */}
        {[...Array(25)].map((_, i) => {
          const opacity = Math.random() * 0.4 + 0.2;
          const size = Math.random() * 4 + 2;
          const topPos = Math.random() * 100;
          const leftPos = Math.random() * 100;
          const duration = Math.random() * 20 + 15;
          const delay = Math.random() * 8;
          const blur = Math.random() * 1;
          
          return (
            <div
              key={`gold-${i}`}
              className="absolute rounded-full will-change-transform"
              style={{
                backgroundColor: `rgba(217, 164, 65, ${opacity})`,
                width: `${size}px`,
                height: `${size}px`,
                top: `${topPos}%`,
                left: `${leftPos}%`,
                animation: `float-diagonal ${duration}s infinite ease-in-out`,
                animationDelay: `${delay}s`,
                filter: `blur(${blur}px)`,
              }}
            />
          );
        })}
      </div>
      
      {/* Overlay de gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

      {/* Efeitos de luz de fundo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        
        @keyframes float-diagonal {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          25% { transform: translate(30px, -30px); opacity: 0.8; }
          50% { transform: translate(60px, 0); opacity: 0.6; }
          75% { transform: translate(30px, 30px); opacity: 0.7; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4); }
        }
      `}</style>

      {/* Header FIXO */}
      <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 lg:px-12 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}>
        <Link href="/" className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-16 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <Link href="/" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Início
          </Link>
          <Link href="/planos" className="text-white bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Planos
          </Link>
          <Link href="/tutoriais" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Tutoriais
          </Link>
          <Link href="/adicionais" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Adicionais
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Discord
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 ml-4 shadow-lg font-semibold">
            Entrar
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-20 pt-32 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Título com animação */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-400 text-sm font-semibold animate-pulse">
              ✨ Planos Flexíveis e Acessíveis
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Escolha seu plano ideal
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Do bot essencial ao pacote completo com tudo incluído.<br/>
              <span className="text-purple-400 font-semibold">Ou personalize: adicione funcionalidades extras por apenas R$ 10 cada!</span>
            </p>
          </div>

          {/* Cards de Planos - ANIMADOS E MENORES */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-xl p-3 transition-all duration-500 transform ${
                  plan.highlighted
                    ? "scale-102 lg:scale-105 z-20"
                    : hoveredCard === index ? "scale-102" : "scale-100"
                } ${
                  plan.highlighted
                    ? `bg-gradient-to-br ${plan.gradient} border border-purple-400 shadow-xl`
                    : "bg-gray-900/60 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
                }`}
                style={{
                  animation: plan.highlighted ? 'glow-pulse 3s infinite' : 'none',
                  boxShadow: hoveredCard === index && !plan.highlighted 
                    ? '0 10px 30px rgba(59, 130, 246, 0.2)' 
                    : plan.highlighted 
                    ? '0 15px 40px rgba(168, 85, 247, 0.3)'
                    : 'none'
                }}
              >
                {/* Ícone Flutuante */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`text-3xl bg-gradient-to-br ${plan.gradient} rounded-full p-2 shadow-lg transition-transform duration-300 ${hoveredCard === index ? 'scale-105 rotate-6' : 'scale-100'}`}>
                    {plan.icon}
                  </div>
                </div>

                {/* Badge e Popular */}
                <div className="flex items-center justify-between mb-4 mt-6 flex-wrap gap-2">
                  <span className={`${plan.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                    {plan.badge}
                  </span>
                  {plan.popular && (
                    <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg animate-bounce">
                      {plan.popular}
                    </span>
                  )}
                </div>

                {/* Nome do Plano */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-xs mb-4 min-h-[40px] leading-relaxed">{plan.description}</p>

                {/* Preço com animação */}
                <div className="mb-6 relative">
                  {plan.originalPrice && (
                    <div className="text-center mb-1">
                      <span className="text-gray-400 line-through text-base">De R$ {plan.originalPrice}</span>
                    </div>
                  )}
                  <div className="flex items-baseline justify-center flex-wrap gap-1">
                    <span className="text-sm text-gray-400 mr-1">R$</span>
                    <span className={`text-4xl font-bold transition-all duration-300 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}>
                      {plan.price.split(',')[0]}
                    </span>
                    <span className="text-xl font-bold">,{plan.price.split(',')[1]}</span>
                    <span className="text-gray-400 ml-1 text-sm">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="mt-2 text-center">
                      <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-0.5 rounded-full border border-green-500/50">
                        💰 {plan.savings}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features com ícones animados */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}>
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-xs group-hover:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Nota adicional */}
                {plan.note && (
                  <div className="mb-3 p-2 bg-black/30 rounded-lg border border-orange-500/30">
                    <p className="text-xs text-orange-300 text-center">💬 {plan.note}</p>
                  </div>
                )}

                {/* Botão com animação */}
                <Button
                  className={`w-full ${plan.buttonColor} text-white py-4 rounded-xl font-bold text-base transition-all duration-300 transform shadow-2xl ${
                    hoveredCard === index ? 'scale-105 shadow-3xl' : 'scale-100'
                  }`}
                >
                  {plan.buttonText} 
                  <span className={`ml-2 inline-block transition-transform duration-300 ${hoveredCard === index ? 'translate-x-2' : 'translate-x-0'}`}>
                    →
                  </span>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA para Adicionais */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40 border-2 border-cyan-500/50 rounded-3xl p-10 text-center backdrop-blur-sm shadow-2xl">
              <div className="text-5xl mb-4">🛠️</div>
              <h2 className="text-3xl font-bold mb-4">
                Quer personalizar seu bot?
              </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Monte seu plano ideal! Adicione apenas as funcionalidades que você precisa por <span className="text-cyan-400 font-bold">R$ 10,00 cada</span>.<br/>
                <span className="text-sm text-gray-400">Sistema de tickets, metas, antiflood, rank, blacklist e muito mais.</span>
              </p>
              <Link href="/adicionais">
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Ver Todas as Funcionalidades →
                </Button>
              </Link>
            </div>
          </div>

          {/* Comparativo Rápido */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Compare os planos</h2>
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">👥</div>
                  <div className="font-bold text-lg mb-2">Bot Recrutamento</div>
                  <div className="text-sm text-gray-400">Ideal para começar com o essencial</div>
                  <div className="mt-3 text-blue-400 font-bold">R$ 25/mês</div>
                </div>
                <div className="border-l border-r border-gray-700 px-6">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-lg mb-2">Pacote Completo</div>
                  <div className="text-sm text-gray-400">Todas as funcionalidades com desconto</div>
                  <div className="mt-3 text-purple-400 font-bold">R$ 150 + R$ 25/mês</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🏙️</div>
                  <div className="font-bold text-lg mb-2">Servidor GTA RP</div>
                  <div className="text-sm text-gray-400">Servidor pronto para sua facção</div>
                  <div className="mt-3 text-orange-400 font-bold">R$ 30 único</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Adicionais */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-white font-semibold">Pagamento Seguro</span>
                <span className="text-gray-400 text-sm text-center">Proteção total em todas as transações</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white font-semibold">Ativação Instantânea</span>
                <span className="text-gray-400 text-sm text-center">Configure e use imediatamente</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-white font-semibold">Suporte 24/7</span>
                <span className="text-gray-400 text-sm text-center">Assistência quando você precisar</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer FIXO */}
      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 lg:px-12 border-t border-gray-800 relative z-10 bg-black/90 backdrop-blur-md gap-4">
        <div className="flex items-center space-x-6">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <span>📋</span> Termos de Serviço
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
            Discord
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Youtube
          </Link>
        </div>
        <div className="text-gray-500 text-xs">© 2025 G-White Apps. Todos os direitos reservados</div>
      </footer>
    </div>
  )
}
