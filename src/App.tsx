import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import ContactPopup from '@/components/ContactPopup';
import Home from '@/pages/Home';
import Accounting from '@/pages/Accounting';
import Tax from '@/pages/Tax';
import Other from '@/pages/Other';
import About from '@/pages/About';
import Tools from '@/pages/Tools';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import Partners from '@/pages/Partners';
import ServiceDetail from '@/pages/ServiceDetail';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/accounting/:slug" element={<ServiceDetail category="accounting" />} />
          <Route path="/tax" element={<Tax />} />
          <Route path="/tax/:slug" element={<ServiceDetail category="tax" />} />
          <Route path="/tax-advisory" element={<ServiceDetail category="tax" slug="tax-advisory" />} />
          <Route path="/other" element={<Other />} />
          <Route path="/other/:slug" element={<ServiceDetail category="other" />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:slug" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/acquisitions" element={<Partners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ScrollToTop />
      <ContactPopup />
    </>
  );
}
