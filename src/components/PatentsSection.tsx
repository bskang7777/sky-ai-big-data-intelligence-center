import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, CheckCircle2 } from "lucide-react";

export const PatentsSection = () => {
  const patents = [
    {
      applicationNumber: "10-2025-0145826",
      status: "출원",
      title: "네트워크 상태 기반 적응형 빅데이터 스트리밍 전송 시스템",
      category: "빅데이터 인프라"
    },
    {
      applicationNumber: "10-2025-0146277",
      status: "출원",
      title: "Databricks 기반의 적응형 머신러닝 라벨링을 이용한 데이터 수집 및 동적 분기 시스템",
      category: "머신러닝"
    },
    {
      applicationNumber: "10-2025-0146351",
      status: "출원",
      title: "온톨로지 기반 다중 필터링 및 실시간 검증을 수행하는 통합 데이터 처리 시스템",
      category: "데이터 처리"
    },
    {
      applicationNumber: "10-2025-0146407",
      status: "출원",
      title: "실행 모드 자동 전환 하이브리드 쿼리 엔진",
      category: "쿼리 엔진"
    },
    {
      applicationNumber: "10-2025-0148202",
      status: "출원",
      title: "RAG 기반 DB 스키마 자동 주석화 및 관리 시스템",
      category: "AI/RAG"
    },
    {
      applicationNumber: "10-2025-0158448",
      status: "출원",
      title: "온톨로지 정합 보증형 LLM 에이전트 실행 시스템 및 방법",
      category: "AI/LLM"
    },
    {
      applicationNumber: "10-2025-0158449",
      status: "출원",
      title: "규정 제약식 변환·온톨로지 동기 루프 및 리스크 가드레일 시스템",
      category: "거버넌스"
    },
    {
      applicationNumber: "10-2025-0158450",
      status: "출원",
      title: "에어갭 확률적 배포·연합 온톨로지 교환·책임토큰 라인리지 통합 시스템",
      category: "보안/거버넌스"
    },
    {
      applicationNumber: "10-2025-0161173",
      status: "출원",
      title: "스팟 인스턴스 기반 지능형 빅데이터 처리 오케스트레이션 시스템",
      category: "클라우드"
    },
    {
      applicationNumber: "10-2025-0161175",
      status: "출원",
      title: "계층형 데이터 파이프라인을 이용한 분산 처리 시스템",
      category: "데이터 파이프라인"
    }
  ];

  // Group patents by category for better organization
  const categories = Array.from(new Set(patents.map(p => p.category)));

  return (
    <section id="patents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Patent Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 기반 데이터 인텔리전스 플랫폼 관련 혁신 기술에 대한 특허 출원 현황
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>총 <strong className="text-blue-600 font-bold">{patents.length}건</strong> 출원</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>2025년 출원 진행 중</span>
            </div>
          </div>
        </div>

        {/* Category-based view */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patents.map((patent, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:border-blue-200"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium"
                    >
                      {patent.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">{patent.status}</span>
                    </div>
                  </div>
                  <CardTitle className="text-base font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {patent.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center text-xs text-gray-500">
                    <FileText className="h-3.5 w-3.5 mr-1.5" />
                    <span className="font-mono">{patent.applicationNumber}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">{patents.length}</div>
            <div className="text-sm text-gray-600">출원 특허</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length}</div>
            <div className="text-sm text-gray-600">기술 분야</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-sm text-gray-600">AI/LLM 관련</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">출원 진행률</div>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
          </p>
        </div>
      </div>
    </section>
  );
};
