import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PerformanceProvider } from '@/context/PerformanceContext';
import InternshipRegistration from './pages/InternshipRegistration';

export default function App() {
  return (
    <HelmetProvider>
      <PerformanceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InternshipRegistration />} />
            <Route path="/internship-registration" element={<InternshipRegistration />} />
            <Route path="/apply" element={<InternshipRegistration />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </PerformanceProvider>
    </HelmetProvider>
  );
}
