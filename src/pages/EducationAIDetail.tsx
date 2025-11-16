import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GraduationCap, BookOpen, Users, Target, CheckCircle2, ArrowRight } from "lucide-react";

export const EducationAIDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              교육 AI & 플랫폼 솔루션
            </h1>
            <p className="text-xl text-violet-100 mb-8">
              AI 기반 개인화 학습으로 교육의 미래를 만들어가세요
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
              AI와 데이터 분석 기술을 활용하여 개인화된 학습 경험을 제공하는 차세대 교육 플랫폼을 구축합니다.
              학습자의 수준, 속도, 선호도를 분석하여 최적의 학습 경로를 제시하고,
              교수자에게는 데이터 기반 인사이트를 제공하여 교육 효과를 극대화합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border border-violet-100">
                <GraduationCap className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">개인화 학습</h3>
                <p className="text-gray-700">
                  AI가 학습자의 수준과 스타일을 분석하여
                  맞춤형 학습 콘텐츠와 경로를 제공합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border border-violet-100">
                <BookOpen className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">지능형 콘텐츠</h3>
                <p className="text-gray-700">
                  자동 생성된 문제, 요약, 퀴즈로
                  풍부하고 다양한 학습 자료를 제공합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border border-violet-100">
                <Users className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">협업 학습</h3>
                <p className="text-gray-700">
                  학습 커뮤니티, 그룹 프로젝트, 실시간 토론으로
                  상호작용하며 함께 성장합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border border-violet-100">
                <Target className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">학습 분석</h3>
                <p className="text-gray-700">
                  학습 데이터를 시각화하고 분석하여
                  강점과 약점을 파악하고 개선합니다.
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
                  title: "적응형 학습 경로",
                  description: "학습자의 실력과 진도에 따라 난이도와 속도를 자동으로 조절하여 최적의 학습 경험을 제공합니다."
                },
                {
                  title: "AI 튜터",
                  description: "24/7 이용 가능한 AI 튜터가 질문에 답하고, 개념을 설명하며, 학습을 도와줍니다."
                },
                {
                  title: "자동 문제 생성",
                  description: "학습 내용을 기반으로 다양한 형식의 문제를 자동 생성하여 무한한 연습 기회를 제공합니다."
                },
                {
                  title: "지능형 평가",
                  description: "에세이, 코드, 프로젝트를 자동으로 채점하고 상세한 피드백을 제공합니다."
                },
                {
                  title: "학습 분석 대시보드",
                  description: "학습 시간, 진도, 성취도, 참여도 등을 실시간으로 시각화하고 인사이트를 제공합니다."
                },
                {
                  title: "추천 시스템",
                  description: "학습 이력과 목표를 기반으로 다음 학습 콘텐츠, 강의, 스터디 그룹을 추천합니다."
                },
                {
                  title: "게임화(Gamification)",
                  description: "포인트, 배지, 리더보드로 학습 동기를 부여하고 지속적인 참여를 유도합니다."
                },
                {
                  title: "멀티모달 학습",
                  description: "텍스트, 비디오, 오디오, 인터랙티브 시뮬레이션 등 다양한 형식으로 학습합니다."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-violet-600 mt-1 mr-4 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold mb-12 text-center">활용 분야</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "K-12 교육",
                  description: "초중고 학생들에게 개인화된 학습을 제공하고 교사의 업무를 지원합니다.",
                  features: ["적응형 학습", "자동 채점", "학부모 포털"]
                },
                {
                  title: "고등 교육",
                  description: "대학과 대학원에서 대규모 강의를 효율적으로 운영하고 학습 성과를 향상시킵니다.",
                  features: ["LMS 통합", "연구 협업", "졸업생 추적"]
                },
                {
                  title: "기업 교육",
                  description: "임직원의 스킬 개발과 온보딩을 체계적으로 관리합니다.",
                  features: ["스킬 매트릭스", "컴플라이언스 교육", "성과 분석"]
                },
                {
                  title: "자격증 & 시험 준비",
                  description: "효율적인 시험 준비를 위한 맞춤형 학습과 모의고사를 제공합니다.",
                  features: ["약점 분석", "예상 문제", "시간 관리"]
                },
                {
                  title: "온라인 강의 플랫폼",
                  description: "MOOC, 유료 강의 플랫폼에 AI 기능을 추가하여 경쟁력을 강화합니다.",
                  features: ["코스 추천", "수료 예측", "강사 지원"]
                },
                {
                  title: "언어 학습",
                  description: "AI 대화형 튜터와 음성 인식으로 외국어 학습을 돕습니다.",
                  features: ["발음 교정", "대화 연습", "문법 분석"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-violet-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-700 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-violet-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">플랫폼 기능</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "학습자",
                  features: [
                    "개인 대시보드",
                    "학습 경로",
                    "진도 추적",
                    "성취 배지",
                    "토론 포럼"
                  ]
                },
                {
                  category: "교수자",
                  features: [
                    "강의 관리",
                    "자동 채점",
                    "학생 분석",
                    "출석 관리",
                    "피드백 도구"
                  ]
                },
                {
                  category: "관리자",
                  features: [
                    "사용자 관리",
                    "코스 관리",
                    "분석 리포트",
                    "권한 설정",
                    "통합 관리"
                  ]
                },
                {
                  category: "콘텐츠",
                  features: [
                    "비디오 강의",
                    "인터랙티브 퀴즈",
                    "실습 환경",
                    "다운로드 자료",
                    "라이브 세션"
                  ]
                },
                {
                  category: "평가",
                  features: [
                    "퀴즈/시험",
                    "과제 제출",
                    "피어 리뷰",
                    "프로젝트 평가",
                    "인증서 발급"
                  ]
                },
                {
                  category: "통합",
                  features: [
                    "LMS 연동",
                    "SSO 인증",
                    "API 제공",
                    "데이터 익스포트",
                    "써드파티 앱"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-4 text-violet-600 text-lg">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Orange3 Data Mining Education */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Orange3 데이터 마이닝 교육 & 개발</h2>
            <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
              비주얼 프로그래밍 기반의 오픈소스 데이터 마이닝 도구로 코딩 없이도 AI/ML을 학습하고 실습할 수 있습니다
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl border border-orange-200 shadow-lg">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  O3
                </div>
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Orange3 교육 프로그램</h3>
                <p className="text-gray-700 mb-6">
                  드래그 앤 드롭 방식의 직관적인 워크플로우로 데이터 과학의 기초부터 고급 머신러닝까지 단계별로 학습합니다.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">초급 과정</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        데이터 로드 및 탐색 (CSV, Excel, SQL 등)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        데이터 시각화 (산점도, 히스토그램, 박스플롯)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        기본 전처리 (결측치, 정규화, 인코딩)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">중급 과정</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        분류 알고리즘 (Decision Tree, Random Forest, SVM)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        회귀 분석 (Linear, Polynomial Regression)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        클러스터링 (K-Means, DBSCAN, Hierarchical)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">고급 과정</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        앙상블 학습 (Bagging, Boosting, Stacking)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        텍스트 마이닝 & 감성 분석
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                        신경망 & 딥러닝 (Neural Network 위젯)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-orange-200 shadow-lg">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  DEV
                </div>
                <h3 className="text-xl font-semibold mb-4 text-amber-600">커스텀 위젯 개발 서비스</h3>
                <p className="text-gray-700 mb-6">
                  기업 고유의 데이터 분석 요구사항에 맞춘 Orange3 커스텀 위젯과 워크플로우를 개발합니다.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">위젯 개발</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        도메인 특화 데이터 처리 위젯
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        커스텀 시각화 및 대시보드 위젯
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        외부 API/DB 연동 위젯
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">통합 개발</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        Python 스크립트 위젯으로 고급 분석 구현
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        기존 시스템과 Orange3 워크플로우 연동
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        자동화된 분석 파이프라인 구축
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">교육 자료 개발</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        맞춤형 Orange3 튜토리얼 제작
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        산업별 실습 워크플로우 샘플
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        기업 내부 데이터 과학 교육 과정 설계
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-orange-200">
              <h3 className="text-xl font-semibold mb-6 text-center">Orange3 활용 사례</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">교육 기관</div>
                  <p className="text-sm text-gray-600">
                    대학/고등학교에서 데이터 과학 및 AI 입문 과정에 활용
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">기업 교육</div>
                  <p className="text-sm text-gray-600">
                    비개발자 직원들의 데이터 리터러시 향상 교육
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">프로토타이핑</div>
                  <p className="text-sm text-gray-600">
                    데이터 분석 프로젝트의 빠른 프로토타입 개발
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">핵심 기술</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-lg border border-violet-100">
                <h3 className="font-semibold mb-3 text-violet-600">AI & ML</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 자연어 처리 (NLP)</li>
                  <li>• 추천 알고리즘</li>
                  <li>• 컴퓨터 비전</li>
                  <li>• 음성 인식/합성</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-lg border border-violet-100">
                <h3 className="font-semibold mb-3 text-violet-600">데이터 분석</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Learning Analytics</li>
                  <li>• 예측 모델링</li>
                  <li>• 실시간 대시보드</li>
                  <li>• A/B 테스팅</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-lg border border-violet-100">
                <h3 className="font-semibold mb-3 text-violet-600">플랫폼</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 클라우드 기반</li>
                  <li>• 모바일 앱</li>
                  <li>• 웹 접근성</li>
                  <li>• 확장 가능 아키텍처</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-900 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              AI로 교육을 혁신하세요
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              개인화된 학습 경험으로 교육 효과를 극대화하고 학습자 만족도를 높이세요
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-900 rounded-lg font-semibold hover:bg-violet-50 transition-colors"
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
