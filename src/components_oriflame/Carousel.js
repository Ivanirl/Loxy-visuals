import herobiggy from "../Resources/Jor-DSC00689-Edit.jpg";

export default function Carousel() {
  return (
    <div className="BigCaro">
      <img src={herobiggy} />
      <div className="rootbeer">
        {" "}
        <div>
          <button className="themebutton1">BOOK A CALL NOW</button>
        </div>
      </div>
    </div>
  );
}
