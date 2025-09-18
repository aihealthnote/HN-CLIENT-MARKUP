export default function CheckupResult8() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">건강검진 결과</span>
      </div>
      <div className="display_flex_row prediction_tab_wrap">
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            계측검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            안과검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            청력검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            혈압/심전도검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            혈중지질검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            빈혈 및 혈액학적검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            간담도계 및 간염검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            당뇨질환 및 췌장기능검사
          </div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            신장기능검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            영상검사
          </div>
        </div>
      </div>
      <ul className="checkup_result_inside_wrap background_gray_5 display_flex_row gap_2">
        <li className="result_button_common result_button_on font_14 weight_medium">
          AST(SGOT)
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          ALT(SGPT)
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          중성지방
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          감마지피티(y-GPT)
        </li>
      </ul>
      <div className="checkup_result_top_wrap display_flex_column gap_32">
        <div className="display_flex_column gap_24_">
          <div className="display_flex_column gap_24_">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="color_gray_50 font_13 weight_midium">
                  당뇨질환 및 췌장기능검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  혈당
                </div>
              </div>
              <img
                src="/img/checkup_result_blood_sugar.svg"
                width="56"
                height="56"
                alt="blood sugar"
              ></img>
            </div>
            <div className="font_14 weight_regular color_gray_70">
              혈당에 대한 텍스트 내용
            </div>
            <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
              <div className="display_flex_row align_items_baseline">
                <div className="color_gray_90 font_28 weight_semi_bold">94</div>
                <div className="color_gray_90 font_19 weight_semi_bold">
                  g/dL
                </div>
              </div>
              {/* <button className="result_unit_button_common result_unit_button_normal radius_12 font_13 weight_semi_bold">
                정상
              </button> */}
              {/* <button className="result_unit_button_common result_unit_button_warning radius_12 font_13 weight_semi_bold">
                주의
              </button> */}
              <button className="result_unit_button_common result_unit_button_error radius_12 font_13 weight_semi_bold">
                질환의심
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider_wide"></div>
      <div className="display_flex_column gap_20 result_bottom_wrap">
        <div className="font_19 weight_semi_bold color_gray_90">
          혈당의 추이
        </div>
        <div className="graph"></div>
        <div className="display_flex_row result_message_wrap padding_16 gap_8">
          <img
            src="/img/checkup_result_message.svg"
            width="20"
            height="20"
            alt="message"
          ></img>
          <div className="font_15 weight_medium color_gray_90">
            이전 검사 대비
            <span className="result_message_span weight_semi_bold">
              {' '}
              10 mg/gL{' '}
            </span>
            증가했습니다.
          </div>
        </div>
      </div>
      <div className="background_gray_5 checkup_result_over_weight display_flex_column gap_32">
        <div className="display_flex_column gap_24_">
          <div className="display_flex_row space_between align_items_center">
            <div className="display_flex_column gap_12">
              <div className="related_disease background_gray_10 radius_12 font_13 weight_medium">
                관련질병
              </div>
              <div className="color_gray_90 font_24 weight_semi_bold">
                당뇨병
              </div>
            </div>
            <img
              src="/img/checkup_result_diabetes.svg"
              width="56"
              height="56"
              alt="diabetes"
            ></img>
          </div>
          <div className="color_gray_70 font_14 weight_regular">
            과식, 비만, 유전, 운동부족, 스트레스 등으로 인한 인슐린 부족 또는
            저항성으로 혈당이 조절되지 않아 혈액 속의 당이 높아진 상태입니다.
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal display_flex_column gap_32 checkup_sub_wrap">
          <div className="display_flex_column gap_24_">
            <div className="color_gray_19 weight_semi_bold font_19">
              당뇨병 진단 기준
            </div>
            <div className="display_flex_column gap_4">
              <ul className="display_flex_row gap_4">
                <li className="graph_bg_1_top color_gray_50 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                  검진항목
                </li>
                <li className="graph_blood_pressure_common over_weight_button_2 weight_semi_bold text_align_center radius_4 font_13 display_flex_column justify_content_center ">
                  정상
                </li>
                <li className="graph_blood_pressure_common over_weight_button_4 weight_semi_bold text_align_center radius_4 font_13 display_flex_column justify_content_center">
                  질환의심
                </li>
              </ul>
              <ul className="display_flex_row gap_4">
                <li className="graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 color_gray_90 display_flex_column justify_content_center">
                  공복혈당
                </li>
                <li className="graph_bg_2 background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                  100mg/dL<br></br>미만
                </li>
                <li className="graph_bg_2 background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                  126mg/dl<br></br>이상
                </li>
              </ul>
            </div>
            <div className="font_12 weight_regular color_gray_50 text_align_right">
              ※ 2004년에 개정된 WHO 기준에 의거<br></br>
              대한당뇨병학회 판정기준 &lt;mg/dL : 밀리그램 퍼 데시리터&gt;
            </div>
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal padding_24 display_flex_column gap_32">
          <div className="display_flex_column gap_24_">
            <div className="color_gray_19 weight_semi_bold font_19">
              검진 항목
            </div>
            <div className="display_flex_column gap_24_">
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <img
                    src="/img/checkup_result_blood_sugar2.svg"
                    width="24"
                    height="24"
                    alt="blood sugar"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    혈당
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      혈액 속에 포함되어 있는 포도당(식이혈당 외에도 단백질이나
                      지질로부터 전환된 포도당이 혈당을 높이는 경우도 발생 가능)
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      고혈당 상태가 만성화될 경우 미세혈관 및 대혈관에 치명적인
                      합병증이 생길 수 있음
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      공복혈당 100~125mg/dL이면 공복혈당장애로 당뇨발생 확률이
                      매우 높음
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <img
                    src="/img/checkup_result_blood_sugar3.svg"
                    width="24"
                    height="24"
                    alt="blood sugar"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    요당
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      소변에 섞여 나오는 당
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      혈당은 정상이고 요당만 나오면 신장에 문제가 있을 수 있음
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal display_flex_column gap_32 checkup_sub_wrap">
          <div className="display_flex_column gap_32">
            <div className="color_gray_19 weight_semi_bold font_19">
              추천 식단 및 운동
            </div>
            <div className="display_flex_column gap_24_">
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <img
                    src="/img/checkup_result_food.svg"
                    width="24"
                    height="24"
                    alt="food"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    식사요법
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      6가지 식품군을 골고루, 적당히 먹기 : 곡식, 채소, 우유,
                      어육류, 지방, 과일
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      혈당의 급격한 변화를 예방하기 위해 규칙적으로 나눠서 먹기
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      하루의 영양소와 필요 칼로리를 계산하여 식단 짜기
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      필요칼로리 : 표준체중(kg)x30~35(칼로리)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="display_flex_column gap_8">
              <div className="display_flex_row gap_8 align_items_center">
                <img
                  src="/img/checkup_result_workout.svg"
                  width="24"
                  height="24"
                  alt="workout"
                ></img>
                <div className="font_15 weight_semi_bold color_gray_90">
                  운동요법
                </div>
              </div>
              <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                <ul className="list_style_type_2 display_flex_column gap_8">
                  <li className="color_gray_70 font_14 weight_regular">
                    걷기, 스트레칭 등 유산소 운동이나 수영 등 수중운동(운동중 발
                    보호)
                  </li>
                  <li className="color_gray_70 font_14 weight_regular">
                    1주일에 3~5회 이상, 식후 1시간에서 3시간 사이에 규칙적으로
                    운동
                  </li>
                  <li className="color_gray_70 font_14 weight_regular">
                    혈압이 180mmHg 이상 높아지지 않게, 최대 심장 박동수의
                    60~80%로 30~45분 정도
                  </li>
                  <li className="color_gray_70 font_14 weight_regular">
                    공복 시나 인슐린 주사 후 60~90분 이내에는 운동 삼가
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
