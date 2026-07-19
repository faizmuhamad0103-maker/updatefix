import {
  Pencil,
  Trash2,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";
import { formatCurrency } from "@/lib/currency";

export default function TransactionCard({
  transaction,
  editTransaction,
  deleteTransaction,
}) {
  const isIncome = transaction.type === "income";

  return (

    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      {/* Baris 1 */}
      <div className="flex items-center gap-3">

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${isIncome
              ? "bg-emerald-100 text-emerald-600"
              : "bg-rose-100 text-rose-600"
            }`}
        >
          {isIncome ? (
            <ArrowDownLeft size={20} />
          ) : (
            <ArrowUpRight size={20} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-semibold text-slate-800">
            {transaction.description}
          </p>

          <p className="text-xs text-slate-500">
            {new Date(transaction.date).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

      </div>

      {/* Baris 2 */}
      <div className="mt-4 flex items-center justify-between">

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {transaction.category}
        </span>

        <span
          className={`text-lg font-bold ${isIncome ? "text-emerald-600" : "text-rose-600"
            }`}
        >
          {isIncome ? "+" : "-"}
          {formatCurrency(transaction.amount)}
        </span>

      </div>

      {/* Baris 3 */}
      <div className="mt-4 flex justify-end gap-2 border-t pt-4">

        <button
          onClick={() => editTransaction(transaction)}
          className="rounded-xl bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="rounded-xl bg-red-50 p-2 text-red-600 hover:bg-red-100"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}