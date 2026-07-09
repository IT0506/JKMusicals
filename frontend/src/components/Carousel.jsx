import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { carouselSlides } from "../data/carouselData";
import "./Carousel.css";

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === carouselSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === carouselSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero-carousel">
      {carouselSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${
            index === current ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay" />

          <div className="carousel-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>

            <Link to={slide.link} className="carousel-btn">
              {slide.button}
            </Link>
          </div>
        </div>
      ))}

      <button className="carousel-arrow left" onClick={prevSlide}>
        <ChevronLeft size={28} />
      </button>

      <button className="carousel-arrow right" onClick={nextSlide}>
        <ChevronRight size={28} />
      </button>

      <div className="carousel-dots">
        {carouselSlides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}