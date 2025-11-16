import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Factory, Banknote, Smartphone, Heart, GraduationCap, ShoppingCart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const IndustriesSection = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Building2,
      title: "에너지·케미컬",
      companies: ["Hanwha "],
      color: "bg-orange-500",
      route: "/industries/energy"
    },
    {
      icon: Factory,
      title: "제조·중공업",
      companies: ["두산", "현대중공업", "삼성엔지니어링", "삼성전자 GMES"],
      color: "bg-gray-600",
      route: "/industries/manufacturing"
    },
    {
      icon: Banknote,
      title: "금융·증권",
      companies: ["국민은행", "기업은행", "HFT", "Dart", "Creon"],
      color: "bg-green-600",
      route: "/industries/finance"
    },
    {
      icon: Smartphone,
      title: "통신·모바일",
      companies: ["SKT NUGU/Tworld", "KT 스마트 그리드"],
      color: "bg-blue-600",
      route: "/industries/telecom"
    },
    {
      icon: Heart,
      title: "공공·복지·의료",
      companies: ["사회보장정보시스템", "건강보험 의료서비스 포털", "지자체"],
      color: "bg-red-500",
      route: "/industries/public"
    },
    {
      icon: GraduationCap,
      title: "교육·콘텐츠·AI 스피커",
      companies: ["삼성 영어 AI 스피커", "네이버/LG AI 스피커"],
      color: "bg-purple-600",
      route: "/industries/education"
    },
    {
      icon: ShoppingCart,
      title: "유통·프랜차이즈",
      companies: ["LGCNS/버거킹", "CJ POS", "GS쇼핑"],
      color: "bg-yellow-600",
      route: "/industries/retail"
    },
    {
      icon: Users,
      title: "채용·플랫폼",
      companies: ["JOBKOREA 초단기 알바 플랫폼"],
      color: "bg-indigo-600",
      route: "/industries/platform"
    }
  ];

  const handleIndustryClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries Experienced
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 산업 분야에서 축적된 전문성과 경험을 바탕으로 최적화된 솔루션을 제공
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
              onClick={() => handleIndustryClick(industry.route)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${industry.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {industry.companies.map((company, companyIndex) => (
                    <Badge
                      key={companyIndex}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors mr-1 mb-1"
                    >
                      {company}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};