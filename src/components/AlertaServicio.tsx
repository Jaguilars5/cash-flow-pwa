import { BellRing, CalendarDays, CheckCircle2 } from 'lucide-react';
import type { ServiceItem } from '@/lib/finance';

type AlertaServicioProps = {
  servicio: ServiceItem;
};

export function AlertaServicio({ servicio }: AlertaServicioProps) {
  return (
    <article className="glass rounded-3xl p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-slate-300">
            <BellRing className="h-4 w-4 text-cyan-300" />
            <span className="text-sm">{servicio.nombre}</span>
          </div>
          <p className="mt-2 text-2xl font-semibold text-white">${servicio.monto.toFixed(2)}</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays className="h-4 w-4" />
            <span>Día de pago {servicio.diaPago}</span>
          </div>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            servicio.pagado ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'
          }`}
        >
          <CheckCircle2 className="h-5 w-5" />
        </div>
      </div>
    </article>
  );
}