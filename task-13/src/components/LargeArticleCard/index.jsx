import CardImage from "./CardImage";
import LargeCardContent from "./LargeCardContent";

const LargeArticleCard = () => {
  return (
    <div className="">
      <div className="rounded-2xl overflow-hidden  flex flex-row bg-[#ffff] h-[470px]">
        <CardImage />
        <LargeCardContent />
      </div>
    </div>
  );
};

export default LargeArticleCard;
