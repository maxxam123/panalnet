import { NotificationsNone } from '@material-ui/icons';
import { useContext } from 'react';
import { logout } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './topbar.css';

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
            <button style={{ padding: 10, width: 100 }} onClick={handleClick}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
