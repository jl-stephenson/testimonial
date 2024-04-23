import "./style.css"

const Testimonial = ({ name, qualification, review }) => {
  return (
    <div className="testimonial-copy">
      <h4>{name}</h4>
      <p>{qualification}</p>
      <p>"{review}"</p>
    </div>
  );
};

export default Testimonial;
