import split from "../Resources/Jor-DSC00727-Edit.jpg";

export default function Split() {
  return (
    <div className="BigSplit">
      <div className="bgcircle"></div>
      <img src={split} />
      <div className="RightBoy">
        <h1>
          Creating Digital stories<span>One Frame At A Time</span>
        </h1>
        <button className="themebutton1">VIEW MORE</button>
      </div>
    </div>
  );
}
