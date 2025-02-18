import type { Metadata } from "next"
import { AlphabetBlocks } from "./components/alphabet-blocks"
import { CookieConsent } from "./components/cookie-consent"
import { KongjabanLogo } from "./components/kongjaban-logo"

export const metadata: Metadata = {
  title: "Kongjaban Group",
  description: "Building the future through strategic investments and innovation",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <KongjabanLogo />
            <span className="text-gray-800 font-medium text-xl">Kongjaban</span>
            <span className="text-gray-500 text-sm">Investor Relations</span>
          </div>
          <nav>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Investors
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {" "}
          {/* 최대 너비를 줄여 오른쪽 여백 확보 */}
          <div className="mb-16">
            <div className="inline-block mb-8">
              <div className="relative w-24 h-24 bg-blue-500 rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transform rotate-2">
                <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-medium">
                  K
                </span>
              </div>
            </div>
            <h1 className="text-4xl text-gray-700 font-light">is for Kongjaban</h1>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              "혁신을 통해 미래를 선도하는 기업들과 함께합니다. 우리는 단순한 투자를 넘어 지속 가능한 가치를
              창출합니다."
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              more
            </a>
          </div>
          <div className="mt-16 pt-8 border-t">
            <div className="space-y-2">
              <div className="h-12">
                <svg viewBox="0 0 200 50" className="h-full w-auto">
                  <text x="10" y="35" className="text-3xl fill-current" style={{ fontFamily: "cursive" }}>
                    CEO Name
                  </text>
                </svg>
              </div>
              <p className="text-gray-600">CEO Name</p>
            </div>
          </div>
        </div>

        <AlphabetBlocks />
      </main>

      <CookieConsent />
    </div>
  )
}

