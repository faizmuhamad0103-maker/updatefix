import TransactionRow from "./TransactionRow";
import TransactionCard from "./TransactionCard";

export default function TransactionTable({
  transactions,
  editTransaction,
  deleteTransaction,
}) {
  return (
    <section className="card mt-8 overflow-hidden">
      <div className="mb-6 flex items-center">
        <div>
          <h2 className="text-2xl font-bold">
            Daftar Transaksi
          </h2>

          <p className="text-gray-500">
            Semua transaksi tersimpan otomatis.
          </p>
        </div>

        <div className="mt-2 text-gray-400">
          {transactions.length} Transaksi
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full overflow-x-auto rounded-2xl">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-4 text-left whitespace-nowrap">
                Tanggal
              </th>

              <th className="p-4 text-left whitespace-nowrap">
                Keterangan
              </th>

              <th className="p-4 text-center whitespace-nowrap">
                Kategori
              </th>

              <th className="p-4 text-right whitespace-nowrap">
                Masuk
              </th>

              <th className="p-4 text-right whitespace-nowrap">
                Keluar
              </th>

              <th className="p-4 text-right whitespace-nowrap">
                Saldo
              </th>

              <th className="p-4 text-center whitespace-nowrap">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                editTransaction={editTransaction}
                deleteTransaction={deleteTransaction}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="min-w-[280px] glass ambient-shadow rounded-xl p-6 space-y-4 md:hidden">
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            editTransaction={editTransaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </div>
    </section>
  );
}