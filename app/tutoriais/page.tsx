"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TutorialsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("Todos")
  
  const filters = [
    { name: "Todos", count: 25 },
    { name: "Configuração", count: 13 },
    { name: "Vendas", count: 1 },
    { name: "Ticket", count: 2 },
    { name: "Auth", count: 1 },
    { name: "Comandos", count: 3 },
    { name: "Bancos", count: 5 },
  ]

  const tutorials = [
    {
      id: 1,
      title: "Primeiros Passos: Comprando e Convidando seu Bot",
      description: "Aprenda o passo a passo para comprar e convidar seu bot para o servidor.",
      duration: "01:47",
      views: "38",
      category: "Configuração",
      thumbnail: "CONFIGURAÇÃO\nBOT\n2EM1"
    },
    {
      id: 2,
      title: "Primeiros Passos: Configurando e ligando o bot",
      description: "Configure seu bot e aprenda a colocar o token e usar os primeiros comandos.",
      duration: "03:17",
      views: "24",
      category: "Configuração",
      thumbnail: "CONFIGURAÇÃO\nBOT\n2EM1"
    },
    {
      id: 3,
      title: "Sistema de Autorole - Configuração Completa",
      description: "Aprenda a configurar o sistema de autorole do seu bot.",
      duration: "02:34",
      views: "15",
      category: "Configuração",
      thumbnail: "CONFIGURAÇÃO\nBOT\n2EM1"
    },
    {
      id: 4,
      title: "Criando um Cupom / Configurando",
      description: "Aprenda a configurar e criar cupons de desconto no seu bot",
      duration: "12:45",
      views: "25",
      category: "Vendas",
      thumbnail: "CONFIGURAÇÃO\nBOT\n2EM1"
    },
    {
      id: 5,
      title: "Configuração: Sistema de Sugestões",
      description: "Aprenda a configurar o sistema de sugestões do seu bot para receber feedback dos usuários.",
      duration: "01:48",
      views: "10",
      category: "Configuração",
      thumbnail: "CONFIGURAÇÃO\nBOT\n2EM1"
    },
    {
      id: 6,
      title: "Configuração: Anti Raid",
      description: "Aprenda a configurar o sistema de Anti Raid do seu bot para proteger seu servidor contra ataques.",
      duration: "01:48",
      views: "10",
      category: "Configuração",
      thumbnail: "CONFIGURAÇÃO\nBOT\n2EM1"
    },
    {
      id: 7,
      title: "Configuração: Sistema de Auto lock em chats",
      description: "Aprenda a configurar o sistema de Auto lock em chats do seu bot para bloquear canais automaticamente.",
      duration: "01:32",
      views: "10",
      category: "Configuração",
      thumbnail: "CONFIGURAÇÃO\nBOT\n2EM1"
    },
    {
      id: 8,
      title: "Configuração: Sistema de Ticket",
      description: "Configure o sistema de tickets para suporte no seu servidor.",
      duration: "04:22",
      views: "32",
      category: "Ticket",
      thumbnail: "CONFIGURAÇÃO\nBOT\n2EM1"
    },
  ]

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === "Todos" || tutorial.category === activeFilter
    return matchesSearch && matchesFilter
  })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whiteParticles = [...Array(80)].map((_, i) => ({
    opacity: Math.random() * 0.8 + 0.3,
    size: Math.random() * 5 + 2,
    topPos: Math.random() * 100,
    leftPos: Math.random() * 100,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 8,
    blur: Math.random() * 0.5,
  }))

  const orbs = [...Array(20)].map((_, i) => ({
    opacity: Math.random() * 0.5 + 0.2,
    size: Math.random() * 20 + 12,
    topPos: Math.random() * 100,
    leftPos: Math.random() * 100,
    duration: Math.random() * 18 + 15,
    delay: Math.random() * 6,
  }))

  const grayParticles = [...Array(40)].map((_, i) => ({
    opacity: Math.random() * 0.6 + 0.2,
    size: Math.random() * 6 + 2,
    topPos: Math.random() * 100,
    leftPos: Math.random() * 100,
    duration: Math.random() * 16 + 12,
    delay: Math.random() * 10,
    blur: Math.random() * 0.8,
  }))

  const goldParticles = [...Array(15)].map((_, i) => ({
    opacity: Math.random() * 0.4 + 0.2,
    size: Math.random() * 4 + 2,
    topPos: Math.random() * 100,
    leftPos: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 8,
    blur: Math.random() * 1,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
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
      `}} />

      {/* Partículas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {whiteParticles.map((particle, i) => (
          <div
            key={`white-${i}`}
            className="absolute rounded-full will-change-transform"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.topPos}%`,
              left: `${particle.leftPos}%`,
              animation: `float-up ${particle.duration}s infinite linear`,
              animationDelay: `${particle.delay}s`,
              filter: `blur(${particle.blur}px)`,
            }}
          />
        ))}
        
        {orbs.map((orb, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-lg will-change-transform"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${orb.opacity})`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              top: `${orb.topPos}%`,
              left: `${orb.leftPos}%`,
              animation: `float-diagonal ${orb.duration}s infinite ease-in-out`,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}

        {grayParticles.map((particle, i) => (
          <div
            key={`gray-${i}`}
            className="absolute rounded-full will-change-transform"
            style={{
              backgroundColor: `rgba(200, 200, 200, ${particle.opacity})`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.topPos}%`,
              left: `${particle.leftPos}%`,
              animation: `float-up ${particle.duration}s infinite linear`,
              animationDelay: `${particle.delay}s`,
              filter: `blur(${particle.blur}px)`,
            }}
          />
        ))}
        
        {goldParticles.map((particle, i) => (
          <div
            key={`gold-${i}`}
            className="absolute rounded-full will-change-transform"
            style={{
              backgroundColor: `rgba(217, 164, 65, ${particle.opacity})`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.topPos}%`,
              left: `${particle.leftPos}%`,
              animation: `float-diagonal ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
              filter: `blur(${particle.blur}px)`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

      {/* Header FIXO - IGUAL AO DE PLANOS */}
      <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 lg:px-12 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}>
        <Link href="/" className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-16 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <Link href="/" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Início
          </Link>
          <Link href="/planos" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Planos
          </Link>
          <Link href="/tutoriais" className="text-white bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
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
      <main className="px-6 py-20 pt-32 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">Tutoriais</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Aprenda a configurar e usar todos os recursos dos seus bots com nossos tutoriais em vídeo passo a passo.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar tutoriais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-gray-700/50 rounded-xl px-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                activeFilter === filter.name
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-[#1a1a1a] text-gray-300 hover:bg-[#252525] border border-gray-700/50"
              }`}
            >
              {filter.name} <span className="ml-2 text-sm opacity-70">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-[#1a1a1a] border border-gray-700/50 rounded-xl overflow-hidden hover:bg-[#252525] transition-all duration-200 cursor-pointer group"
            >
              <div className="relative bg-gradient-to-br from-purple-900/40 to-purple-600/40 aspect-video flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="text-gray-400 text-xs tracking-widest mb-2">{tutorial.thumbnail.split('\n')[0]}</div>
                  <div className="text-5xl font-bold text-white mb-1">{tutorial.thumbnail.split('\n')[1]}</div>
                  <div className="text-4xl font-bold text-gray-300">{tutorial.thumbnail.split('\n')[2]}</div>
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-semibold">
                  {tutorial.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{tutorial.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{tutorial.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {tutorial.views} visualizações
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tutorial.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-900/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Ajuda Personalizada?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Não encontrou o que procurava? Nossa equipe de suporte está sempre pronta para ajudar você a configurar seu bot perfeitamente.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-200">
            Falar com Suporte
          </Button>
        </div>
      </main>

      {/* Footer FIXO - IGUAL AO DE PLANOS */}
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
