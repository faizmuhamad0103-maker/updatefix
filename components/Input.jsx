export default function Input({
  label,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-500">
        {label}
      </label>

      <input
        {...props}
        className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}