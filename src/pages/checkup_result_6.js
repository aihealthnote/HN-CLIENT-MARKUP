export default function CheckupResult6() {
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
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            빈혈 및 혈액학적검사
          </div>
          <div className="tab_underline_on"></div>
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
                  빈혈 및 혈액학적검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  혈색소
                </div>
              </div>
              <img
                src="/img/checkup_result_hemoglobin.svg"
                width="56"
                height="56"
                alt="hemoglobin"
              ></img>
            </div>
            <div className="font_14 weight_regular color_gray_70">
              혈색소에 대한 텍스트를 넣어주세요.
            </div>
            <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
              <div className="display_flex_row align_items_baseline">
                <div className="color_gray_90 font_28 weight_semi_bold">17</div>
                <div className="color_gray_90 font_19 weight_semi_bold">
                  g/dL
                </div>
              </div>
              {/* <button className="result_unit_button_common result_unit_button_normal radius_12 font_13 weight_semi_bold">
                정상
              </button> */}
              <button className="result_unit_button_common result_unit_button_warning radius_12 font_13 weight_semi_bold">
                주의
              </button>
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
          혈색소의 추이
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
              1.2 g/dL{' '}
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
              <div className="color_gray_90 font_24 weight_semi_bold">빈혈</div>
            </div>
            <img
              src="/img/checkup_result_anemia.svg"
              width="56"
              height="56"
              alt="anemia"
            ></img>
          </div>
          <div className="color_gray_70 font_14 weight_regular">
            산소를 공급하는 매개체인 적혈구의 양(수)이 감소하거나 적혈구 내
            혈색소의 부족으로 인해 조직의 산소 요구량이 채워지지 않는 상태를
            말합니다.
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal display_flex_column gap_32 checkup_sub_wrap">
          <div className="display_flex_column gap_24_">
            <div className="color_gray_19 weight_semi_bold font_19">
              빈혈 진단 기준
            </div>
            <div className="display_flex_column gap_8">
              <ul className="checkup_result_inside_wrap2 display_flex_row gap_2">
                <li className="result_button_common result_button_on font_14 weight_medium">
                  남성
                </li>
                <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
                  여성
                </li>
              </ul>
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
                  <div className="graph_anemia_content graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    핼색소(g/dL)<br></br>(헤모글로빈)
                  </div>
                  <div className="graph_anemia_content graph_anemia_center display_flex_row gap_4">
                    <div className="graph_anemia_content graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                      13.0~16.5
                    </div>
                    <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center">
                      12.0~12.9 /<br></br>16.6~17.5
                    </div>
                  </div>
                  <div className="graph_anemia_content graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center  display_flex_column justify_content_center">
                    12.0 <br></br>미만
                  </div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    적혈구 수<br></br>(x106㎕)
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center  display_flex_column justify_content_center">
                    440~560
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13  display_flex_column justify_content_center">
                    헤마토크리트
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center  display_flex_column justify_content_center">
                    39~50%
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center  display_flex_column justify_content_center"></div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    백혈구 수<br></br>(/㎕)
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    4,500 ~ 10,000
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
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
                    src="/img/checkup_result_hemoglobin2.svg"
                    width="24"
                    height="24"
                    alt="hemoglobin"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    혈색소
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      적혈구 내의 물질로서 폐에 공급된 산소를 체내조직으로 운반
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      혈색소나 헤마토크리트 둘 중 하나라도 정상치를 벗어나면
                      빈혈
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <img
                    src="/img/checkup_result_hematocrit.svg"
                    width="24"
                    height="24"
                    alt="hematocrit"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    헤마토크리트
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      적혈구용적률이라고도 하며, 혈액 전체 부피에 대한 적혈구
                      부피의 비율을 의미
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      빈혈 여부를 판단하는 중요한 지표
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <img
                    src="/img/checkup_result_leukocyte.svg"
                    width="24"
                    height="24"
                    alt="leukocyte"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    백혈구
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      증가 : 몸에 해로운 세균 등이 침입, 백혈병 등 혈액암으로
                      골수에서 백혈구 이상증식
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      감소 : 약물 바이러스 감염에 의한 일시적 감소, 패혈증 등
                      중증감염, 비장기능항진, 재생 불량성 빈혈, 악성 빈혈 등
                      혈액질환, 약물 부작용으로 인한 골수기능 장애
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
                      계란, 붉은색 살코기, 생성 든 동물성 식품, 녹황색 채소 등
                      철분 함유 식품 충분히 먹기
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      고기를 먹을 때는 야채를 충분히 곁들여 철분 흡수를 높이기
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      식사중이나 식사 1시간 이내에는 철분흡수를 방해하는 커피,
                      녹차, 홍차, 청량음료 등 삼가
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
