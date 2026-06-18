import { useState, useRef } from "react";

const AddFood = () => {

  const fileInputRef = useRef(null);
  
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

  const handleSubmit = async(e) => {
    e.preventDefault(); // stops page reload

    console.log(data);

    const formData =new formData();
      formData.append('food',JSON.stringify(data));
      formData.append('file', image);

      try{
       const response = await axios.post('https://localhost:8080/api/foods', formData, {headers: {"Content-Type": "multipart/formData"}});
       if(response.status===201){
          alert('Food Added Succefully');

       }
      }
      catch(error){
        console.log('Error',error);
        alert('Error Adding Food');
      }

    // after success → reset form
    setData({
      name: "",
      description: "",
      category: "",
      price: "",
      image: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <div className="card shadow-sm p-4 my-2">
        <h3 className="mb-4">Add New Food Item</h3>

        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Food Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="e.g. Margherita Pizza"
            onChange={onChangeHandler}
            value={data.name}
            required
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
            required
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
            required
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
            required
          />
        </div>

        {/* Image */}
        <div className="mb-3">
          <label className="form-label">Food Image</label>
          <input
            type="file"
            className="form-control"
            onChange={onImageChangeHandler}
            required
            ref={fileInputRef}
          />
        </div>
          
          <button type="submit" className="btn btn-primary w-100">
            Add Food Item
          </button>
      </form>
      </div>
    </div>
  );
};

export default AddFood;