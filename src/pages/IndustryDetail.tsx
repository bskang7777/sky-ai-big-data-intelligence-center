import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, Calendar, Users, Target } from "lucide-react";

export const IndustryDetail = () => {
  const { industry } = useParams();
  const navigate = useNavigate();

  const industryData: Record<string, any> = {
    energy: {
      title: "에너지·케미컬",
      description: "에너지 및 화학 산업의 디지털 트랜스포메이션을 선도합니다",
      companies: ["Hanwha "],
      projects: [
        {
          company: "Hanwha ",
          title: "통합 데이터 플랫폼 구축",
          period: "2023.03 - 2023.12",
          team: "15명",
          description: "석유화학 공정 데이터의 실시간 수집 및 분석을 위한 델타레이크 기반 통합 데이터 플랫폼 구축",
          technologies: ["Delta Lake", "Databricks", "Apache Spark", "Azure Data Factory"],
          achievements: [
            "데이터 처리 속도 300% 향상",
            "실시간 공정 모니터링 시스템 구축",
            "예측 정비 모델 도입으로 설비 가동률 15% 개선"
          ]
        }
      ]
    },
    manufacturing: {
      title: "제조·중공업",
      description: "제조업의 스마트 팩토리 구현과 생산성 혁신을 지원합니다",
      companies: ["두산", "현대중공업", "삼성엔지니어링", "삼성전자 GMES"],
      projects: [
        {
          company: "두산",
          title: "스마트 팩토리 데이터 플랫폼",
          period: "2023.01 - 2023.08",
          team: "12명",
          description: "제조 공정 최적화를 위한 IoT 데이터 수집 및 실시간 분석 시스템 구축",
          technologies: ["IoT Platform", "Real-time Analytics", "Machine Learning", "Databricks"],
          achievements: [
            "생산 효율성 25% 향상",
            "품질 불량률 40% 감소",
            "예측 정비 시스템 도입"
          ]
        },
        {
          company: "현대중공업",
          title: "조선 생산관리 시스템",
          period: "2022.06 - 2023.02",
          team: "18명",
          description: "조선소 생산 공정의 디지털화 및 실시간 모니터링 시스템 구축",
          technologies: ["Delta Lake", "Apache Kafka", "Spark Streaming", "Power BI"],
          achievements: [
            "생산 계획 정확도 30% 향상",
            "자재 관리 효율성 20% 개선",
            "실시간 진도 관리 시스템 구축"
          ]
        },
        {
          company: "삼성엔지니어링",
          title: "프로젝트 데이터 통합 플랫폼",
          period: "2022.03 - 2022.11",
          team: "10명",
          description: "글로벌 프로젝트 데이터의 통합 관리 및 분석 플랫폼 구축",
          technologies: ["Data Lake", "ETL Pipeline", "Business Intelligence", "Cloud Migration"],
          achievements: [
            "프로젝트 데이터 통합률 95% 달성",
            "보고서 생성 시간 80% 단축",
            "글로벌 데이터 표준화 완료"
          ]
        },
        {
          company: "삼성전자 GMES",
          title: "글로벌 제조 실행 시스템",
          period: "2021.09 - 2022.08",
          team: "25명",
          description: "글로벌 반도체 제조 라인의 통합 모니터링 및 분석 시스템 구축",
          technologies: ["MES Integration", "Real-time Monitoring", "AI/ML", "Global Data Sync"],
          achievements: [
            "글로벌 제조 라인 통합 모니터링",
            "수율 예측 정확도 15% 향상",
            "실시간 품질 관리 시스템 구축"
          ]
        }
      ]
    },
    finance: {
      title: "금융·증권",
      description: "금융 데이터의 실시간 처리와 리스크 관리 솔루션을 제공합니다",
      companies: ["국민은행", "기업은행", "HFT", "Dart", "Creon"],
      projects: [
        {
          company: "국민은행",
          title: "실시간 리스크 관리 시스템",
          period: "2023.05 - 2024.01",
          team: "20명",
          description: "실시간 거래 데이터 분석을 통한 리스크 관리 및 컴플라이언스 시스템 구축",
          technologies: ["Real-time Processing", "Risk Analytics", "Compliance Engine", "Delta Lake"],
          achievements: [
            "실시간 리스크 모니터링 구현",
            "컴플라이언스 위반 사전 탐지",
            "리스크 계산 속도 500% 향상"
          ]
        },
        {
          company: "기업은행",
          title: "고객 데이터 플랫폼",
          period: "2022.10 - 2023.06",
          team: "15명",
          description: "고객 360도 뷰 구현을 위한 통합 데이터 플랫폼 및 개인화 서비스 구축",
          technologies: ["Customer 360", "Personalization", "Data Integration", "ML Pipeline"],
          achievements: [
            "고객 데이터 통합률 98% 달성",
            "개인화 상품 추천 정확도 35% 향상",
            "고객 만족도 20% 개선"
          ]
        },
        {
          company: "HFT 트레이딩",
          title: "고빈도 거래 시스템",
          period: "2023.02 - 2023.09",
          team: "8명",
          description: "마이크로초 단위 고빈도 거래를 위한 초저지연 데이터 처리 시스템 구축",
          technologies: ["Ultra-low Latency", "HFT Engine", "Market Data", "Risk Management"],
          achievements: [
            "거래 지연시간 50% 단축",
            "시장 데이터 처리 속도 10배 향상",
            "실시간 포지션 리스크 관리"
          ]
        }
      ]
    },
    telecom: {
      title: "통신·모바일",
      description: "통신 인프라와 모바일 서비스의 데이터 분석 솔루션을 제공합니다",
      companies: ["SKT NUGU/Tworld", "KT 스마트 그리드"],
      projects: [
        {
          company: "SKT NUGU/Tworld",
          title: "AI 음성 서비스 플랫폼",
          period: "2022.08 - 2023.05",
          team: "22명",
          description: "NUGU AI 스피커 및 Tworld 서비스의 사용자 데이터 분석 및 개인화 플랫폼 구축",
          technologies: ["Voice Analytics", "NLP", "Recommendation Engine", "Real-time Processing"],
          achievements: [
            "음성 인식 정확도 25% 향상",
            "개인화 서비스 만족도 40% 개선",
            "실시간 사용자 행동 분석 구현"
          ]
        },
        {
          company: "KT 스마트 그리드",
          title: "에너지 데이터 분석 플랫폼",
          period: "2022.04 - 2023.01",
          team: "16명",
          description: "스마트 그리드 에너지 데이터의 실시간 수집 및 분석을 통한 에너지 효율 최적화 시스템",
          technologies: ["IoT Data Processing", "Energy Analytics", "Predictive Modeling", "Dashboard"],
          achievements: [
            "에너지 효율 15% 향상",
            "실시간 에너지 모니터링 구현",
            "예측 기반 에너지 관리 시스템 구축"
          ]
        }
      ]
    },
    public: {
      title: "공공·복지·의료",
      description: "공공 서비스와 의료 분야의 디지털 혁신을 지원합니다",
      companies: ["사회보장정보시스템", "건강보험 의료서비스 포털", "지자체"],
      projects: [
        {
          company: "사회보장정보시스템",
          title: "통합 복지 데이터 플랫폼",
          period: "2023.03 - 2024.02",
          team: "30명",
          description: "전국 복지 서비스 데이터의 통합 관리 및 분석을 통한 맞춤형 복지 서비스 제공 시스템",
          technologies: ["Data Integration", "Privacy Protection", "Analytics Platform", "Service Matching"],
          achievements: [
            "복지 서비스 매칭 정확도 45% 향상",
            "중복 수급 방지 시스템 구축",
            "실시간 복지 현황 모니터링"
          ]
        },
        {
          company: "건강보험 의료서비스 포털",
          title: "의료 빅데이터 분석 시스템",
          period: "2022.07 - 2023.08",
          team: "25명",
          description: "의료 빅데이터 분석을 통한 질병 예측 및 개인 맞춤형 건강 관리 서비스 구축",
          technologies: ["Medical Big Data", "Predictive Analytics", "Privacy-preserving ML", "Health Monitoring"],
          achievements: [
            "질병 예측 정확도 30% 향상",
            "개인 맞춤형 건강 관리 서비스 제공",
            "의료 데이터 보안 강화"
          ]
        }
      ]
    },
    education: {
      title: "교육·콘텐츠·AI 스피커",
      description: "교육 기술과 AI 기반 학습 솔루션을 제공합니다",
      companies: ["삼성 영어 AI 스피커", "네이버/LG AI 스피커"],
      projects: [
        {
          company: "삼성 영어 AI 스피커",
          title: "AI 영어 학습 플랫폼",
          period: "2022.09 - 2023.07",
          team: "18명",
          description: "AI 기반 영어 발음 평가 및 개인 맞춤형 학습 콘텐츠 추천 시스템 구축",
          technologies: ["Speech Recognition", "Pronunciation Analysis", "Adaptive Learning", "Content Recommendation"],
          achievements: [
            "발음 평가 정확도 40% 향상",
            "학습 효과 25% 개선",
            "개인 맞춤형 학습 경로 제공"
          ]
        },
        {
          company: "네이버/LG AI 스피커",
          title: "멀티모달 AI 서비스",
          period: "2022.01 - 2022.12",
          team: "20명",
          description: "음성, 텍스트, 이미지를 통합한 멀티모달 AI 서비스 및 콘텐츠 추천 시스템 구축",
          technologies: ["Multimodal AI", "Content Analytics", "User Behavior Analysis", "Recommendation System"],
          achievements: [
            "멀티모달 인식 정확도 35% 향상",
            "콘텐츠 추천 만족도 30% 개선",
            "사용자 참여도 50% 증가"
          ]
        }
      ]
    },
    retail: {
      title: "유통·프랜차이즈",
      description: "유통업계의 디지털 트랜스포메이션과 고객 경험 혁신을 지원합니다",
      companies: ["LGCNS/버거킹", "CJ POS", "GS쇼핑"],
      projects: [
        {
          company: "LGCNS/버거킹",
          title: "통합 매장 관리 시스템",
          period: "2023.01 - 2023.10",
          team: "14명",
          description: "전국 매장의 매출, 재고, 고객 데이터를 통합한 실시간 매장 관리 및 분석 시스템",
          technologies: ["POS Integration", "Inventory Management", "Customer Analytics", "Real-time Dashboard"],
          achievements: [
            "매장 운영 효율성 30% 향상",
            "재고 관리 최적화로 비용 20% 절감",
            "고객 만족도 25% 개선"
          ]
        },
        {
          company: "CJ POS",
          title: "차세대 POS 데이터 플랫폼",
          period: "2022.05 - 2023.03",
          team: "16명",
          description: "전국 가맹점 POS 데이터의 실시간 수집 및 분석을 통한 매출 최적화 시스템",
          technologies: ["POS Data Processing", "Sales Analytics", "Trend Analysis", "Predictive Modeling"],
          achievements: [
            "매출 예측 정확도 35% 향상",
            "실시간 매출 모니터링 구현",
            "가맹점 운영 지원 시스템 구축"
          ]
        },
        {
          company: "GS쇼핑",
          title: "개인화 쇼핑 추천 시스템",
          period: "2022.02 - 2022.11",
          team: "12명",
          description: "고객 구매 패턴 분석을 통한 개인화 상품 추천 및 마케팅 자동화 시스템",
          technologies: ["Recommendation Engine", "Customer Segmentation", "Marketing Automation", "A/B Testing"],
          achievements: [
            "상품 추천 클릭률 45% 향상",
            "고객 구매 전환율 30% 개선",
            "마케팅 ROI 40% 증가"
          ]
        }
      ]
    },
    platform: {
      title: "채용·플랫폼",
      description: "채용 플랫폼의 매칭 알고리즘과 사용자 경험을 최적화합니다",
      companies: ["JOBKOREA 초단기 알바 플랫폼"],
      projects: [
        {
          company: "JOBKOREA 초단기 알바",
          title: "AI 기반 채용 매칭 플랫폼",
          period: "2023.04 - 2024.01",
          team: "20명",
          description: "AI 기반 구직자-구인업체 매칭 알고리즘 및 실시간 알바 추천 시스템 구축",
          technologies: ["Matching Algorithm", "NLP", "Recommendation System", "Real-time Processing"],
          achievements: [
            "매칭 정확도 50% 향상",
            "구직 성공률 35% 개선",
            "플랫폼 사용자 만족도 40% 증가"
          ]
        }
      ]
    }
  };

  const currentIndustry = industryData[industry || ""];

  if (!currentIndustry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">산업 정보를 찾을 수 없습니다</h1>
          <Button onClick={() => navigate("/")}>홈으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            홈으로 돌아가기
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{currentIndustry.title}</h1>
              <p className="text-lg text-gray-600 mt-2">{currentIndustry.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">총 프로젝트</div>
              <div className="text-2xl font-bold text-blue-600">{currentIndustry.projects.length}개</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Companies */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">주요 고객사</h2>
          <div className="flex flex-wrap gap-2">
            {currentIndustry.companies.map((company: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                {company}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">프로젝트 레퍼런스</h2>
          
          {currentIndustry.projects.map((project: any, index: number) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-1" />
                        {project.company}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.period}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {project.team}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      주요 기술
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">주요 성과</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement: string, achIndex: number) => (
                        <li key={achIndex} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                {currentIndustry.title} 분야의 전문 솔루션이 필요하신가요?
              </h3>
              <p className="text-blue-100 mb-6">
                축적된 경험과 전문성을 바탕으로 최적화된 데이터 솔루션을 제공해드립니다.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                상담 문의하기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};