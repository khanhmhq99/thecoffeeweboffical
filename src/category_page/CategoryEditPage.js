import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getCategoryRequest, updateCategoryRequest } from '../store/actions/categoryAction'
import { connect } from 'react-redux'
import { findAllByDisplayValue } from '@testing-library/react'

class CategoryEditPage extends Component {

    state = {
        categoryId: '',
        categoryNm: '',
        insBy: '',
        insDatetime: '',
        updBy: '',
        updDatetime: '',
        updating: false
    }

    componentDidMount() {
        var { match } = this.props
        this.props.getCategory(match.params.id)
        // console.log(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.categoryEditing) {
            var { categoryEditing } = nextProps;
            this.setState({
                categoryId: categoryEditing.categoryId,
                categoryNm: categoryEditing.categoryNm,
                insBy: categoryEditing.insBy,
                insDatetime: categoryEditing.insDatetime,
                updBy: categoryEditing.updBy,
                updDatetime: categoryEditing.updDatetime
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    componentDidUpdate() {
        if (this.props.updateStatus === 'updated') {
            this.props.history.replace('/category')
        }

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        var category = {
            categoryId: this.state.categoryId,
            categoryNm: this.state.categoryNm,
            insBy: this.state.insBy,
            insDatetime: this.state.insDatetime,
            updBy: this.state.updBy,
            updDatetime: this.state.updDatetime
        }
        await this.props.updateCategory(category);
        this.setState({
            updating: true
        })
        // this.props.history.replace('/category')
    }

    render() {
        // console.log(this.props)
        // const { categoryEditing } = this.props
        const { user } = this.props;
        if (!user.token) return <Redirect to="/signin" />
        return (
            // <div className="container white">Hello</div>

            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Category detail</h5>
                    <div className="input-field">
                        <h8>Category Id</h8>
                        <input type="text" name="" id="" value={this.props.match.params.id} readOnly />
                    </div>
                    <div className="input-field">
                        <h8>Category Name</h8>
                        <input type="text" id="categoryNm" onChange={this.handleChange} value={this.state.categoryNm} />
                    </div>
                    <div className="input-field">
                        <Link to="/category" className="waves-effect grey btn z-depth-0 mr-10">
                            Back
                        </Link>
                        <button className="btn waves-effect orange darken-4 z-depth-0">Update</button>
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
        user: state.auth.user,
        updateStatus: state.category.status
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCategory: (id) => {
            dispatch(getCategoryRequest(id))
        },
        updateCategory: (category) => {
            dispatch(updateCategoryRequest(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditPage)
