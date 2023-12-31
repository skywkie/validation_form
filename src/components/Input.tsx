const Input = ({ placeholder, value, onChange }: any) => {
   return (
      <input
         type="text"
         className="input"
         placeholder={placeholder}
         value={value}
         onChange={(e) => onChange(e.target.value)}
      />
   );
};

export default Input;
