export default function TakingMedicationInput3() {
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
            <div className="progress_indicator_wrap_bg background_gray_10 radius_12"></div>
          </div>
          <div className="display_flex_row gap_6 align_items_center">
            <div className="pregress_indicator_number_wrap font_13 weight_semi_bold text_align_center display_flex_row align_items_center justify_content_center">
              <span className="font_13 weight_semi_bold">3</span>/4
            </div>
            <div className="font_14 weight_regular color_gray_70">
              복용 주기 입력하기
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
              복약할 약의<br></br>복용 주기를 선택해주세요
            </div>
            <img
              src="/img/taking_medication_calendar.svg"
              width="56"
              height="56"
              alt="pill"
            ></img>
          </div>
          <div className="display_flex_row taking_medication_tab">
            <div className="font_14 taking_medication_tab_on taking_medication_tab_left weight_medium color_gray_90 border_gray_20 text_align_center">
              매일
            </div>
            <div className="font_14 weight_medium color_gray_90 border_gray_20 text_align_center">
              매주
            </div>
            <div className="font_14 weight_medium color_gray_90 border_gray_20 text_align_center">
              매월
            </div>
            <div className="font_14 taking_medication_tab_right weight_medium color_gray_90 border_gray_20 text_align_center">
              지정된 간격
            </div>
          </div>
          <div className="display_flex_row padding_0_20 gap_4 justify_content_center text_align_center taking_medication_tab_week">
            <div className="taking_medication_tab_week_off">월</div>
            <div className="taking_medication_tab_week_on">화</div>
            <div className="taking_medication_tab_week_off">수</div>
            <div className="taking_medication_tab_week_off">목</div>
            <div className="taking_medication_tab_week_off">금</div>
            <div className="taking_medication_tab_week_off">토</div>
            <div className="taking_medication_tab_week_off">일</div>
          </div>
          <div className="display_flex_column gap_8">
            <div className="interval_wrap_common background_gray_5 interval_wrap_off radius_8  display_flex_row align_items_center">
              <label htmlFor="interval_1" className="chk_box">
                <input type="checkbox" id="interval_1" />
                <span className="chk_circle_on"></span>
                <div className="font_15 weight_medium">2일 간격</div>
              </label>
            </div>
            <div className="interval_wrap_common interval_wrap_on background_gray_5 interval_wrap_off radius_8 display_flex_row align_items_center">
              <label htmlFor="interval_2" className="chk_box">
                <input type="checkbox" id="interval_2" checked />
                <span className="chk_circle_on"></span>
                <div className="font_15 weight_medium">3일 간격</div>
              </label>
            </div>
            <div className="interval_wrap_common background_gray_5 interval_wrap_off radius_8 display_flex_row align_items_center">
              <label htmlFor="interval_3" className="chk_box">
                <input type="checkbox" id="interval_3" />
                <span className="chk_circle_on"></span>
                <div className="font_15 weight_medium">4일 간격</div>
              </label>
            </div>
            <div className="interval_wrap_common background_gray_5 interval_wrap_off radius_8 display_flex_row align_items_center">
              <label htmlFor="interval_4" className="chk_box">
                <input type="checkbox" id="interval_4" />
                <span className="chk_circle_on"></span>
                <div className="font_15 weight_medium">5일 간격</div>
              </label>
            </div>
            <div className="interval_wrap_common background_gray_5 interval_wrap_off radius_8 display_flex_row align_items_center">
              <label htmlFor="interval_5" className="chk_box">
                <input type="checkbox" id="interval_5" />
                <span className="chk_circle_on"></span>
                <div className="font_15 weight_medium">6일 간격</div>
              </label>
            </div>
            <div className="interval_wrap_common background_gray_5 interval_wrap_off radius_8 display_flex_row align_items_center">
              <label htmlFor="interval_6" className="chk_box">
                <input type="checkbox" id="interval_6" />
                <span className="chk_circle_on"></span>
                <div className="font_15 weight_medium">7일 간격</div>
              </label>
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
            다음
          </button>
        </div>
      </div>
    </>
  );
}
