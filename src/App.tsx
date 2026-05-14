import { useState } from 'react';
import './App.css';
import InputForm from './InputForm';

export default function App() {
    const [query, setQuery] = useState('');

    const handleSubmit = (city: string) => {
        console.log('search city:', city);
    };

    return (
        <main className="weatherApp w-full min-h-screen flex items-center justify-center">
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
