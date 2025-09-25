export default function HealthCareMealInput2() {
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
      <div className="padding_0_20">
        <div className="display_flex_column gap_12">
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="2024년 6월 17일(월)"
              readonly
            />
            <img
              src="/img/input_date.svg"
              width="20"
              height="20"
              alt="date"
              class="date_img"
            />
          </div>
        </div>
      </div>
      <div className="display_flex_column taking_medication_indicator">
        <div className="taking_medication_chip_wrap display_flex_row gap_6 padding_12_0">
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">바나나</div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">그래놀라</div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">현미밥</div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              부대찌개도 되나요
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              오모리 김치찌개 컵라면
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
        </div>
      </div>
      <div className="padding_20 background_gray_5 display_flex_column gap_16">
        <div className="height_36 text_align_center line_height_36 color_0CC25A font_15 weight_semi_bold">
          + 식단 추가하기
        </div>
        <div className="background_gray_0 border_gray_10 radius_12">
          <div className="display_flex_row space_between padding_20_20_0">
            <div className="display_flex_row align_items_center gap_4">
              <img
                src="/img/meal_fork_color.svg"
                width="24"
                height="24"
                alt="meal"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                식사량 입력
              </div>
            </div>
            <div className="font_15 weight_regular color_gray_90">
              총{' '}
              <span className="font_15 weight_semi_bold color_gray_90">
                1020
              </span>
              kcal
            </div>
          </div>
          <ul className="padding_16_20 display_flex_column gap_8">
            <li className="meal_list_off display_flex_column gap_8 padding_16 radius_8 background_gray_5 align_items_center">
              <div className="display_flex_row space_between gap_12 align_items_center width_100">
                <div className="display_flex_column gap_4">
                  <div className="font_15 weight_medium color_gray_90">
                    바나나
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    중간 크기 1개 (100g)
                  </div>
                </div>
                <div className="display_flex_row gap_2 background_gray_0 border_gray_10 meal_number_picker">
                  <img
                    src="/img/minus_circle_on.svg"
                    width="24"
                    height="24"
                    alt="minus"
                  ></img>
                  <div className="meal_number_select text_align_center font_15 weight_semi_bold color_gray_90">
                    3
                  </div>
                  <img
                    src="/img/plus_circle_on.svg"
                    width="24"
                    height="24"
                    alt="plus"
                  ></img>
                </div>
              </div>
              <div className="font_17 weight_semi_bold color_gray_90 text_align_right width_100">
                270
                <span className="font_15 weight_medium color_gray_70">
                  {' '}
                  kcal
                </span>
              </div>
            </li>
            <li className="meal_list_off display_flex_column gap_8 padding_16 radius_8 background_gray_5 align_items_center">
              <div className="display_flex_row space_between gap_12 align_items_center width_100">
                <div className="display_flex_column gap_4">
                  <div className="font_15 weight_medium color_gray_90">
                    칼국수
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    1인분 (약 350~400g)
                  </div>
                </div>
                <div className="display_flex_row gap_2 background_gray_0 border_gray_10 meal_number_picker">
                  <img
                    src="/img/minus_circle_off.svg"
                    width="24"
                    height="24"
                    alt="minus"
                  ></img>
                  <div className="meal_number_select text_align_center font_15 weight_semi_bold color_gray_90">
                    1
                  </div>
                  <img
                    src="/img/plus_circle_on.svg"
                    width="24"
                    height="24"
                    alt="plus"
                  ></img>
                </div>
              </div>
              <div className="font_17 weight_semi_bold color_gray_90 text_align_right width_100">
                300
                <span className="font_15 weight_medium color_gray_70">
                  {' '}
                  kcal
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="font_12 color_gray_60">
          출처: 식품안전나라 영양성분 DB, 2020 한국인 영양소 섭취기준, KDCA
          영양표시
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
