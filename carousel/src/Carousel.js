import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  //const [visibility, setVisibility] = useState("inline") //add to classlist, hidden / not hidden

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    const nextCardIdx = (currCardIdx === photos.length - 1) ? 0 : (currCardIdx + 1); //just needs to +1
    //Question: The code below is getting overriden by font awesome.
    // how do we fix that?
    // if (nextCardIdx === 0) {
    //   setVisibility("none");
    // }
    setCurrCardIdx(nextCardIdx);
  }
  //Decrements currCardIdx state by 1
  function goBackward() {
    const nextCardIdx = (currCardIdx === 0) ? (photos.length - 1) : (currCardIdx - 1); //just needs to -1
    setCurrCardIdx(nextCardIdx);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {!(currCardIdx === 0) && <i
          className="fas fa-chevron-circle-left fa-2x" //could be hidden / non-hidden in className. 
          onClick={goBackward}
        />}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {/* {console.log(currCardIdx)} Question: Why don't we see this? --> console log outside of return*/}
        {!(currCardIdx === 2) && <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
        />}
      </div>
    </div>
  );
}

export default Carousel;
