export default function FamilyManagementAddContact() {
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
      <ul className="padding_16_20 display_flex_column gap_8 background_gray_5">
        <li className="meal_list_off display_flex_row space_between padding_16 radius_8 background_EAF5EB align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gr.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column">
              <div className="font_15 weight_medium color_gray_90">
                김승돈 부장님 (selected)
              </div>
              <div className="font_12 weight_regular color_gray_50">
                010-8362-5684
              </div>
            </div>
          </div>
        </li>
        <li className="meal_list_off display_flex_row space_between padding_16 radius_8 background_gray_20 align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gray_disabled.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column">
              <div className="font_15 weight_medium color_gray_90">
                김승돈 부장님 (disabled)
              </div>
              <div className="font_12 weight_regular color_gray_50">
                010-8362-5684
              </div>
            </div>
          </div>
        </li>
        <li className="meal_list_off display_flex_row space_between padding_16 radius_8 background_gray_0 align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gray_empty.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column">
              <div className="font_15 weight_medium color_gray_90">
                김승돈 부장님 (normal)
              </div>
              <div className="font_12 weight_regular color_gray_50">
                010-8362-5684
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">선택 완료</button>
      </div>
    </>
  );
}
