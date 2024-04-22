const stars = [<span class="fa-regular fa-star"></span>];

const StarBox = ({ name, number, stars }) => {
  return (
    <div className="star-container">
      <p>{stars}</p>
      <span class="fa-regular fa-star"></span>
      <p>
        Rated {number} Stars in {name}
      </p>
    </div>
  );
};

export default StarBox;
