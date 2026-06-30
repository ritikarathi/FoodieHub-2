import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"

const explore = () => {
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="input-group mb-3">
              <select className="form-select mt-2" style={{maxWidth : '150px'}}>
                <option value="">Select Category</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Pasta">Pasta</option>
                <option value="Dessert">Dessert</option>
                <option value="Beverages">Beverages</option>
              </select>
              <input type="text" className="form-control mt-2" placeholder="Search Your Favourite Dish..."/>
              <button className="btn btn-primary mt-2" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
    <FoodDisplay/>
    </>
  )
}

export default explore
