import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import createCard from "./CardInfo";
import DataFunctions from "../../DataFunctions";

//Data for the shop
//ALL CREDIT TO u/jigokusenshii on Instagram, they made all of these images for the store

let shopData = [
  createCard("basic city"),
  createCard("beach"),
  createCard("bear"),
  createCard("bridge"),
  createCard("broken bridge"),
  createCard("camel"),
  createCard("city"),
  createCard("cornfield"),
  createCard("desert path"),
  createCard("dock"),
  createCard("elephants"),
  createCard("fall path"),
  createCard("flamingo"),
  createCard("giraffe"),
  createCard("graveyard"),
  createCard("home"),
  createCard("ice path"),
  createCard("island hut"),
  createCard("jetskis"),
  createCard("lion"),
  createCard("lumberjack"),
  createCard("oasis"),
  createCard("panda"),
  createCard("peacock"),
  createCard("pepper patch"),
  createCard("pig"),
  createCard("polar bear"),
  createCard("pumpkin patch"),
  createCard("reindeer"),
  createCard("tiger"),
  createCard("tomato field"),
  createCard("totoro"),
  createCard("train"),
  createCard("winter camping"),
  createCard("winter river"),
  createCard("zebra"),
];

const Store = () => {
  //provide sample trophy data so we know what it's supposed to look like
  let exampleTrophy = [];

  //trophy data
  const [trophyIDs, setTrophyData] = React.useState(exampleTrophy);

  //call backend to populate trophyData
  useEffect(async () => {
    if (DataFunctions.getUser()) {
      setTrophyData(await DataFunctions.getTrophies());
    }
  }, []);

  //now that we have all of the currently bought trophies, set each index in the shop to true
  for (let index = 0; index < trophyIDs.length; index++) {
    let currentID = trophyIDs[index];
    shopData[currentID].cardIsPurchased = true;
  }

  return (
    <div className="flex h-screen w-full flex-col divide-y divide-gray-400">
      <div className="p-5" id="header">
        <h1 className=" mt-5 ml-10 to-blockNavy text-5xl">block shop</h1>
      </div>
      <div className="grid overflow-auto pb-8 md:grid-cols-2" id="body">
        {/*use shopData to create product cards for each object */}
        {shopData.map((i) => (
          <ProductCard
            productImg={i.img}
            productName={i.name}
            productPts={i.points}
            productIsPurchased={i.cardIsPurchased}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
