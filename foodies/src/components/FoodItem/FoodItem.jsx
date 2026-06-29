

const FoodItem = ({ name, description, imageUrl, price, id }) => {
  return (
    <div
      key={id}
      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
    >
      <div className="card h-100 shadow-sm">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={name}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>

          <p className="card-text text-muted">
            {description}
          </p>

          <p className="fw-bold text-success mb-3">
            ₹{price}
          </p>

          <button className="btn btn-primary mt-auto">
            View Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;