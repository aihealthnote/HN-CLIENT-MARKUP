export default function CheckupResult9() {
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
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            당뇨질환 및 췌장기능검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            신장기능검사
          </div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            영상검사
          </div>
        </div>
      </div>
      <ul className="checkup_result_inside_wrap background_gray_5 display_flex_row gap_2">
        <li className="result_button_common result_button_on font_14 weight_medium">
          요단백
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          혈청크레아티닌
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          신사구체여과율
        </li>
      </ul>
      <div className="checkup_result_top_wrap display_flex_column gap_32">
        <div className="display_flex_column gap_24_">
          <div className="display_flex_column gap_24_">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="color_gray_50 font_13 weight_midium">
                  신장기능 검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  요단백
                </div>
              </div>
              <img
                src="/img/checkup_result_serum_creatinine.svg"
                width="56"
                height="56"
                alt="serum creatinine"
              ></img>
              {/* <img
                src="/img/checkup_result_serum_creatinine.svg"
                width="56"
                height="56"
                alt="serum creatinine"
              ></img> */}
              {/* <img
                src="/img/checkup_result_serum_creatinine.svg"
                width="56"
                height="56"
                alt="serum creatinine"
              ></img> */}
            </div>
            <div className="font_14 weight_regular color_gray_70">
              요단백에 대한 텍스트 내용
            </div>
            <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
              <div className="color_gray_90 font_28 weight_semi_bold">음성</div>
              <button className="result_unit_button_common result_unit_button_normal radius_12 font_13 weight_semi_bold">
                정상
              </button>
              {/* <button className="result_unit_button_common result_unit_button_warning radius_12 font_13 weight_semi_bold">
                주의
              </button> */}
              {/* <button className="result_unit_button_common result_unit_button_error radius_12 font_13 weight_semi_bold">
                질환의심
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="divider_wide"></div>
      <div className="display_flex_column gap_20 result_bottom_wrap">
        <div className="font_19 weight_semi_bold color_gray_90">
          요단백의 추이
        </div>
        <div className="checkup_result_unit_wrap checkup_result_unit_wrap_hearing radius_12 align_items_center display_flex_row justify_content_center">
          <ul className="display_flex_row gap_8 hearing_box">
            <li className="display_flex_row">
              <div className="hearing_imoji_warp display_flex_column align_items_center">
                <img
                  src="/img/hearing_normal.svg"
                  width="32"
                  height="32"
                  alt="normal"
                ></img>
                <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                  정상
                </div>
                <div className="font_13 weight_medium color_gray_70">2014</div>
              </div>
            </li>
            <li className="arrow_polygon_wrap">
              <img
                src="/img/arrow_right_polygon.svg"
                width="7.22"
                height="6.54"
              ></img>
            </li>
            <li className="display_flex_row">
              <div className="hearing_imoji_warp display_flex_column align_items_center">
                <img
                  src="/img/hearing_normal.svg"
                  width="32"
                  height="32"
                  alt="normal"
                ></img>
                <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                  정상
                </div>
                <div className="font_13 weight_medium color_gray_70">2016</div>
              </div>
            </li>
            <li className="arrow_polygon_wrap">
              <img
                src="/img/arrow_right_polygon.svg"
                width="7.22"
                height="6.54"
              ></img>
            </li>
            <li className="display_flex_row">
              <div className="hearing_imoji_warp display_flex_column align_items_center">
                <img
                  src="/img/hearing_error.svg"
                  width="32"
                  height="32"
                  alt="normal"
                ></img>
                <div className="hearing_imoji_common hearing_imoji_error text_align_center font_12 weight_medium radius_12">
                  이상
                </div>
                <div className="font_13 weight_medium color_gray_70">2018</div>
              </div>
            </li>
            <li className="arrow_polygon_wrap">
              <img
                src="/img/arrow_right_polygon.svg"
                width="7.22"
                height="6.54"
              ></img>
            </li>
            <li className="display_flex_row">
              <div className="hearing_imoji_warp display_flex_column align_items_center">
                <img
                  src="/img/hearing_normal.svg"
                  width="32"
                  height="32"
                  alt="normal"
                ></img>
                <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                  정상
                </div>
                <div className="font_13 weight_medium color_gray_70">2023</div>
              </div>
            </li>
          </ul>
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
                신장질환
              </div>
            </div>
            <img
              src="/img/checkup_result_kidney_disease.svg"
              width="56"
              height="56"
              alt="kidney_disease"
            ></img>
          </div>
          <div className="color_gray_70 font_14 weight_regular">
            신장의 사구체, 신세뇨관, 간질 또는 혈관의 병변으로 인해 수분-전해질
            조절, 산-염기 평형, 내분비 기능 등에 이상이 생겨 몸이 붓고 합병증이
            발생하는 질환입니다.
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal display_flex_column gap_32 checkup_sub_wrap">
          <div className="display_flex_column gap_24_">
            <div className="color_gray_19 weight_semi_bold font_19">
              간장질환 진단 기준
            </div>
            <div className="display_flex_column gap_8">
              <div className="display_flex_column gap_4">
                <ul className="display_flex_row gap_4">
                  <li className="graph_anemia_header graph_anemia_left color_gray_50 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13">
                    검진항목
                  </li>
                  <li className="graph_cholestrol_right graph_cholestrol_normal graph_anemia_center text_align_center radius_4 weight_semi_bold font_13 color_gray_90 display_flex_column gap_4">
                    정상
                    <div className="display_flex_row gap_4">
                      <div className="graph_cholestrol_right graph_cholestrol_normal graph_anemia_center text_align_center radius_4 weight_semi_bold font_13">
                        A
                      </div>
                      <div className="graph_cholestrol_right graph_cholestrol_threshold graph_anemia_center text_align_center radius_4 weight_semi_bold font_13">
                        B(경계)
                      </div>
                    </div>
                  </li>
                  <li className="graph_cholestrol_error graph_anemia_right graph_anemia_header graph_anemia_right_top text_align_center radius_4 weight_semi_bold font_13 color_gray_90">
                    질환의심
                  </li>
                </ul>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    요단백
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center display_flex_row gap_4">
                    <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                      음성(-)
                    </div>
                    <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center">
                      약양성(±)
                    </div>
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center  display_flex_column justify_content_center">
                    양성(+1)<br></br>이상
                  </div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    혈청크레아티닌
                  </div>
                  <div className="graph_anemia_content graph_anemia_center display_flex_row gap_4">
                    <div className="graph_anemia_content graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                      1.5mg/dL<br></br> 이하
                    </div>
                    <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center"></div>
                  </div>
                  <div className="graph_anemia_content graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    1.5mg/dL<br></br>초과
                  </div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13  display_flex_column justify_content_center">
                    신사구체여과율<br></br>(e-GFR)
                  </div>
                  <div className="graph_anemia_content graph_anemia_center display_flex_row gap_4">
                    <div className="graph_anemia_content graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                      60mL/mln/1.73m2 이상
                    </div>
                    <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center"></div>
                  </div>
                  <div className="graph_anemia_content graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center  display_flex_column justify_content_center">
                    60mL/mln/<br></br>1.73m2 미만
                  </div>
                </div>
              </div>
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
                    src="/img/checkup_result_blood_sugar3.svg"
                    width="24"
                    height="24"
                    alt="blood sugar"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    요단백
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      신장질환의 가장 중요한 지표로, 검출되면 신장 여과기능 장애
                      의심
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      일단 검출되면 24시간 요단백 총량검사 등 추가 검사(심한
                      요단백 : 3.5g/일)
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      과로, 격렬한 운동으로 인해 일시적으로 검출 될 수 있음
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <img
                    src="/img/checkup_result_creatinine.svg"
                    width="24"
                    height="24"
                    alt="creatinine"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    크레아티닌
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      근육에서 만들어지며, 신장을 통해 소변으로 배설
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      신장이 효과적으로 혈액을 거르는지 판단하는 중요한 지표
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      수치가 높으면 신장염, 신부전증 의심
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
                      충분한 열량과 적절한 단백질 섭취
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      물은 부족하지 않게, 그러나 과하지 않게
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      하루에 소금 5g 이하로 먹기
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
                    뼈나 관절의 상태를 고려하여 걷기, 조깅, 에어로빅 실시
                  </li>
                  <li className="color_gray_70 font_14 weight_regular">
                    정식 자전거 타기
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
