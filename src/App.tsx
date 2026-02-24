/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import DemoOne from "./demo-about";
import DemoShader from "./demo-shader";
import DemoFooter from "./demo-footer";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import { VideoFeature } from "@/components/ui/video-feature";

export default function App() {
  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Hero Section Container */}
      <div className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Background Shader */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-80">
        <ShaderAnimation />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none"></div>
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-sm font-black">
            K
          </div>
          DWIKI
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Story</a>
          <a href="#" className="hover:text-white transition-colors">Powers</a>
          <a href="#" className="hover:text-white transition-colors">Form</a>
        </nav>
        <button className="px-5 py-2.5 rounded-full border border-gray-700 text-sm font-medium hover:bg-white hover:text-black transition-colors">
          My King
        </button>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center pb-20">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-black/50 backdrop-blur-sm text-sm font-medium text-gray-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          The stongest king is here!
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
          KING <span className="text-gray-500">DWIKI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-medium">
          Kind Is Good<br className="hidden sm:block" />
          Evil Is Bad<br className="hidden sm:block" />
          He Control All Of Them
        </p>

        {/* CTA Button */}
        <button className="px-10 py-5 rounded-full bg-white text-black font-extrabold text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
          Look At The Power!
        </button>
      </main>
      </div>

      <div className="relative z-10 w-full bg-white text-black">
        <DemoOne />
      </div>

      <VideoFeature 
        videoSrc="assets/kind.mp4"
        videoPosition="right"
        logoText="KIND DWIKI"
        subtitle="HEART OF GOLD / KINDNESS"
        titleWhite="This creature is friendly and white,"
        titleGray="he usually trades and goes to the gym to build muscle."
        linkText="Witness the kindness"
      />

      <VideoFeature 
        videoSrc="assets/evil.mp4"
        videoPosition="left"
        alignText="right"
        logoText="EVIL DWIKI"
        subtitle="DARKNESS / FURY"
        titleWhite="This creature is dangerous and black,"
        titleGray="he can finish 20 solar cigarettes in a day, be careful if you meet him"
        linkText="Embrace the darkness"
      />

      {/* Demo Section */}
      
      
      <div className="relative z-10 w-full">
        <DemoFooter />
      </div>
    </div>
  );
}
