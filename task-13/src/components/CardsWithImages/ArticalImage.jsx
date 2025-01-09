const ArticalImage = ({ image }) => {
  return (
    <div className="w-full h-[240px] p-2">
      <img
        src={image}
        alt="article image"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default ArticalImage;
