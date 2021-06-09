import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui";

let initialLoad = true;

function App() {
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const saveToFirebase = async () => {
      dispatch(
        uiActions.showNotification({
          status: "PENDING",
          title: "Sending...",
          message: "Sending card data...",
        })
      );
      const response = await fetch(
        "https://udemy-http-1c237-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw Error("Something went wrong");
      dispatch(
        uiActions.showNotification({
          status: "SUCCESS",
          title: "Success!",
          message: "Sent successfully!",
        })
      );
    };

    if (initialLoad) {
      initialLoad = false;
      return;
    }

    saveToFirebase().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "ERROR",
          title: "Failed.",
          message: error.message,
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
