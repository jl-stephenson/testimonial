import "./style.css";

const StarBox = ({ name, number }) => {
  return (
    <div className="star-container">
      <span class="fa-regular fa-star"></span>
      <p>
        Rated {number} Stars in {name}
      </p>
    </div>
  );
};

export default StarBox;
