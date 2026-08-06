'use client';

import { Plus } from 'lucide-react';

type FABProps = {
  onClick: () => void;
};

export function FAB({ onClick }: FABProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-slate-950 shadow-soft transition hover:scale-105 active:scale-95"
      aria-label="Registrar transacción"
    >
      <Plus className="h-7 w-7" />
    </button>
  );
}