export default function ConitLanding() {
  return (
    <div className="min-h-screen bg-[#1A2634] relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-96 h-96">
          <div className="absolute right-0 top-0 w-48 h-48 border-r-[100px] border-t-[100px] border-r-yellow-400/10 border-t-transparent rotate-45" />
          <div className="absolute right-20 top-20 w-48 h-48 border-r-[100px] border-t-[100px] border-r-white/5 border-t-transparent rotate-45" />
        </div>
        <div className="absolute left-10 bottom-10 w-96 h-96">
          <div className="absolute left-0 bottom-0 w-48 h-48 border-l-[100px] border-b-[100px] border-l-yellow-400/10 border-b-transparent -rotate-45" />
          <div className="absolute left-20 bottom-20 w-48 h-48 border-l-[100px] border-b-[100px] border-l-white/5 border-b-transparent -rotate-45" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header/Logo */}
        <header className="mb-20">
          <div className="flex items-center">
            <div className="w-80">
              <img className="object-contain" src="/logo-conit.png"></img>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          {/* Decorative Elements */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-16 h-16 transform rotate-45 border-2 border-yellow-400/30" />
            ))}
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              COTIZACIÓN
              <span className="block">DE AULA VIRTUAL</span>
              <span className="block">Y PÁGINA WEB</span>
            </h1>

            {/* Yellow Accent Line */}
            <div className="w-32 h-1 bg-yellow-400" />

            {/* CONIT Tag */}
            <div className="inline-block bg-yellow-400 px-4 py-2 text-[#1A2634] font-bold mt-4">CONIT</div>
          </div>

          {/* Decorative Triangles */}
          <div className="absolute bottom-10 right-10 flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 transform rotate-45 bg-yellow-400/20"
                style={{
                  animation: `pulse 2s ${i * 0.5}s infinite`,
                }}
              />
            ))}
          </div>
        </main>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

