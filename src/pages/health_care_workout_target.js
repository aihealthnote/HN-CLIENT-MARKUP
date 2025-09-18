export default function HealthCareWorkoutTarget() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">목표 운동 설정</span>
      </div>
      <div className="display_flex_column background_gray_5 health_care_target_box">
        <div className="display_flex_column gap_24_">
          <div className="text_align_center font_17 color_gray_90 weight_regular">
            목표 운동 칼로리를 설정해주세요
          </div>
          <div className="padding_12_16 background_gray_0 border_gray_10 radius_12 gap_8 display_flex_column">
            <div className="display_flex_row space_between height_32 align_items_center">
              <div className="display_flex_row gap_4">
                <img
                  src="/img/workout_fire.svg"
                  width="24"
                  height="24"
                  alt="fire"
                ></img>
                <div className="font_15 weight_semi_bold color_gray_90">
                  목표 운동칼로리
                </div>
              </div>
              <div className="display_flex_row gap_8">
                <div className="font_15 weight_semi_bold color_gray_90">
                  2,700
                  <span className="font_15 weight_regular color_gray_90">
                    kcal
                  </span>
                </div>
                <img src="/img/arrow_down_bk.svg" width="20" height="20"></img>
              </div>
            </div>
            <div className="graph"></div>
          </div>
        </div>
        <div className="tip_box background_gray_10 radius_12 padding_16 display_flex_column gap_8">
          <div className="display_flex_row space_between">
            <div className="display_flex_row gap_8">
              <img src="/img/tip.svg" width="26" height="18"></img>
              <div className="font_15 weight_regular color_gray_90">
                일일 권장 소모 칼로리
              </div>
            </div>
            <div className="font_17 weight_semi_bold color_gray_90">
              2,700 kcal
            </div>
          </div>
          <div className="font_12 weight_medium color_gray_50 text_align_right">
            * 설병, 연령, 키, 체중에 따라 변동
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">설정하기</button>
      </div>
    </>
  );
}
