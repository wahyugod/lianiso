import { ArrowRight, Box } from "lucide-react";

interface VideoFeatureProps {
  videoSrc: string;
  videoPosition: "left" | "right";
  logoText?: string;
  subtitle: string;
  titleWhite: string;
  titleGray: string;
  linkText?: string;
  alignText?: "left" | "right";
}

export function VideoFeature({
  videoSrc,
  videoPosition,
  logoText = "Acme",
  subtitle,
  titleWhite,
  titleGray,
  linkText = "Read case study",
  alignText = "left",
}: VideoFeatureProps) {
  const isVideoLeft = videoPosition === "left";

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-gray-900 border-dashed">
      <div
        className={`flex flex-col gap-12 lg:gap-24 items-center ${
          isVideoLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Text Content */}
        <div className={`flex-1 w-full space-y-8 flex flex-col justify-center ${alignText === "right" ? "items-end text-right" : "items-start text-left"}`}>
          {/* Logo */}
          <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
            <Box className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
            <span>{logoText}</span>
          </div>

          <div className="space-y-6 mt-16">
            <h3 className="text-[#888888] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {subtitle}
            </h3>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] tracking-tight max-w-xl">
              <span className="text-white">{titleWhite} </span>
              <span className="text-[#888888]">{titleGray}</span>
            </h2>

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition-colors mt-8 text-lg"
            >
              {linkText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Video Content */}
        <div className="flex-1 w-full bg-[#111] p-4 sm:p-8 border border-[#222] min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto max-h-[600px] object-cover"
            />
        </div>
      </div>
    </section>
  );
}
