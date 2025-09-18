export default function HealthCareWeightTarget() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">목표 체중 설정</span>
      </div>
      <div className="display_flex_column background_gray_5 health_care_target_box">
        <div className="display_flex_column gap_24_">
          <div className="text_align_center font_17 color_gray_90 weight_regular">
            목표 체중을 설정해주세요.
          </div>
          <div className="padding_12_16 background_gray_0 border_gray_10 radius_12 gap_8 display_flex_column">
            <div className="display_flex_row gap_4 height_32 align_items_center">
              <img
                src="/img/health_care_scale.svg"
                width="24"
                height="24"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                목표 체중 (kg)
              </div>
            </div>
            <div className="graph"></div>
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">설정하기</button>
      </div>
    </>
  );
}
