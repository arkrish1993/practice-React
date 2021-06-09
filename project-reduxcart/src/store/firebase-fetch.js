import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const sendToFirebase = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "PENDING",
        title: "Sending...",
        message: "Sending card data...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://udemy-http-1c237-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartData.items,
            totalQuantity: cartData.totalQuantity,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw Error("Something went wrong");
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "SUCCESS",
          title: "Success!",
          message: "Sent successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "ERROR",
          title: "Failed.",
          message: error.message,
        })
      );
    }
  };
};

export const fetchFromFirebase = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://udemy-http-1c237-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) throw Error("Something went wrong");
      const data = await response.json();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    };
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "ERROR",
          title: "Failed.",
          message: error.message,
        })
      );
    }
  };
};
