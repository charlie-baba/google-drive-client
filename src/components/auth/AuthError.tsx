import { useNavigate } from 'react-router-dom';

const AuthError = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Authentication Error
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                There was a problem authenticating with Google
            </p>
            </div>
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <p className="text-center">
                Failed to complete the authentication process. Please try again.
            </p>
            </div>
            <div>
            <button
                onClick={() => navigate('/')}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Return to Login
            </button>
            </div>
        </div>
        </div>
    );
};

export default AuthError;