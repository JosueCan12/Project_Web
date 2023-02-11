function ModalInput({ name, placeholder, label, type, initialValue = "" }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
      />
    </div>
  );
}

export default ModalInput;
