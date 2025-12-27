import ParticlesBackground from './components/ParticlesBackground'
import './globals.css'

export const metadata = {
  title: 'G-White Apps',
  description: 'Seu futuro Bot está aqui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-br from-black via-gray-950 to-black text-white">
        {/* Partículas Globais - Persistem entre páginas */}
        <ParticlesBackground />
        
        {/* Conteúdo das páginas */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
