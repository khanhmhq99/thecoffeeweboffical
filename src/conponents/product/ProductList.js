import React from 'react'

const ProductList = () => {
    return (
        <div className="container">
            <table className="highlight responsive-table">
                <thead className="orange darken-1">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        {/* <th>Description</th> */}
                        <th>Price</th>
                        <th>Photo</th>
                        {/* <th>CategoryId</th> */}
                        {/* <th>DelFlg</th> */}
                        {/* <th>Insert by</th> */}
                        <th>Insert Datetime</th>
                        {/* <th>Update by</th> */}
                        {/* <th>Update Datetime</th> */}
                        {/* <th>Photo for order</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="grey lighten-1">
                    {/* {productList} */}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
