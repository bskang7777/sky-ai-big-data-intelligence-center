import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrendingUp, Clock, PieChart, DollarSign, CheckCircle2, ArrowRight } from "lucide-react";

export const FinanceHFTDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              금융 · HFT & 자산 배분 솔루션
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              초고속 트레이딩과 AI 기반 포트폴리오 최적화로 수익을 극대화하세요
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">서비스 개요</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              마이크로초 단위의 초고속 트레이딩(HFT) 시스템과 AI 기반 자산 배분 전략을 제공합니다.
              실시간 시장 데이터 분석, 알고리즘 트레이딩, 리스크 관리, 포트폴리오 최적화를 통해
              안정적이고 효율적인 투자 성과를 달성합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border border-emerald-100">
                <Clock className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">초저지연 실행</h3>
                <p className="text-gray-700">
                  마이크로초 단위의 초고속 주문 실행으로
                  시장 기회를 즉시 포착합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border border-emerald-100">
                <TrendingUp className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI 기반 전략</h3>
                <p className="text-gray-700">
                  머신러닝과 딥러닝으로 시장 패턴을 학습하고
                  최적의 매매 전략을 생성합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border border-emerald-100">
                <PieChart className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">포트폴리오 최적화</h3>
                <p className="text-gray-700">
                  현대 포트폴리오 이론과 AI를 결합하여
                  리스크 대비 수익을 최대화합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border border-emerald-100">
                <DollarSign className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">리스크 관리</h3>
                <p className="text-gray-700">
                  실시간 VaR, CVaR 모니터링과 자동 손절매로
                  리스크를 엄격하게 통제합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">주요 기능</h2>

            <div className="space-y-6">
              {[
                {
                  title: "초고속 트레이딩 엔진 (HFT)",
                  description: "마이크로초 단위의 초저지연 주문 라우팅과 실행으로 시장 조성, 차익거래, 통계적 차익거래 전략을 구현합니다."
                },
                {
                  title: "실시간 시장 데이터 분석",
                  description: "틱 단위의 시장 데이터를 실시간 처리하고 복잡한 이벤트 패턴을 밀리초 내에 탐지합니다."
                },
                {
                  title: "알고리즘 트레이딩",
                  description: "TWAP, VWAP, POV, Iceberg 등 다양한 실행 알고리즘과 커스텀 전략을 지원합니다."
                },
                {
                  title: "AI 기반 가격 예측",
                  description: "LSTM, Transformer 등 딥러닝 모델로 가격 움직임을 예측하고 트레이딩 신호를 생성합니다."
                },
                {
                  title: "스마트 자산 배분",
                  description: "블랙-리터만 모델, 리스크 패리티, 계층적 리스크 패리티(HRP) 등 고급 배분 전략을 활용합니다."
                },
                {
                  title: "팩터 투자",
                  description: "밸류, 모멘텀, 퀄리티, 사이즈 등 다양한 팩터를 분석하고 멀티 팩터 포트폴리오를 구성합니다."
                },
                {
                  title: "백테스팅 & 시뮬레이션",
                  description: "과거 데이터로 전략을 검증하고 몬테카를로 시뮬레이션으로 미래 성과를 예측합니다."
                },
                {
                  title: "리스크 분석",
                  description: "VaR, CVaR, 스트레스 테스트, 민감도 분석으로 포트폴리오 리스크를 정량화합니다."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Strategies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">트레이딩 전략</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "시장 조성 (Market Making)",
                  description: "호가창 양면에 주문을 제출하여 스프레드를 수익으로 확보하고 시장에 유동성을 공급합니다.",
                  complexity: "높음"
                },
                {
                  title: "통계적 차익거래",
                  description: "상관관계가 높은 자산 간의 일시적 가격 괴리를 포착하여 무위험 차익을 실현합니다.",
                  complexity: "높음"
                },
                {
                  title: "모멘텀 전략",
                  description: "가격과 거래량의 추세를 분석하여 상승/하락 모멘텀을 포착하고 추세를 따라갑니다.",
                  complexity: "중간"
                },
                {
                  title: "평균 회귀 전략",
                  description: "과매수/과매도 구간을 탐지하고 가격이 평균으로 회귀할 것을 예상하여 역추세 매매를 합니다.",
                  complexity: "중간"
                },
                {
                  title: "뉴스 기반 트레이딩",
                  description: "NLP로 뉴스와 소셜미디어를 실시간 분석하여 시장 센티먼트를 파악하고 빠르게 대응합니다.",
                  complexity: "높음"
                },
                {
                  title: "옵션 전략",
                  description: "변동성 차익거래, 델타 헷징, 감마 스캘핑 등 파생상품 전략을 자동화합니다.",
                  complexity: "매우 높음"
                }
              ].map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                  <p className="text-gray-700 mb-4">{strategy.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">복잡도</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                      {strategy.complexity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">활용 사례</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "자산운용사",
                  description: "대규모 포트폴리오 관리, 팩터 투자, 스마트 베타 전략"
                },
                {
                  title: "헤지펀드",
                  description: "퀀트 전략, 차익거래, 알고리즘 트레이딩"
                },
                {
                  title: "증권사",
                  description: "HFT, 시장 조성, 주문 실행 최적화"
                },
                {
                  title: "은행",
                  description: "ALM, 리스크 관리, 자산 배분"
                },
                {
                  title: "연기금",
                  description: "장기 자산 배분, ESG 투자, 리밸런싱"
                },
                {
                  title: "개인 투자자",
                  description: "로보어드바이저, 자동 포트폴리오 관리"
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-emerald-600">{useCase.title}</h3>
                  <p className="text-gray-700 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">기술 스택</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-100">
                <h3 className="font-semibold mb-3 text-emerald-600">데이터 & 분석</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Python (Pandas, NumPy)</li>
                  <li>• Apache Spark</li>
                  <li>• Delta Lake</li>
                  <li>• InfluxDB</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-100">
                <h3 className="font-semibold mb-3 text-emerald-600">ML & AI</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• TensorFlow, PyTorch</li>
                  <li>• Scikit-learn</li>
                  <li>• XGBoost, LightGBM</li>
                  <li>• MLflow</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-100">
                <h3 className="font-semibold mb-3 text-emerald-600">트레이딩</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• C++ (초저지연)</li>
                  <li>• FIX Protocol</li>
                  <li>• QuantLib</li>
                  <li>• Zipline, Backtrader</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              AI로 투자 수익을 극대화하세요
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              전문가와 상담하여 귀사에 맞는 퀀트 트레이딩 솔루션을 구축하세요
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              무료 상담 신청
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
