import React, { useEffect, useState } from "react";
import "./tabFont.styles.scss";
import { ReactComponent as CopySvg } from "../../../images/copy.svg";
import ReactTooltip from "react-tooltip";
import tailwindColors from '../../../tailwindColors'

const TabFont = () => {
  //  #1
  const inputDefault = "Lorem ipsum";
  const [fontSize, setFontSize] = useState(48);
  const [fontSizeTailwindClass, setFontSizeTailwindClass] =
    useState("text-base");
  const [fontUnit, setFontUnit] = useState("px");

  // #2
  const [fontWeight, setFontWeight] = useState("400");
  const [fontWeightTailwindClass, setFontWeightTailwindClass] =
    useState("font-normal");

  // #3

  const [letterSpacing, setLetterSpacing] = useState("0");
  const [letterSpacingTailwindClass, setLetterSpacingTailwindClass] =
    useState("tracking-normal");

  // #4
  const [opacityDegree, setOpacityDegree] = useState(100);
  const [hexValue, setHexValue] = useState('#ec4899');
  // -----------
  // #1
  const changeFontSize = (e) => {
    fontUnit === "px"
      ? e.target.value <= 128 &&
        e.target.value >= 12 &&
        setFontSize(e.target.value)
      : e.target.value <= 8 &&
        e.target.value >= 0.75 &&
        setFontSize(e.target.value);
  };
  const getFontSizeTailwindClass = () => fontSizeTailwindClass;

  const switchFontUnitAndSize = () => {
    if (fontUnit === "px") {
      setFontUnit("rem");
      setFontSize(fontSize * 0.0625);
    } else if (fontUnit === "rem") {
      setFontUnit("px");
      setFontSize(fontSize / 0.0625);
    }
  };

  const resetFontSize = () => {
    setFontSize(16);
    setFontSizeTailwindClass("text-base");
    setFontUnit("px");
  };

  useEffect(() => {
    const convertPxToTailwindClass = () => {
      let testSize = fontUnit === "rem" ? fontSize / 0.0625 : fontSize;

      return testSize < 14
        ? "text-xs"
        : testSize < 16
        ? "text-sm"
        : testSize < 18
        ? "text-base"
        : testSize < 20
        ? "text-lg"
        : testSize < 23
        ? "text-xl"
        : testSize < 28
        ? "text-2xl"
        : testSize < 34
        ? "text-3xl"
        : testSize < 43
        ? "text-4xl"
        : testSize < 55
        ? "text-5xl"
        : testSize < 67
        ? "text-6xl"
        : testSize < 85
        ? "text-7xl"
        : testSize < 113
        ? "text-8xl"
        : testSize <= 128
        ? "text-9xl"
        : "";
    };

    setFontSizeTailwindClass(convertPxToTailwindClass());
  }, [fontSize]);

  // #2
  const changeFontWeight = (e) =>
    e.target.value >= 100 &&
    e.target.value <= 900 &&
    setFontWeight(e.target.value);

  const resetFontWeight = () => {
    setFontWeight("400");
    setFontWeightTailwindClass("font-normal");
  };

  useEffect(() => {
    const convertFontWeightToTailwindClass = () => {
      switch (fontWeight) {
        case "100":
          return "font-thin";
        case "200":
          return "font-extra-light";
        case "300":
          return "font-light";
        case "400":
          return "font-normal";
        case "500":
          return "font-medium";
        case "600":
          return "font-semibold";
        case "700":
          return "font-bold";
        case "800":
          return "font-extra-bold";
        case "900":
          return "font-bold";
        default:
          return "400";
      }
    };

    setFontWeightTailwindClass(convertFontWeightToTailwindClass());
  }, [fontWeight]);

  // #3
  const changeLetterSpacing = (e) => {
    e.target.value >= -0.05 &&
      e.target.value <= 0.1 &&
      setLetterSpacing(e.target.value);
  };

  const resetLetterSpacing = () => {
    setLetterSpacing("0");
    setLetterSpacingTailwindClass("tracking-normal");
  };

  useEffect(() => {
    const convertLetterSpacingToTailwindClass = () => {
      switch (letterSpacing) {
        case "-0.05":
          return "tracking-tighter";
        case "-0.025":
          return "tracking-tight";
        case "0":
          return "tracking-normal";
        case "0.025":
          return "tracking-wide";
        case "0.05":
          return "tracking-wider";
        case "0.075":
          return "tracking-wider";
        case "0.1":
          return "tracking-widest";
        default:
          return "";
      }
    };

    setLetterSpacingTailwindClass(convertLetterSpacingToTailwindClass());
  }, [letterSpacing]);


  // #4
  const changeOpacityDegre = (e) => setOpacityDegree(e.target.value);
  // IS NOT WORKING ALL FUNCTINALITY YET
  const changeHexValue = (e) =>  e.target.value.length <= 7 && setHexValue(e.target.value);
  
  const resetColorPicker = () => {
    setOpacityDegree('100');
    setHexValue('#ec4899');
  }

  /* useEffect
  1 - hexValue - deyishende hexValue al
  2 - hexValue ve Tailwind color hex-lerini qarshilashdir.
  3 - uygun gelen hex-in CLASS-ini gotur, ve state-de saxla.
  */


  return (
    <>
      <div className="font-styles-container grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="font-size-style relative">
          <span className="reset-btn" onClick={() => resetFontSize()}>
            Reset
          </span>
          <h5 className="title">Font Size</h5>

          <div className="font-style-main">
            <div className="font-style-input-display">
              <input
                type="number"
                value={fontSize}
                onChange={(e) => changeFontSize(e)}
              />
              <span>{fontUnit}</span>
            </div>
            <input
              type="range"
              min={fontUnit === "px" ? 12 : 0.75}
              max={fontUnit === "px" ? 128 : 8}
              id="font-size"
              name="font-size"
              step={fontUnit === "px" ? 1 : 0.125}
              className="input-range-move cursor-move"
              value={fontSize}
              onChange={(e) => changeFontSize(e)}
            />
            <p className="switch-px-rem" onClick={switchFontUnitAndSize}>
              Switch to {fontUnit === "px" ? "rem" : "px"}
            </p>
            <p className="flex justify-center ">
              <span className="font-size-tailwind-class mr-3">
                {getFontSizeTailwindClass()}
              </span>
              <span className="mr-3">
                {fontUnit === "rem" ? fontSize : fontSize * 0.0625}rem
              </span>
              <span className="mr-4">
                {fontUnit === "px" ? fontSize : fontSize / 0.0625}px
              </span>
              <span>
                <CopySvg />
              </span>
            </p>
          </div>

          <span className="info-default-value mt-2">
            {(fontSizeTailwindClass === "text-base" &&
              "This is a default value") ||
              (fontSizeTailwindClass === "text-xs" &&
                "This is the lowest value")}
          </span>
        </div>

        <div className="font-weight-style relative">
          <span className="reset-btn" onClick={() => resetFontWeight()}>
            Reset
          </span>
          <h5 className="title">Font Weight</h5>

          <div className="font-style-main">
            <div className="font-style-input-display">
              <input
                type="number"
                value={fontWeight}
                onChange={(e) => changeFontWeight(e)}
                step="100"
              />
            </div>

            <input
              type="range"
              min="100"
              max="900"
              id="font-weight"
              name="font-weight"
              step="100"
              className="input-range-move cursor-move mt-2"
              value={fontWeight}
              onChange={(e) => {
                changeFontWeight(e);
              }}
            />

            <p className="flex justify-center mt-2">
              <span className="font-weight-tailwind-class mr-3">
                {fontWeightTailwindClass}
              </span>
              <span className="mr-3">{fontWeight}</span>
              <span>
                <CopySvg />
              </span>
            </p>
          </div>

          <span className="info-default-value mt-2">
            {(fontWeight === "400" && "This is a default value") ||
              (fontWeight === "100" && "This is the lowest value")}
          </span>
        </div>

        <div className="letter-spacing-style relative">
          <span className="reset-btn" onClick={() => resetLetterSpacing()}>
            Reset
          </span>
          <h5 className="title">Spacing</h5>

          <div className="font-style-main mt-5">
            <div className="font-style-input-display">
              <input
                type="number"
                value={letterSpacing}
                onChange={(e) => changeLetterSpacing(e)}
                step="0.025"
              />
              <span>em</span>
            </div>

            <input
              type="range"
              min="-0.05"
              max="0.1"
              id="letter-spacing"
              name="letter-spacing"
              step="0.025"
              className="input-range-move cursor-move mt-2"
              value={letterSpacing}
              onChange={(e) => {
                changeLetterSpacing(e);
              }}
            />

            <p className="flex justify-center mt-2 mb-5">
              <span className="letter-spacing-tailwind-class mr-3">
                {letterSpacingTailwindClass}
              </span>
              <span className="mr-3">{letterSpacing}</span>
              <span>
                <CopySvg />
              </span>
            </p>
          </div>

          <span className="info-default-value mt-2">
            {(letterSpacing === "0" && "This is a default value") ||
              (letterSpacing === "-0.05" && "This is the lowest value")}
          </span>
        </div>


        <div className="color-picker-style relative">
          <span className="reset-btn" onClick={() => resetColorPicker()}>Reset</span>
          <h5 className="title">Color Picker</h5>

          <div className="font-style-main mt-5">



          <div className="color-picker">
            <input
              type="color"
              value={hexValue}
              style={{opacity:`${opacityDegree/100}`}}
              onChange={(e) => changeHexValue(e)}
            />
          </div>

          <div className="color-picker-input-display">
              <input
                type="text"
                value={hexValue}
                onChange={(e) => changeHexValue(e)}
                placeholder="#000000"
              />
              <span>{opacityDegree}%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              id="letter-spacing"
              name="letter-spacing"
              step="5"
              className="input-range-move cursor-move mt-2"
              value={opacityDegree}
              onChange={(e) => changeOpacityDegre(e)}
            /> 

            <p className="flex justify-center mt-2 mb-5">
              <span className="font-size-tailwind-class mr-3">
                pink-500
              </span>
              <span className="mr-3">{hexValue}</span>
              <span>
                <CopySvg />
              </span>
            </p>
            
          </div>
        </div>
      </div>

      <div className="style-result-container">
        <span className="absolute right-2 top-2 cursor-pointer text-xl">☆</span>
        <input
          className={`w-full px-4 py-4 text-pink-500 ${fontSizeTailwindClass} ${fontWeightTailwindClass} ${letterSpacingTailwindClass}`}
          value={inputDefault}
          onChange={() => {}}
        />

        <div className="flex justify-between py-2 px-2">
          <span
            className="result-tailwind-classes flex gap-1 cursor-pointer"
            data-for="test"
            data-tip="test"
          >
            <span className="result-font-size">
              {
                fontSizeTailwindClass !== 'text-base' && fontSizeTailwindClass
              }
            </span>

            <span className="result-font-weight">
              {
                fontWeightTailwindClass !== 'font-normal' && fontWeightTailwindClass
              }
            </span>

            <span className="result-letter-spacing">
              {
                letterSpacingTailwindClass !== 'tracking-normal' && letterSpacingTailwindClass
              }
            </span>

            <span className="result-color-picker">
            </span>

            <span className="result-font-color">text-pink-500</span>


            <span className="">
              <CopySvg />
            </span>
          </span>
          <ReactTooltip id="test" />

          <span className="cursor-help text-gray-500">ⓘ</span>
        </div>
      </div>
    </>
  );
};

export default TabFont;
