'use client';

import React, {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, pw}),
            });

            const result = await response.json();

            if (result.success) {
                alert('User added successfully');
                router.refresh()
            } else {
                alert('Failed to add user');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }
    return (
        <div className="text-primary p-4">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="pw"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        className="_input_base"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="_btn_base"
                >
                    Add User
                </button>
            </form>
        </div>
    );
}
