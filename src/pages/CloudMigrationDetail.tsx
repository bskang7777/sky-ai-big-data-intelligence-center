import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cloud, ArrowUpDown, Server, Lock, CheckCircle2, ArrowRight } from "lucide-react";

export const CloudMigrationDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-blue-800 to-sky-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              클라우드 & 마이그레이션 서비스
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              안전하고 효율적인 클라우드 전환으로 비즈니스 민첩성을 확보하세요
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
              온프레미스 시스템을 클라우드로 안전하게 전환하고 최적화합니다.
              AWS, Azure, GCP 등 주요 클라우드 플랫폼에 대한 전문성을 바탕으로
              평가, 설계, 마이그레이션, 최적화까지 전 과정을 지원하여
              다운타임을 최소화하고 비용 효율성을 극대화합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 p-8 rounded-xl border border-indigo-100">
                <Cloud className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">멀티 클라우드</h3>
                <p className="text-gray-700">
                  AWS, Azure, GCP 등 모든 주요 클라우드 플랫폼을
                  지원하여 최적의 환경을 선택할 수 있습니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 p-8 rounded-xl border border-indigo-100">
                <ArrowUpDown className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">무중단 전환</h3>
                <p className="text-gray-700">
                  단계적 마이그레이션 전략으로 비즈니스 중단 없이
                  안전하게 클라우드로 전환합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 p-8 rounded-xl border border-indigo-100">
                <Server className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">현대화</h3>
                <p className="text-gray-700">
                  레거시 애플리케이션을 컨테이너, 서버리스 등
                  클라우드 네이티브 아키텍처로 전환합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 p-8 rounded-xl border border-indigo-100">
                <Lock className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">보안 & 컴플라이언스</h3>
                <p className="text-gray-700">
                  클라우드 보안 모범 사례를 적용하고
                  규제 요구사항을 완벽하게 준수합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">마이그레이션 프로세스</h2>

            <div className="space-y-8">
              {[
                {
                  phase: "1단계",
                  title: "평가 및 계획",
                  description: "현재 인프라와 애플리케이션을 분석하고 클라우드 적합성을 평가합니다.",
                  activities: [
                    "인프라 및 애플리케이션 인벤토리 작성",
                    "종속성 분석 및 매핑",
                    "비용 분석 (TCO/ROI)",
                    "마이그레이션 전략 수립 (6R)"
                  ]
                },
                {
                  phase: "2단계",
                  title: "설계 및 검증",
                  description: "목표 클라우드 아키텍처를 설계하고 개념 증명(PoC)을 수행합니다.",
                  activities: [
                    "클라우드 아키텍처 설계",
                    "보안 및 네트워크 설계",
                    "PoC 및 파일럿 프로젝트",
                    "마이그레이션 도구 선정"
                  ]
                },
                {
                  phase: "3단계",
                  title: "마이그레이션 실행",
                  description: "계획에 따라 단계적으로 워크로드를 클라우드로 이전합니다.",
                  activities: [
                    "데이터 마이그레이션",
                    "애플리케이션 이전 또는 재구축",
                    "테스트 및 검증",
                    "컷오버 실행"
                  ]
                },
                {
                  phase: "4단계",
                  title: "최적화 및 운영",
                  description: "클라우드 환경을 지속적으로 모니터링하고 최적화합니다.",
                  activities: [
                    "성능 모니터링 및 튜닝",
                    "비용 최적화",
                    "보안 강화",
                    "운영 자동화"
                  ]
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-semibold text-indigo-600 mr-3">{step.phase}</span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Strategies (6R) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">마이그레이션 전략 (6R)</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  strategy: "Rehost (Lift & Shift)",
                  description: "애플리케이션을 변경 없이 그대로 클라우드로 이동합니다. 가장 빠르고 간단한 방법입니다.",
                  useCase: "빠른 마이그레이션이 필요하거나 레거시 애플리케이션"
                },
                {
                  strategy: "Replatform (Lift & Reshape)",
                  description: "핵심 아키텍처는 유지하되 클라우드 서비스를 활용하여 일부 최적화합니다.",
                  useCase: "관리형 데이터베이스로 전환 등 부분 최적화"
                },
                {
                  strategy: "Refactor (Re-architect)",
                  description: "클라우드 네이티브 아키텍처로 완전히 재설계하고 재구축합니다.",
                  useCase: "마이크로서비스, 서버리스로 현대화"
                },
                {
                  strategy: "Repurchase",
                  description: "기존 라이선스를 SaaS 솔루션으로 대체합니다.",
                  useCase: "CRM, ERP 등을 SaaS로 전환"
                },
                {
                  strategy: "Retire",
                  description: "더 이상 필요하지 않은 애플리케이션을 폐기합니다.",
                  useCase: "사용률이 낮거나 중복된 시스템"
                },
                {
                  strategy: "Retain",
                  description: "당분간 온프레미스에 유지하고 향후 마이그레이션을 계획합니다.",
                  useCase: "규제 요구사항이나 종속성 문제"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600">{item.strategy}</h3>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">적합 사례:</span> {item.useCase}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">제공 서비스</h2>

            <div className="space-y-6">
              {[
                {
                  title: "클라우드 전략 컨설팅",
                  description: "비즈니스 목표에 맞는 클라우드 전략을 수립하고 로드맵을 제시합니다."
                },
                {
                  title: "인프라 마이그레이션",
                  description: "서버, 스토리지, 네트워크를 클라우드로 안전하게 이전합니다."
                },
                {
                  title: "데이터베이스 마이그레이션",
                  description: "Oracle, SQL Server, MySQL 등을 클라우드 데이터베이스로 전환합니다."
                },
                {
                  title: "애플리케이션 현대화",
                  description: "모놀리식 애플리케이션을 마이크로서비스, 컨테이너로 전환합니다."
                },
                {
                  title: "하이브리드/멀티 클라우드",
                  description: "온프레미스와 여러 클라우드를 통합 관리하는 하이브리드 환경을 구축합니다."
                },
                {
                  title: "재해 복구 & 백업",
                  description: "클라우드 기반의 재해 복구 시스템으로 비즈니스 연속성을 보장합니다."
                },
                {
                  title: "비용 최적화",
                  description: "리소스 사이징, 예약 인스턴스, 스팟 인스턴스 등으로 비용을 절감합니다."
                },
                {
                  title: "관리형 서비스",
                  description: "클라우드 인프라의 지속적인 모니터링, 패치, 최적화를 제공합니다."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">지원 플랫폼</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">AWS</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• EC2, Lambda, ECS/EKS</li>
                  <li>• RDS, DynamoDB, S3</li>
                  <li>• CloudFormation, CDK</li>
                  <li>• AWS Migration Hub</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Azure</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• VMs, Functions, AKS</li>
                  <li>• SQL DB, Cosmos DB</li>
                  <li>• ARM Templates, Bicep</li>
                  <li>• Azure Migrate</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border border-red-100">
                <h3 className="text-2xl font-bold mb-4 text-red-600">GCP</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Compute Engine, GKE</li>
                  <li>• Cloud SQL, BigQuery</li>
                  <li>• Deployment Manager</li>
                  <li>• Migrate for Compute</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              클라우드 전환을 시작하세요
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              안전하고 효율적인 클라우드 마이그레이션으로 비즈니스를 혁신하세요
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
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
