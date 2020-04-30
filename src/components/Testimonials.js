import React, { useMemo } from "react";
import "../styles/testimonials.css";

const testimonialsBuilder = (testimonials) =>
  testimonials.length > 0
    ? testimonials.map(({ user, text }) => (
        <li key={user}>
          <blockquote>
            <p>{text}</p>
            <cite>{user}</cite>
          </blockquote>
        </li>
      ))
    : [];

const Testimonials = ({ testimonials = [] }) => {
  const testimonialList = useMemo(() => testimonialsBuilder(testimonials), [
    testimonials,
  ]);
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonialList}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
