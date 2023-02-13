type Props = {
  name: string;
  label: string;
  value: string | number;
  type: string;
  onChange: (e: React.ChangeEvent) => void;
  color?: "dark";
};
const InputField = ({ label, name, value, type, onChange, color }: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-neutral-50 mb-2 ${
          color ? "text-neutral-900" : ""
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-900 focus:border-emerald-900 block w-full p-2.5 "
        placeholder={name}
        required
        onChange={onChange}
      />
    </div>
  );
};
export default InputField;
