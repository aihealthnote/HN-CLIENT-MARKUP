export default function FamilyManagementList1() {
  return (
    <>
      <div className="top_title_wrap display_flex_row bg_linear_ECFBFF">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">가족 관리</span>
      </div>
      <div className="shadow_normal">
        <div className="family_management_main">
          <div className="display_flex_row space_between">
            <div className="font_22 weight_semi_bold color_gray_90">
              가족의 건강을<br></br>함께 관리해주세요
            </div>
            <img
              src="/img/family_management_main.svg"
              width="104"
              height="84"
              alt="home"
            ></img>
          </div>
        </div>
        <div className="display_flex_row padding_0_20">
          <div className="text_align_center width_50">
            <div className="tab_padding_2  font_15 weight_semi_bold color_gray_50 ">
              내 가족
            </div>
          </div>
          <div className="text_align_center width_50">
            <div className="tab_padding_2  font_15 weight_semi_bold color_gray_90 red_dot_wrap">
              신청 목록 <div className="red_dot"></div>
            </div>
            <div className="tab_underline_on"></div>
          </div>
        </div>
      </div>
      <div className="background_gray_5 padding_20">
        <ul className="display_flex_row history_date_tab_wrap_3 radius_6 text_align_center background_gray_10 align_items_center">
          <li className="color_gray_90 weight_semi_bold font_13 background_gray_0 radius_4 shadow_normal">
            받은 신청{' '}
            <span className="weight_semi_bold font_13 color_0CC25A">4</span>
          </li>
          <li className="color_gray_50 weight_medium font_13">
            보낸 신청{' '}
            <span className="color_gray_50 weight_medium font_13">2</span>
          </li>
        </ul>
      </div>
      <ul className="background_gray_5 padding_0_20 display_flex_column gap_12">
        <li className="display_flex_column gap_24_ border_gray_20 radius_8 background_gray_0 padding_16">
          <div className="display_flex_row space_between align_items_center">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/profile.png"
                width="40"
                height="40"
                alt="profile"
              ></img>
              <div className="display_flex_column">
                <div className="font_17 weight_semi_bold colo_gray_90">
                  홍길동
                </div>
                <div className="font_14 weight_regular color_gray_50">
                  010-1234-5678
                </div>
              </div>
            </div>
            <div className="font_13 weight_regular color_gray_50">2일 전</div>
          </div>
          <div className="display_flex_row gap_20">
            <button className="display_flex_row align_items_center gap_4 radius_8 height_40 width_100 justify_content_center font_15 weight_medium background_gray_10 color_gray_90">
              거절하기
            </button>
            <button className="display_flex_row align_items_center gap_4 radius_8 height_40 width_100 justify_content_center font_15 weight_medium background_EAF5EB color_0C8C52">
              수락하기
            </button>
          </div>
        </li>
        <li className="display_flex_column gap_24_ border_gray_20 radius_8 background_gray_0 padding_16">
          <div className="display_flex_row gap_8 align_items_center">
            <img
              src="/img/profile.png"
              width="40"
              height="40"
              alt="profile"
            ></img>
            <div className="display_flex_column">
              <div className="font_17 weight_semi_bold colo_gray_90">
                홍길동
              </div>
              <div className="font_14 weight_regular color_gray_50">
                010-1234-5678
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_8 align_items_center">
            <div className="font_13 weight_regular color_gray_50">2일 전</div>
            <button className="prediction_body_button_common background_gray_10 color_gray_70 font_13 weight_regular radius_12">
              만료됨
            </button>
          </div>
        </li>
        <li className="display_flex_column gap_24_ border_gray_20 radius_8 background_gray_0 padding_16">
          <div className="display_flex_row gap_8 align_items_center">
            <img
              src="/img/profile.png"
              width="40"
              height="40"
              alt="profile"
            ></img>
            <div className="display_flex_column">
              <div className="font_17 weight_semi_bold colo_gray_90">
                홍길동
              </div>
              <div className="font_14 weight_regular color_gray_50">
                010-1234-5678
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_8 align_items_center">
            <div className="font_13 weight_regular color_gray_50">2일 전</div>
            <button className="prediction_body_button_common background_EAF5EB color_0C8C52 font_13 weight_regular radius_12">
              수락함
            </button>
          </div>
        </li>
        <li className="display_flex_column gap_24_ border_gray_20 radius_8 background_gray_0 padding_16">
          <div className="display_flex_row gap_8 align_items_center">
            <img
              src="/img/profile.png"
              width="40"
              height="40"
              alt="profile"
            ></img>
            <div className="display_flex_column">
              <div className="font_17 weight_semi_bold colo_gray_90">
                홍길동
              </div>
              <div className="font_14 weight_regular color_gray_50">
                010-1234-5678
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_8 align_items_center">
            <div className="font_13 weight_regular color_gray_50">2일 전</div>
            <button className="prediction_body_button_common prediction_box_highdanger font_13 weight_regular radius_12">
              거절함
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
