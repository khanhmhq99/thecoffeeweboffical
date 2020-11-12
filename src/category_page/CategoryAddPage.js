import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { createCategoryRequest } from '../store/actions/categoryAction'
import { connect } from 'react-redux'

class CategoryAddPage extends Component {

    state = {
        categoryNm: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        var category = {
            categoryNm: this.state.categoryNm
        }
        await this.props.onAddCategory(category);
        this.props.history.replace('/category');
    }

    render() {
        const { user } = this.props;
        if (!user.token) return <Redirect to="/signin" />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create new Category</h5>
                    <div className="input-field">
                        <label htmlFor="categoryNm">Category Name</label>
                        <input type="text" id="categoryNm" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <Link to="/category" className="waves-effect grey btn z-depth-0 mr-10">
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
    // console.log(state);
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddCategory: (category) => {
            dispatch(createCategoryRequest(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAddPage)
