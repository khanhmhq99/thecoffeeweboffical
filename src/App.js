import React from 'react';
import Navbar from './conponents/layout/Navbar'
import Sidenav from './conponents/layout/Sidenav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './conponents/auth/SignIn'
import SignUp from './conponents/auth/SignUp'
import Dashboard from './conponents/dashboard/Dashboard'
import ProductAddPage from './product_page/ProductAddPage'
import ProductEditPage from './product_page/ProductEditPage'
import ProductDetailPage from './product_page/ProductDetailPage'
import ManageProduct from './conponents/dashboard/ManageProduct'
import CategoryAddPage from './category_page/CategoryAddPage'
import CategoryDetailPage from './category_page/CategoryDetailPage'
import ManageCategory from './conponents/dashboard/ManageCategory'
import CategoryEditPage from './category_page/CategoryEditPage';
// import Footer from './conponents/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidenav />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/product' component={ManageProduct} />
          <Route exact path='/category' component={ManageCategory} />
          <Route path='/category/add' component={CategoryAddPage} />
          <Route path='/category/:id/edit' component={CategoryEditPage} />
          <Route path='/category/:id/detail' component={CategoryDetailPage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/product/add' component={ProductAddPage} />
          <Route path='/product/:id/edit' component={ProductEditPage} />
          <Route path='/product/:id/detail' component={ProductDetailPage} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
