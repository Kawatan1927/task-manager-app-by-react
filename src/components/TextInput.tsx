import React, {ChangeEvent} from "react";

type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
};

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder } )=> {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{ padding: '8px', width: '200px', marginRight: '10px' }}
        />
    );
};

export default TextInput;