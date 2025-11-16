import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Brain, Activity, TrendingUp, Cloud, GraduationCap } from "lucide-react";
import { publicImage } from "@/lib/publicImage";

const deltaLakeImage = publicImage("data_lake_hero_2.png");
const aiRagServiceImage = publicImage("ai_rag_service_1.gif");
const realtimeAnalyticsImage = publicImage("realtime_analytics_1.png");
const financeImage = publicImage("finance-hft.png");
const cloudMigrationImage = publicImage("cloud_migration_bedrock.png");
const educationImage = publicImage("education-ai.png");

export const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Delta Lake",
      description: "엔터프라이즈 데이터 레이크, 워크플로우, 메달리온 아키텍처",
      features: ["델타레이크 아키텍처", "실시간 데이터 파이프라인", "메달리온 아키텍처", "Databricks 통합"],
      image: deltaLakeImage,
      link: "#/services/data-lake"
    },
    {
      icon: Brain,
      title: "AI · RAG 서비스",
      description: "교육/문서/업무 지식에 특화된 LLM·RAG, 챗봇, 질의응답 서비스",
      features: ["지식 기반 AI", "RAG 시스템", "인텔리전트 챗봇", "AWS Bedrock AI 통합"],
      image: aiRagServiceImage,
      link: "#/services/ai-rag"
    },
    {
      icon: Activity,
      title: "실시간 분석 & IoT",
      description: "센서/로그/트랜잭션 실시간 수집, 모니터링, 알림",
      features: ["실시간 데이터 수집", "IoT 센서 통합", "실시간 모니터링", "알림 시스템"],
      image: realtimeAnalyticsImage,
      link: "#/services/realtime-iot"
    },
    {
      icon: TrendingUp,
      title: "금융·HFT & 자산 배분",
      description: "HFT, 포트폴리오 최적화, 리스크/성과 분석",
      features: ["고빈도 거래", "포트폴리오 최적화", "리스크 분석", "실시간 금융 데이터 분석"],
      image: financeImage,
      link: "#/services/finance-hft"
    },
    {
      icon: Cloud,
      title: "클라우드 & 마이그레이션",
      description: "On-Prem → AWS/Azure 전환, DB2/MSDB → Cloud Migration",
      features: ["클라우드 마이그레이션", "AWS/Azure 전환", "데이터베이스 이전"],
      image: cloudMigrationImage,
      link: "#/services/cloud-migration"
    },
    {
      icon: GraduationCap,
      title: "교육 AI & 플랫폼",
      description: "AI 스피커, 발음·문법 평가, 교육용 챗봇, 추천 시스템",
      features: ["교육용 AI", "발음 평가", "Orange3 데이터 마이닝 교육 & 시스템 개발"],
      image: educationImage,
      link: "#/services/education-ai"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            델타레이크 기반의 통합 데이터 플랫폼으로 기업의 디지털 트랜스포메이션을 가속화
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
