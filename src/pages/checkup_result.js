export default function CheckupResult() {
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
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            계측검사
          </div>
          <div className="tab_underline_on"></div>
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
          키
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          몸무게
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          허리둘레
        </li>
        <li className="result_button_common result_button_off font_14 weight_medium color_gray_70">
          체질량지수
        </li>
      </ul>
      <div className="checkup_result_top_wrap display_flex_column gap_32">
        <div className="display_flex_column gap_24_">
          <div className="display_flex_column gap_24_">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="color_gray_50 font_13 weight_midium">
                  계측검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">키</div>
              </div>
              <img
                src="/img/checkup_result_height.svg"
                width="56"
                height="56"
              ></img>
              {/* <img
                src="/img/checkup_result_waist_circumference.svg"
                width="56"
                height="56"
              ></img> */}
              {/* <img
                src="/img/checkup_result_bmi.svg"
                width="56"
                height="56"
              ></img> */}
            </div>
            <div className="font_14 weight_regular color_gray_70">
              신장에 대한 텍스트 내용
            </div>
          </div>
          <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
            <div className="display_flex_row align_items_baseline">
              <div className="color_gray_90 font_28 weight_semi_bold">
                182.1
              </div>
              <div className="color_gray_90 font_19 weight_semi_bold">cm</div>
            </div>
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
        <div className="display_flex_row gap_8 align_items_center bmi_information">
          <img
            src="/img/checkup_result_information.svg"
            width="16"
            height="16"
            alt="information"
          ></img>
          <div className="font_14 weight_regular color_gray_90">
            계산식 BMI = 체중(kg) / 키(m)의 제곱
          </div>
        </div>
      </div>
      <div className="divider_wide"></div>
      <div className="display_flex_column gap_20 result_bottom_wrap">
        <div className="font_19 weight_semi_bold color_gray_90">
          신장의 추이
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
              0.2cm{' '}
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
              <div className="color_gray_90 font_24 weight_semi_bold">비만</div>
            </div>
            <img
              src="/img/checkup_result_over_weight.svg"
              width="56"
              height="56"
              alt="over weight"
            ></img>
          </div>
          <div className="color_gray_70 font_14 weight_regular">
            비만은 체내에 과도한 지방이 축적되어 건강에 해를 끼칠 수 있는 상태를
            말합니다.
          </div>
        </div>
        <div className="background_gray_0 radius_12 shadow_normal padding_24 display_flex_column gap_32">
          <div className="display_flex_column gap_24_">
            <div className="color_gray_19 weight_semi_bold font_19">
              비만 진단 기준
            </div>
            <div className="display_flex_column gap_4">
              <div className="display_flex_row gap_4">
                <div className="over_weight_button_common over_weight_button_1 font_14 weight_semi_bold radius_4 text_align_center">
                  저체중
                </div>
                <div className="background_gray_5 radius_4 font_14 weihgt_regular color_gray_70 over_weight_bmi_sub radius_4">
                  BMI 18.5미만
                </div>
              </div>
              <div className="display_flex_row gap_4">
                <div className="over_weight_button_common over_weight_button_2 font_14 weight_semi_bold radius_4 text_align_center">
                  정상
                </div>
                <div className="background_gray_5 radius_4 font_14 weihgt_regular color_gray_70 over_weight_bmi_sub radius_4">
                  BMI 18.5 ~ 24.9
                </div>
              </div>
              <div className="display_flex_row gap_4">
                <div className="over_weight_button_common over_weight_button_3 font_14 weight_semi_bold radius_4 text_align_center">
                  과체중
                </div>
                <div className="background_gray_5 radius_4 font_14 weihgt_regular color_gray_70 over_weight_bmi_sub radius_4">
                  BMI 25 ~ 29.9
                </div>
              </div>
              <div className="display_flex_row gap_4">
                <div className="over_weight_button_common over_weight_button_4 font_14 weight_semi_bold radius_4 text_align_center">
                  비만
                </div>
                <div className="background_gray_5 radius_4 font_14 weihgt_regular color_gray_70 over_weight_bmi_sub radius_4">
                  BMI 30이상
                </div>
              </div>
            </div>
          </div>
          <div className="background_gray_5 bmi_example display_flex_column gap_24_">
            <div className="display_flex_row gap_8 align_items_center">
              <img src="/img/bmi_example.svg" width="16" height="16"></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                체질량지수로 비만의 예외 사례
              </div>
            </div>
            <ul className="list_style_type_2 display_flex_column gap_8">
              <li className="color_gray_70 font_14 weight_regular">
                운동선수나 보디빌더처럼 상대적으로 많은 근육량을 가지고 있어
                체질량지수가 높게 나오나, 체지방은 정상인 경우
              </li>
              <li className="color_gray_70 font_14 weight_regular">
                성장기 어린이는 연령에 따른 기준치를 사용해야 함
              </li>
              <li className="color_gray_70 font_14 weight_regular">
                임산부, 수유중인 여성 노인에서는 체질량 지수가 정확하지 않을 수
                있음
              </li>
              <li className="color_gray_70 font_14 weight_regular">
                척추질환(예: 척추측만증이나 후만증)등으로 정확한 신장을 측정할
                수 없는 경우
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
