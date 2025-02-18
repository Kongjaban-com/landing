export function MainContent() {
  return (
    <main className="container mx-auto px-6">
      <section className="pt-32 pb-20">
        <div className="max-w-2xl space-y-16">
          <div>
            <div className="inline-block mb-8">
              <div className="relative w-24 h-24 bg-[#2C2C2C] rounded-lg shadow-lg">
                <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-light">
                  K
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              is for Kongjaban
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              "혁신을 통해 미래를 선도하는 기업들과 함께합니다. 우리는 단순한 투자를 넘어 지속 가능한 가치를
              창출합니다."
            </p>
            <a href="#" className="inline-block text-gray-900 hover:text-gray-600 transition-colors">
              more
            </a>
          </div>

          <div className="pt-8 border-t">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium">CEO</span>
              </div>
              <div>
                <div className="font-medium">CEO Name</div>
                <div className="text-sm text-gray-500">Chief Executive Officer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

