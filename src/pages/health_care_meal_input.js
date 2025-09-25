export default function HealthCareMealInput() {
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
      <div className="display_flex_column taking_medication_indicator">
        <div className="taking_medication_chip_wrap display_flex_row gap_6 padding_12_0">
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">타이레놀</div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              에페린플러스정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
        </div>
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
          <li className="color_gray_90 weight_semi_bold font_13 background_gray_0 radius_4 shadow_normal">
            최근 추가한 음식
          </li>
          <li className="color_gray_50 weight_medium font_13">
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
              <div className="font_15 weight_medium color_gray_90">바나나</div>
              <div className="font_12 weight_regular color_gray_50">
                중간 크기 1개 (100g)
              </div>
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            90
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </li>
        <li className="meal_list_on display_flex_row space_between padding_16 radius_8 background_gray_5 align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gr.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column gap_4">
              <div className="font_15 weight_medium color_gray_90">칼국수</div>
              <div className="font_12 weight_regular color_gray_50">
                면 + 국물 포함 (약 350~400g 기준)
              </div>
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            4,140
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </li>
        <li className="meal_list_on display_flex_row space_between padding_16 radius_8 background_gray_5 align_items_center">
          <div className="display_flex_row gap_12 align_items_center">
            <img
              src="/img/check_circle_gr.svg"
              width="20"
              height="20"
              alt="check"
            ></img>
            <div className="display_flex_column gap_4">
              <div className="font_15 weight_medium color_gray_90">라면</div>
              <div className="font_12 weight_regular color_gray_50">
                일반 봉지라면 1개 (면 + 스프 포함, 약 120g 기준)
              </div>
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            120
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </li>
      </ul>
      <div className="font_12 color_gray_60 padding_8_20">
        출처:식품안전나라 영양성분 DB, 2020 한국인 영양소 섭취기준, KDCA
        영양표시
      </div>
      <div className="health_care_question display_flex_column text_align_center  gap_20 align_items_center">
        <img
          src="/img/health_care_question.svg"
          width="40"
          height="40"
          alt="question"
        ></img>
        <div className="display_flex_column gap_8">
          <div className="font_14 weight_medium color_gray_70">
            검색 결과가 없어요
          </div>
          <div className="font_13 weight_regular color_gray_50">
            입력한 단어를 확인해주세요
          </div>
        </div>
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
