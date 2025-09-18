export default function BottomSheetUnitSelect() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column align_items_center gap_24">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">검진 단위 선택</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="display_flex_column width_100">
          <div className="display_flex_row space_between height_52 unit_select_box background_gray_10">
            <div className="font_15 weight_regular color_gray_90">mg/dL</div>
            <img
              src="/img/check_bl.svg"
              width="24"
              height="24"
              alt="check"
            ></img>
          </div>
          <div className="display_flex_row space_between height_52 unit_select_box">
            <div className="font_15 weight_regular color_gray_90">mL/min</div>
          </div>
          <div className="display_flex_row space_between height_52 unit_select_box">
            <div className="font_15 weight_regular color_gray_90">kg</div>
          </div>
          <div className="display_flex_row space_between height_52 unit_select_box">
            <div className="font_15 weight_regular color_gray_90">cm</div>
          </div>
          <div className="display_flex_row space_between height_52 unit_select_box">
            <div className="font_15 weight_regular color_gray_90">kg/㎡</div>
          </div>
        </div>
      </div>
    </>
  );
}
