import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import SignalsApp from "@/pages/signals-app";
import NotFound from "@/pages/not-found";
import { Suspense } from "react";
import LanguageRouter from "@/components/LanguageRouter";
import { supportedLanguages } from "./i18n";

function Router() {
  return (
    <Switch>
      {/* Language-specific routes */}
      {Object.keys(supportedLanguages).map(lang => (
        <Route key={lang} path={`/${lang}`} component={Landing} />
      ))}
      {Object.keys(supportedLanguages).map(lang => (
        <Route key={`${lang}-signals`} path={`/${lang}/signals-app`} component={SignalsApp} />
      ))}
      
      {/* Section routes for each language */}
      {Object.keys(supportedLanguages).map(lang => (
        <Route key={`${lang}-results`} path={`/${lang}/results`} component={Landing} />
      ))}
      {Object.keys(supportedLanguages).map(lang => (
        <Route key={`${lang}-pricing`} path={`/${lang}/pricing`} component={Landing} />
      ))}
      {Object.keys(supportedLanguages).map(lang => (
        <Route key={`${lang}-support`} path={`/${lang}/support`} component={Landing} />
      ))}
      {Object.keys(supportedLanguages).map(lang => (
        <Route key={`${lang}-performance`} path={`/${lang}/performance`} component={Landing} />
      ))}
      
      {/* Fallback routes for backward compatibility */}
      <Route path="/" component={Landing} />
      <Route path="/signals-app" component={SignalsApp} />
      <Route path="/results" component={Landing} />
      <Route path="/pricing" component={Landing} />
      <Route path="/support" component={Landing} />
      <Route path="/performance" component={Landing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageRouter>
            <Toaster />
            <Router />
          </LanguageRouter>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
