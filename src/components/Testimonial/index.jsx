

const Testimonial = ({ name, qualification, review }) => {
  return (
    <article className="testimonial-box">
      <h4>{name}</h4>
      <p>{qualification}</p>
      <p>"{review}"</p>
    </article>
  );
};

export default Testimonial;
