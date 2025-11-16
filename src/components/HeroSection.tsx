import deltaLakeImage from "../image/delta lake.png";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-700 bg-clip-text text-transparent">상록</span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent"> Data Intelligence </span>
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">Center</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            </p>

            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Delta Lake 기반 통합 데이터 레이크하우스 아키텍처
                </span>
              </h2>
            </div>
          </div>

          {/* Delta Lake Ecosystem Diagram */}
          <div className="relative max-w-5xl mx-auto">
            <img
              src={deltaLakeImage}
              alt="Delta Lake UniForm Ecosystem"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};