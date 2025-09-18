export default function SeeMore() {
  return (
    <>
      <div className="background_gray_5 display_flex_clumn gap_12 ">
        <div className="my_care_padding display_flex_row space_between align_items_center">
          <div className="font_22 weight_semi_bold">더보기</div>
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
        <div className="display_flex_column gap_16 padding_16_20">
          <div className="display_flex_row space_between align_items_center">
            <div className="display_flex_row align_items_center gap_16 min_width_0">
              <img
                src="/img/profile.png"
                width="56"
                height="56"
                alt="profile"
              ></img>
              <div className=" display_flex_row gap_2 min_width_0">
                <span className="font_22 weight_semi_bold width_100 color_gray_90 ellipsis profile_name_ellipsis">
                  홍길동홍길동홍길동홍길동홍길동홍길동
                </span>
                <span className="font_17 weight_bold color_gray_90 align_items_center profile_name">
                  님
                </span>
              </div>
            </div>
            <img
              src="/img/arrow_right_lightgray.svg"
              width="24"
              height="24"
              alt="arrow"
            ></img>
          </div>
          <ul className="display_flex_row padding_12_16 align_items_center background_gray_0 radius_12 border_gray_10 shadow_normal">
            <li className="display_flex_column gap_10 width_50 align_items_center">
              <img
                src="/img/see_more_family.svg"
                width="24"
                height="24"
                alt="family"
              ></img>
              <div className="font_14 weight_bold color_gray_90">가족관리</div>
            </li>
            <li className="divider_vertical_44"></li>
            <li className="display_flex_column gap_10 width_50 align_items_center">
              <img
                src="/img/see_more_customer.svg"
                width="24"
                height="24"
                alt="customer"
              ></img>
              <div className="font_14 weight_bold color_gray_90">고객센터</div>
            </li>
          </ul>
        </div>
        <div className="display_flex_column gap_12">
          <div className="background_gray_0 padding_16_12 radius_12 margin_0_20 display_flex_column gap_16">
            <div className="font_15 weight_semi_bold color_gray_50">홈</div>
            <div className="display_flex_row space_between align_items_center see_more_padding margin_right_8">
              <div className="display_flex_row align_items_center gap_8">
                <img
                  src="/img/see_more_edit.svg"
                  width="32"
                  height="32"
                  alt="home edit"
                ></img>
                <div className="font_17 weight_medium color_gray_90">
                  홈 화면 편집
                </div>
              </div>
              <img
                src="/img/arrow_right_gray.svg"
                width="16"
                height="16"
                alt="arrow"
              ></img>
            </div>
          </div>
          <div className="background_gray_0 padding_16_12 radius_12 margin_0_20 display_flex_column gap_16">
            <div className="font_15 weight_semi_bold color_gray_50">
              내 진료
            </div>
            <div>
              <div className="display_flex_row space_between align_items_center see_more_padding margin_right_8">
                <div className="display_flex_row align_items_center gap_8">
                  <img
                    src="/img/see_more_checkup.svg"
                    width="32"
                    height="32"
                    alt="checkup"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    건강검진
                  </div>
                </div>
                <img
                  src="/img/arrow_right_gray.svg"
                  width="16"
                  height="16"
                  alt="arrow"
                ></img>
              </div>
              <div className="background_gray_5 radius_12 padding_8_16 display_flex_column gap_4">
                <div className="display_flex_row space_between align_items_center height_40">
                  <div className="display_flex_row gap_8">
                    <img
                      src="/img/NationalHealthInsuranceService.svg"
                      width="16"
                    ></img>
                    <div className="font_15 weight_regular color_gray_90">
                      건강보험공단 기록 불러오기
                    </div>
                  </div>
                  <img
                    src="/img/arrow_right_gray.svg"
                    width="16"
                    height="16"
                    alt="arrow"
                  ></img>
                </div>
                <div className="display_flex_row space_between align_items_center height_40">
                  <div className="display_flex_row gap_8">
                    <img src="/img/take_checkup_directly.svg" width="16"></img>
                    <div className="font_15 weight_regular color_gray_90">
                      직접 입력하기
                    </div>
                  </div>
                  <img
                    src="/img/arrow_right_gray.svg"
                    width="16"
                    height="16"
                    alt="arrow"
                  ></img>
                </div>
                <div className="display_flex_row space_between align_items_center height_40">
                  <div className="display_flex_row gap_8">
                    <img src="/img/take_checkup_camera.svg" width="16"></img>
                    <div className="font_15 weight_regular color_gray_90">
                      검진 결과 사진/파일로 등록하기
                    </div>
                  </div>
                  <img
                    src="/img/arrow_right_gray.svg"
                    width="16"
                    height="16"
                    alt="arrow"
                  ></img>
                </div>
              </div>
            </div>
            <div className="display_flex_column">
              <div className="see_more_padding display_flex_row align_items_center space_between margin_right_8">
                <div className="display_flex_row align_items_center gap_8">
                  <img
                    src="/img/see_more_hospital.svg"
                    width="32"
                    height="32"
                    alt="hospital"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    병원/약국 이용 기록
                  </div>
                </div>
                <img
                  src="/img/arrow_right_gray.svg"
                  width="16"
                  height="16"
                  alt="arrow"
                ></img>
              </div>
              <div className="background_gray_5 radius_12 padding_8_16 display_flex_column gap_4">
                <div className="display_flex_row space_between align_items_center height_40">
                  <div className="display_flex_row gap_8">
                    <img src="/img/folder_search.svg" width="16"></img>
                    <div className="font_15 weight_regular color_gray_90">
                      의료 이용 기록 불러오기
                    </div>
                  </div>
                  <img
                    src="/img/arrow_right_gray.svg"
                    width="16"
                    height="16"
                    alt="arrow"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="background_gray_0 padding_16_12 radius_12 margin_0_20 display_flex_column gap_16">
            <div className="font_15 weight_semi_bold color_gray_50">
              AI 건강 서비스
            </div>
            <div>
              <div className="display_flex_row space_between align_items_center see_more_padding margin_right_8">
                <div className="display_flex_row align_items_center gap_8">
                  <img
                    src="/img/see_more_stethoscope.svg"
                    width="32"
                    height="32"
                    alt="home edit"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    AI건강주치의
                  </div>
                </div>
                <img
                  src="/img/arrow_right_gray.svg"
                  width="16"
                  height="16"
                  alt="arrow"
                ></img>
              </div>
              <div className="display_flex_row space_between align_items_center see_more_padding margin_right_8">
                <div className="display_flex_row align_items_center gap_8">
                  <img
                    src="/img/see_more_ai2.svg"
                    width="32"
                    height="32"
                    alt="home edit"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    AI건강리포트
                  </div>
                </div>
                <img
                  src="/img/arrow_right_gray.svg"
                  width="16"
                  height="16"
                  alt="arrow"
                ></img>
              </div>
            </div>
          </div>
          <div className="background_gray_0 padding_16_12 radius_12 margin_0_20 display_flex_column gap_16">
            <div className="font_15 weight_semi_bold color_gray_50">
              건강기록
            </div>
            <div>
              <div className="display_flex_row gap_16">
                <div className="display_flex_row align_items_center gap_8 see_more_health_record width_50">
                  <img
                    src="/img/home_record_blood_sugar.svg"
                    width="32"
                    height="32"
                    alt="blood sugar"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    혈당
                  </div>
                </div>
                <div className="display_flex_row align_items_center gap_8 see_more_health_record width_50">
                  <img
                    src="/img/home_record_blood_pressure.svg"
                    width="32"
                    height="32"
                    alt="blood pressure"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    혈압
                  </div>
                </div>
              </div>
              <div className="display_flex_row gap_16">
                <div className="display_flex_row align_items_center gap_8 see_more_health_record width_50">
                  <img
                    src="/img/pill_see_more.svg"
                    width="32"
                    height="32"
                    alt="pill"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    복약
                  </div>
                </div>
                <div className="display_flex_row align_items_center gap_8 see_more_health_record width_50">
                  <img
                    src="/img/health_care_scale.svg"
                    width="32"
                    height="32"
                    alt="scale"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    체중
                  </div>
                </div>
              </div>
              <div className="display_flex_row gap_16">
                <div className="display_flex_row align_items_center gap_8 see_more_health_record width_50">
                  <img
                    src="/img/workout_fire_2.svg"
                    width="32"
                    height="32"
                    alt="work out"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    운동
                  </div>
                </div>
                <div className="display_flex_row align_items_center gap_8 see_more_health_record width_50">
                  <img
                    src="/img/meal_fork_yw.svg"
                    width="32"
                    height="32"
                    alt="fork"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    식사
                  </div>
                </div>
              </div>
              <div className="display_flex_row gap_16">
                <div className="display_flex_row align_items_center gap_8 see_more_health_record width_50">
                  <img
                    src="/img/home_record_no_smoking.svg"
                    width="32"
                    height="32"
                    alt="no smoking"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    금연
                  </div>
                </div>
                <div className="display_flex_row align_items_center gap_8 see_more_health_record width_50">
                  <img
                    src="/img/home_record_no_drinking.svg"
                    width="32"
                    height="32"
                    alt="no drinking"
                  ></img>
                  <div className="font_17 weight_medium color_gray_90">
                    금주
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
