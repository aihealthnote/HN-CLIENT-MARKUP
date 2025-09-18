export default function HealthCareWorkoutEdit() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">운동 상세</span>
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
        <div className="background_gray_0 border_gray_10 radius_12 display_flex_column padding_20">
          <div className="display_flex_column gap_20">
            <div className="display_flex_column gap_16 align_items_center">
              <img
                src="/img/workout_running.svg"
                width="88"
                height="88"
                alt="running"
              ></img>
              <div className="display_flex_column gap_8">
                <div className="font_17 weight_medium color_gray_90 text_align_center">
                  달리기
                </div>
                <div className="display_flex_row align_items_center justify_content_center">
                  <img
                    src="/img/workout_time.svg"
                    width="16"
                    height="16"
                    alt="clock"
                  ></img>
                  <div className="font_15 weight_medium color_gray_70">
                    <span className="font_17 weight_semi_bold color_gray_90">
                      30
                    </span>
                    분
                  </div>
                </div>
              </div>
            </div>
            <div className="display_flex_row gap_4 align_items_center justify_content_center">
              <div className="display_flex_row align_items_center">
                <img
                  src="/img/workout_fire_2.svg"
                  width="32"
                  height="32"
                  alt="fire"
                ></img>
                <div className="display_flex_row align_items_baseline">
                  <div className="font_28 weight_bold colo_gray_90">65.1</div>
                  <span className="font_22 weight_medium colo_gray_70">
                    kcal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
