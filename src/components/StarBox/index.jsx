import "./style.css";
const stars = [1, 2, 3, 4, 5];

const StarBox = ({ name, number }) => {
  // TODO work out how to get the value of number
  let maxNum = number;
  return (
    <div className="star-container">
      <div className="stars">
        {stars.slice(0, maxNum).map((star) => {
          return <span key={star} className="fa-regular fa-star"></span>;
        })}
      </div>
      <p>
        Rated {number} Stars in {name}
      </p>
    </div>
  );
};

export default StarBox;
