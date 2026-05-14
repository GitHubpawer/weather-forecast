import type { ChangeEvent, FormEvent } from "react";
import type { InputFormProps } from "./types/InputForm";

export default function InputForm({
    value,
    onValueChange,
    onSubmit,
    disabled = false,
    placeholder = "都市名を入力",
    errorMessage = null,
}: InputFormProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onValueChange(event.currentTarget.value);
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(value.trim());
    };

    return (
        <>
            <form className="searchRow" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="searchInput"
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                    placeholder={placeholder}
                />
                <button type="submit" className="searchButton" disabled={disabled}>検索</button>
            </form>
        </>
    )
}