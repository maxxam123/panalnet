import { LineStyle, Timeline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                home
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                products
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                users
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <Link to="/categoryitems" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                categoryitems
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              home
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              analytics
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
