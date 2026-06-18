import { useEffect, useState } from "react";

const AddFood = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onImageChangeHandler = (event) => {
    setData((prev) => ({
      ...prev,
      image: event.target.files[0],
    }));
  };

  return (
    <div>
      <div className="card shadow-sm p-4 my-2">
        <h3 className="mb-4">Add New Food Item</h3>

        {/* Food Name */}
        <div className="mb-3">
          <label className="form-label">Food Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="e.g. Margherita Pizza"
            onChange={onChangeHandler}
            value={data.name}
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Food Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="4"
            placeholder="Describe the food item..."
            onChange={onChangeHandler}
            value={data.description}
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            name="category"
            className="form-select"
            onChange={onChangeHandler}
            value={data.category}
          >
            <option value="">Select Category</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="Pasta">Pasta</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Enter price"
            onChange={onChangeHandler}
            value={data.price}
          />
        </div>

        {/* Image */}
        <div className="mb-3">
          <label className="form-label">Food Image</label>
          <input
            type="file"
            className="form-control"
            onChange={onImageChangeHandler}
          />
        </div>

        {/* Button */}
        <button className="btn btn-primary w-100">
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFood;