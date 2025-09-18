export default function PredictionKidneys() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">질환별 예측</span>
      </div>
      <div className="display_flex_row prediction_tab_wrap">
        <div className="text_align_center tab_width">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50">
            심뇌혈관
          </div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50">
            당뇨
          </div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50">
            뇌졸중
          </div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50">
            심근경색
          </div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_90">
            신장질환
          </div>
          <div className="tab_underline_on"></div>
        </div>
      </div>
      <div className="prediction_date_wrap display_flex_row space_between align_items_center">
        <img
          src="/img/arrow_left_prediction_date.svg"
          width="28"
          height="28"
          alr="arrow left"
        ></img>
        <div className="font_14 color_gray_70 prediction_date">
          검진일 : <span className="font_14 color_gray_70">2023.12.07</span>
        </div>
        <img
          src="/img/arrow_right_prediction_date.svg"
          width="28"
          height="28"
          alr="arrow right"
        ></img>
      </div>
      <div className="prediction_title_img_wrap display_flex_row space_between align_items_center">
        <div>
          <div className="color_gray_90 font_24 weight_semi_bold">신장질환</div>
          <div className="color_gray_50 font_14 weight_medium">
            신장 기능 저하로 노폐물 배출 이상 질환
          </div>
        </div>
        <img
          src="/img/prediction_title_img_kidneys.svg"
          width="72"
          height="72"
          alt="kidneys"
        ></img>
      </div>
      <div className="background_gray_5 prediction_percent_wrap display_flex_column">
        <div className="display_flex_column background_gray_0 radius_12 prediction_percent_list shadow_normal">
          <div className="display_flex_row gap_8">
            <div className="font_19 weight_semi_bold gray_90">예측 확률</div>
            <img src="/img/information.svg"></img>
          </div>
          <div className="display_flex_column align_items_center gap_14">
            <div className="graph_percent"></div>
            <div className="display_flex_column gap_12 align_items_center">
              <button className="prediction_body_button_common prediction_percent_error radius_12 font13 weight_semi_bold">
                경고
              </button>
              <div className="font_36 weight_bold">41%</div>
            </div>
            <div className="prediction_level_wrap display_flex_column">
              <div className="display_flex_row gap_2">
                <div className="percent_level_common level1 level_text radius_14"></div>
                <div className="percent_level_common level2 level_text radius_14"></div>
                <div className="percent_level_common level3 level_text radius_14">
                  <div className="level_dot"></div>
                </div>
                <div className="percent_level_common level4 level_text radius_14"></div>
                <div className="percent_level_common level5 level_text radius_14"></div>
              </div>
              <div className="display_flex_row gap_2">
                <div className="level_text display_flex_column align_items_center gap_8">
                  <div className="font_12 weight_semi_bold color_gray_70">
                    보통
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    0-20%
                  </div>
                </div>
                <div className="level_text display_flex_column align_items_center gap_8">
                  <div className="font_12 weight_semi_bold color_gray_70">
                    주의
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    21-40%
                  </div>
                </div>
                <div className="level_text display_flex_column align_items_center gap_8">
                  <div className="font_12 weight_semi_bold color_gray_70">
                    경고
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    41-60%
                  </div>
                </div>
                <div className="level_text display_flex_column align_items_center gap_8">
                  <div className="font_12 weight_semi_bold color_gray_70">
                    위험
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    61-80%
                  </div>
                </div>
                <div className="level_text display_flex_column align_items_center gap_8">
                  <div className="font_12 weight_semi_bold color_gray_70">
                    고위험
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    80-100%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="margin_top_12">
            <div className="font_15 color_gray_70 padding_20_12 background_gray_5 radius_8 text_align_center display_flex_column gap_12">
              <div className="color_gray_70">
                3년 내 질환이 발생할 위험 확률은
              </div>
              <div className="display_flex_row gap_4 align_items_center justify_content_center">
                <span className="color_F7871B font_15 weight_semi_bold">
                  41%
                  <span className="color_gray_90 font_15 weight_semi_bold">
                    로
                  </span>
                </span>
                <span className="color_F7871B font_15 weight_semi_bold">
                  경고
                </span>
                <span className="color_gray_90 font_15 weight_semi_bold">
                  단계입니다
                </span>
              </div>
            </div>
            <div className="font_12 color_gray_50 level_sub_text">
              * 경고 구간 : nn%~nn%
            </div>
          </div>
          <div className="display_flex_column gap_4">
            <div className="font_15 weight_semi_bold">예측 확률 산출 근거</div>
            <ul className="list_style_type">
              <li className="font_13 weight_regular">
                혈압, 총콜레스테롤, HDL/LDL, 흡연, BMI, 연령
              </li>
              <li className="font_13 weight_regular">
                국민건강보험공단 빅데이터 기반 자체 예측 알고리즘
              </li>
              <li className="font_13 weight_regular">
                보건복지부 고시된 심혈관질환
                <div className="font_13 weight_semi_bold">
                  예방 가이드라인에 기반
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="background_gray_5 display_flex_column">
          <div className="display_flex_column background_gray_0 radius_12 prediction_percent_list shadow_normal">
            <div className="display_flex_row gap_8">
              <div className="font_19 weight_semi_bold gray_90">
                연도별 위험확률 예측
              </div>
              <img src="/img/information.svg"></img>
            </div>
            <div className="display_flex_column align_items_center">
              <div className="graph_percent"></div>
            </div>
            <div className="display_flex_row gap_4">
              <div className="prediction_body_button_common prediction_percent_normal font_12 weight_medium radius_12">
                보통
              </div>
              <div className="prediction_body_button_common prediction_percent_warning font_12 weight_medium radius_12">
                주의
              </div>
              <div className="prediction_body_button_common prediction_percent_caution font_12 weight_medium radius_12">
                경고
              </div>
              <div className="prediction_body_button_common prediction_percent_error font_12 weight_medium radius_12">
                위험
              </div>
              <div className="prediction_body_button_common prediction_percent_highdanger font_12 weight_medium radius_12">
                고위험
              </div>
            </div>
            <div className="margin_top_24">
              <ul className="padding_20_16 background_gray_5 radius_8 display_flex_column gap_12 list_style_type">
                <li className="font_13 color_gray_50">
                  연도별 그래프를 통해 건강 상태의 방향성을 짐작해볼 수
                  있습니다.
                </li>
                <li className="font_13 color_gray_50">
                  그래프 추이를 살피고, 오른쪽 위를 향하지 않도록 꾸준한 주의와
                  관리가 필요합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="background_gray_5 display_flex_column">
          <div className="display_flex_column background_gray_0 radius_12 prediction_percent_list shadow_normal">
            <div className="display_flex_row gap_8">
              <div className="font_19 weight_semi_bold gray_90">
                동일 집단 내 나의 위치
              </div>
              <img src="/img/information.svg"></img>
            </div>
            <div className="display_flex_row space_between align_items_center height_52">
              <div>
                <div className="font_15 weight_medium">같은 성별과</div>
                <div className="font_15 weight_medium">연령 집단 100명 중</div>
              </div>
              <div className="display_flex_row align_items_center border_gray_20 padding_8_12 radius_8 gap_2">
                <span className="font_32 weight_bold">68</span>
                <div className="font_24 weight_semi_bold"> 번째</div>
              </div>
            </div>
            <div className="graph_line"></div>
            <div className="margin_top_40">
              <div className="font_15 color_gray_70 padding_20_12 background_gray_5 radius_8 text_align_center display_flex_column gap_12">
                <div className="color_gray_70 font_15">
                  <span>홍길동</span>님의 질환 발병 확률은<br></br>전국 30대
                  남성 중
                </div>
                <span className="color_226DE7 font_15 weight_semi_bold">
                  60% 이상, 70% 미만
                  <span className="color_gray_90 font_15 weight_semi_bold">
                    에 해당합니다.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="font_12 weight_regular color_gray_50 margin_top_32">
          본 화면에서 제공하는 분석 결과는 국가 건강검진 결과를 바탕으로 분석한
          것으로 정확한 건강상태에 관한 확인은 의료기관을 내원하여 상담하시기
          바라며, 본 화면의 결과는 자가 건강관리를 위한 참고용으로만 활용하시기
          바랍니다.
        </div>
      </div>
    </>
  );
}
