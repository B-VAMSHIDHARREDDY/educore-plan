import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Admin from './pages/Admin';
import Faculty from './pages/Faculty';
import Student from './pages/Student';
import AIFeatures from './pages/AIFeatures';
import Mobile from './pages/Mobile';
import Revenue from './pages/Revenue';
import './index.css';

const pages = {
  overview: Overview,
  admin: Admin,
  faculty: Faculty,
  student: Student,
  ai: AIFeatures,
  mobile: Mobile,
  revenue: Revenue,
};

export default function App() {
  const [activePage, setActivePage] = useState('overview');

  const navigate = (id) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  const PageComponent = pages[activePage] || Overview;

  return (
    <>
      <Navbar activePage={activePage} onNavigate={navigate} />
      <Sidebar activePage={activePage} onNavigate={navigate} />
      <main style={{ marginLeft: 220, paddingTop: 64 }}>
        <PageComponent key={activePage} onNavigate={navigate} />
      </main>
    </>
  );
}
