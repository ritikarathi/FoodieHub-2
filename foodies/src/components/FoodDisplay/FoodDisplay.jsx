import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {
  const { foodList } = useContext(StoreContext);
  const filteredFoods= foodList.filter(food =>{
    category==='All' || food.category===category
  })

  return (
    <div className="container mt-5">
      <div className="row">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodItem key={food} name={food.name} description={food.description} imageUrl={food.imageUrl} price={food.price} id={food.id}/>
          ))
        ) : (
          <div className="col-12 text-center mt-5">
            <h4>No food found</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;