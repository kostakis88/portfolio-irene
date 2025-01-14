import React from "react";
import Feature from "./Feature";
import empathy from "../images/empathy.png";
import creativity from "../images/creativity.png";
import detailOriented from "../images/detailOriented.png";

const KeyStrengths = () => {
  const features = [
    {
      iconSrc: empathy,
      iconAlt: "Heart Icon",
      title: "Empathy",
      className: "feature-1",
      description: "I excel at understanding users' needs, emotions, and challenges, which helps me create designs that truly connect with them and make their experience seamless.",
    },
    {
      iconSrc: creativity,
      iconAlt: "Light Bulb Icon",
      title: "Creativity",
      className: "feature-2",
      description: " I have a talent for finding innovative solutions to design challenges and crafting unique, engaging interfaces that stand out.",
    },
    {
      iconSrc: detailOriented,
      iconAlt: "Magnifying Glass Icon",
      title: "Detail Oriented",
      className: "feature-3",
      description: "I pay close attention to every detail, ensuring my designs are polished, cohesive, and function flawlessly.",
    },
  ];

  return (
    <div className="features-metrics">
    <div className="container-4">
      <div className="center-container">
        <h2 className="h2">My Key Strengths</h2>
      </div>
      <div className="main-grid">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default KeyStrengths;
