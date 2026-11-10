import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear('token');
        navigate('/login');
    }

    return (
        <button
            className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 cursor-pointer"
            onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout