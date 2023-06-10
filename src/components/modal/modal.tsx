/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from '@heroicons/react/solid';
import { motion, AnimatePresence } from 'framer-motion';

import ModalOverlay from '../modal-overlay';

import { ESC_CLOSE_ON, OVERLAY_CLOSE_ON, MODAL_CONFIG } from './config';

import style from './modal.module.css';

export type TypeModal = {
  title?: string;
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

export default function Modal({
  title, children, onClose, isOpen,
}: TypeModal) {
  const reactModals = document.getElementById('modals');

  const handleEscape = (e: KeyboardEvent) => {
    if (e.type === 'keydown' && e.code === 'Escape') {
      if (OVERLAY_CLOSE_ON) {
        onClose();
      }
    }
  };

  const closeModal = () => ESC_CLOSE_ON && onClose();

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  });

  return ReactDOM.createPortal(
    <AnimatePresence>
      <ModalOverlay isOpen={isOpen} closeModal={closeModal}>
        {isOpen && (
          <motion.div
            className={style.container}
            onClick={(e) => e.stopPropagation()}
            initial={MODAL_CONFIG.INITIAL}
            animate={MODAL_CONFIG.ANIMATE}
            exit={MODAL_CONFIG.EXIT}
          >
            {title && <h2 className="">{title}</h2>}
            <button
              type="button"
              className={style.close}
              data-test="close-button"
              onClick={onClose}
            >
              <XIcon />
            </button>
            {children}
          </motion.div>
        )}
      </ModalOverlay>
    </AnimatePresence>,
    reactModals!,
  );
}
