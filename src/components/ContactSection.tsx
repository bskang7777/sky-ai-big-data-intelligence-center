import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            문의하기
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            데이터 인텔리전스 솔루션에 대해 궁금한 점이 있으시면 언제든 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">이메일</p>
                    <p className="text-gray-300">bskang7@srmm.kr</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">전화번호</p>
                    <p className="text-gray-300">02-422-6039</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">주소</p>
                    <p className="text-gray-300">서울시 송파구 법원로 6길 7 송파유탑테크벨리 11층</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">운영시간</p>
                    <p className="text-gray-300">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">빠른 상담 신청</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  전문 컨설턴트가 귀하의 비즈니스에 최적화된 데이터 솔루션을 제안해드립니다.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  상담 신청하기
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">문의 양식</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="회사명을 입력하세요"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  전화번호
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="전화번호를 입력하세요"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  관심 서비스
                </label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">서비스를 선택하세요</option>
                  <option value="data-lake">Delta Lake</option>
                  <option value="ai-rag">AI · RAG 서비스</option>
                  <option value="realtime">실시간 분석 & IoT</option>
                  <option value="finance">금융·HFT & 자산 배분</option>
                  <option value="cloud">클라우드 & 마이그레이션</option>
                  <option value="education">교육 AI & 플랫폼</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="문의 내용을 자세히 입력해주세요"
                ></textarea>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                문의 보내기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};