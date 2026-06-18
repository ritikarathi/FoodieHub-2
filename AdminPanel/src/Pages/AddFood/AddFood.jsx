import { useState } from "react";

const AddFood = () => {
  const [data,setData] =useState({
      name :'',
      description :'',
      category: "",
      image: null
  });

  const onImageChangeHandler = (event) => {
  setData(data => ({
    ...data,
    image: event.target.files[0]   
    }));
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData(data => ({ ...data, [name]: value }));
};
 
  return (
    <div >
          <div className="card shadow-sm p-4 my-2 ">
            <h3 className="mb-4">Add New Food Item</h3>

            <div className="mb-3">
              <label className="form-label">Food Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Margherita Pizza"
                onChange={onChangeHandler} value={data.name}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Food Description</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Describe the food item..."
                onChange={onChangeHandler} value={data.description}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select" onChange={onChangeHandler} value={data.category}>
                <option>Select Category</option>
                <option>Pizza</option>
                <option>Burger</option>
                <option>Pasta</option>
                <option>Dessert</option>
                <option>Beverages</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Price (₹)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter price" 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Food Image</label>
              <input
                type="file"
                className="form-control"
                onChange={onImageChangeHandler}
              />
            </div>

            <button className="btn btn-primary w-100">
              Add Food Item
            </button>
          </div>
    </div>
  )
}

export default AddFood;
