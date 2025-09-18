export default function HealthCareWeightDetail() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">체중 상세</span>
        <img
          src="/img/more.svg"
          width="24"
          height="24"
          alt="more"
          className="top_right_more"
        ></img>
      </div>
      <div className="health_care_more_popup_another background_gray_0 shadow_normal display_flex_column radius_4 justify_content_center">
        <div className="display_flex_row padding_8_12 gap_8">
          <img src="/img/trash.svg" width="16" weight="16" alt="target"></img>
          <div className="font_15 weight_regular color_gray_90">삭제</div>
        </div>
      </div>
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
              {/* <button className="result_unit_button_common result_unit_button_normal radius_12 font_13 weight_semi_bold">
                정상
              </button> */}
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
          <div className="display_flex_row border_gray_10 background_gray_5 gap_12 padding_12 radius_12 justify_content_center">
            <div className="display_flex_row gap_8">
              <div className="display_flex_row align_items_center gap_4">
                <img
                  src="/img/health_care_muscles.svg"
                  width="20"
                  height="20"
                ></img>
                <div className="font_14 weight_regular color_gray90">
                  골격근량
                </div>
              </div>
              <div className="font_14 weight_semi_bold color_gray90">32kg</div>
            </div>
            <div className="divider_vertical_20"></div>
            <div className="display_flex_row align_items_center gap_8">
              <div className="display_flex_row align_items_center gap_4">
                <img
                  src="/img/health_care_fat.svg"
                  width="20"
                  height="20"
                ></img>
                <div className="font_14 weight_regular color_gray90">
                  체지방률
                </div>
              </div>
              <div className="font_14 weight_semi_bold color_gray90">20%</div>
            </div>
          </div>
        </div>
        <div className="background_gray_0 border_gray_10 radius_12 padding_20 display_flex_column gap_20">
          <div className="display_flex_row gap_4 align_items_center">
            <img
              src="/img/list_memo.svg"
              width="16"
              heght="16"
              alt="memo"
            ></img>
            <div className="font_14 weihgt_medium color_gray_90">메모</div>
          </div>
          <div className="color_gray_70 font_15 weight_regular">
            내일부터 운동을 열심히..
          </div>
        </div>
      </div>

      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">설정하기</button>
      </div>
    </>
  );
}
