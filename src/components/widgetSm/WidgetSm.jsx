import { Visibility } from '@material-ui/icons';
import './widgetSm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8000/api/users?new=true'
          // ,
          // {
          //   headers: {
          //     token:
          //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzUxNGE2OTJmYTI4MDRlNGJhYzUwZiIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjUxOTIxNDcxLCJleHAiOjE2NTIzNTM0NzF9.nKTMP82wVhZHUukTMC5X35oaVAXgElQH4dzkxO0a1c0 ',
          //   },
          // }
        );
        setUsers(res.data);
        console.log(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img || '/assets/3.jpg'}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle"></span>
            </div>
            <button className="widgetSmButton">
              <Visibility />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
