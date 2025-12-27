"use client"

import { useMemo } from "react"

export default function ParticlesBackground() {
  // Gerar partículas uma vez e manter
  const particles = useMemo(() => {
    const whiteParticles = [...Array(120)].map((_, i) => ({
      id: `white-${i}`,
      opacity: Math.random() * 0.8 + 0.3,
      size: Math.random() * 5 + 2,
      topPos: Math.random() * 100,
      leftPos: Math.random() * 100,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 8,
      blur: Math.random() * 0.5,
      color: '255, 255, 255',
      animation: 'float-up'
    }));

    const orbs = [...Array(30)].map((_, i) => ({
      id: `orb-${i}`,
      opacity: Math.random() * 0.5 + 0.2,
      size: Math.random() * 20 + 12,
      topPos: Math.random() * 100,
      leftPos: Math.random() * 100,
      duration: Math.random() * 18 + 15,
      delay: Math.random() * 6,
      blur: 0,
      color: '255, 255, 255',
      animation: 'float-diagonal',
      blurClass: 'blur-lg'
    }));

    const grayParticles = [...Array(60)].map((_, i) => ({
      id: `gray-${i}`,
      opacity: Math.random() * 0.6 + 0.2,
      size: Math.random() * 6 + 2,
      topPos: Math.random() * 100,
      leftPos: Math.random() * 100,
      duration: Math.random() * 16 + 12,
      delay: Math.random() * 10,
      blur: Math.random() * 0.8,
      color: '200, 200, 200',
      animation: 'float-up'
    }));

    const goldParticles = [...Array(25)].map((_, i) => ({
      id: `gold-${i}`,
      opacity: Math.random() * 0.4 + 0.2,
      size: Math.random() * 4 + 2,
      topPos: Math.random() * 100,
      leftPos: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 8,
      blur: Math.random() * 1,
      color: '217, 164, 65',
      animation: 'float-diagonal'
    }));

    return [...whiteParticles, ...orbs, ...grayParticles, ...goldParticles];
  }, []);

  return (
    <>
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

      {/* Container de Partículas Fixo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full will-change-transform ${particle.blurClass || ''}`}
            style={{
              backgroundColor: `rgba(${particle.color}, ${particle.opacity})`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.topPos}%`,
              left: `${particle.leftPos}%`,
              animation: `${particle.animation} ${particle.duration}s infinite linear`,
              animationDelay: `${particle.delay}s`,
              filter: particle.blur ? `blur(${particle.blur}px)` : 'none',
            }}
          />
        ))}
      </div>

      {/* Overlay de gradiente sutil */}
      <div className="fixed inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none z-0" />

      {/* Efeitos de luz de fundo */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/5 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{animationDelay: '2s'}}></div>
    </>
  );
}
