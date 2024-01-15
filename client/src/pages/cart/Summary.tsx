import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useAppSelector } from "../../hooks/redux";
import { axiosPrivate } from "../../redux/axios";
import toast from "react-hot-toast";

const flexBetween = "flex justify-between";

interface IProp {
  setLoading: (value: boolean) => void;
}

const Summary = ({ setLoading }: IProp) => {
  const { user, cart } = useAppSelector((state) => state);
  const { token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const cartItems = cart.products?.map((item) => {
    return {
      title: item.title,
      desc: item.desc,
      color: item.color,
      category: item.category,
      brand: item.brand,
      price: item.price,
      img: item.img,
      quantity: item.quantity,
    };
  });

  const handleCheckout = async () => {
    setLoading(true);

    if (!token) {
      return navigate("/login");
    }

    try {
      const res = await axiosPrivate.post("/payment/checkout", {
        cartItems,
        userId: user.currentUser?._id,
      });

      if (!res.data.url) return;
      window.location = res.data.url;
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong, try again....");
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
