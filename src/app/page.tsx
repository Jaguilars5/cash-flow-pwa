'use client';

import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Wallet, ShieldCheck } from 'lucide-react';
import { FAB } from '@/components/FAB';
import { ModalGasto } from '@/components/ModalGasto';
import {
  calculateProtectedBalance,
  formatMoney,
  serviciosFijos,
  summarizeTransactions,
  transaccionesMock,
} from '@/lib/finance';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const protectedBalance = useMemo(() => calculateProtectedBalance(), []);
  const summary = useMemo(() => summarizeTransactions(), []);

  const netDaily = summary.ingresos - summary.gastos;
  const transportDelta = 38.4 - summary.transporteReal;

  return (
    <main className="space-y-5">
      <section className="glass overflow-hidden rounded-[2rem] border-white/10 p-5 shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Balance real disponible</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white">
              {formatMoney(protectedBalance)}
            </h1>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              Sueldo base menos gastos fijos y el presupuesto mensual de transporte.
            </p>
          </div>
          <div className="rounded-3xl bg-white/5 p-4 text-cyan-300">
            <ShieldCheck className="h-7 w-7" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-white/5 p-4">
            <div className="flex items-center gap-2 text-slate-400">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">Ingresos</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">{formatMoney(summary.ingresos)}</p>
          </div>
          <div className="rounded-3xl bg-white/5 p-4">
            <div className="flex items-center gap-2 text-slate-400">
              <ArrowDownRight className="h-4 w-4" />
              <span className="text-sm">Gastos</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">{formatMoney(summary.gastos)}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-3">
        <div className="glass rounded-3xl p-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Wallet className="h-4 w-4 text-sky-300" />
            <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Estado diario</span>
          </div>
          <p className="mt-3 text-3xl font-semibold text-white">{formatMoney(netDaily)}</p>
          <p className="mt-2 text-sm text-slate-400">Variación neta del día con las transacciones cargadas.</p>
        </div>

        <div className="glass rounded-3xl p-4">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Transporte protegido</p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-white">{formatMoney(transportDelta)}</p>
              <p className="mt-1 text-sm text-slate-400">
                {transportDelta >= 0 ? 'Ahorro frente al presupuesto' : 'Exceso frente al presupuesto'}
              </p>
            </div>
            <div className={`rounded-2xl px-3 py-2 text-sm ${transportDelta >= 0 ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'}`}>
              {transportDelta >= 0 ? 'Ahorro' : 'Exceso'}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Servicios próximos</h2>
          <span className="text-sm text-slate-400">{serviciosFijos.length} alertas</span>
        </div>
        <div className="grid gap-3">
          {serviciosFijos.map((service) => (
            <article key={service.nombre} className="glass rounded-3xl p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-white">{service.nombre}</p>
                  <p className="mt-1 text-sm text-slate-400">Día {service.diaPago} · {service.pagado ? 'Pagado' : 'Pendiente'}</p>
                </div>
                <p className="text-lg font-semibold text-white">{formatMoney(service.monto)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Últimas transacciones</h2>
        <div className="grid gap-3">
          {transaccionesMock.map((transaction) => (
            <article key={transaction.id} className="glass rounded-3xl p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-white">{transaction.categoria}</p>
                  <p className="mt-1 text-sm text-slate-400">{transaction.fecha}</p>
                </div>
                <p className={`text-lg font-semibold ${transaction.tipo === 'ingreso' ? 'text-emerald-300' : 'text-white'}`}>
                  {transaction.tipo === 'ingreso' ? '+' : '-'}{formatMoney(transaction.monto)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FAB onClick={() => setOpen(true)} />
      <ModalGasto open={open} onClose={() => setOpen(false)} />
    </main>
  );
}