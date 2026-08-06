'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

type ModalGastoProps = {
  open: boolean;
  onClose: () => void;
};

export function ModalGasto({ open, onClose }: ModalGastoProps) {
  const [categoria, setCategoria] = useState('Transporte');
  const [monto, setMonto] = useState('1.60');

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/70 px-4 pb-4 pt-16 backdrop-blur-sm sm:items-center">
      <div className="glass w-full max-w-md rounded-[2rem] p-5 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Registro rápido</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Nueva transacción</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-slate-300 hover:bg-white/5">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <label className="block space-y-2 text-sm text-slate-300">
            <span>Categoría</span>
            <select
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none"
            >
              <option>Transporte</option>
              <option>Alimentación</option>
              <option>Ocio</option>
              <option>Ingreso</option>
            </select>
          </label>

          <label className="block space-y-2 text-sm text-slate-300">
            <span>Monto</span>
            <input
              value={monto}
              onChange={(event) => setMonto(event.target.value)}
              inputMode="decimal"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-2xl bg-white px-4 py-3 font-semibold text-slate-950 transition hover:opacity-90"
          >
            Guardar {categoria}
          </button>
        </div>
      </div>
    </div>
  );
}