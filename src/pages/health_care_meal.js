export default function HealthCareMeal() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">식사 관리</span>
        <img
          src="/img/more.svg"
          width="24"
          height="24"
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
      <div className="background_gray_5 padding_20 display_flex_column gap_40">
        <div className="display_flex_column background_gray_5 gap_8">
          <div className="font_13 weight_regular color_gray_50">
            4월 20일(목)
          </div>
          <div className="background_gray_0 border_gray_10 radius_12 display_flex_column gap_16 padding_20">
            <div className="display_flex_row gap_4 space_between align_items_center">
              <div className="display_flex_column">
                <div className="font_14 weight_medium color_gray_90">
                  섭취 칼로리
                </div>
                <div className="display_flex_row align_items_baseline">
                  <div className="font_32 weight_bold color_gray_90">1,080</div>
                  <span className="font_22 weight_medium color_gray_90">
                    kcal
                  </span>
                  <span className="font_13 weight_regular color_gray_50">
                    / 1200kcal
                  </span>
                </div>
              </div>
              <div className="graph_56"></div>
            </div>
            <div className="success_or_failure_common font_13 weight_regular radius_8 gap_4 color_gray_70 text_align_center background_gray_5 display_flex_row align_items_center justify_content_center">
              <span className="font_14 weight_semi_bold">100 kcal </span> 더
              드실 수 있어요
              <img
                src="/img/health_care_meal_rice.svg"
                width="16"
                height="16"
              ></img>
            </div>
            <div className="success_or_failure_common success_or_failure_on font_13 weight_regular radius_8 gap_4 text_align_center display_flex_row align_items_center justify_content_center color_70">
              목표보다{' '}
              <span className="font_14 weight_semi_bold color_f42a43">
                350 kcal
              </span>
              더 섭취했어요
              <img
                src="/img/health_care_meal_fork.svg"
                width="16"
                height="16"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="padding_8_16">
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_row gap_12 align_items_center width_100">
            <img src="/img/meal_night_snack.svg" width="40" height="40"></img>
            <div className="display_flex_column gap_4">
              <div className="font_17 weight_semi_bold color_gray_80">야식</div>
              <div className="font_14 weight_regular color_gray_70">
                굽네치킨 고추바사삭
              </div>
              <div className="font_12 weight_regular color_gray_50">
                오후 11:48
              </div>
            </div>
          </div>
          <div className="font_17 weight_semi_bold color_gray_90 meal_kcal text_align_right">
            4,500
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </div>
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_row gap_12 align_items_center width_100">
            <img src="/img/meal_dinner.svg" width="40" height="40"></img>
            <div className="display_flex_column gap_4">
              <div className="font_17 weight_semi_bold color_gray_80">저녁</div>
              <div className="font_14 weight_regular color_gray_70">
                칼국수, 제육볶음, 우유, 계란, 칼국수, 제육볶음, 우유, 계란,
                칼국수, 제육볶음, 우유, 계란
              </div>
              <div className="font_12 weight_regular color_gray_50">
                오후 07:28
              </div>
            </div>
          </div>
          <div className="font_17 weight_semi_bold color_gray_90 meal_kcal text_align_right">
            4,500
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </div>
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_row gap_12 align_items_center width_100">
            <img src="/img/meal_dessert.svg" width="40" height="40"></img>
            <div className="display_flex_column gap_4">
              <div className="font_17 weight_semi_bold color_gray_80">간식</div>
              <div className="font_14 weight_regular color_gray_70">
                사과, 호두
              </div>
              <div className="font_12 weight_regular color_gray_50">
                오후 04:13
              </div>
            </div>
          </div>
          <div className="font_17 weight_semi_bold color_gray_90 meal_kcal text_align_right">
            500
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </div>
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_row gap_12 align_items_center width_100">
            <img src="/img/meal_lunch.svg" width="40" height="40"></img>
            <div className="display_flex_column gap_4">
              <div className="font_17 weight_semi_bold color_gray_80">점심</div>
              <div className="font_14 weight_regular color_gray_70">
                잡곡밥, 두부조림, 미역국, 나물반찬, 삶은계란
              </div>
              <div className="font_12 weight_regular color_gray_50">
                오후 12:49
              </div>
            </div>
          </div>
          <div className="font_17 weight_semi_bold color_gray_90 meal_kcal text_align_right">
            500
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </div>
        <div className="display_flex_row space_between align_items_center blood_sugar_list_box">
          <div className="display_flex_row gap_12 align_items_center width_100">
            <img src="/img/meal_breakfast.svg" width="40" height="40"></img>
            <div className="display_flex_column gap_4">
              <div className="font_17 weight_semi_bold color_gray_80">아침</div>
              <div className="font_14 weight_regular color_gray_70">
                샐러드, 그래놀라
              </div>
              <div className="font_12 weight_regular color_gray_50">
                오후 08:14
              </div>
            </div>
          </div>
          <div className="font_17 weight_semi_bold color_gray_90 meal_kcal text_align_right">
            350
            <span className="font_15 weight_medium color_gray_70">kcal</span>
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">식사 입력하기</button>
      </div>
    </>
  );
}
