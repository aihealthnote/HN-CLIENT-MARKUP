export default function Scroll() {
  return (
    <>
      <div className="height_44 padding_0_20 display_flex_row align_items_center space_between">
        <img
          src="/img/arrow_left_prediction_date.svg"
          width="28"
          height="28"
        ></img>
        {/* <img
          src="/img/arrow_left_circle_disabled.svg"
          width="28"
          height="28"
        ></img> */}
        <div className="display_flex_row align_items_center gap_4">
          <div className="color_gray_70 font_14 weight_regular ">
            검진일 : 2023.12.07
          </div>
          <img src="/img/ic_arrow.svg" width="16" height="16" alt="arrow"></img>
        </div>
        {/* <img
          src="/img/arrow_right_prediction_date.svg"
          width="28"
          height="28"
        ></img> */}
        <img
          src="/img/arrow_right_circle_disabled.svg"
          width="28"
          height="28"
        ></img>
      </div>
    </>
  );
}
