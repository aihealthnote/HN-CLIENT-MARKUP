export default function MyCare() {
  return (
    <>
      <div className="my_care_padding display_flex_row space_between align_items_center">
        <div className="font_22 weight_semi_bold">내 진료</div>
        <div className="display_flex_row gap_20">
          <img src="/img/top_ai.svg" width="24" height="24" alt="ai"></img>
          <img
            src="/img/top_alarm.svg"
            width="24"
            height="24"
            alt="alarm"
          ></img>
        </div>
      </div>
      <div className="display_flex_row">
        <div className="text_align_center tab_width">
          <div className="tab_padding">건강검진</div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding">병원/약국 이용 기록</div>
          <div className="tab_underline_off"></div>
        </div>
      </div>
      <div className="ballon_wrap">
        <div className="ballon_2 padding_8_12 radius_8 display_flex_row space_between">
          <div className=" font_12 color_gray_0 weight_medium">
            <span className="font_12 weight_medium color_FFF200">
              병원과 약국 방문 기록
            </span>
            도<br></br> 함께 확인해 보세요
          </div>
          <img src="/img/close_gr2.svg" width="16" height="16"></img>
        </div>
        <div className="ballon_triangle2"></div>
      </div>
      <div className="report_top_wrap display_flex_column">
        <div className="display_flex_row space_between">
          <div>
            <div className="font_22 weight_semi_bold">홍길동 님의</div>
            <div className="font_22 weight_semi_bold display_flex_row gap_4">
              <span className="font_22 weight_semi_bold">2023년 12월 07일</span>
              <img src="/img/arrow_down_gray.svg" alt="arrow_down_gray"></img>
            </div>
            <h6 className="font_22 weight_semi_bold">건강검진 결과 리포트</h6>
          </div>
          <img
            src="/img/profile.png"
            width="72"
            height="72"
            alt="profile"
          ></img>
        </div>
        <button className="display_flex_row gap_6 align_items_center">
          <img
            src="/img/report_update_wh.svg"
            alt="report_update"
            width="26"
            className="background_0CC25A padding_4 radius_50"
          ></img>
          <span className="color_0CC25A weight_semi_bold">
            건강정보 업데이트 하기
          </span>
        </button>
        <div className="border_gray_20 radius_12 padding_16_16_12_16 display_flex_column gap_12">
          <div className="display_flex_row gap_12 health_age_little_box health_age_little_box_warning radius_12">
            <img src="/img/health_age_warning.svg" widht="66" height="27"></img>
            <span className="color_or font_15 weight_semi_bold align_items_center height_27">
              건강 관리가 필요합니다.
            </span>
          </div>
          <div className="display_flex_row padding_12_0">
            <div className="width_50 align_items_center display_flex_column divider_vertical_health_age">
              <div className="font_14 color_gray_50">건강 나이</div>
              <span>
                <span className="color_bl font_24 weight_semi_bold">59</span>
                <span className="font_17 color_gray_70">세</span>
              </span>
            </div>
            <div className="width_50 align_items_center display_flex_column">
              <div className="font_14 color_gray_50">실제 나이</div>
              <span>
                <span className="font_24 weight_semi_bold">58</span>
                <span className="font_17 color_gray_70">세</span>
              </span>
            </div>
          </div>
        </div>
        <ul className="report_blinker_wrap display_flex_row radius_12 shadow_normal border_gray_10">
          <li className="display_flex_column gap_10">
            <img
              src="/img/report_normal.svg"
              width="24"
              height="24"
              alt="report_normal"
            ></img>
            <div className="display_flex_row">
              <div className="color_gr weight_semi_bold">정상</div>
              <span className="color_gr weight_semi_bold">7</span>
            </div>
          </li>
          <div className="border_gray_10"></div>
          <li className="display_flex_column gap_10">
            <img
              src="/img/report_warning.svg"
              width="24"
              height="24"
              alt="report_warning"
            ></img>
            <div className="display_flex_row">
              <div className="color_or weight_semi_bold">주의</div>
              <span className="color_or weight_semi_bold">3</span>
            </div>
          </li>
          <div className="border_gray_10"></div>
          <li className="display_flex_column gap_10">
            <img
              src="/img/report_error.svg"
              width="24"
              height="24"
              alt="report_error"
            ></img>
            <div className="display_flex_row">
              <div className="color_rd weight_semi_bold">질환의심</div>
              <span className="color_rd weight_semi_bold">3</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="prediction_body_wrap">
        <h3 className="color_gray_90 font_22 weight_semi_bold">질환별 예측</h3>
        <div>
          <img
            src="/img/prediction_body.svg"
            width="100%"
            height="504"
            alt="body"
            class="prediction_body"
          ></img>
          <img
            src="/img/prediction_1.svg"
            width="100%"
            height="504"
            alt="body"
            class="prediction_1"
          ></img>
          <img
            src="/img/prediction_2.svg"
            width="100%"
            height="504"
            alt="body"
            class="prediction_2"
          ></img>
          <img
            src="/img/prediction_3.svg"
            width="100%"
            height="504"
            alt="body"
            class="prediction_3"
          ></img>
          <img
            src="/img/prediction_4.svg"
            width="100%"
            height="504"
            alt="body"
            class="prediction_4"
          ></img>
          <img
            src="/img/prediction_5.svg"
            width="100%"
            height="504"
            alt="body"
            class="prediction_5"
          ></img>
        </div>
        <div>
          <button className="prediction_body_button_common prediction_box_normal font_13 weight_semi_bold radius_12 body_button_common body_normal">
            보통
          </button>
          <button className="prediction_body_button_common prediction_box_error font_13 weight_semi_bold radius_12 body_button_common body_error">
            경고
          </button>
          <button className="prediction_body_button_common prediction_box_highdanger font_13 weight_semi_bold radius_12 body_button_common body_highdanger">
            고위험
          </button>
        </div>
        <div className="prediction_dot_commmon prediction_dot_normal"></div>
        <div className="prediction_dot_commmon prediction_dot_error"></div>
        <div className="prediction_dot_commmon prediction_dot_highdanger"></div>
      </div>
      <div className="display_flex_column gap_16_20 checkup_opinion">
        <div className="display_flex_row gap_4">
          <div className="font_14 weight_semi_bold color_gray_50">검진일</div>
          <span className="font_14 weight_medium color_gray_70">
            2023. 12. 07
          </span>
        </div>
        <div className="font_24 weight_semi_bold">항목별 건강검진 결과</div>
        <div className="padding_20_16 font_15 color_gray_70 background_EFF2F8 radius_16_20">
          검사결과 귀하는 비만, 혈압, 이상지질혈증, 간질환과 관련된 질병 위험이
          상대적으로 높아 관리가 필요합니다. <br></br>건강수명 향상을 위해
          생활습관 개선이 필요하며 정확한 진단 관리를 위해 의사의 상담 및
          지속적인 관리를 받으시길 권장해 드립니다.
        </div>
      </div>
      <div className="checkup_title_wrap display_flex_row justify_content_flex_end">
        <ul className="display_flex_row gap_4">
          <li className="checkup_normal_box display_flex_row radius_6 gap_4 padding_6">
            <img
              src="/img/checkup_normal.svg"
              width="8px"
              height="8px"
              alt="dot"
            ></img>
            <span className="font_12 weight_medium">정상</span>
          </li>
          <li className="checkup_warning_box display_flex_row radius_6 gap_4 padding_6">
            <img
              src="/img/checkup_warning.svg"
              width="8px"
              height="8px"
              alt="dot"
            ></img>
            <span className="font_12 weight_medium"> 주의</span>
          </li>
          <li className="checkup_error_box display_flex_row radius_6 gap_4 padding_6">
            <img
              src="/img/checkup_error.svg"
              width="8px"
              height="8px"
              alt="dot"
            ></img>
            <span className="font_12 weight_medium">질환의심</span>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              계측 (신체)검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img src="/img/checkup_physical.svg" width="40" height="40"></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="font_15 weight_medium">키</div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <div className="checkup_unit_value weight_semi_bold font_17">
                182.1
              </div>
              <div className="font_13 weight_semi_bold">cm</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">몸무게</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_normal.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 normal">
                70.5
              </div>
              <div className="font_13 normal weight_semi_bold">kg</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">허리둘레</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_warning.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 warning">
                79.0
              </div>
              <div className="font_13 warning weight_semi_bold">cm</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">체질랑지수(BMI)</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_error.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 error">
                28.0
              </div>
              <div className="font_13 error weight_semi_bold">kg/m²</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              안과검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img src="/img/checkup_eyes.svg" width="40" height="40"></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="display_flex_row gap_4">
                <div className="font_15 weight_medium">시력</div>
                <span className="font_15 weight_medium color_gray_50">
                  (좌/우)
                </span>
              </div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <div>
                <span className="weight_semi_bold font_17">1.0 </span>
                <span className="weight_semi_bold font_17"> / </span>
                <span className="weight_semi_bold font_17"> 1.0</span>
              </div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              청력검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img
            src="/img/checkup_hearing_ability.svg"
            width="40"
            height="40"
          ></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="display_flex_row gap_4 font_15 weight_medium">
                <div className="font_15 weight_medium">청력</div>
                <span className="font_15 weight_medium color_gray_50">
                  (좌/우)
                </span>
              </div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <div>
                <span className="weight_semi_bold font_17">정상 </span>
                <span className="weight_semi_bold font_17"> / </span>
                <span className="weight_semi_bold font_17"> 정상</span>
              </div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              혈압/심전도검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img
            src="/img/checkup_blood_pressure.svg"
            width="40"
            height="40"
          ></img>
        </div>
        <div className="background_f7f9fd display_flex_column olor_gray_0 radius_12 checkup_blood_pressure_box">
          <div className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="font_15 weight_medium display_flex_row gap_4">
                <div className="font_15 weight_medium">혈압</div>
                <span className="font_15 weight_medium color_gray_50">
                  (수축기/이완기)
                </span>
              </div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </div>
          <div className="radius_12 background_gray_0 checkup_blood_pressure_inside">
            <div className="display_flex_row space_between align_items_center checkup_blood_pressure_inside2">
              <div className="gap_4 display_flex_row align_items_center">
                <div className="font_15 weight_medium">수축기</div>
              </div>
              <div className="checkup_unit_right display_flex_row align_items_center">
                <img src="/img/checkup_error.svg" width="8" height="8"></img>
                <div className="checkup_unit_value weight_semi_bold font_17 error">
                  142
                </div>
                <div className="font_13 weight_semi_bold error">mmHg</div>
                <img src="/img/arrow_right_gray.svg"></img>
              </div>
            </div>
            <div className="divider"></div>
            <div className="display_flex_row space_between align_items_center checkup_blood_pressure_inside2">
              <div className="font_15 weight_medium">이완기</div>
              <div className="checkup_unit_right display_flex_row align_items_center">
                <img src="/img/checkup_normal.svg" width="8" height="8"></img>
                <div className="checkup_unit_value weight_semi_bold font_17 normal">
                  82
                </div>
                <div className="font_13 normal weight_semi_bold">mmHg</div>
                <img src="/img/arrow_right_gray.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8 ballon_wrap">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              혈중지질검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
            <div className="ballon font_12 color_gray_0 padding_12 radius_8">
              &ndash; 총 콜레스테롤 : 혈중 모든 콜레스테롤의 합으로, 심혈관
              건강을 가늠하는 기본 지표입니다. <br></br>
              <br></br> &ndash; HDL 콜레스테롤 : 혈관을 깨끗하게 해주는 ’좋은
              콜레스테롤'입니다.<br></br>
              <br></br> &ndash; 중성지방 : 에너지로 사용되지 않은 지방이혈액에
              저장된 형태입니다.<br></br>
              <br></br> &ndash; LDL 콜레스테롤 : 혈관에 쌓이는 '나쁜
              콜레스테롤'로, 동맥경화의 원인이 될 수 있습니다.
            </div>
            <div className="ballon_triangle"></div>
          </div>
          <img src="/img/checkup_blood_lipid.svg" width="40" height="40"></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="font_15 weight_medium">총 콜레스테롤</div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_normal.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 normal">
                210
              </div>
              <div className="font_13 weight_semi_bold normal">mg/dL</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">HDL콜레스테롤</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_normal.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 normal">
                65
              </div>
              <div className="font_13 normal weight_semi_bold">mg/dL</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">중성지방</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_warning.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 warning">
                180
              </div>
              <div className="font_13 warning weight_semi_bold">mg/dL</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">LDL콜레스테롤</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_error.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 error">
                130
              </div>
              <div className="font_13 error weight_semi_bold">mg/dL</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              빈혈 및 혈액학적검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img src="/img/checkup_anemia.svg" width="40" height="40"></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="font_15 weight_medium">혈색소</div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_warning.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 warning">
                17
              </div>
              <div className="font_13 weight_semi_bold warning">g/dL</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              간담도계 및 간염검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img src="/img/checkup_liver.svg" width="40" height="40"></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="font_15 weight_medium">AST(SGOT)</div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_warning.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 warning">
                28
              </div>
              <div className="font_13 weight_semi_bold warning">U/L</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">ALT(SGPT)</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_warning.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 warning">
                28
              </div>
              <div className="font_13 warning weight_semi_bold">U/L</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">감마지피티(y-GPT)</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_error.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 error">
                169
              </div>
              <div className="font_13 error weight_semi_bold">U/L</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              당뇨질환 및 췌장기능검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img src="/img/checkup_blood_sugar.svg" width="40" height="40"></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="font_15 weight_medium">혈당</div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_normal.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 normal">
                정상
              </div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              신장기능 검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img src="/img/checkup_kidney.svg" width="40" height="40"></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="font_15 weight_medium">요단백</div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_normal.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 normal">
                음성
              </div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">혈청크레아티닌</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_warning.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 warning">
                1.3
              </div>
              <div className="font_13 warning weight_semi_bold">mg/dL</div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
          <div className="divider"></div>
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="font_15 weight_medium">신사구체여과율</div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_error.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 error">
                65
              </div>
              <div className="font_13 error weight_semi_bold">
                mL/min/1.73㎡
              </div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_list_wrap display_flex_column color_gray_50 font_19 radius_12 emphasis shadow_normal">
        <div className="display_flex_row space_between algin_items_center">
          <div className="display_flex_row align_items_center gap_8">
            <h5 className="color_gray_90 font_19 weight_semi_bold checkup_inside_title">
              호흡기 검사
            </h5>
            <img
              src="/img/information.svg"
              width="16"
              height="16"
              alt="information"
            ></img>
          </div>
          <img src="/img/checkup_breathing.svg" width="40" height="40"></img>
        </div>
        <ul className="checkup_unit_warp color_gray_0 radius_12">
          <li className="checkup_unit_list display_flex_row space_between align_items_center">
            <div className="gap_4 display_flex_row align_items_center">
              <div className="font_15 weight_medium">흉부방사선촬영</div>
            </div>
            <div className="checkup_unit_right display_flex_row align_items_center">
              <img src="/img/checkup_normal.svg" width="8" height="8"></img>
              <div className="checkup_unit_value weight_semi_bold font_17 normal">
                정상
              </div>
              <img src="/img/arrow_right_gray.svg"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="checkup_unit_wrap_etc display_flex_row align_items_center gap_8">
        <button className="checkup_unit_list_etc display_flex_row align_items_center border_gray_10 radius_12">
          <div className="display_flex_row gap_8">
            <img
              src="/img/checkup_edit.svg"
              width="20"
              height="20"
              alt="edit"
            ></img>
            <p>수정하기</p>
          </div>
        </button>
        <button className="checkup_unit_list_etc display_flex_row align_items_center border_gray_10 radius_12">
          <div className="display_flex_row gap_8">
            <img
              src="/img/checkup_delete.svg"
              width="20"
              height="20"
              alt="delete"
            ></img>
            <p>삭제하기</p>
          </div>
        </button>
      </div>
      <div className="margin_bottom_50"></div>
    </>
  );
}
