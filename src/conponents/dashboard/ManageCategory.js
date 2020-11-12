import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategoriesRequest, deleteCategoryRequest } from '../../store/actions/categoryAction'
import { Link, Redirect } from 'react-router-dom'

class ManageCategory extends Component {
    componentDidMount() {
        this.props.fetchAllCategories();
    }
    onDelete = (id) => {
        if (confirm('Do you really want to delete?')) { //eslint-disable-line
            this.props.deleteCategory(id);
        }
    }
    render() {
        const { user } = this.props;
        if (!user.token) return <Redirect to="/signin" />
        const { categories } = this.props;
        const categoryList = categories.length ? (
            categories.map(category => {
                return (
                    <tr key={category.categoryId}>
                        <td>
                            <div className="row">
                                <Link to={'category/' + category.categoryId + '/edit'} className="col s6 m6 l6 orange-text">
                                    <i className="material-icons icon-cus">mode_edit</i>
                                </Link>
                                <Link to="category" className="col s6 m6 l6 red-text"
                                    onClick={() => this.onDelete(category.categoryId)}>
                                    <i className="material-icons icon-cus">clear</i>
                                </Link>
                            </div>
                        </td>
                        <td>{category.categoryId}</td>
                        <td>{category.categoryNm}</td>
                        <td>{category.insDatetime}</td>

                        <td>
                            <div className="row">
                                <div className="col s12">
                                    <Link to={"category/" + category.categoryId + "/" + "detail"}>
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
                    <td colSpan="6">Loading categories...</td>
                </tr>
            )
        return (
            <div className="container">
                <br></br>
                <table className="highlight responsive-table">
                    <thead className="orange darken-1">
                        <tr>
                            <th colSpan="3">
                                <h4>
                                    <font color="white">
                                        Manage <b>Category</b>
                                    </font>
                                </h4>

                            </th>
                            <th colSpan="2">
                                <div className="row">
                                    <Link to="category/add" className="col s12 m12 l12 waves-effect light-green darken-3 btn-small">
                                        Add new category <i className="material-icons left">add</i>
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
                                <b>Category ID</b>
                            </td>
                            <td>
                                <b>Category Name</b>
                            </td>
                            <td>
                                <b>Insert date</b>
                            </td>
                            <td>
                                <b>Detail</b>
                            </td>
                        </tr>
                        {categoryList}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        categories: state.category.categories,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(fetchCategoriesRequest())
        },
        deleteCategory: (id) => {
            dispatch(deleteCategoryRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategory)