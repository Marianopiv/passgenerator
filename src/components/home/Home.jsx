import React, { useEffect, useState } from "react";
import { strong, optionsFull } from "../config/config";
import rightArrow from "../../assets/rightArrow.png";
import copyIcon from "../../assets/copyIcon.png";
import Swal from "sweetalert2";
import "./style.css";
import {
  generateRandomLetter,
  copy,
  colorDecider,
  checkBoxesDecider,
} from "../../helper/helper";
import Checkboxes from "../checkboxes/Checkboxes";
import Strength from "../strength/Strength";
const Home = () => {
  const [characters, setCharacters] = useState(4);
  const [password, setPassword] = useState([]);
  const [alphabetChanged, setAlphabetChanged] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleToogle = (selected) => {
    return setAlphabetChanged([...alphabetChanged, selected]);
  };

  const handleChange = (event, selected) => {
    if (event.target.checked) {
      handleToogle(selected);
    } else {
      setAlphabetChanged(
        alphabetChanged.filter((item) => !selected.name.includes(item.name))
      );
    }
    setIsChecked(!isChecked);
  };

  const handleClick = () => {
    if (alphabetChanged.length > 0) {
      let pass = [];
      for (let i = 0; i < characters; i++) {
        pass = [pass, generateRandomLetter(alphabetChanged)];
      }
      setPassword(
        [...pass.toString().slice(0, characters * 2)].filter(
          (item) => item !== ","
        )
      );
    } else {
      Swal.fire({
        text: "Select at least one option with the checkbox",
        confirmButtonColor: "#000",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {}, [characters]);

  return (
    <>
      <div className="bg-blue-900 flex justify-center h-screen text-white items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-gray-500"> Password Generator</h1>
          <div className="flex mb-3 items-center justify-between px-2 py-0 bg-stone-800">
            <h3 className="my-5 text-gray-500 ">{password}</h3>
            <img
              className={`w-4 h-4 ${
                password.length > 0 ? "hover:cursor-pointer " : ""
              } `}
              onClick={password.length > 0 ? () => copy(password) : null}
              src={copyIcon}
              alt=""
            />
          </div>
          <div className="bg-stone-800 flex flex-col gap-5 px-4 w-64 py-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs">Character Length</h3>
              <h3 className="text-green-1000">{characters}</h3>
            </div>
            <input
              className=""
              min={4}
              max={16}
              type="range"
              name=""
              id=""
              onChange={(e) => setCharacters(e.target.value)}
            />
            <div className="flex flex-col gap-3">
              {optionsFull.map((item, index) => (
                <Checkboxes
                  key={index}
                  item={item}
                  handleChange={handleChange}
                />
              ))}
            </div>
            <div className=" bg-stone-900 p-3 flex justify-between items-center">
              <h3 className="uppercase text-gray-500 text-xs">strength</h3>{" "}
              <div className="flex">
                {checkBoxesDecider(characters, strong).map((item, index) => (
                  <Strength
                    classColor={colorDecider(characters)}
                    key={index}
                    item={item}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2   py-3 font-semibold text-black text-xs bg-green-1000">
              <button className="uppercase text-gray-600" onClick={handleClick}>
                Generate{" "}
              </button>
              <img className="w-2 h-2" src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
