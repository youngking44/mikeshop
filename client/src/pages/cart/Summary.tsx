import Button from "../../components/button";
import { useAppSelector } from "../../hooks/redux";

const flexBetween = "flex justify-between";

const Summary = () => {
  const { total } = useAppSelector((state) => state.cart);

  return (
    <div className="flex-1 lg:self-start border-2 rounded-2xl p-5">
      <div className="py-2 border-b-2">
        <h2 className="text-xl font-bold">Order Summary</h2>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Subtotal</span>
        <span className="text-accent-500">${total}</span>
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
        <span className="text-accent-500">${total}</span>
      </div>
      <Button type="button" bg="bg-primary-400" width="w-full">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
