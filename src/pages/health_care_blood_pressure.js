export default function HealthCareBloodPressure() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">혈당관리</span>
        <img
          src="/img/more.svg"
          width="24"
          height="24"
          alt="more"
          className="top_right_more"
        ></img>
      </div>
      <div className="health_care_more_popup background_gray_0 shadow_normal display_flex_column radius_4 justify_content_center">
        <div className="display_flex_row padding_8_12 gap_8">
          <img
            src="/img/health_care_target.svg"
            width="16"
            weight="16"
            alt="target"
          ></img>
          <div className="font_15 weight_regular color_gray_90">목표 설정</div>
        </div>
        <div className="display_flex_row padding_8_12 gap_8">
          <img
            src="/img/health_care_graph.svg"
            width="16"
            weight="16"
            alt="graph"
          ></img>
          <div className="font_15 weight_regular color_gray_90">이력 보기</div>
        </div>
      </div>
      <div className="graph"></div>
      <div className="display_flex_column background_gray_5 padding_16 gap_8">
        <div className="font_13 weight_regular color_gray_50">4월 20일(목)</div>
        <div className="background_gray_0 border_gray_10 radius_12 display_flex_column gap_24_ padding_20">
          <div className="display_flex_column gap_16">
            <div className="display_flex_column">
              <div className="font_14 weight_medium color_gray_90">
                수축기 혈압
              </div>
              <div className="display_flex_row gap_4 align_items_center">
                <div className="display_flex_row align_items_baseline">
                  <div className="font_32 weight_bold colo_gray_90">120</div>
                  <span className="font_15 weight_medium colo_gray_70">
                    mmHg
                  </span>
                </div>
                {/* <button className="result_unit_button_common result_unit_button_normal radius_12 font_13 weight_semi_bold">
                  정상
                </button> */}
                <button className="result_unit_button_common result_unit_button_warning radius_12 font_13 weight_semi_bold">
                  경고
                </button>
                {/* <button className="result_unit_button_common result_unit_button_error radius_12 font_13 weight_semi_bold">
              질환의심
            </button> */}
              </div>
            </div>
            <div className="divider"></div>
            <div className="display_flex_column">
              <div className="font_14 weight_medium color_gray_90">
                이완기 혈압
              </div>
              <div className="display_flex_row gap_4 align_items_center">
                <div className="display_flex_row align_items_baseline">
                  <div className="font_32 weight_bold colo_gray_90">120</div>
                  <span className="font_15 weight_medium colo_gray_70">
                    mmHg
                  </span>
                </div>
                <button className="result_unit_button_common result_unit_button_normal radius_12 font_13 weight_semi_bold">
                  정상
                </button>
                {/* <button className="result_unit_button_common result_unit_button_warning radius_12 font_13 weight_semi_bold">
                  경고
                </button> */}
                {/* <button className="result_unit_button_common result_unit_button_error radius_12 font_13 weight_semi_bold">
              질환의심
            </button> */}
              </div>
            </div>
          </div>
          <div className="display_flex_row space_between background_gray_5 border_gray_10 radius_8 padding_12_16">
            <div className="display_flex_row gap_4 align_items_center">
              <img
                src="/img/health_care_heart_rate.svg"
                width="20"
                height="20"
                alt="heart_rate"
              ></img>
              <div className="font_14 weight_medium color_gray_90">심박수</div>
            </div>
            <div className="font_14 weight_semi_bold color_gray_90">68 bpm</div>
          </div>
        </div>
        <div className="background_gray_0 border_gray_10 radius_12 padding_20">
          <div className="health_care_question display_flex_column text_align_center  gap_20 align_items_center">
            <img
              src="/img/health_care_question.svg"
              width="40"
              height="40"
              alt="question"
            ></img>
            <div className="display_flex_column gap_8">
              <div className="font_14 weight_medium color_gray_70">
                등록된 혈압 기록이 없어요.
              </div>
              <div className="font_13 weight_regular color_gray_50">
                혈압을 등록해주시면 관리해드릴게요.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding_8_16">
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_column gap_4">
            <div className="display_flex_row align_items_center gap_8">
              <div className="font_17 weight_semi_bold colo_gray_80">
                138/101
                <span className="font_14 weight_medium colo_gray_70">mmHg</span>
              </div>
              <div className="divider_vertical_20"></div>
              <div className="display_flex_row align_items_center gap_2">
                <img
                  src="/img/health_care_heart_rate.svg"
                  width="16"
                  height="16"
                ></img>
                <div className="font_13 weight_regular color_gray_90">
                  66 bpm
                </div>
              </div>
            </div>
            <div className="font_12 weight_regular color_gray_50">
              오후 02:14
            </div>
          </div>
          {/*<img src="/img/list_memo.svg" width="24" height="24" alt="memo"></img>*/}
        </div>
      </div>
      <div className="padding_8_16">
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_column gap_4">
            <div className="display_flex_row align_items_center gap_8">
              <div className="font_17 weight_semi_bold colo_gray_80">
                135/87
                <span className="font_14 weight_medium colo_gray_70">mmHg</span>
              </div>
              {/* <div className="divider_vertical_20"></div>
              <div className="display_flex_row align_items_center gap_2">
                <img
                  src="/img/health_care_heart_rate.svg"
                  width="16"
                  height="16"
                ></img>
                <div className="font_13 weight_regular color_gray_90">
                  66 bpm
                </div>
              </div> */}
            </div>
            <div className="font_12 weight_regular color_gray_50">
              오후 08:14
            </div>
          </div>
          <img src="/img/list_memo.svg" width="24" height="24" alt="memo"></img>
        </div>
      </div>
      <div className="padding_8_16">
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_column gap_4">
            <div className="display_flex_row align_items_center gap_8">
              <div className="font_17 weight_semi_bold colo_gray_80">
                120/85
                <span className="font_14 weight_medium colo_gray_70">mmHg</span>
              </div>
              {/* <div className="divider_vertical_20"></div>
              <div className="display_flex_row align_items_center gap_2">
                <img
                  src="/img/health_care_heart_rate.svg"
                  width="16"
                  height="16"
                ></img>
                <div className="font_13 weight_regular color_gray_90">
                  66 bpm
                </div>
              </div> */}
            </div>
            <div className="font_12 weight_regular color_gray_50">
              오후 08:14
            </div>
          </div>
          {/* <img src="/img/list_memo.svg" width="24" height="24" alt="memo"></img> */}
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">혈압 입력하기</button>
      </div>
    </>
  );
}
