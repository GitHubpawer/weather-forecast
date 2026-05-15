import { useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import Title from './components/title';
import iconKumo from "./images/iconkumo.svg";

export default function App() {
    const [query, setQuery] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [weather,setWeather] = useState<WeatherResult | null>(null);
    const [error,setError] = useState<string | null>(null);
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
                disabled={false}
                placeholder="都市名を入力"
                errorMessage={null}
            />
        </main>
    );
}
