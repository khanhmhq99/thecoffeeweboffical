import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fectProductsRequest, deleteProductRequest } from '../../store/actions/productActions'
import { Link, Redirect } from 'react-router-dom'

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }
    onDelete = (id) => {
        if (confirm('Do you really want to delete?')) { //eslint-disable-line
            this.props.deleteProduct(id);
        }
    }

    render() {
        const { user } = this.props;
        if (!user.token) return <Redirect to="/signin" />
        const { products } = this.props;
        const productList = products.length ? (
            products.map(product => {
                return (
                    <tr key={product.productId}>
                        <td>
                            <div className="row">
                                <Link to={'product/' + product.productId + '/' + 'edit'} className="col s6 m6 l6 orange-text">
                                    <i className="material-icons icon-cus">mode_edit</i>
                                </Link>
                                <Link to="" className="col s6 m6 l6 red-text"
                                    onClick={() => this.onDelete(product.productId)}>
                                    <i className="material-icons icon-cus">clear</i>
                                </Link>
                            </div>
                        </td>
                        {/* <td>{product.productId}</td> */}
                        <td>{product.productNm}</td>
                        <td>{product.price}</td>
                        <td>
                            <img src={product.photo} height="100px" alt="" />
                        </td>
                        <td>{product.insDatetime}</td>

                        <td>
                            <div className="row">
                                <div className="col s12">
                                    <Link to={"product/" + product.productId + "/" + "detail"}>
                                        <i className="material-icons icon-cus">launch</i>
                                    </Link>
                                </div>
                            </div>

                        </td>
                    </tr>


                )
            })
        ) : (
                <tr>
                    <td colSpan="6">Loading products...</td>
                </tr>
            )
        return (
            <div className="welcome container">
                <h2>Welcome, {user.fullName}!</h2>
                <h6>Which table do you want to see? Please pick one.</h6>
                <div className="row">
                    <Link to="/product">
                        <div className="col s6 welcomechoose">
                            <p>PRODUCT</p>
                        </div>
                    </Link>
                    <Link to="/category">
                        <div className="col s6 welcomechoose">
                            <p>CATEGORY</p>
                        </div>
                    </Link>
                    <img className="col s12" src="http://file.hstatic.net/1000075078/article/kv_new_sori_web__8ba795388fb2451d8891cb649a33fa16_1024x1024.jpg" alt="" />
                </div>

                <br></br>
                {/* <table className="highlight responsive-table">
                    <thead className="orange darken-1">
                        <tr>
                            <th colSpan="4">
                                <h4>
                                    <font color="white">
                                        Manage <b>Products</b>
                                    </font>
                                </h4>

                            </th>
                            <th colSpan="2">
                                <div className="row">
                                    <Link to="product/add" className="col s12 m12 l12 waves-effect light-green darken-3 btn-small">
                                        Add new product <i className="material-icons left">add</i>
                                    </Link>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="white lighten-1">
                        <tr>
                            <td>
                                <b>Action</b>
                            </td>
                            <td>
                                <b>Product name</b>
                            </td>
                            <td>
                                <b>Price</b>
                            </td>
                            <td>
                                <b>Image</b>
                            </td>
                            <td>
                                <b>Insert date</b>
                            </td>
                            <td>
                                <b>Detail</b>
                            </td>
                        </tr>
                        {productList}
                    </tbody>
                </table> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        products: state.product.products,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(fectProductsRequest())
        },
        deleteProduct: (id) => {
            dispatch(deleteProductRequest(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
