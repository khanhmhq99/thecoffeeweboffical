import React, { Component } from 'react'
import { Link, Redirect} from 'react-router-dom'
import { getProductRequest, updateProductRequest } from '../store/actions/productActions'
import { connect } from 'react-redux'

class ProductDetailPage extends Component {
    componentDidMount() {
        var { match } = this.props
        this.props.getProduct(match.params.id)
        // console.log(this.props)
    }

    render() {
        // console.log(this.props)
        const { itemEditing } = this.props
        const { user } = this.props;
        if (!user.token) return <Redirect to="/signin" />
        return (

            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Product detail</h5>
                    <div className="input-field">
                        <h8>Product Id</h8>
                        <input type="text" name="" id="" value={itemEditing.productId} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Product Name</h8>
                        <input type="text" id="productNm" onChange={this.handleChange} value={itemEditing.productNm} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Description</h8>
                        <input type="text" id="description" onChange={this.handleChange} value={itemEditing.description} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Price</h8>
                        <input type="number" step="any" id="price" onChange={this.handleChange} value={itemEditing.price} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Category Id</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={itemEditing.categoryId} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Insert Datetime</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={itemEditing.insDatetime} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Insert By</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={itemEditing.insBy} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Update Datetime</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={itemEditing.updDatetime} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Update By</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={itemEditing.updBy} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Photo (Link)</h8>
                        <input type="text" id="photo" onChange={this.handleChange} value={itemEditing.photo} readOnly />
                        <img src={itemEditing.photo} height='150px' />
                    </div>
                    <div className="input-field">
                        <h8>Photo for Order (Link)</h8>
                        <input type="text" id="photoForOrder" onChange={this.handleChange} value={itemEditing.photoForOrder} readOnly />
                        <img src={itemEditing.photoForOrder} height='150px' />
                    </div>
                    <div className="input-field">
                        <Link to="/product" className="waves-effect orange darken-4 btn z-depth-0 mr-10">
                            Back
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        itemEditing: state.item,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProduct: (id) => {
            dispatch(getProductRequest(id))
        },
        updateProduct: (product) => {
            dispatch(updateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage)
