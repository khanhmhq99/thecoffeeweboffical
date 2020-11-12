import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getCategoryRequest } from '../store/actions/categoryAction'
import { connect } from 'react-redux'

class CategoryDetailPage extends Component {
    componentDidMount() {
        var { match } = this.props
        this.props.getCategory(match.params.id)
        // console.log(this.props)
    }

    render() {
        // console.log(this.props)
        const { categoryEditing } = this.props;
        const { user } = this.props;
        if (!user.token) return <Redirect to="/signin" />
        return (
            // <div className="container white">Hello</div>

            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Category detail</h5>
                    <div className="input-field">
                        <h8>Category Id</h8>
                        <input type="text" name="" id="" value={categoryEditing.categoryId} readOnly/>
                    </div>
                    <div className="input-field">
                        <h8>Category Name</h8>
                        <input type="text" id="productNm" onChange={this.handleChange} value={categoryEditing.categoryNm} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Insert Datetime</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={categoryEditing.insDatetime} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Insert By</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={categoryEditing.insBy} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Update Datetime</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={categoryEditing.updDatetime} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Update By</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={categoryEditing.updBy} readOnly />
                    </div>
                    <div className="input-field">
                        <Link to="/category" className="waves-effect orange darken-4 btn z-depth-0 mr-10">
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
        categoryEditing: state.categoryEditing,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCategory: (id) => {
            dispatch(getCategoryRequest(id))
        },
        // updateProduct: (product) => {
        //     dispatch(updateProductRequest(product))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetailPage)
