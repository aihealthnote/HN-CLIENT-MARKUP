export default function HealthCareHistory() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">혈당 관리 이력</span>
      </div>
      <div className="background_gray_5 padding_16">
        <ul className="display_flex_row history_date_tab_wrap radius_6 text_align_center background_gray_10 align_items_center">
          <li className="color_gray_90 weight_semi_bold font_13 background_gray_0 radius_4 shadow_normal">
            주
          </li>
          <li className="color_gray_50 weight_medium font_13">월</li>
          <li className="color_gray_50 weight_medium font_13">년</li>
        </ul>
      </div>
      <div className="graph"></div>
      <div className="display_flex_column background_gray_5 padding_16 gap_8">
        <div className="font_13 weight_regular color_gray_50">4월 20일(목)</div>
        <div className="background_gray_0 border_gray_10 radius_12 display_flex_column gap_24_ padding_20">
          <div className="display_flex_column gap_16">
            <div>
              <div className="font_14 weight_medium color_gray_90">
                평균혈당
              </div>
              <div className="display_flex_row align_items_baseline">
                <div className="font_32 weight_bold colo_gray_90">140</div>
                <span className="font_15 weight_medium colo_gray_70">mmHg</span>
              </div>
            </div>
            <div className="display_flex_row space_between align_items_flex_end">
              <div className="display_flex_row gap_16">
                <div>
                  <div className="display_flex_row align_items_center gap_4">
                    <img
                      src="/img/arrow_down_circle.svg"
                      width="12"
                      height="12"
                      alt="arrow down"
                    ></img>
                    <div className="font_13 weight_regular color_gray_70">
                      최저
                    </div>
                  </div>
                  <div className="font_24 weight_bold color_gray_90">
                    80
                    <span className="font_15 weight_medium color_gray_70">
                      mmhg
                    </span>
                  </div>
                </div>
                <div className="divider_vertical_100"></div>
                <div>
                  <div className="display_flex_row align_items_center gap_4">
                    <img
                      src="/img/arrow_up_circle.svg"
                      width="12"
                      height="12"
                      alt="arrow up"
                    ></img>
                    <div className="font_13 weight_regular color_gray_70">
                      최고
                    </div>
                  </div>
                  <div className="font_24 weight_bold color_gray_90">
                    80
                    <span className="font_15 weight_medium color_gray_70">
                      mmhg
                    </span>
                  </div>
                </div>
              </div>
              <button className="result_unit_button_common result_unit_button_warning radius_12 font_13 weight_semi_bold">
                경고
              </button>
            </div>
          </div>
          <div className="display_flex_row space_between background_gray_5 border_gray_10 radius_8 padding_12_16">
            <div className="display_flex_row gap_4 align_items_center">
              <img
                src="/img/flag_bl.svg"
                width="16"
                height="16"
                alt="flag"
              ></img>
              <div className="font_14 weight_medium color_gray_90">
                목표 혈당 (최대)
              </div>
            </div>
            <div className="font_14 weight_semi_bold color_gray_90">
              90~150mmHg
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
