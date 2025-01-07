import CardImage from "./CardImage";
import LargeCardContent from "./LargeCardContent";
import { useState, useEffect } from "react";
import { getAPI } from "../../http/api";

const LargeArticleCard = () => {
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    getAPI("/largearticle", (data) => {
      setShowData(data);
    });
  }, []);

  if (!showData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-2xl overflow-hidden flex flex-row bg-[#ffff] h-[470px]">
      <CardImage image={showData.image} />
      <LargeCardContent />
    </div>
  );
};

export default LargeArticleCard;
