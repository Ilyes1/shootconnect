import React from 'react'
import './DashboardHeader.css'
import search from '../../assets/icons/dashboard-header-search.svg'
import settings from '../../assets/icons/dashboard-header-settings.svg'
import notification from '../../assets/icons/dashboard-header-notification.svg'
import profile from '../../assets/images/dashboard-header-profile.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { ApiRepos } from '../../contracts/ContractVars';

const DashboardHeader = ({ toggleSidebar, opened }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                //console.log('Fetching user data...');
                const response = await fetch(`${ApiRepos}account/current-user`, {
                method: 'GET',
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
                //console.log('User data received:', data);
                setUser(data);
                setIsLoading(false);
            } catch (err) {
                //console.error('Error fetching user data:', err);
                setError('Failed to fetch user data. Please try logging in again.');
                setIsLoading(false);
                if (err.message.includes('401')) {
                    // Unauthorized, redirect to home page with a message
                    navigate('/', { state: { message: 'Your session has expired. Please log in again.' } });
                }
            }
        };

        fetchUserData();
    }, [navigate]);

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }



    if (error) {
        return <div className="error">{error}</div>;
    }



    if (!user) {
        return <div className="error">No user data available.</div>;
    }

  return (
    <div className='dashboard-header'>
        <div className="dashboard-header-left">
            <h2>Good Morning, <span>{user.firstName}</span></h2>
        </div>
        <div className="dashboard-header-right">
            <div className="dashboard-header-search">
                <div className="dashboard-header-search-icon">
                    <img src={search} alt="Search" />
                </div>
                <input type="text" placeholder='Type here...' />
            </div>
            <Link to={'#'} className="dashboard-header-icon">
                <img src={settings} alt="Settings" />
            </Link>
            <Link to={'#'} className="dashboard-header-icon">
                <img src={notification} alt="Notifications" />
            </Link>
            <Link to={'#'} className="dashboard-header-profile">
                <img src={profile} alt="Profile" />
            </Link>
            <div 
                className={`sidebar-toggler ${opened && 'active'}`}
                onClick={toggleSidebar}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader