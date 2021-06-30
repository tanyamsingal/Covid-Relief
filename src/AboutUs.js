import React from "react";
import Person from "./utils/Person";

function AboutUs() {
  return (
    // {/* <h1>About Us</h1> */}
    <div className="about">
      <h1 className="title">Our Team</h1>
      <div className="aboutus">
        {/* <h1>About Us</h1> */}

        <div className="block">
          <Person
            name="Ashwin Sudheer"
            img="ashwin.JPG"
            text="Ashwin Sudheer is a final year undergraduate student of Computer Engineering at Delhi Technological 
                University."
          />
        </div>

        <div className="block">
          <Person
            name="Nitin Dahiya"
            img="nitin.jpeg"
            text="Nitin Dahiya is a final year undergraduate student of Mathematics and Computing at Delhi Technological 
              University."
          />
        </div>

        <div className="block">
          <Person
            name="Jai Kumar Joshi"
            img="Jai.jpeg"
            text="Jai Kumar Joshi is a final year undergraduate student of Mathematics and Computing at Delhi Technological 
              University."
          />
        </div>

        <div className="block">
          <Person
            name="Keshav Jindal"
            img="keshav.jpeg"
            text="Keshav Jindal is a final year undergraduate student of Mathematics and Computing at Delhi Technological 
              University."
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
