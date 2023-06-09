// import React from 'react';
// import type { PropsWithChildren } from 'react';

// export default function Popup({ onClose, isOpen, children }
//   : PropsWithChildren & { isOpen: boolean, onClose: () => void }) {
//   return (
//     <div className={`popup popup_tooltip ${isOpen ? 'popup_active' : ''}`}>
//       <div className="popup__container">
//         <button
//           aria-label="Close"
//           className="popup__close"
//           type="button"
//           onClick={onClose}
//         />
//         <div className="tooltip">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ModalOverlay from '../modal-overlay';

// import { ESC_CLOSE_ON, OVERLAY_CLOSE_ON, MODAL_CONFIG } from '../../utils';

import style from './modal.module.css';

const ESC_CLOSE_ON = true;
const OVERLAY_CLOSE_ON = true;

const MODAL_CONFIG = {
  INITIAL: {
    opacity: 0,
    scale: 0.75,
  },
  ANIMATE: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.15,
    },
  },
  EXIT: {
    opacity: 0,
    scale: 0.75,
    transition: {
      ease: 'easeIn',
      duration: 0.15,
    },
  },
};

type TypeModal = {
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
            {title && <h2 className={"text text_type_main-large mt-10 ml-10 pt-3'}"}>{title}</h2>}
            <button type="button" className={style.close} data-test="close-button">
              {/* <CloseIcon type="primary" onClick={onClose} /> */}
              X
            </button>
            {children}
          </motion.div>
        )}
      </ModalOverlay>
    </AnimatePresence>,
    reactModals!,
  );
}
