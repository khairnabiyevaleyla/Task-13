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
    <div className="rounded-2xl overflow-hidden  bg-[#ffff] flex flex-col md:flex-row h-auto md:h-[470px]shadow-md">
      <CardImage image={showData.image} />
      <LargeCardContent />
    </div>
  );
};

export default LargeArticleCard;

///////
