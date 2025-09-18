export default function TakingMedicationInputDirectly2() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">복용약 등록</span>
      </div>
      <div className="display_flex_column gap_8 padding_0_20_8 shadow_normal">
        <div className="profress_indicator_warp2 display_flex_row gap_4">
          <div className="progress_indicator_wrap_on_bl_50 radius_12"></div>
          <div className="progress_indicator_wrap_on_bl_50 radius_12"></div>
        </div>
        <div className="display_flex_row gap_6 align_items_center">
          <div className="pregress_indicator_number_wrap font_13 weight_semi_bold text_align_center display_flex_row align_items_center justify_content_center">
            <span className="font_13 weight_semi_bold">2</span>/2
          </div>
          <div className="font_14 weight_regular color_gray_70">
            복용 주기, 복용 시간 선택
          </div>
        </div>
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
        </div>
      </div>
      <div className="background_gray_5 padding_20 display_flex_column gap_40">
        <div className="display_flex_column gap_8">
          <div className="display_flex_row gap_8">
            <img
              src="/img/taking_medication_calendar.svg"
              width="24"
              height="24"
            ></img>
            <div className="font_15 weight_semi_bold color_gray_90">
              복용 빈도
            </div>
          </div>
          <div className="display_flex_column gap_8">
            <div className="background_gray_0 border_gray_10 padding_12_16 taking_medication_list_wrap_height radius_12 display_flex_column gap_8">
              <div className="display_flex_row space_between align_items_center">
                <div className="display_flex_row gap_8 interval_accordion">
                  <img
                    src="/img/check_circle_gr.svg"
                    width="20"
                    height="20"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    매일
                  </div>
                </div>
                <img
                  src="/img/arrow_down_bk.svg"
                  width="20"
                  height="20"
                  alt="arrow"
                ></img>
              </div>
              <div className="display_flex_row gap_4">
                <div className="display_flex_row gap_4 interval_button_common justify_content_center interval_button_on text_align_center">
                  <div className="interval_button_on_text font_14 weight_medium">
                    일 3회
                  </div>
                  <img
                    src="/img/check_gr_dark.svg"
                    width="20"
                    height="20"
                    alt="check"
                  ></img>
                </div>
                <div className="display_flex_row border_gray_20 gap_4 interval_button_common background_gray_0 justify_content_center  text_align_center">
                  <div className="font_14 weight_medium">일 2회</div>
                  <img
                    src="/img/check_gray.svg"
                    width="20"
                    height="20"
                    alt="check"
                  ></img>
                </div>
                <div className="display_flex_row border_gray_20 gap_4 background_gray_0 interval_button_common justify_content_center  text_align_center">
                  <div className="font_14 weight_medium">일 1회</div>
                  <img
                    src="/img/check_gray.svg"
                    width="20"
                    height="20"
                    alt="check"
                  ></img>
                </div>
              </div>
            </div>
            <div className="background_gray_0 border_gray_10 padding_12_16 radius_12 display_flex_column gap_8">
              <div className="display_flex_row space_between align_items_center">
                <div className="display_flex_row gap_8 interval_accordion">
                  <img
                    src="/img/check_circle_gray_empty.svg"
                    width="20"
                    height="20"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    매주
                  </div>
                </div>
                <img
                  src="/img/arrow_down_bk.svg"
                  width="20"
                  height="20"
                  alt="arrow"
                ></img>
              </div>
              <div className="display_flex_row gap_4 justify_content_center text_align_center taking_medication_tab_week">
                <div className="taking_medication_tab_week_off">월</div>
                <div className="taking_medication_tab_week_on">화</div>
                <div className="taking_medication_tab_week_off">수</div>
                <div className="taking_medication_tab_week_off">목</div>
                <div className="taking_medication_tab_week_off">금</div>
                <div className="taking_medication_tab_week_off">토</div>
                <div className="taking_medication_tab_week_off">일</div>
              </div>
            </div>
            <div className="background_gray_0 border_gray_10 padding_12_16 taking_medication_list_height radius_12 display_flex_column gap_8">
              <div className="display_flex_row space_between align_items_center">
                <div className="display_flex_row gap_8 interval_accordion">
                  <img
                    src="/img/check_circle_gray_empty.svg"
                    width="20"
                    height="20"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    매월
                  </div>
                </div>
                <img
                  src="/img/arrow_up_bk.svg"
                  width="20"
                  height="20"
                  alt="arrow"
                ></img>
              </div>
            </div>
            <div className="background_gray_0 border_gray_10 padding_12_16 radius_12 display_flex_column gap_8">
              <div className="display_flex_row space_between align_items_center">
                <div className="display_flex_row gap_8 interval_accordion">
                  <img
                    src="/img/check_circle_gr.svg"
                    width="20"
                    height="20"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    지정된 간격
                  </div>
                </div>
                <img
                  src="/img/arrow_down_bk.svg"
                  width="20"
                  height="20"
                  alt="arrow"
                ></img>
              </div>
              <div className="display_flex_column gap_12">
                <div className="display_flex_column gap_8">
                  <div className="display_flex_row gap_8">
                    <div className="display_flex_row width_50 background_gray_5 width_50 gap_8 radius_8 align_items_center specified_interval_common">
                      <img
                        src="/img/check_circle_gray_empty.svg"
                        width="20"
                        height="20"
                      ></img>
                      <div className="font_15 weight_medium color_gray_90">
                        2일 간격
                      </div>
                    </div>
                    <div className="display_flex_row width_50 gap_8 radius_8 align_items_center specified_interval_common specified_interval_on">
                      <img
                        src="/img/check_circle_gr.svg"
                        width="20"
                        height="20"
                      ></img>
                      <div className="font_15 weight_medium color_gray_90">
                        3일 간격
                      </div>
                    </div>
                  </div>
                  <div className="display_flex_row gap_8">
                    <div className="display_flex_row width_50 background_gray_5 width_50 gap_8 radius_8 align_items_center specified_interval_common">
                      <img
                        src="/img/check_circle_gray_empty.svg"
                        width="20"
                        height="20"
                      ></img>
                      <div className="font_15 weight_medium color_gray_90">
                        4일 간격
                      </div>
                    </div>
                    <div className="display_flex_row width_50 background_gray_5 width_50 gap_8 radius_8 align_items_center specified_interval_common">
                      <img
                        src="/img/check_circle_gray_empty.svg"
                        width="20"
                        height="20"
                      ></img>
                      <div className="font_15 weight_medium color_gray_90">
                        5일 간격
                      </div>
                    </div>
                  </div>
                  <div className="display_flex_row gap_8">
                    <div className="display_flex_row width_50 background_gray_5 width_50 gap_8 radius_8 align_items_center specified_interval_common">
                      <img
                        src="/img/check_circle_gray_empty.svg"
                        width="20"
                        height="20"
                      ></img>
                      <div className="font_15 weight_medium color_gray_90">
                        6일 간격
                      </div>
                    </div>
                    <div className="display_flex_row width_50 background_gray_5 width_50 gap_8 radius_8 align_items_center specified_interval_common">
                      <img
                        src="/img/check_circle_gray_empty.svg"
                        width="20"
                        height="20"
                      ></img>
                      <div className="font_15 weight_medium color_gray_90">
                        7일 간격
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="display_flex_row gap_4">
                  <div className="display_flex_row gap_4 interval_button_common justify_content_center interval_button_on text_align_center">
                    <div className="interval_button_on_text font_14 weight_medium">
                      일 3회
                    </div>
                    <img
                      src="/img/check_gr_dark.svg"
                      width="20"
                      height="20"
                      alt="check"
                    ></img>
                  </div>
                  <div className="display_flex_row border_gray_20 gap_4 interval_button_common background_gray_0 justify_content_center  text_align_center">
                    <div className="font_14 weight_medium">일 2회</div>
                    <img
                      src="/img/check_gray.svg"
                      width="20"
                      height="20"
                      alt="check"
                    ></img>
                  </div>
                  <div className="display_flex_row border_gray_20 gap_4 background_gray_0 interval_button_common justify_content_center  text_align_center">
                    <div className="font_14 weight_medium">일 1회</div>
                    <img
                      src="/img/check_gray.svg"
                      width="20"
                      height="20"
                      alt="check"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="display_flex_row gap_8">
            <img
              src="/img/taking_medication_clock.svg"
              width="24"
              height="24"
            ></img>
            <div className="font_15 weight_semi_bold color_gray_90">
              복용 시간
            </div>
          </div>
          <div className="display_flex_column padding_16 background_gray_0 border_gray_20 radius_12 gap_4">
            <div className="display_flex_row space_between">
              <div className="display_flex_row gap_6 align_items_center">
                <img
                  src="/img/taking_medication_clock_2.svg"
                  width="20"
                  height="20"
                ></img>
                <div className="font_14 weight_medium color_gray_90">
                  복용시간 1
                </div>
              </div>
              <div class="input_date_wrapper width_50">
                <input
                  type="text"
                  id="input_normal"
                  class="input_normal radius_8"
                  placeholder="복용시간 입력"
                  readOnly
                />
                <img
                  src="/img/arrow_down_bk.svg"
                  width="20"
                  height="20"
                  alt="arrow down"
                  className="input_unit"
                ></img>
              </div>
            </div>
            <div className="display_flex_row space_between">
              <div className="display_flex_row gap_6 align_items_center">
                <img
                  src="/img/taking_medication_clock_2.svg"
                  width="20"
                  height="20"
                ></img>
                <div className="font_14 weight_medium color_gray_90">
                  복용시간 2
                </div>
              </div>
              <div class="input_date_wrapper width_50">
                <input
                  type="text"
                  id="input_normal"
                  class="input_normal radius_8"
                  placeholder="복용시간 입력"
                  readOnly
                />
                <img
                  src="/img/arrow_down_bk.svg"
                  width="20"
                  height="20"
                  alt="arrow down"
                  className="input_unit"
                ></img>
              </div>
            </div>
            <div className="display_flex_row space_between">
              <div className="display_flex_row gap_6 align_items_center">
                <img
                  src="/img/taking_medication_clock_2.svg"
                  width="20"
                  height="20"
                ></img>
                <div className="font_14 weight_medium color_gray_90">
                  복용시간 3
                </div>
              </div>
              <div class="input_date_wrapper width_50">
                <input
                  type="text"
                  id="input_normal"
                  class="input_normal radius_8"
                  placeholder="복용시간 입력"
                  readOnly
                />
                <img
                  src="/img/arrow_down_bk.svg"
                  width="20"
                  height="20"
                  alt="arrow down"
                  className="input_unit"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkup_input_bottom_wrap width_100 background_gray_0">
        <div className="checkup_input_bottom display_flex_row space_between">
          <button className="checkup_input_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            이전
          </button>
          <button className="checkup_input_common radius_8 font_15 weight_medium color_gray_0 checkup_input_next">
            등록하기
          </button>
        </div>
      </div>
    </>
  );
}
