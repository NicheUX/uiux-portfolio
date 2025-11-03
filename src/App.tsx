import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ToranCaseStudy from './components/ToranCaseStudy';
// Updated import to match your actual file name
import BBCCaseStudy from './components/BBCPage'; // or './components/bbc' depending on your folder structure
import PatisserieCaseStudy from './components/PatisserieCaseStudy';
import FinanceCaseStudy from './components/FinancePage';
import BloomBrewCaseStudy from './components/BloombrewPage';

// Individual wrapper components for each case study
function BBCWrapper() {
  const navigate = useNavigate();
  return <BBCCaseStudy onBack={() => navigate('/')} />;
}

function BloomBrewWrapper() {
  const navigate = useNavigate();
  return <BloomBrewCaseStudy onBack={() => navigate('/')} />;
}

function FinanceWrapper() {
  const navigate = useNavigate();
  return <FinanceCaseStudy onBack={() => navigate('/')} />;
}

function ToranWrapper() {
  const navigate = useNavigate();
  return <ToranCaseStudy onBack={() => navigate('/')} />;
}

function PatisserieWrapper() {
  const navigate = useNavigate();
  return <PatisserieCaseStudy />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bbc" element={<BBCWrapper />} />
        <Route path="/bloombrew" element={<BloomBrewWrapper />} />
        <Route path="/finance" element={<FinanceWrapper />} />
        <Route path="/toran" element={<ToranWrapper />} />
        <Route path="/patisserie" element={<PatisserieWrapper />} />
      </Routes>
    </Router>
  );
}