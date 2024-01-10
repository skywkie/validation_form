import "./Input.css";

type InputProps = {
   placeholder: string;
   value: string;
   onChange: React.Dispatch<React.SetStateAction<string>>;
   type: string;
};

const Input: React.FC<InputProps> = ({
   placeholder,
   value,
   onChange,
   type,
}: InputProps): JSX.Element => {
   return (
      <input
         type={type}
         className="input"
         placeholder={placeholder}
         value={value}
         onChange={(e) => onChange(e.target.value)}
      />
   );
};

export default Input;
