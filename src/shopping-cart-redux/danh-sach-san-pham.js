import React, { Component } from "react";
import SanPham from "./san-pham";
import { connect } from "react-redux";

class DanhSachSanPham extends Component {
  renderListProduct = () => {
    let { listProduct } = this.props;
    //Duyệt mảng và render lần lượt ra các SanPham tương ứng
    return listProduct.map((product) => {
      return (
        <SanPham
          key={product.maSP}
          product={product}
          getDetailProduct={this.props.getDetailProduct}
          // getProductAddCart={this.props.getProductAddCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
        listProduct: state.productReducer.listProduct,
        listCart: state.productReducer.listCart,
        detailProduct: state.productReducer.detailProduct
  };
};

export default connect(mapStateToProps, null)(DanhSachSanPham);