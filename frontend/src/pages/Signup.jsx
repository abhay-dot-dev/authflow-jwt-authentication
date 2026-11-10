import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

const Signup = () => {

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
            await registerUser(email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            if (error.response?.status === 409) {
                setError('Account already exists. Redirecting to login...')

                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setError('Something went wrong. Please try again.');
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full max-w-md space-y-5 rounded-xl bg-white p-8 shadow-lg"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Create an Account
                </h1>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => handleEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        value={password}
                        onChange={(e) => handlePassword(e.target.value)}
                        type="password"
                        placeholder="Enter your password"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
                >
                    Signup
                </button>

                {error && (
                    <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
                        {error}
                    </p>
                )}

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Signup