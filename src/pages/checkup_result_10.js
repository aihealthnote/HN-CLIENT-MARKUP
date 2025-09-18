export default function CheckupResult10() {
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
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            신장기능검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            영상검사
          </div>
          <div className="tab_underline_on"></div>
        </div>
      </div>
      <div className="checkup_result_top_wrap display_flex_column gap_32">
        <div className="display_flex_column gap_24_">
          <div className="display_flex_column gap_24_">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="color_gray_50 font_13 weight_midium">
                  영상 검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  흉부방사선촬영
                </div>
              </div>
              <img
                src="/img/checkup_result_thorax.svg"
                width="56"
                height="56"
                alt="thorax"
              ></img>
            </div>
            <div className="font_14 weight_regular color_gray_70">
              흉부방사선에 대한 텍스트 내용
            </div>
            <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
              <div className="color_gray_90 font_28 weight_semi_bold">정상</div>
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
          흉부방사선촬영의 추이
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
                만성폐쇄성 질환
              </div>
            </div>
            <img
              src="/img/checkup_result_lung.svg"
              width="56"
              height="56"
              alt="lung"
            ></img>
          </div>
          <div className="color_gray_70 font_14 weight_regular">
            흡입된 공기와 혈액 사이 교유에 이상이 생겨서 호흡 자체에 에너지가
            많이 소모됨. 따라서 운동할 때에 숨쉬기가 힘들어서 운동을 기피하게
            되고, 그에 따라 근육이 감소하여 더욱 운동을 하기가 힘들어지는 악순환
            발생
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
                      충분한 수분 섭취
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      단백질이 풍부한 식사(우유, 유제품)
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      신선한 채소, 과일 충분히 섭취
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      카페인이 든 음료나 탄산음료 제한
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      미네랄과 비타민을 골고루 섭취
                    </li>
                    <li className="color_gray_70 font_14 weight_regular">
                      금연은 예방과 진행을 감소시키는 효과적인 방법
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
                    유산소 운동, 팔, 다리 근육 강화운동으로 지구력과 호흡곤란
                    증상 개선
                  </li>
                  <li className="color_gray_70 font_14 weight_regular">
                    적정체중 유지
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
