import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { IndustryDetail } from "./pages/IndustryDetail";
import { DataLakeDetail } from "./pages/DataLakeDetail";
import { AIRAGDetail } from "./pages/AIRAGDetail";
import { RealtimeIoTDetail } from "./pages/RealtimeIoTDetail";
import { FinanceHFTDetail } from "./pages/FinanceHFTDetail";
import { CloudMigrationDetail } from "./pages/CloudMigrationDetail";
import { EducationAIDetail } from "./pages/EducationAIDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industries/:industry" element={<IndustryDetail />} />
          <Route path="/services/data-lake" element={<DataLakeDetail />} />
          <Route path="/services/ai-rag" element={<AIRAGDetail />} />
          <Route path="/services/realtime-iot" element={<RealtimeIoTDetail />} />
          <Route path="/services/finance-hft" element={<FinanceHFTDetail />} />
          <Route path="/services/cloud-migration" element={<CloudMigrationDetail />} />
          <Route path="/services/education-ai" element={<EducationAIDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
