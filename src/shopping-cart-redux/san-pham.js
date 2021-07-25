import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.getDetailProduct(product);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.getAddProduct(product);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getDetailProduct: (product) => {
      const action = {
        type: "GET",
        payload: product,
      };
      dispatch(action);
    },
    getAddProduct: (product) => {
      const action = {
        type: "ADD",
        payload: product,
      };
      dispatch(action);
    },
  };
};


export default connect(null, mapDispatchToProps)(SanPham);
