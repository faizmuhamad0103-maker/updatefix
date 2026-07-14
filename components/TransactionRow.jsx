import { Pencil, Trash2 } from "lucide-react";

export default function TransactionRow({
  transaction,
  editTransaction,
  deleteTransaction,
}) {
  const income =
    transaction.type === "income"
      ? transaction.amount
      : 0;

  const expense =
    transaction.type === "expense"
      ? transaction.amount
      : 0;

  return (
    <tr className="border-b border-gray-100 hover:bg-white/60 transition-all duration-200">

      <td className="p-4 whitespace-nowrap">

        <div className="font-medium">
          {new Date(transaction.date).toLocaleDateString(
            "de-DE",
            {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }
          )}
        </div>

      </td>

      <td>

        <div className="font-semibold text-slate-800">
          {transaction.description}
        </div>

      </td>

      <td className="text-center">

        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">

          {transaction.category}

        </span>

      </td>

      <td className="text-right font-semibold text-emerald-600">

        {income > 0
          ? income.toLocaleString("de-DE", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            })
          : "-"}

      </td>

      <td className="text-right font-semibold text-rose-500">

        {expense > 0
          ? expense.toLocaleString("de-DE", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            })
          : "-"}

      </td>

      <td className="text-right font-bold text-sky-700">

        {transaction.amount.toLocaleString("de-DE", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        })}

      </td>

      <td>

        <div className="flex justify-center gap-2">

          <button
            onClick={() => editTransaction(transaction)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-100"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 transition hover:bg-red-100"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}
