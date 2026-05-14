import { useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import Title from './components/title';
import iconKumo from "./images/iconkumo.svg";

export default function App() {
    const [query, setQuery] = useState('');

    const handleSubmit = (city: string) => {
        console.log('search city:', city);
    };

    return (
        <main className="weatherApp w-full min-h-screen flex flex-col items-center">
            <Title
                text="天気予報アプリ"
                imageSrc={iconKumo}
                imageAlt="雲アイコン"
                className="flex"
            />
            <InputForm
                value={query}
                onValueChange={setQuery}
                onSubmit={handleSubmit}
                disabled={query.trim().length === 0}
                placeholder="都市名を入力"
                errorMessage={null}
            />
        </main>
    );
}
