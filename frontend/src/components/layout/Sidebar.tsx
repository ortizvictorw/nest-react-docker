import { BookOpen, Home, LogOut, Users } from 'react-feather';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import authService from '../../services/AuthService';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  className: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const history = useHistory();

  const { authenticatedUser, setAuthenticatedUser } = useAuth();

  const handleLogout = async () => {
    await authService.logout();
    setAuthenticatedUser(null);
    history.push('/login');
  };

  return (
    <div
      className={`sidebar ${className} flex flex-col h-full text-white`}
      style={{
        backgroundImage: "url('/assets/sidemenu-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Link to="/" className="flex items-center justify-center py-6">
        <img
          src="/assets/urbano-logo-white.png"
          alt="Urbano Logo"
          className="h-12 w-auto"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 flex-grow px-4">
        <SidebarItem to="/">
          <Home className="inline-block mr-3" /> Dashboard
        </SidebarItem>
        <SidebarItem to="/courses">
          <BookOpen className="inline-block mr-3" /> Courses
        </SidebarItem>
        {authenticatedUser.role === 'admin' && (
          <SidebarItem to="/users">
            <Users className="inline-block mr-3" /> Users
          </SidebarItem>
        )}
      </nav>

      <button
        className="bg-red-600 hover:bg-red-700 text-white rounded-lg mx-4 mb-6 px-4 py-2 flex items-center gap-3 justify-center transition-colors"
        onClick={handleLogout}
      >
        <LogOut className="inline-block" /> Logout
      </button>
    </div>
  );
}
