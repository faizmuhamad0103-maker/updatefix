"use client";

export default function TransactionForm({
  form,
  setForm,
  saveTransaction,
  editingId,
}) {
  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "amount") {
      const number = value.replace(/\D/g, "");

      setForm((prev) => ({
        ...prev,
        amount: number,
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const formattedAmount = form.amount
    ? Number(form.amount).toLocaleString("de-DE")
    : "";

  return (
    <section className="card mt-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold">

            {editingId
              ? "Edit Transaksi"
              : "Tambah Transaksi"}

          </h2>

          <p className="text-gray-500 mt-1">

            Catat pemasukan dan pengeluaran harian.

          </p>

        </div>

      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveTransaction();
        }}
        className="grid xl:grid-cols-5 gap-5"
      >

        <div className="space-y-2">

          <label className="text-sm text-gray-500">
            Tanggal
          </label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full"
          />

        </div>

        <div className="space-y-2">

          <label className="text-sm text-gray-500">
            Keterangan
          </label>

          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Contoh : Gaji Bulanan"
            className="w-full"
          />

        </div>

        <div className="space-y-2">

          <label className="text-sm text-gray-500">
            Kategori
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full"
          >

            <option>Makanan</option>
            <option>Transport</option>
            <option>Belanja</option>
            <option>Tagihan</option>
            <option>Gaji</option>
            <option>Investasi</option>
            <option>Hiburan</option>
            <option>Kesehatan</option>
            <option>Lainnya</option>

          </select>

        </div>

        <div className="space-y-2">

          <label className="text-sm text-gray-500">
            Jenis
          </label>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full"
          >

            <option value="income">
              Pemasukan
            </option>

            <option value="expense">
              Pengeluaran
            </option>

          </select>

        </div>

        <div className="space-y-2">

          <label className="text-sm text-gray-500">
            Nominal
          </label>

          <input
            type="text"
            inputMode="numeric"
            name="amount"
            value={formattedAmount}
            onChange={handleChange}
            placeholder="0"
            className="w-full"
          />

          <button
            type="submit"
            className="w-full mt-4 rounded-2xl bg-black text-white py-3 font-semibold hover:opacity-90 transition"
          >

            {editingId
              ? "Update Transaksi"
              : "Simpan Transaksi"}

          </button>

        </div>

      </form>

    </section>
  );
}
