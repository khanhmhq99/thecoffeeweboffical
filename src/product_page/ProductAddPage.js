import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { addProductRequest, fectProductsRequest } from '../store/actions/productActions'
import { connect } from 'react-redux'
import { storage } from '../config/fbConfig'

class ProductAddPage extends Component {

    state = {
        productNm: '',
        description: '',
        price: '',
        categoryId: '',
        photo: '',
        photoForOrder: '',
    }
    imgPhoto = {

    }
    imgPhotoForOrder = {

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleChangePhotoForOrder = (e) => {
        if (e.target.files[0]) {
            this.imgPhotoForOrder = e.target.files[0]
        }
    }
    handleChangePhoto = (e) => {
        if (e.target.files[0]) {
            this.imgPhoto = e.target.files[0]
        }
        // console.log(this.img)
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        var product = {
            productNm: this.state.productNm,
            description: this.state.description,
            price: this.state.price,
            categoryId: this.state.categoryId,
            photo: null,
            photoForOrder: null
        }
        await storage.ref('images/' + this.imgPhoto.name).put(this.imgPhoto);
        await storage.ref("images").child(this.imgPhoto.name).getDownloadURL().then(url => {
            product.photo = url
        });
        await storage.ref('images/' + this.imgPhotoForOrder.name).put(this.imgPhotoForOrder);
        await storage.ref("images").child(this.imgPhotoForOrder.name).getDownloadURL().then(url => {
            product.photoForOrder = url
        });
        await this.props.onAddProduct(product);
        // await this.props.fectProducts();
        this.props.history.replace('/product');
    }

    render() {
        // const { user } = this.props;
        // if (!user.token) return <Redirect to="/signin" />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create new Product</h5>
                    <div className="input-field">
                        <label htmlFor="productNm">Product Name</label>
                        <input type="text" id="productNm" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="price">Price</label>
                        <input type="number" step="any" id="price" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="categoryId">Category Id</label>
                        <input type="text" id="categoryId" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        {/* <label htmlFor="photo">Photo (Link)</label> */}
                        <p>Photo:</p>
                        <input type="file" id="photo" onChange={this.handleChangePhoto} />

                        {/* <button className="btn waves-effect orange darken-4 z-depth-0">Choose</button> */}
                        {/* <img src={this.img} height='150px' /> */}
                    </div>
                    <div className="input-field">
                        {/* <label htmlFor="photoForOrder">Photo for Order (Link)</label>
                        <input type="text" id="photoForOrder" onChange={this.handleChange} />
                        <img src={this.state.photoForOrder} height='150px' /> */}
                        <p>Photo for order:</p>
                        <input type="file" id="photoForOrder" onChange={this.handleChangePhotoForOrder} />
                    </div>
                    <div className="input-field">
                        <Link to="/product" className="waves-effect grey btn z-depth-0 mr-10">
                            Cancel
                        </Link>
                        <button className="btn waves-effect orange darken-4 z-depth-0">Create</button>
                        {/* <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div> */}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(addProductRequest(product))
        },
        fectProducts: () => {
            dispatch(fectProductsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddPage)
