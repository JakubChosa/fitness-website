type Props = {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
};
const TextAreaField = ({ label, name, value, onChange }: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-neutral-50 dark:text-white"
      >
        {label}
      </label>
      <textarea
        value={value}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-h-[120px]"
        placeholder="MESSAGE"
        required
        onChange={onChange}
      />
    </div>
  );
};
export default TextAreaField;
