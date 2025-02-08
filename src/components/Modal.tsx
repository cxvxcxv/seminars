import clsx from 'clsx';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  className,
}: TModalProps) => {
  return (
    <div
      onClick={onClose}
      className={clsx(
        'fixed inset-0 flex items-center justify-center transition-colors',
        { 'visible bg-black/20': isOpen },
        { invisible: !isOpen },
      )}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={clsx(
          'max-w-1/3 rounded-xl bg-white p-6 shadow transition-all',
          className,
          {
            'scale-100 opacity-100': isOpen,
          },
          { 'scale-125 opacity-0': !isOpen },
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer rounded-lg bg-white p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};
