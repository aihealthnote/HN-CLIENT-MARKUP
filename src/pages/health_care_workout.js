export default function HealthCareWorkout() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">운동 관리</span>
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
          <div className="display_flex_row space_between">
            <div className="display_flex_column">
              <div className="font_14 weight_medium color_gray_90">운동</div>
              <div className="display_flex_row gap_4 align_items_center">
                <div className="display_flex_row align_items_baseline">
                  <div className="font_32 weight_bold colo_gray_90">1350</div>
                  <span className="font_22 weight_medium colo_gray_70">
                    kcal
                  </span>
                  <span className="font_13 weight_regular color_gray_50">
                    / 2700kcal
                  </span>
                </div>
              </div>
            </div>
            <div className="graph_56"></div>
          </div>
          <div className="display_flex_row background_gray_5 radius_8 padding_12_16 justify_content_center">
            <div className="display_flex_row gap_2 align_items_center">
              <div className="font_13 weight_regular color_gray_70">
                목표 달성까지{' '}
                <span className='className="font_14 weight_semi_bold color_gray_70'>
                  150kcal{' '}
                </span>
                <span className="font_13 weight_regular color_gray_70">
                  더 남았어요
                </span>
              </div>
              <img
                src="/img/workout_fire.svg"
                width="20"
                height="20"
                alt="fire"
              ></img>
            </div>
          </div>
          <div className="display_flex_row health_care_weight_bl radius_8 padding_12_16 justify_content_center">
            <div className="display_flex_row gap_4 align_items_center">
              <div className="font_13 weight_semi_bold color_226DE7">
                짝짝짝 목표를 달성했어요{' '}
              </div>
              <img
                src="/img/workout_hand.svg"
                width="20"
                height="20"
                alt="hand"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="padding_8_16">
        <div className="display_flex_column blood_sugar_list_box ">
          <div className="display_flex_column gap_10  ">
            <div className="display_flex_row gap_12 align_items_center ">
              <img
                src="/img/workout_walking.svg"
                width="40"
                height="40"
                alt="walking"
              ></img>
              <div className="display_flex_column gap_4">
                <div className="font_15 weight_medium colo_gray_90">걷기</div>
                <div className="font_12 weight_regular color_gray_50">
                  오전 10:30
                </div>
              </div>
            </div>
            <div className="display_flex_row gap_16 align_items_center workout_list">
              <div className="display_flex_row gap_4 align_items_center">
                <img
                  src="/img/workout_fire.svg"
                  width="16"
                  height="16"
                  alt="fire"
                ></img>
                <div className="font_17 weight_semi_bold color_gray_90">
                  250
                  <span className="font_15 weight_medium color_gray_70">
                    kcal
                  </span>
                </div>
              </div>
              <div className="divider_vertical_12"></div>
              <div className="display_flex_row gap_4 align_items_center">
                <img
                  src="/img/workout_time.svg"
                  width="16"
                  height="16"
                  alt="time"
                ></img>
                <div className="font_17 weight_semi_bold color_gray_90">
                  30
                  <span className="font_15 weight_medium color_gray_70">
                    분
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="display_flex_column blood_sugar_list_box ">
          <div className="display_flex_column gap_10  ">
            <div className="display_flex_row gap_12 align_items_center ">
              <img
                src="/img/workout_mountain_climbing.svg"
                width="40"
                height="40"
                alt="workout_mountain_climbing"
              ></img>
              <div className="display_flex_column gap_4">
                <div className="font_15 weight_medium colo_gray_90">등산</div>
                <div className="font_12 weight_regular color_gray_50">
                  오전 08:30
                </div>
              </div>
            </div>
            <div className="display_flex_row gap_16 align_items_center workout_list">
              <div className="display_flex_row gap_4 align_items_center">
                <img
                  src="/img/workout_fire.svg"
                  width="16"
                  height="16"
                  alt="fire"
                ></img>
                <div className="font_17 weight_semi_bold color_gray_90">
                  1,300
                  <span className="font_15 weight_medium color_gray_70">
                    kcal
                  </span>
                </div>
              </div>
              <div className="divider_vertical_12"></div>
              <div className="display_flex_row gap_4 align_items_center">
                <img
                  src="/img/workout_time.svg"
                  width="16"
                  height="16"
                  alt="time"
                ></img>
                <div className="font_17 weight_semi_bold color_gray_90">
                  1
                  <span className="font_15 weight_medium color_gray_70">
                    시간
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="display_flex_column blood_sugar_list_box ">
          <div className="display_flex_column gap_10  ">
            <div className="display_flex_row gap_12 align_items_center ">
              <img
                src="/img/workout_basketball.svg"
                width="40"
                height="40"
                alt="workout_mountain_climbing"
              ></img>
              <div className="display_flex_column gap_4">
                <div className="font_15 weight_medium colo_gray_90">농구</div>
                <div className="font_12 weight_regular color_gray_50">
                  오전 06:30
                </div>
              </div>
            </div>
            <div className="display_flex_row gap_16 align_items_center workout_list">
              <div className="display_flex_row gap_4 align_items_center">
                <img
                  src="/img/workout_fire.svg"
                  width="16"
                  height="16"
                  alt="fire"
                ></img>
                <div className="font_17 weight_semi_bold color_gray_90">
                  950
                  <span className="font_15 weight_medium color_gray_70">
                    kcal
                  </span>
                </div>
              </div>
              <div className="divider_vertical_12"></div>
              <div className="display_flex_row gap_4 align_items_center">
                <img
                  src="/img/workout_time.svg"
                  width="16"
                  height="16"
                  alt="time"
                ></img>
                <div className="display_flex_row align_items_center gap_2 font_17 weight_semi_bold color_gray_90">
                  1
                  <span className="font_15 weight_medium color_gray_70">
                    시간
                  </span>
                  <div className="font_17 weight_semi_bold color_gray_90">
                    30
                    <span className="font_15 weight_medium color_gray_70">
                      분
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
