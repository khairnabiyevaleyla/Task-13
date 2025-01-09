const CardImage = ({ image }) => {
  return (
    <div className="w-[360px] h-full ">
      <img
        src={image}
        alt="Article Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CardImage;
