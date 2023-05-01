import React, { useEffect } from "react";
import DataFunctions from "../../DataFunctions";

//used to update the backend with the purchased item
const handleBuyButton = (currentUser, productName, productPts) => {

  //check if the user has enough points to buy the item
  if (productPts <= currentUser.spendablePoints) {
    DataFunctions.purchaseBlock(productName, productPts);
  }
};

const ProductCard = ({
  productImg,
  productName,
  productPts,
  productIsPurchased,
}) => {
  //create user so we can call its information
  let exampleUser = {
    id: 0,
    name: "",
    password: "",
    email: "",
    avatarId: 0,
    privacySetting: 0,
    spendablePoints: 0,
    giftablePoints: 0,
    totalPoints: 0,
    lastLoginTime: "2022-03-02T20:57:01.805Z",
  };

  //get user data
  const [currentUser, setCurrentUser] = React.useState(exampleUser);

  //call backend to populate with current user's data
  useEffect(async () => {
    if (DataFunctions.getUser()) {
      setCurrentUser(await DataFunctions.getUser());
    }
  }, []);

  return (
    /*outside box styling */
    <div className="mt-12 ml-14 w-72 rounded-xl bg-blockBlue">
      <div className="grid-rows-3 space-y-4 py-4 px-4">
        <div className="flex justify-center ">
          <div className="flex rounded-xl">
            {/*Including the picture and alternative text in the outside box */}
            <img
              src={productImg}
              className="rounded-xl"
              alt={productName}
            ></img>
          </div>
        </div>
        {/*Including the product name and division of points in the outside product card*/}
        <div className="grid grid-flow-col text-2xl">
          <div className="flex">{productName}</div>

          <p className="rounded-lg bg-blockSky text-center font-bold text-blockOrange">
            {productPts}
          </p>
          <div className="flex pl-1.5 text-right">points</div>
        </div>
        {/* If the card is not purchased, the buy button appears */}
        {!productIsPurchased && (
          <div
            className="h-10 rounded-xl bg-blockGold hover:bg-blockLightGold"
            onClick={() =>
              handleBuyButton(currentUser, productName, productPts)
            }
          >
            <p className="pt-1 text-center text-xl"> Buy</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
