import { useState } from 'react';
import { Avatar, Menu, MenuItem } from '@mui/material'; // Import Menu and MenuItem from Material-UI
import '../../assets/css/Nav.css';
import AdminSideNav from './AdminSidebar';

const AdminNavbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null); // State to manage anchor element for Menu

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleClickAvatar = (event) => {
        setAnchorEl(event.currentTarget); // Set anchor element for Menu
    };

    const handleCloseMenu = () => {
        setAnchorEl(null); // Close the Menu
    };

    return (
        <div>
            <nav className={`navbar ${showNavbar && 'active'}`}>
                <div className="container">
                    {/* Sidebar component */}
                    <div className='sidenav'>
                    <AdminSideNav />
                    </div>
                    <div>
                        <p id="hh2">AgroInnovate</p>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}></div>
                    <div className="nav-elements">
                        <ul>
                            <li>
                                {/* Avatar with click event */}
                                <Avatar
                                    className="profile-avatar"
                                    sx={{ width: 30, height: 30 }}
                                    src="/broken-image.jpg"
                                    onClick={handleClickAvatar}
                                />
                                {/* Dropdown Menu */}
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleCloseMenu}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    getContentAnchorEl={null}
                                >
                                    <MenuItem onClick={handleCloseMenu}>My Profile</MenuItem>
                                    <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
                                </Menu>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AdminNavbar;
