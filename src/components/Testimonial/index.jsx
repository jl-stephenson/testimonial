

const Testimonial = ({ name, qualification, review }) => {
  return (
    <>
      <h4>{name}</h4>
      <p>{qualification}</p>
      <p>"{review}"</p>
    </>
  );
};

export default Testimonial;
