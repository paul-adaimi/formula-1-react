import Carousel from "react-bootstrap/Carousel";
import AccordionH from "../Components/Accordion/AccordionH";
import Articles from "../Components/Articles";

function Content() {
  return (
    <div className="content-container">
      <div className="video">
        <svg
          className="highlights"
          width="343px"
          height="17px"
          viewBox="0 0 343 17"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Formula 1 Highlights</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            fontFamily="Formula1-Display-Wide, Formula1"
            fontSize="16"
            fontStyle="expanded"
            fontWeight="400"
          >
            <text id="Formula-1-Highlights" fill="#FFFFFF">
              <tspan x="0" y="14">
                Formula 1 Highlights
              </tspan>
            </text>
          </g>
        </svg>
        <img
          className="f1-video"
          src="highlights.jpg"
          width="854"
          height="480"
        />

        <Carousel className="mt-3" interval={2000}>
          <Carousel.Item>
            <img
              src="formula-one-ffqxtcobqlmjqc2f.jpg"
              alt="Formula One Image with lights"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="F1rainbow.avif"
              alt="Formula One rainbow car"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="pexels-alex-wolf-mx-14401740.jpg"
              alt="Formula One driver talking to teammate in car"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="pexels-adriaan-greyling-18789437.jpg"
              alt="Formula One Team Ferrari in garage"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="70459923-8100-45a2-87a0-2edf3aee22e1_1600x902.jpg"
              alt="Formula One Alpine driver in car close-up"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="202467049-pink-race-car-in-motion-blur-with-wheels-leaving-trails-of-motion-blur-generative-ai-high-quality.jpg"
              alt="Formula One pink car with sparks"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="gettyimages-1800093928-3ea884e9fb65ed78aa5a1106a1670342ba8c40cc-s1100-c50.jpg"
              alt="Formula One racecar in Las Vegas"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="GP2119_164325_54I2652-scaled-1920x1080.jpg"
              alt="Formula One black car close up"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="gpr-may-21-pat-4-1.jpg"
              alt="Formula One black and orange car front view"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="1_WJzPFbrX9dl4Zx4BiVd-Vg.webp"
              alt="Formula One cars at starting line during rain"
              width="854"
              height="480"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="vegasgp.webp"
              alt="Formula One Vegas GP champion standing on RedBull car"
              width="854"
              height="480"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Articles />
      <div className="race-schedule">
        <div className="schedule">
          <AccordionH />
          {/* <img src="pexels-mahdi-bafande-15629018.jpg" alt="Abstract background" width="1915" /> */}
        </div>
      </div>
    </div>
  );
}

export default Content;
