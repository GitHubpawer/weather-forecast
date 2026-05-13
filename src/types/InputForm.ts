export type CityName = string;

export interface InputFormProps {
    value: CityName;
    onValueChange: (next: CityName) => void;
    onSubmit:(city: CityName) => void;
    disabled?: boolean;
    placeholder?: string;
    errorMessage?: string | null;
}
