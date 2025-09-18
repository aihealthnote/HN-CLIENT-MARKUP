export default function TakingMedicationConfirm() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column">
        <div className="display_flex_row space_between padding_24 width_100 gap_8">
          <div className="font_19 weight_semi_bold">복용약 등록방법 선택</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="display_flex_row gap_8 padding_0_20 margin_bottom_50">
          <div className="display_flex_column align_items_center border_gray_10 background_gray_5 radius_8 gap_16 padding_20_16 width_50">
            <img
              src="/img/taking_medication_search.svg"
              width="56"
              height="56"
            ></img>
            <div className="display_flex_column gap_12 text_align_center">
              <div className="font_15 weight_semi_bold color_gray_90">
                약 이름으로 검색하기
              </div>
              <div className="font_12 weight_regular color_gray_70">
                (ex. 타이레놀 등)
              </div>
            </div>
          </div>
          <div className="display_flex_column align_items_center border_gray_10 background_gray_5 radius_8 gap_16 padding_20_16 width_50">
            <img
              src="/img/taking_medication_input.svg"
              width="56"
              height="56"
            ></img>
            <div className="display_flex_column gap_12 text_align_center">
              <div className="font_15 weight_semi_bold color_gray_90">
                직접 입력하기
              </div>
              <div className="font_12 weight_regular color_gray_70">
                (ex. 약봉투, 혈압약 등)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
