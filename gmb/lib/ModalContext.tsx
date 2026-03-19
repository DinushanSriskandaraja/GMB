'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import TrackOrderModal from '@/components/TrackOrderModal';
import LegalModal from '@/components/LegalModal';

interface ModalContextType {
  openTrackModal: () => void;
  closeTrackModal: () => void;
  openTermsModal: () => void;
  closeTermsModal: () => void;
  openPrivacyModal: () => void;
  closePrivacyModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const openTrackModal = useCallback(() => setIsTrackModalOpen(true), []);
  const closeTrackModal = useCallback(() => setIsTrackModalOpen(false), []);
  
  const openTermsModal = useCallback(() => setIsTermsModalOpen(true), []);
  const closeTermsModal = useCallback(() => setIsTermsModalOpen(false), []);

  const openPrivacyModal = useCallback(() => setIsPrivacyModalOpen(true), []);
  const closePrivacyModal = useCallback(() => setIsPrivacyModalOpen(false), []);

  return (
    <ModalContext.Provider value={{ 
      openTrackModal, closeTrackModal, 
      openTermsModal, closeTermsModal,
      openPrivacyModal, closePrivacyModal 
    }}>
      {children}
      <TrackOrderModal isOpen={isTrackModalOpen} onClose={closeTrackModal} />
      <LegalModal 
        isOpen={isTermsModalOpen} 
        onClose={closeTermsModal} 
        title="Terms and Conditions" 
        type="terms" 
      />
      <LegalModal 
        isOpen={isPrivacyModalOpen} 
        onClose={closePrivacyModal} 
        title="Privacy Policy" 
        type="privacy" 
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
