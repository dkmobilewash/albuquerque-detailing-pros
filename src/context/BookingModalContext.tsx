import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface BookingModalContextValue {
  isOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingModal = useCallback(() => setIsOpen(true), []);
  const closeBookingModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openBookingModal, closeBookingModal }),
    [isOpen, openBookingModal, closeBookingModal]
  );

  return <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>;
}

export function useBookingModal(): BookingModalContextValue {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
}
