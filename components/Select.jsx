export default function Select({
  label,
  children,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-500">
        {label}
      </label>

      <select
        {...props}
        className="border border-gray-200 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
      >
        {children}
      </select>
    </div>
  );
}