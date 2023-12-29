import Button from "../../components/button";
import { useAppSelector } from "../../hooks/redux";
import { axiosPrivate } from "../../redux/axios";

const flexBetween = "flex justify-between";

const Summary = () => {
  const { user, cart } = useAppSelector((state) => state);

  const handleCheckout = async () => {
    try {
      const res = await axiosPrivate.post("/payment/checkout", {
        cartItems: cart.products,
        userId: user.currentUser?._id,
      });
      console.log("Response...", res.data);
      console.log("Cart items...", cart.products);

      if (!res.data.url) return;
      window.location = res.data.url;
    } catch (err) {
      console.log("Something went wrong try again.");
    }
  };

  return (
    <div className="flex-1 lg:self-start border-2 rounded-2xl p-5">
      <div className="py-2 border-b-2">
        <h2 className="text-xl font-bold">Order Summary</h2>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Subtotal</span>
        <span className="text-accent-500">${cart.total}</span>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Estimated shipping</span>
        <span className="text-accent-500">$10.00</span>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Discounted shipping</span>
        <span className="text-accent-500">$10.00</span>
      </div>
      <div className={`${flexBetween} my-5 py-5 border-y-2`}>
        <span className="font-bold">Total</span>
        <span className="text-accent-500">${cart.total}</span>
      </div>
      <Button
        type="button"
        bg="bg-primary-400"
        width="w-full"
        handleClick={handleCheckout}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
