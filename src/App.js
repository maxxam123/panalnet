import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
// import { useContext } from 'react';
// import { AuthContext } from './context/authContext/AuthContext';
// import { Login } from './pages/login/Login';
import Topbar from './components/topbar/Topbar';
import { UserList } from './pages/userList/UserList';
import { User } from './pages/user/User';
import { NewUser } from './pages/newUser/NewUser';
import { ProductList } from './pages/productList/ProductList';
import { Product } from './pages/product/Product';
import { NewProduct } from './pages/newProduct/NewProduct';
import { List } from './pages/list/List';
import { NewList } from './pages/newList/NewList';
import { List2 } from './pages/listList/List2';

function App() {
  // const { user } = useContext(AuthContext);
  const user = true;

  return (
    <Router>
      <Switch>
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route> */}
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productsId">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>
              <Route path="/lists">
                <List2 />
              </Route>
              <Route path="/list/:listsId">
                <List />
              </Route>
              <Route path="/newList">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
