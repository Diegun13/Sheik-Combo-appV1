import { useState } from "react";
import Combo from "./Combo";
import fairJab from "../../assests/Sheik beginner combos/fair-jab.gif";
import nairFtiltFthrowBf from "../../assests/Sheik beginner combos/nair-ftilt-fthrow-bf.gif";
import fthrowBf from "../../assests/Sheik beginner combos/fthrow-bf.gif";
// import {ComboData} from "./ComboData.js";

import fairFsmash from "../../assests/Sheik beginner combos/fair-fsmash.gif";
import fairUpsmash from "../../assests/Sheik beginner combos/fair-upsmash.gif";
import nairDsmash from "../../assests/Sheik beginner combos/nair(hard)-dsmash.gif";
import jabLockSetUp from "../../assests/Sheik beginner combos/jab lock set up.gif";
import fairUptiltBf from "../../assests/Sheik beginner combos/fair-uptilt-bf.gif";

export let comboVod = [
  {
    id: 1,
    file: fairJab,
    title: "fair jab",
    startingpercent: 0,
    startingMove: "f-air"
  },
  {
    id: 2,
    file: nairFtiltFthrowBf,
    title: "nair-ftilt-fthrow-bf",
    startingpercent: 0,
    startingMove: "n-air"
  },
  {
    id: 3,
    file: fthrowBf,
    title: "fthrow-bf",
    startingpercent: 10,
    startingMove: "f-throw"
  },
  {
    id: 4,
    file: fairUpsmash,
    title: "fair-upsmash",
    startingpercent: 40,
    startingMove: "f-air"
  },
  {
    id: 5,
    file: nairDsmash,
    title: "nair(hard)-dsmash",
    startingpercent: 0,
    startingMove: "n-air"
  },
  {
    id: 6,
    file: jabLockSetUp,
    title: "jab lock set up",
    startingpercent: 40,
    startingMove: "jab"
  },
  {
    id: 7,
    file: fairUptiltBf,
    title: "fair-uptilt-bf",
    startingpercent: 0,
    startingMove: "f-air"
  },
];

function ComboCard() {
  const [showvid, setShowVid] = useState(true);
  const [selectedMove, setSelectedMove] = useState('')
  function showVid() {
    setShowVid(showvid ? false : true);
  }
  const comboVids = comboVod.map((item) => {
    return (
      <Combo
        showvid={showvid}
        key={item.id}
        gif={item.file}
        title={item.title}
        startingMove={item.startingMove}
      />
    );
  });

  function handleChange(e){
    setSelectedMove(e.target.value)
    console.log(e.target.value)
    console.log(filterMove)
  }

  const filterMove = comboVod.filter((combo)=>
  {
    combo.startingMove === '' ? combo 
    : combo.startingMove.includes(selectedMove) 
  }).map((item) => {
    return (
      <Combo
        showvid={showvid}
        key={item.id}
        gif={item.file}
        title={item.title}
        startingMove={item.startingMove}
      />
    );
  });

  return (
    <div className="combo-card glass style-2">
      <form>
        <label for="showvid">Show Vid</label>
        <input
          onChange={() => {
            showVid();
            console.log(showvid);
          }}
          name="showvid"
          type="checkbox"
        />
        <input onChange={handleChange} value={selectedMove} list="Move Set"  />
        <datalist id="Move Set" >
          <option value={"d-throw"} />
          <option value={"f-throw"} />
          <option value={"n-air"} />
          <option value={"up-air"} />
          <option selected value={"f-air"} />
          <option value={"d-air"} />
          <option value={"b-air"} />
          <option value={"jab"} />
          <option value={"needles"} />
          <option value={"up-tilt"} />
          <option value={"f-tilt"} />
          <option value={"d-tilt"} />
        </datalist>

      </form>
      {comboVids}
    </div>
  );
}
export default ComboCard;
