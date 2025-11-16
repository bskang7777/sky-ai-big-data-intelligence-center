import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Activity, Zap, Gauge, Network, CheckCircle2, ArrowRight } from "lucide-react";

export const RealtimeIoTDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-900 via-teal-800 to-green-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              실시간 분석 & IoT 솔루션
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              수백만 개의 IoT 디바이스와 센서 데이터를 실시간으로 수집, 분석, 대응하세요
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
              IoT 센서와 디바이스에서 생성되는 대규모 스트리밍 데이터를 실시간으로 처리하고 분석합니다.
              Apache Kafka, Spark Streaming, Flink 등의 기술을 활용하여 밀리초 단위의 지연 시간으로
              데이터를 처리하고, 이상 징후를 즉시 탐지하여 자동화된 대응 조치를 실행합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl border border-cyan-100">
                <Activity className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">실시간 처리</h3>
                <p className="text-gray-700">
                  초당 수백만 건의 이벤트를 밀리초 단위로 처리하고
                  즉각적인 인사이트를 제공합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl border border-cyan-100">
                <Zap className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">이상 탐지</h3>
                <p className="text-gray-700">
                  머신러닝 기반의 이상 탐지로 문제를 사전에 예측하고
                  자동으로 알람을 발송합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl border border-cyan-100">
                <Gauge className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">대시보드</h3>
                <p className="text-gray-700">
                  실시간 모니터링 대시보드로 모든 디바이스의 상태를
                  한눈에 파악하고 제어합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl border border-cyan-100">
                <Network className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">확장성</h3>
                <p className="text-gray-700">
                  수백만 개의 디바이스로 확장 가능한 아키텍처로
                  비즈니스 성장에 대응합니다.
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
                  title: "다중 프로토콜 지원",
                  description: "MQTT, CoAP, HTTP, WebSocket 등 다양한 IoT 프로토콜을 지원하여 모든 유형의 디바이스와 연결합니다."
                },
                {
                  title: "실시간 스트리밍 처리",
                  description: "Apache Kafka와 Spark Streaming으로 초당 수백만 건의 메시지를 처리하고 복잡한 이벤트 패턴을 탐지합니다."
                },
                {
                  title: "엣지 컴퓨팅",
                  description: "디바이스 근처에서 데이터를 전처리하여 네트워크 대역폭을 절감하고 응답 시간을 최소화합니다."
                },
                {
                  title: "디지털 트윈",
                  description: "물리적 자산의 디지털 복제본을 생성하여 시뮬레이션과 예측 분석을 수행합니다."
                },
                {
                  title: "예측 유지보수",
                  description: "센서 데이터를 분석하여 장비 고장을 사전에 예측하고 최적의 유지보수 일정을 제안합니다."
                },
                {
                  title: "지리 공간 분석",
                  description: "GPS 데이터를 활용하여 자산의 위치를 추적하고 지오펜싱, 경로 최적화를 수행합니다."
                },
                {
                  title: "보안 & 인증",
                  description: "디바이스 인증, 데이터 암호화, 접근 제어로 IoT 보안을 강화하고 규제를 준수합니다."
                },
                {
                  title: "자동화 & 제어",
                  description: "규칙 엔진으로 특정 조건에서 자동으로 디바이스를 제어하고 워크플로우를 실행합니다."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 mt-1 mr-4 flex-shrink-0" />
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

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">활용 사례</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "스마트 팩토리",
                  description: "생산 라인의 센서 데이터를 실시간 분석하여 품질을 모니터링하고 설비 이상을 즉시 탐지합니다.",
                  industries: ["제조", "자동차", "전자"]
                },
                {
                  title: "스마트 빌딩",
                  description: "온도, 습도, 조명, 에너지 사용량을 최적화하여 운영 비용을 절감하고 쾌적한 환경을 조성합니다.",
                  industries: ["부동산", "시설관리"]
                },
                {
                  title: "물류 & 차량 추적",
                  description: "배송 차량과 화물의 위치, 온도, 충격을 실시간 추적하여 효율적인 물류 관리를 실현합니다.",
                  industries: ["물류", "운송", "리테일"]
                },
                {
                  title: "스마트 농업",
                  description: "토양 수분, 온도, 일조량을 모니터링하여 최적의 재배 환경을 유지하고 수확량을 증대합니다.",
                  industries: ["농업", "축산"]
                },
                {
                  title: "에너지 관리",
                  description: "스마트 그리드와 재생 에너지 시스템을 모니터링하여 에너지 효율을 최적화합니다.",
                  industries: ["에너지", "유틸리티"]
                },
                {
                  title: "헬스케어 모니터링",
                  description: "웨어러블 디바이스로 환자의 생체 신호를 실시간 모니터링하여 응급 상황에 대응합니다.",
                  industries: ["의료", "헬스케어"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-cyan-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-700 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">기술 아키텍처</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-cyan-600">데이터 수집</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• MQTT Broker</li>
                  <li>• Apache Kafka</li>
                  <li>• AWS IoT Core</li>
                  <li>• Azure IoT Hub</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-cyan-600">실시간 처리</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Apache Flink</li>
                  <li>• Spark Streaming</li>
                  <li>• Kafka Streams</li>
                  <li>• Storm</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-cyan-600">저장 & 분석</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• InfluxDB</li>
                  <li>• TimescaleDB</li>
                  <li>• Elasticsearch</li>
                  <li>• Delta Lake</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              IoT 데이터를 비즈니스 가치로 전환하세요
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              실시간 IoT 플랫폼으로 운영 효율성을 높이고 새로운 수익 모델을 창출하세요
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-900 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
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
