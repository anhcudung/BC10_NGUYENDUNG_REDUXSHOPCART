import data from "../../shopping-cart-redux/data.json"
let initialState = {
  listProduct: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ],
  detailProduct: data[0],
  listCart: [],
};

const productReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE": {
      let listCart = [...state.listCart];
      const index = listCart.findIndex(
        (product) => product.maSP === action.payload.maSP
      );

      if (index !== -1) {
        //Tim thay => Xoa
        listCart.splice(index, 1);
      }
      state.listCart = listCart;
      return { ...state };
    }
    case "GET": {
      state.detailProduct = action.payload;
      return { ...state };
    }

    case "ADD": {
      let listCart = [...state.listCart];

      if (action.payload.maSP) {
        const index = listCart.findIndex(
          (product) => product.maSP === action.payload.maSP
        );
        if (index !== -1) {
          //Tìm thấy SP => Update số lượng
          listCart[index].soLuong += 1;
        } else {
          //Thêm SP vào mảng giỏ hàng
          const productCart = {
            maSP: action.payload.maSP,
            tenSP: action.payload.tenSP,
            hinhAnh: action.payload.hinhAnh,
            soLuong: 1,
            dongGia: action.payload.giaBan,
          };

          //copy this.state.listCart => mảng mới listCart
          listCart = [...state.listCart, productCart];
        }
      }
      state.listCart = listCart;
      return { ...state };
    }
    case "UPDATE": {
      let listCart = [...state.listCart];

      if (action.payload.maSP) {
        const index = listCart.findIndex(
          (product) => product.maSP === action.payload.maSP
        );
        if (index !== -1) {
          if (action.boo) {
            listCart[index].soLuong += 1;
          } else {
            if (listCart[index].soLuong >= 1) {
              listCart[index].soLuong -= 1;
            }
          }
        }
      }
      state.listCart = listCart;
      return { ...state };
    }
    

    default:
      return { ...state };
  }
};
export default productReducer;
