export default function HealthCareMealInputDirectly() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/close_bk.svg"
          width="24px"
          height="24px"
          alt="close"
        ></img>
        <span className="font_17 weight_semi_bold">음식 추가</span>
      </div>
      <div className="meal_plus_page display_flex_column gap_32">
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            음식명
          </label>
          <div class="width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="예) 에그 스크램블에 토마토 추가"
            />
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            1회 제공량
          </label>
          <div class="width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="예) 중간 크기, 3스쿱, 서빙사이즈 (g)"
            />
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            음식명
          </label>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="칼로리"
              readOnly
            />
            <span className="input_unit font_15 weight_regular color_gray_90">
              kcal
            </span>
          </div>
        </div>
      </div>
      <div className="display_flex_column gap_4 padding_20">
        <div className="weight_semi_bold">[참고] 식단 가이드</div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            음식
          </div>
          <div className="graph_height_30 flex_1 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            kcal
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            포카칩 과자 1봉지
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              약 300kcal
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            치킨 2조각
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              약 550kcal
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            맥주 500cc
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              약 200kcal
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            콜라 1캔(355ml)
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              약 140kcal
            </div>
          </div>
        </div>
        <div className="display_flex_column color_gray_70 font_13 weight_regular justify_content_center">
          <div className="font_12 color_gray_60">
            ※ 1kg 감량 시 필요 열량은 7,700kcal 입니다.
          </div>
        </div>
      </div>
      <div className="display_flex_column gap_4 padding_20">
        <div className="display_flex_column color_gray_70 font_13 text_align_right weight_regular justify_content_center">
          <div className="font_12 color_gray_60">*한달 누적 기준</div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_1 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            식단변화
          </div>
          <div className="graph_height_30 flex_1 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            감량kcal
          </div>
          <div className="graph_height_30 flex_1 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            감량 체중
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_1 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            밥 반공기 줄이기
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              4,200kcal
            </div>
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              0.55kg
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_1  background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            설탕 음료 줄이기
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              3,000kcal
            </div>
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              0.4kg
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_1 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            과자 줄이기
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              2,400kcal
            </div>
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              0.3kg
            </div>
          </div>
        </div>
      </div>
      <div className="display_flex_column gap_4 padding_20">
        <div className="weight_semi_bold">
          [참고] 운동 가이드 (10분 운동시 평균 소모 칼로리)
        </div>
        <div className="display_flex_column color_gray_70 font_13 text_align_right weight_regular justify_content_center">
          <div className="font_12 color_gray_60">*체중 70kg 성인 기준</div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            운동 종류
          </div>
          <div className="graph_height_30 flex_1 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            소모 칼로리
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            복싱
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              115kcal
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            필라테스
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              60kcal
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            요가
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              50kcal
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="graph_height_30 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            에어로빅
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="graph_height_30 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              85kcal
            </div>
          </div>
        </div>
        <div className="display_flex_column color_gray_70 font_13 weight_regular justify_content_center">
          <div className="font_12 color_gray_60">
            ※ 칼로리 소모는 체중에 따라 영향을 받습니다.
            <br />
            (체중 80kg 성인은 칼로리가 15% 더 소모됩니다)
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">추가하기</button>
      </div>
    </>
  );
}
