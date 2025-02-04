import LogoutButton from '../auth/LogoutButton';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-xl font-bold text-gray-800">
                        Strac Google Drive Demo
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;