import { AlertTriangle, CalendarClock, CheckCircle2 } from 'lucide-react';
import { AlertaServicio } from '@/components/AlertaServicio';
import { serviciosFijos } from '@/lib/finance';

export default function ServiciosPage() {
  return (
    <main className="space-y-5">
      <section className="glass rounded-[2rem] p-5 shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Servicios fijos</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-white">Control de pagos y alertas</h1>
        <p className="mt-2 text-sm text-slate-400">
          Seguimiento visual de arriendo, Internet, luz y sus próximas fechas de débito.
        </p>
      </section>

      <section className="grid gap-3">
        {serviciosFijos.map((servicio) => (
          <AlertaServicio key={servicio.nombre} servicio={servicio} />
        ))}
      </section>

      <section className="glass rounded-3xl p-4">
        <div className="flex items-center gap-2 text-slate-300">
          <CalendarClock className="h-4 w-4 text-cyan-300" />
          <span className="text-sm">Recordatorio inteligente</span>
        </div>
        <div className="mt-3 grid gap-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            <span>Pagos ya cubiertos se marcan como resueltos.</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-300" />
            <span>Los vencimientos próximos quedan listos para alertar en la pantalla principal.</span>
          </div>
        </div>
      </section>
    </main>
  );
}