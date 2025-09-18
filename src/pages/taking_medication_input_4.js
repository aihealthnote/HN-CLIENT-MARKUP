export default function TakingMedicationInput4() {
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
      <div className="display_flex_column taking_medication_indicator shadow_normal">
        <div className="display_flex_column gap_8 ">
          <div className="profress_indicator_warp2 display_flex_row gap_4">
            <div className="progress_indicator_wrap_on_bl radius_12"></div>
            <div className="progress_indicator_wrap_on_bl radius_12"></div>
            <div className="progress_indicator_wrap_on_bl radius_12"></div>
            <div className="progress_indicator_wrap_on_bl radius_12"></div>
          </div>
          <div className="display_flex_row gap_6 align_items_center">
            <div className="pregress_indicator_number_wrap font_13 weight_semi_bold text_align_center display_flex_row align_items_center justify_content_center">
              <span className="font_13 weight_semi_bold">4</span>/4
            </div>
            <div className="font_14 weight_regular color_gray_70">
              복용 횟수, 기간 입력하기
            </div>
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
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
        </div>
      </div>
      <div className="display_flex_column gap_16">
        <div className="display_flex_column gap_32 taking_medication_box">
          <div className="display_flex_row space_between">
            <div className="font_22 weight_semi_bold color_gray_90 ellipsis">
              하루 복용 횟수와<br></br>기간을 입력해주세요
            </div>
            <img
              src="/img/taking_medication_clock.svg"
              width="56"
              height="56"
              alt="clock"
            ></img>
          </div>
          <div className="display_flex_column gap_12">
            <div>
              <label
                for="input_normal"
                className="font_15 weight_semi_bold color_gray_90 width_50"
              >
                하루 복용 횟수
              </label>
              <div className="display_flex_row gap_4 justify_content_flex_end align_items_center">
                <img
                  src="/img/minus_circle_off.svg"
                  width="24"
                  height="24"
                  alt="minus"
                ></img>
                <div className="taking_medication_number text_align_center font_19 weight_semi_bold color_gray_90">
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
            {/* <div className="border_gray_20 radius_12 padding_16"></div> */}
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
          <div>
            <div className="display_flex_column gap_12">
              <label
                for="input_normal"
                className="font_15 weight_semi_bold color_gray_90 width_50"
              >
                복용 기간
              </label>
              <div className="display_flex_row hearing_button_wrap">
                <div className="hearing_button_left_off width_50 text_align_center font_14 weight_medium">
                  계속 복용
                </div>
                <div className="hearing_button_right_on hearing_button_right_off width_50 text_align_center font_14 weight_medium color_gray_70">
                  직접 설정
                </div>
              </div>
              <div className="display_flex_row gap_12 align_items_center">
                <div class="input_date_wrapper width_50">
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
                <div className="font_17 weight_regular color_gray_90">~</div>
                <div class="input_date_wrapper width_50">
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
          </div>
        </div>
      </div>

      <div className="display_flex_column gap_4 padding_20">
        <div className="weight_semi_bold">[참고] 영양제 복용 가이드</div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            시간대
          </div>
          <div className="graph_height_30 flex_05 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            공복 여부
          </div>
          <div className="graph_height_30 flex_1 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            영양제명
          </div>
        </div>
        <div className="display_flex_row gap_4 min_height_120">
          <div className="flex_05 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            오전
          </div>
          <div className="flex_05 display_flex_column gap_4 justify_content_between">
            <div className="graph_cholestrol_error radius_4 font_13 weight_semi_bold text_align_center background_gray_20 flex_1 display_flex_column justify_content_center">
              식전
            </div>
            <div className="graph_cholestrol_threshold radius_4 font_13 weight_semi_bold text_align_center background_gray_20 flex_1 display_flex_column justify_content_center">
              식사(중)직후
            </div>
          </div>

          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              유산균
              <br />
              철분제
            </div>
            <div className="background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              코엔자임Q10
              <br />
              비타민C,D
              <br />
              종합비타민
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="flex_05 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            오후
          </div>

          <div className="flex_05 display_flex_column gap_4 justify_content_between">
            <div className="graph_cholestrol_normal radius_4 font_13 weight_semi_bold text_align_center background_gray_20 flex_1 display_flex_column justify_content_center">
              식후
            </div>
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              마그네슘
              <br />
              오메가3
              <br />
              칼슘
            </div>
          </div>
        </div>
        <div className="display_flex_column color_gray_70 font_13 weight_regular justify_content_center">
          <div className="font_12 color_gray_60">
            ※ 철분제와 칼슘, 유산균과 항생제는 2시간 이상 간격이 필요합니다.
          </div>
          <div className="font_12 color_gray_60">
            ※ 비타민C와 철분제는 같이 복용 시 도움이 됩니다.
          </div>
        </div>
      </div>

      <div className="checkup_input_bottom_wrap width_100 background_gray_0">
        <div className="checkup_input_bottom display_flex_row space_between">
          <button className="checkup_input_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            이전
          </button>
          <button className="checkup_input_common radius_8 font_15 weight_medium color_gray_0 checkup_input_next">
            다음
          </button>
        </div>
      </div>
    </>
  );
}
