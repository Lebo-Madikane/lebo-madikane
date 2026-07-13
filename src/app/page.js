'use client';

import { useState } from 'react';

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Music from "@/components/Music/Music";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Modal from '@/components/Modal/Modal';
import LetsWorkTogetherForm from "@/components/Forms/LetsWorkTogetherForm/LetsWorkTogetherForm";
import HireMeForm from "@/components/Forms/HireMeForm/HireMeForm";
import ViewResumeForm from '@/components/Forms/ViewResumeForm/ViewResumeForm';

// activeModal can be: null | 'contact' | 'hire'
// 'resume' is a direct link — no modal needed

export default function HomePage() {

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <main>
      <Header />
      <Hero onContactClick={() => openModal('contact')} />
      <About
        onHireClick={() => openModal('hire')}
        // ViewResume is a direct link — pass the URL as a prop instead
        onResumeClick={() => openModal('resume')}
      />
      <Projects />
      <Music />
      <Contact onContactClick={() => openModal('contact')} />
      <Footer />

      {/* Single Modal — renders whichever form is active */}
      <Modal isOpen={activeModal !== null} onClose={closeModal}>
        {activeModal === 'contact' && <LetsWorkTogetherForm onClose={closeModal} />}
        {activeModal === 'hire' && <HireMeForm onClose={closeModal} />}
        {activeModal === 'resume' && <ViewResumeForm onClose={closeModal} />}
      </Modal>
    </main>
  );
}
