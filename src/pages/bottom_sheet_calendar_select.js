export default function BottomSheetCalendarSelect() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">검진 일자 선택</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="display_flex_row gap_32 calendar_top_date justify_content_center">
          <img
            src="/img/arrow_left_prediction_date.svg"
            width="28"
            height="28"
            alt="arrow left"
          ></img>
          <div className="font_17 weight_semi_bold color_gray_90">
            2023년 8월
          </div>
          <img
            src="/img/arrow_right_prediction_date.svg"
            width="28"
            height="28"
            alt="arrow right"
          ></img>
        </div>
        <div className="bottom_two_button_wrap display_flex_column gap_8">
          <button className="button_common button_gray font_15 weight_semi_bold color_gray_0">
            확인
          </button>
          <button className="button_common button_primary font_15 weight_semi_bold">
            확인
          </button>
        </div>
      </div>
    </>
  );
}
