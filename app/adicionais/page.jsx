"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function AddonsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState([])
  const [hoveredAddon, setHoveredAddon] = useState(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const addons = [
    {
      id: 1,
      name: "Sistema de Entrada/Saída",
      icon: "🚪",
      description: "Mensagens personalizadas de boas-vindas e despedida com embed customizável",
      features: ["Embed personalizado", "Auto-role", "Canal específico"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Sistema de Tickets",
      icon: "🎫",
      description: "Sistema profissional de atendimento com categorias e logs",
      features: ["Múltiplas categorias", "Transcrição", "Sistema de claim"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Sistema de Metas",
      icon: "🎯",
      description: "Defina e acompanhe metas individuais e de equipe em tempo real",
      features: ["Metas individuais", "Ranking", "Notificações"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Sistema AntiFlood",
      icon: "🛡️",
      description: "Proteção automática contra spam e flood de mensagens",
      features: ["Detecção inteligente", "Punições automáticas", "Whitelist"],
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      name: "Sistema de Exoneração",
      icon: "📤",
      description: "Gerenciamento completo de saída de membros da equipe",
      features: ["Formulário automático", "Remoção de cargos", "Registro"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      name: "Rank de Recrutamento",
      icon: "🏆",
      description: "Ranking competitivo dos melhores recrutadores do servidor",
      features: ["Pontuação automática", "Prêmios", "Leaderboard"],
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 7,
      name: "Sistema de ADV",
      icon: "⚠️",
      description: "Gerenciamento de advertências com histórico e pontuação",
      features: ["Níveis de gravidade", "Histórico completo", "Auto-punição"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 8,
      name: "Sistema de Ausência",
      icon: "🌙",
      description: "Permite membros marcarem ausência com justificativa",
      features: ["Período configurável", "Notificação auto", "Cargo temporário"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 9,
      name: "Sistema de Blacklist",
      icon: "🚫",
      description: "Lista de usuários banidos com verificação automática",
      features: ["Ban permanente", "Razões detalhadas", "Compartilhamento"],
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 10,
      name: "Comandos Específicos",
      icon: "⚙️",
      description: "Conjunto de comandos personalizados para seu servidor",
      features: ["Personalização total", "Aliases", "Permissões"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 11,
      name: "Banimento Permanente",
      icon: "🔒",
      description: "Sistema de ban que impede entrada mesmo removendo do registro",
      features: ["Proteção avançada", "Múltiplos métodos", "Inviolável"],
      color: "from-red-700 to-red-900"
    },
    {
      id: 12,
      name: "Expulsar Todos",
      icon: "💥",
      description: "Comando de emergência para limpar servidor (use com cautela!)",
      features: ["Confirmação dupla", "Whitelist admin", "Log detalhado"],
      color: "from-red-600 to-pink-600"
    },
    {
      id: 13,
      name: "Listar Canais por Emoji",
      icon: "📋",
      description: "Painel para gerenciar canais que começam com emoji específico",
      features: ["Seleção por emoji", "Exclusão em massa", "Preview"],
      color: "from-teal-500 to-green-500"
    },
    {
      id: 14,
      name: "Apagar Mensagens Avançado",
      icon: "🗑️",
      description: "Sistema completo de limpeza de mensagens com múltiplos filtros",
      features: ["Por usuário", "Por canal", "Servidor todo"],
      color: "from-slate-600 to-slate-800"
    },
    {
      id: 15,
      name: "Sistema de Mensagens em Massa",
      icon: "📢",
      description: "Envie mensagens personalizadas para grupos específicos",
      features: ["Por cargo", "Por canal", "Todos do servidor"],
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 16,
      name: "Bloquear/Desbloquear Canal",
      icon: "🔐",
      description: "Controle rápido de permissões de escrita em canais",
      features: ["Toggle rápido", "Múltiplos canais", "Temporizador"],
      color: "from-zinc-600 to-zinc-800"
    }
  ]

  const totalPrice = selectedAddons.length * 10

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Partículas de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full will-change-transform"
            style={{
              backgroundColor: `rgba(${Math.random() > 0.5 ? '168, 85, 247' : '34, 211, 238'}, ${Math.random() * 0.3 + 0.1})`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-slow ${Math.random() * 25 + 20}s infinite linear`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }
      `}</style>

      {/* Header FIXO */}
      <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 lg:px-12 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}>
        <a href="/" className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-16 w-auto" />
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          <a href="/" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Início
          </a>
          <a href="/planos" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Planos
          </a>
          <a href="/adicionais" className="text-white bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Adicionais
          </a>
          <a href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Discord
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 ml-4 shadow-lg font-semibold">
            Entrar
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-20 pt-32 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-cyan-600/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-semibold">
              🛠️ Marketplace de Funcionalidades
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Personalize seu Bot
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Adicione funcionalidades específicas ao seu plano atual.<br/>
              <span className="text-cyan-400 font-bold text-2xl">Apenas R$ 10,00 por funcionalidade</span> - pagamento único, sem aumentar mensalidade!
            </p>
            
            {/* Info Box */}
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Pagamento único</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Sem alterar mensalidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Ativação imediata</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Adicionais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {addons.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id)
              const isHovered = hoveredAddon === addon.id
              
              return (
                <div
                  key={addon.id}
                  onMouseEnter={() => setHoveredAddon(addon.id)}
                  onMouseLeave={() => setHoveredAddon(null)}
                  onClick={() => toggleAddon(addon.id)}
                  className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 transform ${
                    isSelected 
                      ? `bg-gradient-to-br ${addon.color} scale-105 shadow-2xl border-2 border-white` 
                      : 'bg-gray-900/60 border border-gray-700 hover:border-gray-600 hover:scale-105'
                  }`}
                  style={{
                    boxShadow: isHovered && !isSelected ? '0 10px 40px rgba(34, 211, 238, 0.2)' : ''
                  }}
                >
                  {/* Selo de Selecionado */}
                  {isSelected && (
                    <div className="absolute -top-3 -right-3 bg-white text-black rounded-full p-2 shadow-xl animate-bounce">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  {/* Ícone */}
                  <div className={`text-5xl mb-4 transition-transform duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}>
                    {addon.icon}
                  </div>

                  {/* Nome */}
                  <h3 className="text-xl font-bold mb-2 min-h-[56px]">{addon.name}</h3>

                  {/* Descrição */}
                  <p className="text-gray-300 text-sm mb-4 min-h-[40px]">{addon.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {addon.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs">
                        <svg className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={isSelected ? 'text-white' : 'text-gray-400'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Preço */}
                  <div className={`flex items-baseline justify-center py-3 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-gray-800/50'}`}>
                    <span className="text-sm mr-1">R$</span>
                    <span className="text-3xl font-bold">10</span>
                    <span className="text-sm ml-1">/único</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Carrinho Fixo */}
          {selectedAddons.length > 0 && (
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl shadow-2xl p-6 border-2 border-white/20 backdrop-blur-md">
                <div className="flex items-center gap-6 flex-wrap justify-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full px-4 py-2">
                      <span className="text-2xl font-bold">{selectedAddons.length}</span>
                      <span className="text-sm ml-1">selecionados</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-cyan-100">Total a pagar</div>
                      <div className="text-3xl font-bold">R$ {totalPrice},00</div>
                    </div>
                  </div>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 rounded-xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all">
                    Adicionar ao Plano →
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Rápido */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
            <div className="grid gap-6">
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  Como funciona o pagamento?
                </h3>
                <p className="text-gray-400">
                  Você paga apenas R$ 10,00 por funcionalidade escolhida, uma única vez. Esse valor NÃO aumenta sua mensalidade do plano base!
                </p>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  Quando são ativadas?
                </h3>
                <p className="text-gray-400">
                  As funcionalidades são ativadas instantaneamente após confirmação do pagamento. Em até 5 minutos seu bot já estará com os novos recursos!
                </p>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-2xl">🔄</span>
                  Posso adicionar mais depois?
                </h3>
                <p className="text-gray-400">
                  Sim! Você pode adicionar novas funcionalidades a qualquer momento, pagando apenas R$ 10,00 por cada nova funcionalidade que desejar.
                </p>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-2xl">🎁</span>
                  Posso testar antes?
                </h3>
                <p className="text-gray-400">
                  Todas as funcionalidades estão disponíveis no plano Trial gratuito de 24 horas! Teste tudo antes de comprar.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer FIXO */}
      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 lg:px-12 border-t border-gray-800 relative z-10 bg-black/90 backdrop-blur-md gap-4">
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <span>📋</span> Termos de Serviço
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
            Discord
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Youtube
          </a>
        </div>
        <div className="text-gray-500 text-xs">© 2025 G-White Apps. Todos os direitos reservados</div>
      </footer>
    </div>
  )
}
