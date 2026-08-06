export type ServiceItem = {
  nombre: string;
  monto: number;
  diaPago: number;
  pagado: boolean;
};

export type TransactionItem = {
  id: string;
  categoria: string;
  monto: number;
  tipo: 'gasto' | 'ingreso';
  fecha: string;
};

export const sueldoBase = 400;
export const presupuestoTransporteMensual = 38.4;

export const serviciosFijos: ServiceItem[] = [
  { nombre: 'Arriendo', monto: 120, diaPago: 5, pagado: true },
  { nombre: 'Internet', monto: 35, diaPago: 12, pagado: false },
  { nombre: 'Luz', monto: 18, diaPago: 18, pagado: false },
  { nombre: 'Spotify', monto: 22, diaPago: 25, pagado: true },
];

export const transaccionesMock: TransactionItem[] = [
  { id: 'tx-1', categoria: 'Transporte', monto: 1.6, tipo: 'gasto', fecha: '2026-08-05' },
  { id: 'tx-2', categoria: 'Alimentación', monto: 4.5, tipo: 'gasto', fecha: '2026-08-05' },
  { id: 'tx-3', categoria: 'Ingreso extra', monto: 12, tipo: 'ingreso', fecha: '2026-08-04' },
  { id: 'tx-4', categoria: 'Transporte', monto: 1.5, tipo: 'gasto', fecha: '2026-08-03' },
  { id: 'tx-5', categoria: 'Ocio', monto: 7.25, tipo: 'gasto', fecha: '2026-08-02' },
];

export function formatMoney(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
}

export function calculateProtectedBalance(services = serviciosFijos) {
  const fixedExpenses = services.reduce((total, service) => total + service.monto, 0);
  return sueldoBase - (fixedExpenses + presupuestoTransporteMensual);
}

export function summarizeTransactions(transactions = transaccionesMock) {
  return transactions.reduce(
    (summary, transaction) => {
      if (transaction.tipo === 'ingreso') {
        summary.ingresos += transaction.monto;
      } else {
        summary.gastos += transaction.monto;
      }

      if (transaction.categoria === 'Transporte') {
        summary.transporteReal += transaction.monto;
      }

      return summary;
    },
    { ingresos: 0, gastos: 0, transporteReal: 0 },
  );
}