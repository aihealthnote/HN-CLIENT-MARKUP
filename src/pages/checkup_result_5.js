export default function CheckupResult5() {
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
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            혈중지질검사
          </div>
          <div className="tab_underline_on"></div>
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
      <ul className="checkup_result_inside_wrap background_gray_5 display_flex_row gap_2">
        <li className="result_button_common result_button_on font_14 weight_medium">
          총 콜레스테롤
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          HDL 콜레스테롤
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          중성지방
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          LDL 콜레스테롤
        </li>
      </ul>
      <div className="checkup_result_top_wrap display_flex_column gap_32">
        <div className="display_flex_column gap_24_">
          <div className="display_flex_column gap_24_">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="color_gray_50 font_13 weight_midium">
                  혈중지질검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  총 콜레스테롤
                </div>
              </div>
              <img
                src="/img/checkup_result_all_cholesterol.svg"
                width="56"
                height="56"
                alt="cholesterol"
              ></img>
              {/* <img
                src="/img/checkup_result_hdl_cholesterol.svg"
                width="56"
                height="56"
                alt="hdl cholesterol"
              ></img> */}
              {/* <img
                src="/img/checkup_result_naturalfat.svg"
                width="56"
                height="56"
                alt="natural fat"
              ></img> */}
              {/* <img
                src="/img/checkup_result_ldl_cholesterol.svg"
                width="56"
                height="56"
                alt="ldl cholesterol"
              ></img> */}
            </div>
            <div className="font_14 weight_regular color_gray_70">
              총 콜레스테롤에 대한 텍스트 내용
            </div>
            <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
              <div className="display_flex_row align_items_baseline">
                <div className="color_gray_90 font_28 weight_semi_bold">
                  210
                </div>
                <div className="color_gray_90 font_19 weight_semi_bold">
                  mg/dL
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
          총 콜레스테롤의 추이
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
              10 mg/dL
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
                이상지질혈증
              </div>
            </div>
            <img
              src="/img/checkup_result_dyslipidemia.svg"
              width="56"
              height="56"
              alt="dyslipidemia"
            ></img>
          </div>
          <div className="color_gray_70 font_14 weight_regular">
            콜레스테롤, 중성지방 등 지질 대사가 제대로 이루어지지 않아 혈액 중에
            지질이 많아진 상태로서, 뇌혈관 질환 관상동맥 질환의 원인 중
            하나입니다.
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal display_flex_column gap_32 checkup_sub_wrap">
          <div className="display_flex_column gap_32">
            <div className="color_gray_19 weight_semi_bold font_19">
              이상지질혈증 진단 기준
            </div>
            <div className="display_flex_column gap_4">
              <ul className="display_flex_row gap_4">
                <li className="graph_cholestrol_left color_gray_50 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                  검진항목
                </li>
                <li className="graph_cholestrol_right background_gray_20 text_align_center radius_4 weight_semi_bold font_13 color_gray_90 display_flex_column justify_content_center">
                  판정 구분
                </li>
                <li className="graph_cholestrol_right background_gray_20 text_align_center radius_4 weight_semi_bold font_13 color_gray_90 display_flex_column justify_content_center">
                  참고치
                </li>
              </ul>
              <div className="display_flex_row gap_4">
                <div className="graph_cholestrol_left graph_cholestrol_left_height color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                  총 콜레스테롤
                </div>
                <div className="display_flex_column gap_4 graph_cholestrol_right">
                  <div className="graph_cholestrol_right_height graph_cholestrol_error radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    질환의심
                  </div>
                  <div className="graph_cholestrol_right_height graph_cholestrol_threshold radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    경계치
                  </div>
                  <div className="graph_cholestrol_right_height graph_cholestrol_normal radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    정상
                  </div>
                </div>
                <div className="display_flex_column gap_4 graph_cholestrol_right">
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    240 이상
                  </div>
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    200~239
                  </div>
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    200 미만
                  </div>
                </div>
              </div>
              <div className="display_flex_row gap_4">
                <div className="graph_cholestrol_left graph_cholestrol_left_height color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                  LDL 콜레스테롤
                </div>
                <div className="display_flex_column gap_4 graph_cholestrol_right">
                  <div className="graph_cholestrol_right_height graph_cholestrol_error radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    질환의심
                  </div>
                  <div className="graph_cholestrol_right_height graph_cholestrol_threshold radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    경계치
                  </div>
                  <div className="graph_cholestrol_right_height graph_cholestrol_normal radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    정상
                  </div>
                </div>
                <div className="display_flex_column gap_4 graph_cholestrol_right">
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    160 이상
                  </div>
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    130~159
                  </div>
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    130 미만
                  </div>
                </div>
              </div>
              <div className="display_flex_row gap_4">
                <div className="graph_cholestrol_left graph_cholestrol_left_height color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13  display_flex_column justify_content_center">
                  HDL 콜레스테롤
                </div>
                <div className="display_flex_column gap_4 graph_cholestrol_right">
                  <div className="graph_cholestrol_right_height graph_cholestrol_error radius_4 font_14 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    질환의심
                  </div>
                  <div className="graph_cholestrol_right_height graph_cholestrol_threshold radius_4 font_14 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    경계치
                  </div>
                  <div className="graph_cholestrol_right_height graph_cholestrol_normal radius_4 font_14 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    정상
                  </div>
                </div>
                <div className="display_flex_column gap_4 graph_cholestrol_right">
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    40 미만
                  </div>
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    40~59
                  </div>
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    60 이상
                  </div>
                </div>
              </div>
              <div className="display_flex_row gap_4">
                <div className="graph_cholestrol_left_ color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                  중성지방<br></br>(트리글리세라이드)
                </div>
                <div className="display_flex_column gap_4 graph_cholestrol_right">
                  <div className="graph_cholestrol_right_height graph_cholestrol_error radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    질환의심
                  </div>
                  <div className="graph_cholestrol_right_height graph_cholestrol_threshold radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    경계치
                  </div>
                  <div className="graph_cholestrol_right_height graph_cholestrol_normal radius_4 font_13 weight_semi_bold text_align_center display_flex_column justify_content_center">
                    정상
                  </div>
                </div>
                <div className="display_flex_column gap_4 graph_cholestrol_right">
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    200 이상
                  </div>
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    150~199
                  </div>
                  <div className="graph_cholestrol_right_height background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    150 미만
                  </div>
                </div>
              </div>
            </div>
            <div className="font_12 weight_regular color_gray_50 text_align_right">
              ※ 한국지질동맥경화학회 2009년<br></br>
              &lt; mg/dL : 밀리그램 퍼 데시리터 &gt;
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
                    src="/img/checkup_result_cholester.svg"
                    width="24"
                    height="24"
                    alt="cholester"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    콜레스테롤
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      새우, 내장, 오징어 류, 달걀노른자, 고기의 기름에 많은
                      지방과 같은 물질
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      총 콜레스테롤이 높으면 동맥 벽에 지방이 쌓여 동맥이 좁아져
                      혈액의 흐림이 나빠짐
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <img
                    src="/img/checkup_result_cholester_2.svg"
                    width="24"
                    height="24"
                    alt="cholester"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    지질단백
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      체액을 통해 조직 안팎으로 콜레스테롤을 운반하는 지질과
                      단백의 복합체
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      고밀도 지질단백 : 동맥 벽에 붙은 저밀도 지질단백을
                      제거하여 동맥경화 방지
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      저밀도 지질단백 : 동맥 벽에 붙어 동맥경화를 일으킴
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <img
                    src="/img/checkup_result_cholester_3.svg"
                    width="24"
                    height="24"
                    alt="cholester"
                  ></img>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    중성지방(트리글레세라이드)
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      에너지 원으로 쓰이며, 남으면 모두 피하지방으로 쌓임
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      모든 장기의 에너지 원으로 쓰이며, 많으면 동맥경화성 질환을
                      일으킴
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
                      고기의 기름진 부위, 내장 및 곱창, 가공육(햄, 베이커,
                      소시지 등)을 피하고 살코기와 생선 먹기
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      콜레스테롤이 많은 음식을 자주 먹지 않고, 튀김 대신 찜,
                      구이, 조림 먹기
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      채소는 충분히 먹고, 저지방 우유나 두유 마시기
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
                  <ul className="list_style_type_2">
                    <li className="color_gray_70 font_14 weight_regular">
                      운동시간을 서서히 늘려가며 9~12개월 이상 꾸준히 유산소
                      운동
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
