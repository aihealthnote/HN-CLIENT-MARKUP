export default function HealthCareWorkoutInput() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">운동 기록하기</span>
      </div>
      <div className="display_flex_column background_gray_5 padding_8_20">
        <div className="margin_12_0">
          <div className="display_flex_column gap_12">
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_another background_gray_10 radius_8"
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
        <div className="display_flex_column gap_8">
          <div className="padding_12_16 background_gray_0 border_gray_10 radius_12 gap_16 display_flex_column">
            <div className="display_flex_row space_between height_32 align_items_center">
              <div className="display_flex_row gap_4">
                <img
                  src="/img/workout_fire.svg"
                  width="24"
                  height="24"
                  alt="fire"
                ></img>
                <div className="font_15 weight_semi_bold color_gray_90">
                  운동 선택
                </div>
              </div>
              <div className="display_flex_row gap_4 align_items_center radius_4 border_gray_20 height_32 padding_0_10">
                <img
                  src="/img/search_bk_slim.svg"
                  width="16"
                  height="16"
                  alt="search"
                ></img>
                <div className="font_13 weight_medium color_gray_90">
                  운동 검색
                </div>
              </div>
            </div>
            <div className="display_flex_column gap_12">
              <div className="display_flex_row gap_4 align_items_center">
                <img src="/img/bookmark.svg" width="16" height="16"></img>
                <div className="font_13 weight_medium color_gray_70">
                  즐겨찾기
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="display_flex_row space_between align_items_center height_56 padding_0_16 radius_8 interval_wrap_on">
                  <div className="display_flex_row gap_8 align_items_center">
                    <img
                      src="/img/workout_walking_fast_clear.svg"
                      width="24"
                      height="24"
                      alt="walking fast"
                    ></img>
                    <div className="font_15 weight_medium color_gray_90">
                      빠르게 걷기
                    </div>
                  </div>
                  <img
                    src="/img/check_circle_gr.svg"
                    width="20"
                    height="20"
                    alt="check"
                  ></img>
                </div>
                <div className="display_flex_row space_between align_items_center height_56 padding_0_16 background_gray_5 radius_8 border_transparent">
                  <div className="display_flex_row gap_8 align_items_center">
                    <img
                      src="/img/workout_running.svg"
                      width="24"
                      height="24"
                      height_56
                      alt="running"
                    ></img>
                    <div className="font_15 weight_medium color_gray_90">
                      달리기
                    </div>
                  </div>
                  <img
                    src="/img/check_circle_gray_empty.svg"
                    width="20"
                    height="20"
                    alt="circle"
                  ></img>
                </div>
                <div className="display_flex_row space_between align_items_center height_56 padding_0_16 background_gray_5 radius_8 border_transparent">
                  <div className="display_flex_row gap_8 align_items_center">
                    <img
                      src="/img/workout_bicycle.svg"
                      width="24"
                      height="24"
                      alt="bicycle"
                    ></img>
                    <div className="font_15 weight_medium color_gray_90">
                      자전거
                    </div>
                  </div>
                  <img
                    src="/img/check_circle_gray_empty.svg"
                    width="20"
                    height="20"
                    alt="circle"
                  ></img>
                </div>
              </div>
            </div>
            <button className="font_15 weight_medium color_gray_90 display_flex_row gap_8 border_gray_20 radius_8 height_40 align_items_center justify_content_center">
              운동 더보기
              <img
                src="/img/arrow_right_bk.svg"
                width="20"
                height="20"
                alt="arrow right"
              ></img>
            </button>
          </div>
          <div className="padding_12_16 background_gray_0 border_gray_10 radius_12 display_flex_row space_between align_items_center">
            <div className="display_flex_row align_items_center gap_4 height_32">
              <img
                src="/img/workout_clock.svg"
                width="24"
                height="24"
                alt="clock"
              ></img>
              <div className="font_15 weight_medium color_gray_90">
                운동 시간
              </div>
            </div>
            <div className="display_flex_row align_items_center">
              <div className="font_15 weight_regular color_gray_90">
                <span className="weight_semi_bold">00</span>시간{' '}
                <span className="weight_semi_bold">30</span>분
              </div>
              <img
                src="/img/arrow_right_bk.svg"
                width="20"
                height="20"
                alt="arrow"
              ></img>
            </div>
          </div>
        </div>
        <ul className="text_align_left padding_12_0">
          <li className="font_12 weight_regular color_gray_60">
            출처 : KDCA 신체활동 가이드
          </li>
        </ul>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">저장하기</button>
      </div>
    </>
  );
}
