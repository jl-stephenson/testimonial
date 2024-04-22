import Testimonial from "../Testimonial";

const testCopy = [
  {
    name: "Colton Smith",
    qualification: "Verified Buyer",
    review:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    name: "Irene Roberts",
    qualification: "Loyal Customer",
    review:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    name: "Anne Wallace",
    qualification: "Verified Buyer",
    review:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
];

const TestimonialBox = () => {
  return (
    <article className="testimonial-box">
      {testCopy.map((person, index) => {
        return (
          <Testimonial
            name={person.name}
            qualification={person.qualification}
            review={person.review}
          />
        );
      })}
    </article>
  );
};

export default TestimonialBox;
