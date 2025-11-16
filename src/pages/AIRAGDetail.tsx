import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brain, BookOpen, Sparkles, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

export const AIRAGDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              AI · RAG 서비스
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              검색 증강 생성(RAG) 기술로 정확하고 신뢰할 수 있는 AI 솔루션을 구축하세요
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
              Retrieval-Augmented Generation(RAG) 기술을 활용하여 기업의 내부 지식과 데이터를
              AI 모델에 통합합니다. 단순한 언어 모델을 넘어 실시간 정보 검색과 결합하여
              정확하고 최신의 답변을 제공하는 지능형 AI 시스템을 구축합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100">
                <Brain className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">지능형 검색</h3>
                <p className="text-gray-700">
                  벡터 임베딩과 시맨틱 검색으로 의미 기반의 정확한 정보를
                  실시간으로 찾아 답변합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100">
                <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">지식 베이스 통합</h3>
                <p className="text-gray-700">
                  문서, 데이터베이스, API 등 다양한 소스의 지식을
                  하나의 통합된 AI 시스템에 연결합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100">
                <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">정확도 향상</h3>
                <p className="text-gray-700">
                  환각(hallucination) 현상을 최소화하고 출처를 명시하여
                  신뢰할 수 있는 답변을 제공합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100">
                <MessageSquare className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">자연스러운 대화</h3>
                <p className="text-gray-700">
                  문맥을 이해하고 이전 대화를 기억하여
                  자연스러운 대화형 인터페이스를 제공합니다.
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
                  title: "멀티모달 RAG",
                  description: "텍스트, 이미지, 표, 그래프 등 다양한 형식의 데이터를 이해하고 처리하여 포괄적인 답변을 생성합니다."
                },
                {
                  title: "하이브리드 검색",
                  description: "키워드 검색과 시맨틱 검색을 결합하여 최적의 검색 결과를 제공하고 재순위화(Re-ranking)로 정확도를 높입니다."
                },
                {
                  title: "컨텍스트 압축",
                  description: "긴 문서에서 핵심 정보만 추출하여 토큰 사용량을 최적화하고 응답 속도를 향상시킵니다."
                },
                {
                  title: "출처 추적",
                  description: "모든 답변에 대한 출처를 명시하고 원본 문서로 바로 이동할 수 있어 신뢰성을 보장합니다."
                },
                {
                  title: "실시간 업데이트",
                  description: "지식 베이스를 실시간으로 업데이트하여 항상 최신 정보를 기반으로 답변을 생성합니다."
                },
                {
                  title: "다국어 지원",
                  description: "한국어, 영어 등 다양한 언어로 질문하고 답변받을 수 있으며, 언어 간 번역도 지원합니다."
                },
                {
                  title: "개인화",
                  description: "사용자의 역할, 권한, 선호도에 따라 맞춤형 답변과 정보를 제공합니다."
                },
                {
                  title: "분석 대시보드",
                  description: "사용 패턴, 인기 질문, 답변 품질 등을 모니터링하고 시스템을 지속적으로 개선합니다."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
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
                  title: "엔터프라이즈 지식 검색",
                  description: "수천 개의 내부 문서, 매뉴얼, 정책 문서에서 필요한 정보를 즉시 찾고 질문에 답변합니다.",
                  industries: ["전 산업"]
                },
                {
                  title: "고객 서비스 챗봇",
                  description: "제품 정보, FAQ, 이전 상담 이력을 활용하여 고객 문의에 정확하고 빠르게 응답합니다.",
                  industries: ["리테일", "통신", "금융"]
                },
                {
                  title: "법률/규제 어시스턴트",
                  description: "방대한 법령, 판례, 계약서를 분석하여 법률 자문과 컴플라이언스 검토를 지원합니다.",
                  industries: ["법률", "금융", "의료"]
                },
                {
                  title: "연구 개발 지원",
                  description: "논문, 특허, 연구 보고서를 검색하고 요약하여 연구자들의 의사결정을 돕습니다.",
                  industries: ["제약", "화학", "IT"]
                },
                {
                  title: "HR 어시스턴트",
                  description: "인사 규정, 복리후생, 교육 자료를 기반으로 직원들의 질문에 자동 답변합니다.",
                  industries: ["전 산업"]
                },
                {
                  title: "금융 분석",
                  description: "재무제표, 시장 리포트, 뉴스를 분석하여 투자 인사이트를 제공합니다.",
                  industries: ["금융", "투자"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-700 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
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

      {/* Technical Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">기술 스택</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-purple-600">LLM 모델</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• GPT-4, Claude</li>
                  <li>• Llama 3, Mistral</li>
                  <li>• 커스텀 파인튜닝</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-purple-600">벡터 DB</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Pinecone</li>
                  <li>• Weaviate</li>
                  <li>• Qdrant</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-purple-600">프레임워크</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• LangChain</li>
                  <li>• LlamaIndex</li>
                  <li>• Haystack</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              AI RAG 솔루션을 도입하세요
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              귀사의 지식을 AI로 활용하여 업무 효율성을 극대화하세요
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
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
