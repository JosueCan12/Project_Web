function ModalInputFile({ name, label }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
      >
        {label}
      </label>
      <input
        type="file"
        id={name}
        name={name}
        className=""
      />
    </div>
  );
}

export default ModalInputFile;
