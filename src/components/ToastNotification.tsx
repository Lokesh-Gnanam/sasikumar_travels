import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastNotificationProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toasts, onDismiss }) => {
  return (
    <div
      aria-live="polite"
      className="fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface ToastItemProps {
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4500);

    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return {
          bg: 'bg-emerald-700 text-white border-l-4 border-emerald-400',
          icon: <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />,
        };
      case 'error':
        return {
          bg: 'bg-red-700 text-white border-l-4 border-red-300',
          icon: <XCircle className="w-6 h-6 text-white shrink-0 mt-0.5" />,
        };
      case 'warning':
        return {
          bg: 'bg-amber-500 text-slate-950 border-l-4 border-amber-900',
          icon: <AlertTriangle className="w-6 h-6 text-slate-950 shrink-0 mt-0.5" />,
        };
      case 'info':
      default:
        return {
          bg: 'bg-slate-900 text-white border-l-4 border-[#F5B700]',
          icon: <Info className="w-6 h-6 text-[#F5B700] shrink-0 mt-0.5" />,
        };
    }
  };

  const styles = getToastStyles();

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`pointer-events-auto rounded-md shadow-2xl p-4 flex items-start gap-3 w-full border ${styles.bg}`}
      role="alert"
    >
      {styles.icon}
      <div className="flex-1 min-w-0 pr-1">
        <h4 className="font-heading font-bold text-base leading-snug tracking-wide">
          {toast.title}
        </h4>
        <p className="text-sm opacity-90 mt-1 leading-relaxed font-sans">
          {toast.message}
        </p>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="opacity-70 hover:opacity-100 transition-opacity p-1 -mr-1 -mt-1 rounded hover:bg-black/10 focus:outline-none"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
