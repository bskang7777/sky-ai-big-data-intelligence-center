export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                상록에스
              </div>
              <div className="ml-2 text-sm text-gray-400">
                상록 Data Intelligence Center
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
            대규모 빅데이터와 AI 분석 기술을 통해 조직의 의사결정을 고도화하는 엔터프라이즈 데이터 혁신 기업입니다.
            </p>
            <div className="text-sm text-gray-500">
              <p>© 2024 상록에스. All rights reserved.</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#/services/data-lake" className="hover:text-white transition-colors">Delta Lake</a></li>
              <li><a href="#/services/ai-rag" className="hover:text-white transition-colors">AI · RAG 서비스</a></li>
              <li><a href="#/services/realtime-iot" className="hover:text-white transition-colors">실시간 분석 & IoT</a></li>
              <li><a href="#/services/finance-hft" className="hover:text-white transition-colors">금융·HFT & 자산 배분</a></li>
              <li><a href="#/services/cloud-migration" className="hover:text-white transition-colors">클라우드 & 마이그레이션</a></li>
              <li><a href="#/services/education-ai" className="hover:text-white transition-colors">교육 AI & 플랫폼</a></li>
              <li>
                <a
                  href="https://orangedatamining.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  오렌지3 (Orange3)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-400">
              <li>이메일: bskang7@srmm.kr</li>
              <li>전화: 02-422-6039</li>
              <li>주소: 서울시 송파구 법원로 6길 7 송파유탑테크벨리 11층</li>
              <li>운영시간: 평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>데이터로 미래를 설계하는 상록에스와 함께하세요</p>
        </div>
      </div>
    </footer>
  );
};