const CardImage = ({ image }) => {
  return (
    <div className="w-full h-[200px]  p-2 md:p-0 md:w-[360px] md:h-full">
      <img
        src={image}
        alt="Article Image"
        className="w-full h-full object-cover rouned-2xl"
      />
    </div>
  );
};

export default CardImage;
