import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./product";
import Add from "./add";
import { useParams } from "react-router";
import Edit from "./edit";
import Home from "./home";
import Detail from "./detail";

export default function Routes(props) {
  return (
    
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-link">
              <button
                  className="btn btn-danger"
                >
                <NavLink to="/" activeClassName="active" exact>
                <img 
                src="https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110868_960_720.png"
                style={{ width: 30 }}
                alt="Canvas Logo"
              />  Trang chủ
                </NavLink> </button>  
              </div>
              <div className="nav-link">
              <button
                  className="btn btn-danger"
                >
                <NavLink to="/product" activeClassName="active" exact>
                <img 
                src="https://masoffer.com/wp-content/uploads/2016/09/home-merchant-icon.png"
                style={{ width: 30 }}
                alt="Canvas Logo"
              /> Thông tin sản phẩm
                </NavLink></button>
              </div>
              <div className="nav-link"><button
                  className="btn btn-danger"
                >
                <NavLink to="/product/add" activeClassName="active">
                <img 
                src="http://tbh.vn/public/upload/featured_images/setting-icon-500x500.png"
                style={{ width: 30 }}
                alt="Canvas Logo"
              /> Thêm sản phẩm
                </NavLink></button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product {...props} />
        </Route>
        <Route path="/product/add">
          <Add onAdd={props.onAdd} />
        </Route>
        <Route path="/product/edit/:id">
          <Edit onUpdate={props.onUpdate} />
        </Route>
        <Route path="/product/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}
