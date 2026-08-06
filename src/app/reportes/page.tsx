import { ArrowDownRight, ArrowUpRight, ChartColumnBig } from 'lucide-react';
import { formatMoney, presupuestoTransporteMensual, summarizeTransactions } from '@/lib/finance';

export default function ReportesPage() {
  const summary = summarizeTransactions();
  const transportDelta = presupuestoTransporteMensual - summary.transporteReal;

  return (
    <main className="space-y-5">
      <section className="glass rounded-[2rem] p-5 shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Reportes</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-white">Análisis de transporte</h1>
        <p className="mt-2 text-sm text-slate-400">
          Comparativa entre el presupuesto asignado y el gasto real acumulado.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <article className="glass rounded-3xl p-4">
          <div className="flex items-center gap-2 text-slate-300">
            <ChartColumnBig className="h-4 w-4 text-sky-300" />
            <span className="text-sm">Presupuesto</span>
          </div>
          <p className="mt-3 text-3xl font-semibold text-white">{formatMoney(presupuestoTransporteMensual)}</p>
        </article>
        <article className="glass rounded-3xl p-4">
          <div className="flex items-center gap-2 text-slate-300">
            <ChartColumnBig className="h-4 w-4 text-cyan-300" />
            <span className="text-sm">Real acumulado</span>
          </div>
          <p className="mt-3 text-3xl font-semibold text-white">{formatMoney(summary.transporteReal)}</p>
        </article>
      </section>

      <section className="glass rounded-3xl p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Resultado</p>
            <p className="mt-2 text-lg font-semibold text-white">
              {transportDelta >= 0 ? 'Ahorro en transporte' : 'Exceso en transporte'}
            </p>
          </div>
          <div className={`rounded-2xl px-3 py-2 text-sm ${transportDelta >= 0 ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'}`}>
            {transportDelta >= 0 ? 'Ahorro' : 'Exceso'}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
          <div className="flex items-center gap-2 text-slate-300">
            {transportDelta >= 0 ? <ArrowDownRight className="h-4 w-4 text-emerald-300" /> : <ArrowUpRight className="h-4 w-4 text-rose-300" />}
            <span>Diferencia</span>
          </div>
          <strong className="text-white">{formatMoney(Math.abs(transportDelta))}</strong>
        </div>
      </section>
    </main>
  );
}