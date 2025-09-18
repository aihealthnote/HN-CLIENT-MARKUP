export default function HealthCareMealInput3() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">아침</span>
      </div>
      <div className="meal_search_box display_flex_column gap_16 shadow_normal">
        <div className="display_flex_column gap_12">
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_left"
              class="input_left radius_8 width_100"
              placeholder="음식 검색"
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
        <ul className="display_flex_row history_date_tab_wrap history_date_tab_wrap_2 radius_6 text_align_center background_gray_10 align_items_center">
          <li className="color_gray_50 weight_medium font_13">
            최근 추가한 음식
          </li>
          <li className="color_gray_90 weight_semi_bold font_13 background_gray_0 radius_4 shadow_normal">
            직접 입력한 음식
          </li>
        </ul>
      </div>
      <ul className="padding_16_20 display_flex_column gap_8">
        <li className="meal_list_off display_flex_row space_between padding_16 radius_8 background_gray_5 align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gray_empty.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column gap_4">
              <div className="font_15 weight_medium color_gray_90">
                직접 볶은 소불고기덮밥
              </div>
              <div className="font_12 weight_regular color_gray_50">
                1인분 (400g)
              </div>
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            1,620
            <span className="font_15 weight_medium color_gray_70"> kcal</span>
          </div>
        </li>
        <li className="meal_list_off display_flex_row space_between padding_16 radius_8 background_gray_5 align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gray_empty.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column gap_4">
              <div className="font_15 weight_medium color_gray_90">
                마요없이 만든 참치덮밥
              </div>
              <div className="font_12 weight_regular color_gray_50">
                1인분 (380g)
              </div>
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            540
            <span className="font_15 weight_medium color_gray_70"> kcal</span>
          </div>
        </li>
        <li className="meal_list_off display_flex_row space_between padding_16 radius_8 background_gray_5 align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gray_empty.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column gap_4">
              <div className="font_15 weight_medium color_gray_90">
                오트밀쿠키 (설탕無)
              </div>
              <div className="font_12 weight_regular color_gray_50">
                1개 (40g)
              </div>
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            150
            <span className="font_15 weight_medium color_gray_70"> kcal</span>
          </div>
        </li>
        <li className="meal_list_off display_flex_row space_between padding_16 radius_8 background_gray_5 align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gray_empty.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column gap_4">
              <div className="font_15 weight_medium color_gray_90">
                두부초코무스
              </div>
              <div className="font_12 weight_regular color_gray_50">
                1인분 (100g)
              </div>
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            130
            <span className="font_15 weight_medium color_gray_70"> kcal</span>
          </div>
        </li>
      </ul>
      <div className="button_secondary height_48 meal_plus_button radius_8 display_flex_row space_between align_items_center">
        <div className="font_15 weight_medium">음식 추가하기</div>
        <img src="/img/plus_gr.svg" width="20" height="20" alt="plus"></img>
      </div>
      <div className="checkup_input_bottom_wrap width_100 background_gray_0">
        <div className="checkup_input_bottom display_flex_row space_between">
          {/* <button className="checkup_input_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            이전
          </button> */}
          <button className="checkup_input_common radius_8 font_15 weight_medium color_gray_0 checkup_input_next">
            다음
          </button>
        </div>
      </div>
    </>
  );
}
