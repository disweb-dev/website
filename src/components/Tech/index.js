import React from "react";
import TechStack from "./TechStack";

import "./index.scss";


const Tech = () => {
  return (
    <section className="Tech">
      <h1 className="Tech__header">TECH</h1>
      <p className="Tech__description">We work with a wide range of currently relevant technologies to design and develop softwear. We constantly improve our skils and learn new platforms to deliver quality products to our costumers.</p>
      <TechStack/>
    </section>
  );
};

export default Tech;
