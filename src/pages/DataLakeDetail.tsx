import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Database, Zap, Shield, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export const DataLakeDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Delta Lake 솔루션
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              델타레이크 기반의 엔터프라이즈 데이터 플랫폼으로 데이터를 통합하고 분석하세요
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
              Databricks와 Delta Lake 기술을 활용하여 대규모 데이터를 효율적으로 저장, 관리, 분석할 수 있는
              엔터프라이즈급 데이터 레이크 솔루션을 제공합니다. ACID 트랜잭션을 지원하여 데이터 품질과
              일관성을 보장하며, 배치와 스트리밍 처리를 통합하여 실시간 인사이트를 제공합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Delta Lake 기반</h3>
                <p className="text-gray-700">
                  ACID 트랜잭션과 타임 트래블 기능으로 데이터 신뢰성을 보장하고
                  과거 버전을 쉽게 조회할 수 있습니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">고성능 처리</h3>
                <p className="text-gray-700">
                  분산 처리 엔진으로 페타바이트급 데이터도 빠르게 분석하고
                  실시간 스트리밍 처리를 지원합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">보안 & 거버넌스</h3>
                <p className="text-gray-700">
                  세밀한 접근 제어, 데이터 마스킹, 감사 로깅으로
                  규제 준수와 데이터 보안을 보장합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">확장성</h3>
                <p className="text-gray-700">
                  클라우드 네이티브 아키텍처로 비즈니스 성장에 따라
                  유연하게 확장할 수 있습니다.
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
                  title: "통합 데이터 파이프라인",
                  description: "다양한 데이터 소스를 하나의 플랫폼에서 통합 관리하고 자동화된 ETL/ELT 프로세스를 구축합니다."
                },
                {
                  title: "실시간 & 배치 처리 통합",
                  description: "Lambda 아키텍처 없이 배치와 스트리밍을 단일 파이프라인으로 처리하여 운영 복잡도를 낮춥니다."
                },
                {
                  title: "머신러닝 통합",
                  description: "MLflow와 통합하여 모델 학습부터 배포까지 전 과정을 관리하고 Feature Store로 일관된 피처를 제공합니다."
                },
                {
                  title: "데이터 품질 관리",
                  description: "자동화된 데이터 검증, 스키마 진화, 데이터 프로파일링으로 높은 데이터 품질을 유지합니다."
                },
                {
                  title: "협업 환경",
                  description: "노트북 기반의 협업 환경으로 데이터 엔지니어, 분석가, 과학자가 함께 작업할 수 있습니다."
                },
                {
                  title: "비용 최적화",
                  description: "자동 스케일링, 스팟 인스턴스 활용, 데이터 압축으로 클라우드 비용을 최적화합니다."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
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
                  title: "고객 360도 분석",
                  description: "다양한 접점의 고객 데이터를 통합하여 완전한 고객 프로필을 구축하고 개인화된 서비스를 제공합니다.",
                  industries: ["리테일", "금융", "통신"]
                },
                {
                  title: "실시간 추천 시스템",
                  description: "실시간 사용자 행동 데이터를 분석하여 즉각적인 상품/콘텐츠 추천을 제공합니다.",
                  industries: ["이커머스", "OTT", "미디어"]
                },
                {
                  title: "이상 탐지",
                  description: "금융 거래, 네트워크 트래픽, IoT 센서 데이터에서 이상 패턴을 실시간으로 탐지합니다.",
                  industries: ["금융", "제조", "통신"]
                },
                {
                  title: "데이터 웨어하우스 현대화",
                  description: "레거시 데이터 웨어하우스를 클라우드 기반 레이크하우스로 전환하여 비용을 절감합니다.",
                  industries: ["전 산업"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-700 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              데이터 레이크 구축을 시작하세요
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              전문가와 상담하여 귀사에 맞는 최적의 데이터 플랫폼을 설계하세요
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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
