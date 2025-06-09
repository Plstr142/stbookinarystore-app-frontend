import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const sweetAlertStyle = document.createElement("style");
sweetAlertStyle.innerHTML = `
  .swal2-confirm:hover {
    background-color: #6b7152 !important; /* สีเข้มกว่าเดิมเมื่อ hover */
    box-shadow: 0 0 10px rgba(128, 133, 112, 0.5) !important;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
  
  .swal2-cancel:hover {
    background-color: #333 !important; /* สีเข้มกว่าเดิมเมื่อ hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;
document.head.appendChild(sweetAlertStyle);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `<span style="color: #bcc4a1;">Product Added to the Cart</span> <br> <span style="color: black;">StBookinary Store</span>`,
          iconColor: "#bcc4a1",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // existingItem.qty += action.payload.qty;

        // existingItem.totalPricePerItem =
        //   existingItem.newPrice * existingItem.qty;

        Swal.fire({
          title: `<span style="color: #bcc4a1;">Already Added to the Cart</span>`,
          text: "Decision confirmed. Only forward from here.",
          //   "warning"
          icon: "warning",
          iconColor: "#808570",
          showCancelButton: true,
          confirmButtonColor: "#808570",
          cancelButtonColor: "#000",
          confirmButtonText: "Confirm",
          customClass: {
            confirmButton: "swal2-confirm",
            cancelButton: "swal2-cancel",
          },
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
