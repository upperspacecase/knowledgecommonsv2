"use client";

interface FieldInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  type?: string;
}

export default function FieldInput({
  label,
  value,
  onChange,
  placeholder,
  multiline = false,
  type = "text",
}: FieldInputProps) {
  const baseClasses =
    "w-full px-3 py-2.5 rounded-md border border-stone-300 bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-colors text-sm";

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-stone-700">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className={baseClasses + " resize-none"}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
    </div>
  );
}
