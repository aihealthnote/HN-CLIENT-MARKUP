export default function CheckupResult4() {
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
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            혈압/심전도검사
          </div>
          <div className="tab_underline_on"></div>
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
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            당뇨질환 및 췌장기능검사
          </div>
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
      <div className="checkup_result_top_wrap display_flex_column gap_32">
        <div className="display_flex_column gap_24_">
          <div className="display_flex_column gap_24_">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="color_gray_50 font_13 weight_midium">
                  혈압/심전도 검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  혈압
                </div>
              </div>
              <img
                src="/img/checkup_result_blood_pressure.svg"
                width="56"
                height="56"
              ></img>
            </div>
            <div className="font_14 weight_regular color_gray_70">
              혈압이 흐르면서 혈관에 가하는 압력을 혈압이라고 합니다. 고혈압은
              심장질환,신장질환,뇌혈관 질환의 원인중 하나입니다.
            </div>
          </div>
          <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
            <div className="display_flex_row align_items_center width_100 gap_16 ">
              <div className="width_50">
                <div>수축기</div>
                <div className="display_flex_column gap_16">
                  <div className="color_gray_90 font_28 weight_semi_bold">
                    142
                    <span className="color_gray_90 font_17 weight_semi_bold">
                      mmHg
                    </span>
                  </div>
                  <div className="font_13 weight_semi_bold radius_12 result_blood_pressure_common result_blood_pressure_error text_align_center">
                    질환의심
                  </div>
                </div>
              </div>
              <div className="divider_vertical_91"></div>
              <div className="width_50">
                <div>이완기</div>
                <div className="display_flex_column gap_16">
                  <div className="color_gray_90 font_28 weight_semi_bold">
                    82
                    <span className="color_gray_90 font_17 weight_semi_bold">
                      mmHg
                    </span>
                  </div>
                  <div className="font_13 weight_semi_bold radius_12 result_blood_pressure_common result_blood_pressure_normal text_align_center">
                    정상
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider_wide"></div>
      <div className="display_flex_column gap_20 result_bottom_wrap">
        <div className="font_19 weight_semi_bold color_gray_90">
          혈압의 추이
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
            수축기는 이전 검사 대비
            <span className="result_message_span weight_semi_bold">
              {' '}
              3.1 kg/㎡{' '}
            </span>
            증가했으며, 이완기는 이전 검사 대비{' '}
            <span className="result_message_span weight_semi_bold">
              {' '}
              3.1 kg/㎡{' '}
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
                고혈압
              </div>
            </div>
            <img
              src="/img/checkup_result_blood_pressure2.svg"
              width="56"
              height="56"
              alt="blood_pressure"
            ></img>
          </div>
          <div className="color_gray_70 font_14 weight_regular">
            혈액이 흐르면서 혈관에 가하는 압력인 혈압이 140/90mmHg 이상인 상태를
            말하며, 심장질환, 신장질환, 뇌혈관 질환의 원인 중 하나입니다.
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal checkup_sub_wrap display_flex_column gap_32">
          <div className="display_flex_column gap_24_">
            <div className="color_gray_19 weight_semi_bold font_19">
              고혈압 진단 기준
            </div>
            <div className="display_flex_column gap_4">
              <ul className="display_flex_row gap_4">
                <li className="font_13 graph_bg_1_top color_gray_50 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold">
                  검진항목
                </li>
                <li className="font_13 graph_blood_pressure_common over_weight_button_2 weight_semi_bold text_align_center radius_4">
                  정상
                </li>
                <li className="font_13 graph_blood_pressure_common over_weight_button_4 weight_semi_bold text_align_center radius_4">
                  질환의심
                </li>
              </ul>
              <ul className="display_flex_row gap_4">
                <li className="graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center color_gray_90">
                  수축기<br></br>혈압
                </li>
                <li className="graph_bg_2 background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center ">
                  120mmHg<br></br>이상
                </li>
                <li className="graph_bg_2 background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center ">
                  80mmHg<br></br>이상
                </li>
              </ul>
              <ul className="display_flex_row gap_4">
                <li className="graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center color_gray_90">
                  이완기<br></br>혈압
                </li>
                <li className="graph_bg_2 background_gray_5 color_gray_70 font_13  display_flex_column justify_content_center weight_regular text_align_center">
                  140mmHg<br></br>이상
                </li>
                <li className="graph_bg_2 background_gray_5 color_gray_70 font_13  display_flex_column justify_content_center weight_regular text_align_center">
                  90mmHg<br></br>이상
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal display_flex_column gap_32 checkup_sub_wrap">
          <div className="display_flex_column gap_8">
            <div className="display_flex_column gap_32">
              <div className="color_gray_19 weight_semi_bold font_19">
                주의사항
              </div>
              <div className="display_flex_row gap_8 align_items_center">
                <img
                  src="/img/checkup_result_disease.svg"
                  width="24"
                  height="24"
                  alt="_disease"
                ></img>
                <div className="font_15 weight_semi_bold color_gray_90">
                  비만 관련 질병
                </div>
              </div>
            </div>
            <div className="background_gray_5 bmi_example display_flex_column gap_24_">
              <ul className="list_style_type_2">
                <li className="color_gray_70 font_14 weight_regular">
                  고혈압, 당뇨병, 고지혈증, 동맥경화, 협심증, 심근경색증,
                  뇌졸중, 암 등
                </li>
              </ul>
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
                      칼슘, 칼륨, 마그네슘이 많은 과일, 채소, 저지방 유제품
                      충분히 먹기
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      짠 음식을 멀리하고 싱겁게 먹기
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      술 멀리하기
                    </li>
                  </ul>
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
                      3~6개월 이상 꾸준히 운동하면 혈압이 10mmgHg까지 낮출 수
                      있음
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      매일 활기차게 30분 정도 걷는 것과 같은 신체적 활동만으로도
                      혈압이 낮아짐
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      스트레칭 및 가벼운 유산소성 운동이 좋음
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
