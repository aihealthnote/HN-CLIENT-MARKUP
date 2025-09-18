export default function SelectCare() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">검진 항목 추가</span>
      </div>
      <div className="font_14 weight_regular color_gray_70 padding_12_20">
        선택 건강 검진 항목을 입력해주세요
      </div>
      <div className="display_flex_column gap_12">
        <div className="meal_search_box display_flex_column gap_16 ">
          <div className="display_flex_column gap_12">
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_left"
                class="input_left radius_8 width_100"
                placeholder=""
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
        <div className="display_flex_column padding_8_20">
          <div className="border_bottom_gray_20 display_flex_row space_between align_items_center width_100">
            <div className="display_flex_row height_64 align_items_center gap_12">
              <img
                src="/img/select_care_list.svg"
                width="21"
                height="23"
                alt="list"
              ></img>
              <div className="color_gray_90 weight_medium font_15 display_flex_column">
                <div className="font_13 weight_regular color_gray_70">
                  당뇨 검진
                </div>
                <div>
                  <span className="color_2AC96E weight_medium font_15">당</span>
                  화혈색소(HbA1c)
                </div>
              </div>
            </div>
            <img src="/img/check_circle_gray.svg" width="24" height="24"></img>
          </div>
          <div className="border_bottom_gray_20 display_flex_row space_between align_items_center width_100">
            <div className="display_flex_row height_64 align_items_center gap_12">
              <img
                src="/img/select_care_list.svg"
                width="21"
                height="23"
                alt="list"
              ></img>
              <div className="color_gray_90 weight_medium font_15 display_flex_column">
                <div className="font_13 weight_regular color_gray_70">
                  소변 검진
                </div>
                <div>
                  요
                  <span className="color_2AC96E weight_medium font_15">당</span>
                </div>
              </div>
            </div>
            <img src="/img/check_circle_gr.svg" width="24" height="24"></img>
          </div>
        </div>
      </div>
      <div className="checkup_input_bottom_wrap width_100 background_gray_0">
        <div className="checkup_input_bottom display_flex_row space_between">
          <button className="checkup_input_common radius_8 font_15 weight_medium color_gray_0 checkup_input_next">
            다음
          </button>
        </div>
      </div>
    </>
  );
}
