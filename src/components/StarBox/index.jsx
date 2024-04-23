import "./style.css";
// const stars = [1, 2, 3, 4, 5];

const StarBox = ({ name, number, stars }) => {
  // TODO work out how to get the value of number
  // let maxNum = { number };
  // console.log(maxNum);
  // let tmpArr = stars.slice(0, maxNum);
  // console.log(tmpArr);
  return (
    <div className="star-container">
      {/* {tmpArr.map((star) => {
        return <span key={star} class="fa-regular fa-star"></span>;
      })} */}
      <div className="stars">
        {stars.map((star) => {
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
