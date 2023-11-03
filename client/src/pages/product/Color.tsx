interface IProp {
  color: string;
  setColor: (value: string) => void;
}

const Color = ({ color, setColor }: IProp) => {
  return (
    <button
      className="mx-1 px-2 py-1 rounded-md bg-secondary-500 transition-all 
      duration-300 hover:bg-secondary-400"
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
};

export default Color;
