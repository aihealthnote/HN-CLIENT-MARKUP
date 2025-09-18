export default function CheckupResult7() {
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
                  간담도계 및 간염검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  AST(SGOT)
                </div>
              </div>
              <img
                src="/img/checkup_result_ast.svg"
                width="56"
                height="56"
                alt="ast"
              ></img>
              {/* <img
                src="/img/checkup_result_alt.svg"
                width="56"
                height="56"
                alt="alt"
              ></img> */}
              {/* <img
                src="/img/checkup_result_ygpt.svg"
                width="56"
                height="56"
                alt="ygpt"
              ></img> */}
            </div>
            <div className="font_14 weight_regular color_gray_70">
              AST(SGOT)에 대한 텍스트 내용
            </div>
            <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
              <div className="display_flex_row align_items_baseline">
                <div className="color_gray_90 font_28 weight_semi_bold">28</div>
                <div className="color_gray_90 font_19 weight_semi_bold">
                  U/L
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
          AST(SGOT)의 추이
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
              10 U/L{' '}
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
                간장질환
              </div>
            </div>
            <img
              src="/img/checkup_result_anemia.svg"
              width="56"
              height="56"
              alt="anemia"
            ></img>
          </div>
          <div className="color_gray_70 font_14 weight_regular">
            간암, 지방간, 간경변, 급성간염, 만성간염 등 간기능 장애로 인해 간에
            발생하는 모든 질환입니다.
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal display_flex_column gap_32 checkup_sub_wrap">
          <div className="display_flex_column gap_24_">
            <div className="color_gray_19 weight_semi_bold font_19">
              간장질환 진단 기준
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
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    AST<br></br>(SGOT)
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center display_flex_row gap_4">
                    <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                      40 이하
                    </div>
                    <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center">
                      41~50
                    </div>
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center  display_flex_column justify_content_center">
                    51<br></br>이상
                  </div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    AST<br></br>(SGOT)
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center display_flex_row gap_4">
                    <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                      35 이하
                    </div>
                    <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center">
                      36~45
                    </div>
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    46<br></br>이상
                  </div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13  display_flex_column justify_content_center">
                    감마<br></br>GPT
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center display_flex_row gap_4">
                    <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                      11~63
                    </div>
                    <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center">
                      64~77
                    </div>
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center  display_flex_column justify_content_center">
                    78<br></br>이상
                  </div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_cholestrol_right_height graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    총 단백
                  </div>
                  <div className="graph_cholestrol_right_height graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    6.0~8.5(g/dl)
                  </div>
                  <div className="graph_cholestrol_right_height graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_cholestrol_right_height graph_anemia_left color_gray_90 graph_bg_1 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    알부민
                  </div>
                  <div className="graph_cholestrol_right_height graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    3.5~5.0(g/dl)
                  </div>
                  <div className="graph_cholestrol_right_height graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_cholestrol_right_height graph_anemia_left color_gray_90 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    총 빌리루빈
                  </div>
                  <div className="graph_cholestrol_right_height graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    0.2~1.2(mg/dl)
                  </div>
                  <div className="graph_cholestrol_right_height graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_cholestrol_right_height graph_anemia_left color_gray_90 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    직접 빌리루빈
                  </div>
                  <div className="graph_cholestrol_right_height graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    0.5 이하(mg/dl)
                  </div>
                  <div className="graph_cholestrol_right_height graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    알칼리<br></br>포스파타제(ALP)
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    30~115 U/L
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_left color_gray_90 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    유산탈수<br></br>소효소(LDH)
                  </div>
                  <div className="display_flex_column gap_4 graph_anemia_center">
                    <div className="display_flex_row gap_4">
                      <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                        L &gt; P <br></br>(30°C)법
                      </div>
                      <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center">
                        80~120<br></br>U/L
                      </div>
                    </div>
                    <div className="graph_anemia_content_slim display_flex_row gap_4">
                      <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                        L &gt; P <br></br>(37°C)법
                      </div>
                      <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center">
                        100~225<br></br>U/L
                      </div>
                    </div>
                    <div className="graph_anemia_content_slim display_flex_row gap_4">
                      <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                        P &gt; L <br></br>(37°C)법
                      </div>
                      <div className="graph_anemia_right background_gray_5 font_13 color_gray_70 weight_regular text_align_center display_flex_column justify_content_center">
                        200~400<br></br>U/L
                      </div>
                    </div>
                  </div>
                  <div className="display_flex_column gap_4 graph_anemia_right">
                    <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                    <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                    <div className="graph_anemia_content_slim graph_anemia_right background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center"></div>
                  </div>
                </div>
                <div className="display_flex_row gap_4">
                  <div className="graph_anemia_content_slim graph_anemia_left color_gray_90 background_gray_20 text_align_center radius_4 weight_semi_bold font_13 display_flex_column justify_content_center">
                    알파피토<br></br>프로테인(AFP)
                  </div>
                  <div className="graph_anemia_content_slim graph_anemia_center background_gray_5 color_gray_70 font_13 weight_regular text_align_center display_flex_column justify_content_center">
                    RPHA법 음성(-)
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
                <div className="font_15 weight_semi_bold color_gray_90">
                  AST(SGOT) / ALT(SGPT)
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      간세포가 파괴되면 수치가 높아짐
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      중증의 간세포 손상 시 AST/ALT 비율 증가
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="font_15 weight_semi_bold color_gray_90">
                  감마GTP
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      담도에 이상이 있을 때 높아지는 효소로,
                      음주·과체중·약물복용에 의해서도 약간 증가
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      감마GTP가 높고 알칼리 포스파타제가 정상인 경우 : 음주로
                      인한 가능성이 높음
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="display_flex_row gap_8 align_items_center">
                  <div className="font_15 weight_semi_bold color_gray_90">
                    총 단백
                  </div>
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      혈청 1dL에 존재하는 모든 단백질의 양(g) : 1/3은 글로불린,
                      2/3는 알부민
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      단백 농도의 변화를 통해 간기능, 신장기능 등을 간접적으로
                      평가
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="font_15 weight_semi_bold color_gray_90">
                  알부민
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2">
                    <li className="color_gray_70 font_14 weight_regular">
                      수치가 낮으면 간경화, 신장질환, 활동성 만성간염 등
                      중증질환 의심
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="font_15 weight_semi_bold color_gray_90">
                  총 빌리루빈 / 직접 빌리루빈
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      간담도계의 배설능 용혈 등의 지표
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      총 빌리루빈 3~10mg/dL이면 눈의 흰자가 노랗게 변하고
                      10mg/dL 이상이면 피부가 노랗게 변함
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="font_15 weight_semi_bold color_gray_90">
                  알칼리 포스파타제(ALP)
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      수치가 높으면 간이나 담도에 이상이 있거나 뼈 질환 의심
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      간경변, 알코올성 간염, 바이러스성 간염 등의 경우 3배
                      이하로 증가
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      담다가 막혀 담즙유출에 문제가 생기면 활달과 함께
                      정상수치의 4배 이상 증가
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="font_15 weight_semi_bold color_gray_90">
                  유산탈수소효소(LDH)
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2 display_flex_column gap_8">
                    <li className="color_gray_70 font_14 weight_regular">
                      간, 뇌, 근육, 골격, 심장, 신장, 적혈구에 많음
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      조직 손상 시 수치가 높아짐
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      알칼리포스파타제와 함께 증가하고 AST, ALT는 증가하지
                      않으면 전이성 간암 의심
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_8">
                <div className="font_15 weight_semi_bold color_gray_90">
                  알파피토프로테인
                </div>
                <div className="background_gray_5 bmi_example display_flex_column gap_24_">
                  <ul className="list_style_type_2">
                    <li className="color_gray_70 font_14 weight_regular">
                      간암의 조기발견에 유용한 검사로, EIA 검사법의 정상판정
                      수치는 0~8.7
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
                    가벼운 유산소 운동은 간기능 회복에 도움
                  </li>
                  <li className="color_gray_70 font_14 weight_regular">
                    탁구, 달리기, 테니스 등 뛰는 운동은 오히려 간에 부담을
                    주므로 절대 금물
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
