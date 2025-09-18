export default function FamilyManagementAddEmpty() {
  return (
    <>
      <div className="top_title_wrap_2 display_flex_row space_between">
        <img></img>
        <span className="font_17 weight_semi_bold">연락처</span>
        <img
          src="/img/close_bk.svg"
          width="24px"
          height="24px"
          alt="close"
        ></img>
      </div>
      <div className="meal_search_box display_flex_column gap_16">
        <div className="display_flex_column gap_12">
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_left"
              class="input_left radius_8 width_100"
              placeholder="이름을 검색해보세요"
            />
            <img
              src="/img/search_bk.svg"
              width="24"
              height="24"
              className="input_search"
            ></img>
            <img
              src="/img/close_circle_gray.svg"
              width="20"
              height="20"
              className="input_unit"
            ></img>
          </div>
        </div>
      </div>
      <div className="position_relaitve background_gray_5 height_100vh">
        <div className="display_flex_column text_align_center gap_20 align_items_center position_absolute empty_message">
          <img src="/img/health_care_question.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              검색된 연락처가 없습니다
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">선택 완료</button>
      </div>
    </>
  );
}
