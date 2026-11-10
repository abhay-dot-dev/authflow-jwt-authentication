import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleEmail(value) {
        setEmail(value);
    }

    function handlePassword(value) {
        setPassword(value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await loginUser(email, password);
            localStorage.setItem('token', response.token);
            setEmail('');
            setPassword('');
            navigate('/products');
        } catch (error) {
            if (error.response?.status === 401) {
                setError('Invalid email or password. Please try again.');
            } else {
                setError('Something went wrong! Please try again.')
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                className="w-full max-w-md space-y-5 rounded-xl bg-white p-8 shadow-lg"
                onSubmit={(e) => { handleSubmit(e) }}
            >
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Good to See You Again!
                </h1>
                <div className="flex flex-col gap-2">
                    <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        value={email}
                        onChange={(e) => { handleEmail(e.target.value) }}
                        type="email" placeholder="Enter your email" required />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="password">Password</label>
                    <input
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        value={password}
                        onChange={(e) => { handlePassword(e.target.value) }}
                        type="password" placeholder="Enter your password" required />
                </div>
                <button
                    className="w-full rounded-md bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 cursor-pointer"
                    type="submit">Login</button>
                {
                    error &&
                    <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
                        {error}
                    </p>
                }
                <p className="mt-5 text-center text-sm text-gray-600">
                    Don't have an account ? <Link className="font-semibold text-blue-600 hover:text-blue-700" to={'/signup'}>Signup</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;