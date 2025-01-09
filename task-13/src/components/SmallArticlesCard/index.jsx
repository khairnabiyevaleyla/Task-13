import { useState, useEffect } from "react";
import { getAPI } from "../../http/api";
import SmallCard from "./SmallCard";

const SmallArticlesCard = () => {
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    getAPI("/smallarticles", (data) => {
      setShowData(data);
    });
  }, []);

  if (!showData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {showData &&
        showData.map((card, index) => <SmallCard key={index} {...card} />)}
    </div>
  );
};

export default SmallArticlesCard;
