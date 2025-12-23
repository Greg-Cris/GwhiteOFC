"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  const servers = [
    { id: 1, name: "Atentah Studio", icon: "🎨", iconBg: "from-gray-700 to-gray-900", members: "205", online: "20" },
    { id: 2, name: "💎 AeroTools Premium 💎", icon: "💎", iconBg: "from-gray-600 to-gray-800", members: "203", online: "20" },
    { id: 3, name: "BLACKOUT SHOP", icon: "🛍️", iconBg: "from-gray-800 to-black", members: "187", online: "18" },
    { id: 4, name: "Legends Store | #8K", icon: "🏪", iconBg: "from-gray-700 to-black", members: "7.6K", online: "764" },
    { id: 5, name: "VitinStore", icon: "🎮", iconBg: "from-gray-600 to-gray-900", members: "7.3K", online: "725" },
    { id: 6, name: "Suivex Community #5100", icon: "🦋", iconBg: "from-gray-700 to-gray-950", members: "5.0K", online: "502" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const ServerCard = ({ server }) => (
    <div className="relative flex-shrink-0 w-80 bg-[#1a1a1a] border border-gray-700/50 rounded-xl p-3 hover:bg-[#252525] transition-all duration-200 cursor-pointer overflow-hidden">
      {/* Fundo animado com símbolos */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-symbol ${Math.random() * 8 + 6}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {['🎵', '🎶', '♪', '♫', '🎧', '🎤'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 flex items-center space-x-3">
        <div className={`w-14 h-14 bg-gradient-to-br ${server.iconBg} rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
          {server.icon}
        </div>
        <div className="flex-1 text-left min-w-0">
          <h3 className="text-white font-semibold text-sm mb-0.5 truncate">{server.name}</h3>
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center text-gray-400">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-1.5"></span>
              {server.members} membros
            </span>
            <span className="flex items-center text-green-400">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
              {server.online} online
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Partículas INTENSAS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partículas brancas pequenas - MUITAS */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full will-change-transform"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.3})`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 12 + 8}s infinite linear`,
              animationDelay: `${Math.random() * 8}s`,
              filter: `blur(${Math.random() * 0.5}px)`,
            }}
          />
        ))}
        
        {/* Orbs GRANDES e BRILHANTES */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-lg will-change-transform"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
              width: `${Math.random() * 20 + 12}px`,
              height: `${Math.random() * 20 + 12}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-diagonal ${Math.random() * 18 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}

        {/* Partículas cinzas médias */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`gray-${i}`}
            className="absolute rounded-full will-change-transform"
            style={{
              backgroundColor: `rgba(200, 200, 200, ${Math.random() * 0.6 + 0.2})`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 16 + 12}s infinite linear`,
              animationDelay: `${Math.random() * 10}s`,
              filter: `blur(${Math.random() * 0.8}px)`,
            }}
          />
        ))}
        
        {/* Partículas douradas */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`gold-${i}`}
            className="absolute rounded-full will-change-transform"
            style={{
              backgroundColor: `rgba(217, 164, 65, ${Math.random() * 0.4 + 0.2})`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-diagonal ${Math.random() * 20 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 8}s`,
              filter: `blur(${Math.random() * 1}px)`,
            }}
          />
        ))}
      </div>

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
        
        @keyframes natural-blink {
          0%, 85% { opacity: 1; }
          90%, 95% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes float-symbol {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(5deg); }
          50% { transform: translate(-5px, -20px) rotate(-5deg); }
          75% { transform: translate(-10px, -10px) rotate(3deg); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .carousel-container:hover .carousel-track { animation-play-state: paused; }
        .carousel-track { animation: scroll 20s linear infinite; display: flex; }
      `}</style>

      {/* Overlay de gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 lg:px-12 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}>
        <div className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-16 w-auto" />
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          <Link href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Início
          </Link>
          <Link
            href="/planos"
            className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg"
          >
            Planos
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Tutoriais
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
      <main className="flex flex-col items-center justify-center px-6 py-20 pt-32 text-center min-h-screen relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <div className="relative inline-block">
              <div className="absolute -top-12 left-0 transform -translate-x-2 -rotate-12 scale-x-[-1]">
                <span className="text-2xl" style={{ animation: "natural-blink 4s infinite ease-in-out" }}>
                  👑
                </span>
              </div>
              <span className="text-white font-bold tracking-wide">G-White Apps</span>
            </div>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-300">
            Seu futuro Bot está aqui.
          </h2>
          <div className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed space-y-0">
            <p className="text-balance">Eleve seu servidor Discord a um novo patamar com nossa tecnologia avançada.</p>
            <p className="text-balance">Automatize processos, melhore a experiência dos membros e simplifique a gestão.</p>
            <p className="text-balance">Transforme ideias em realidade com ferramentas poderosas e intuitivas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-gradient-to-br from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white px-8 py-4 text-lg rounded-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Ir para a Dashboard →
            </Button>
            <Link href="/planos">
              <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-200">
                Ver Planos
              </Button>
            </Link>
          </div>
        </div>
      </main>


      {/* Seção Nossos Clientes */}
      <section className="relative z-10 py-16 overflow-hidden">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold mb-4 text-white">Nossos Clientes</h2>
          <p className="text-gray-400 text-base">
            Explore as melhores comunidades do Discord e conecte-se com milhares de pessoas que compartilham seus interesses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <div className="carousel-container relative w-full overflow-hidden">
            <div className="carousel-track">
              {/* Primeira cópia */}
              <div className="flex space-x-3 pr-3">
                {servers.map((server) => (
                  <ServerCard key={`first-${server.id}`} server={server} />
                ))}
              </div>
              {/* Segunda cópia para loop */}
              <div className="flex space-x-3 pr-3">
                {servers.map((server) => (
                  <ServerCard key={`second-${server.id}`} server={server} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 lg:px-12 border-t border-gray-800 relative z-10 bg-black/60 backdrop-blur-sm gap-4">
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
