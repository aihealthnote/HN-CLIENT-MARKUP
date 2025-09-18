export default function HealthCareMealDetail() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">식사 상세</span>
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
        <div className="background_gray_0 border_gray_10 radius_12 gap_16 display_flex_column padding_20">
          <div className="display_flex_row align_items_center gap_12">
            <img src="/img/meal_lunch.svg" width="40" height="40"></img>
            <div className="display_flex_column">
              <div className="font_14 weight_medium color_gray_90">점심</div>
              <div className="display_flex_row gap_4 align_items_center">
                <div className="display_flex_row align_items_baseline">
                  <div className="font_32 weight_bold colo_gray_90">770</div>
                  <span className="font_15 weight_medium colo_gray_70">
                    kcal
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="display_flex_column gap_12">
            <div className="display_flex_row justify_content_flex_end">
              <div className="display_flex_row justify_content_flex_end background_gray_5 kcal_g_wrap">
                <div className="kcal_box text_align_center font_13 weight_regular color_gray_60">
                  kcal
                </div>
                <div className="shadow_normal background_gray_10 border_gray_20 g_box text_align_center font_13 weight_medium">
                  g
                </div>
              </div>
              {/* <div className="display_flex_row justify_content_flex_end background_gray_5 kcal_g_wrap">
                <div className="shadow_normal background_gray_10 border_gray_20 g_box text_align_center font_13 weight_medium">
                  kcal
                </div>
                <div className="kcal_box text_align_center font_13 weight_regular color_gray_60">
                  g
                </div>
              </div> */}
            </div>
            <div className="display_flex_column gap_4">
              <div className="display_flex_column gap_6">
                <div className="display_flex_row graph_line_wrap">
                  <div className="graph_48">
                    <span className="graph_48_span color_gray_0 font_13 weight_semi_bold">
                      48.2
                    </span>
                  </div>
                  <div className="graph_27">
                    <span className="graph_27_span color_gray_0 font_13 weight_semi_bold">
                      27.5
                    </span>
                  </div>
                  <div className="graph_24">
                    <span className="graph_24_span color_gray_0 font_13 weight_semi_bold">
                      24.3
                    </span>
                  </div>
                </div>
                <div className="text_align_right font_12 weight_regular color_gray_50">
                  (%)
                </div>
              </div>
              <div className="display_flex_row gap_8">
                <div className="width_33 height_44 display_flex_column align_items_center">
                  <div className="color_0D9F4C font_12 weight_medium">
                    탄수화물
                  </div>
                  <div className="font_19 weight_semi_bold color_gray_90">
                    76.6g
                  </div>
                </div>
                <div className="divider_vertical_37"></div>
                <div className="width_33 height_44 display_flex_column align_items_center">
                  <div className="color_226DE7 font_12 weight_medium">
                    단백질
                  </div>
                  <div className="font_19 weight_semi_bold color_gray_90">
                    7.8g
                  </div>
                </div>
                <div className="divider_vertical_37"></div>
                <div className="width_33 height_44 display_flex_column align_items_center">
                  <div className="color_F67700 font_12 weight_medium">지방</div>
                  <div className="font_19 weight_semi_bold color_gray_90">
                    0.6g
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="padding_16_20 display_flex_column">
        <li className="meal_list_off meal_list_detail display_flex_row space_between padding_16 radius_8 align_items_center">
          <div className="display_flex_column gap_4">
            <div className="font_15 weight_medium color_gray_90">
              닭가슴살 샐러드
            </div>
            <div className="font_12 weight_regular color_gray_50">
              1인분 (400g)
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            470
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </li>
        <li className="meal_list_off meal_list_detail display_flex_row space_between padding_16 radius_8 align_items_center">
          <div className="display_flex_column gap_4">
            <div className="font_15 weight_medium color_gray_90">
              통밀빵 슬라이스
            </div>
            <div className="font_12 weight_regular color_gray_50">
              1개 (40g)
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            150
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </li>
        <li className="meal_list_off meal_list_detail display_flex_row space_between padding_16 radius_8 align_items_center">
          <div className="display_flex_column gap_4">
            <div className="font_15 weight_medium color_gray_90">
              플레인 요거트
            </div>
            <div className="font_12 weight_regular color_gray_50">
              1개 (40g)
            </div>
          </div>
          <div className="font_15 weight_semi_bold color_gray_90 meal_kcal_width text_align_right">
            150
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </li>
      </ul>
    </>
  );
}
