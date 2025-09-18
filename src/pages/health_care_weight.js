export default function HealthCareWeight() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">체중 관리</span>
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
          <div className="display_flex_column">
            <div className="font_14 weight_medium color_gray_90">체중</div>
            <div className="display_flex_row gap_4 align_items_center">
              <div className="display_flex_row align_items_baseline">
                <div className="font_32 weight_bold colo_gray_90">65.1</div>
                <span className="font_15 weight_medium colo_gray_70">kg</span>
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
          <div className="display_flex_row health_care_weight_rd radius_8 padding_12_16 justify_content_center">
            <div className="display_flex_row gap_4 align_items_center">
              <div className="font_14 weight_regular color_gray_70">
                이전 대비{' '}
                <span className='className="font_14 weight_semi_bold color_gray_90'>
                  0.4kg{' '}
                </span>
                <span className="font_14 weight_semi_bold color_rd">
                  늘었어요
                </span>
              </div>
              <img
                src="/img/arrow_up_rd.svg"
                width="20"
                height="20"
                alt="arrow"
              ></img>
            </div>
          </div>
          {/* <div className="display_flex_row health_care_weight_bl radius_8 padding_12_16 justify_content_center">
            <div className="display_flex_row gap_4 align_items_center">
              <div className="font_14 weight_regular color_gray_70">
                이전 대비{' '}
                <span className='className="font_14 weight_semi_bold color_gray_90'>
                  0.4kg{' '}
                </span>
                <span className="font_14 weight_semi_bold color_bl">
                  줄었어요
                </span>
              </div>
              <img
                src="/img/arrow_down_bl.svg"
                width="20"
                height="20"
                alt="arrow"
              ></img>
            </div>
          </div> */}
        </div>
      </div>
      <div className="padding_8_16">
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_column gap_4">
            <div className="display_flex_row align_items_center gap_8">
              <div className="font_17 weight_semi_bold colo_gray_80">
                65.1
                <span className="font_14 weight_medium colo_gray_70">kg</span>
              </div>
              <div className="divider_vertical_20"></div>
              <div className="display_flex_row align_items_center gap_2">
                <img
                  src="/img/health_care_muscles.svg"
                  width="16"
                  height="16"
                ></img>
                <div className="font_13 weight_regular color_gray_90">
                  32 kg
                </div>
              </div>
              <div className="divider_vertical_20"></div>
              <div className="display_flex_row align_items_center gap_2">
                <img
                  src="/img/health_care_fat.svg"
                  width="16"
                  height="16"
                ></img>
                <div className="font_13 weight_regular color_gray_90">20%</div>
              </div>
            </div>
            <div className="font_12 weight_regular color_gray_50">
              오후 02:14
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
                65.1
                <span className="font_14 weight_medium colo_gray_70">kg</span>
              </div>
              <div className="divider_vertical_20"></div>
              <div className="display_flex_row align_items_center gap_2">
                <img
                  src="/img/health_care_fat.svg"
                  width="16"
                  height="16"
                ></img>
                <div className="font_13 weight_regular color_gray_90">20%</div>
              </div>
            </div>
            <div className="font_12 weight_regular color_gray_50">
              오후 11:14
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
                64.6
                <span className="font_14 weight_medium colo_gray_70">kg</span>
              </div>
            </div>
            <div className="font_12 weight_regular color_gray_50">
              오전 07:14
            </div>
          </div>
          {/* <img src="/img/list_memo.svg" width="24" height="24" alt="memo"></img> */}
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">혈당 입력하기</button>
      </div>
    </>
  );
}
