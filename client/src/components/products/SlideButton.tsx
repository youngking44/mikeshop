import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface IProp {
  handleSlide: (value: string) => void;
}

const SlideButton = ({ handleSlide }: IProp) => {
  return (
    <div className="flex justify-center gap-5 mt-5">
      <button
        className="p-2 cursor-pointer bg-secondary-400"
        onClick={() => handleSlide("prev")}
      >
        <MdOutlineKeyboardArrowLeft size={20} />
      </button>
      <button
        className="p-2 cursor-pointer bg-secondary-400"
        onClick={() => handleSlide("next")}
      >
        <MdOutlineKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default SlideButton;
