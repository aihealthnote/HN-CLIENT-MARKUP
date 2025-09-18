export default function FamilyManagement2() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
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
            <div className="tab_padding_2 font_15 weight_semi_bold color_gray_90">
              내 가족
            </div>
            <div className="tab_underline_on"></div>
          </div>
          <div className="text_align_center width_50">
            <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
              신청 목록
            </div>
          </div>
        </div>
      </div>
      <ul className="background_gray_5 padding_20 display_flex_column gap_12">
        <li className="display_flex_column gap_24_ border_gray_20 radius_8 background_gray_0 padding_16">
          <div className="display_flex_row space_between align_items_center">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/profile.png"
                width="40"
                height="40"
                alt="profile"
              ></img>
              <div className="font_17 weight_semi_bold colo_gray_90">
                홍엄마
              </div>
            </div>
            <div className="display_flex_row gap_4 family_button family_button_common align_items_center justify_content_center radius_6">
              <img
                src="/img/family_button.svg"
                width="16"
                height="16"
                alt="family"
              ></img>
              <div className="color_226DE7 font_13 weight_semi_bold">부모</div>
            </div>
          </div>
          <button className="display_flex_row align_items_center gap_4 border_gray_20 radius_8 background_gray_0 height_40 width_100 justify_content_center">
            <div className="font_15 weight_medium color_gray_90">
              가족 건강 보기
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow"
            ></img>
          </button>
        </li>
        <li className="display_flex_column gap_24_ border_gray_20 radius_8 background_gray_0 padding_16">
          <div className="display_flex_row space_between align_items_center">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/profile.png"
                width="40"
                height="40"
                alt="profile"
              ></img>
              <div className="font_17 weight_semi_bold colo_gray_90">
                내무부장관
              </div>
            </div>
            <div className="display_flex_row gap_4 family_button_2 family_button_common align_items_center justify_content_center radius_6">
              <img
                src="/img/family_button_2.svg"
                width="16"
                height="16"
                alt="family"
              ></img>
              <div className="color_17959C font_13 weight_semi_bold">
                배우자
              </div>
            </div>
          </div>
          <button className="display_flex_row align_items_center gap_4 border_gray_20 radius_8 background_gray_0 height_40 width_100 justify_content_center">
            <div className="font_15 weight_medium color_gray_90">
              가족 건강 보기
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow"
            ></img>
          </button>
        </li>
        <li className="display_flex_column gap_24_ border_gray_20 radius_8 background_gray_0 padding_16">
          <div className="display_flex_row space_between align_items_center">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/profile.png"
                width="40"
                height="40"
                alt="profile"
              ></img>
              <div className="font_17 weight_semi_bold colo_gray_90">
                홍딸래미
              </div>
            </div>
            <div className="display_flex_row gap_4 family_button_4 family_button_common align_items_center justify_content_center radius_6">
              <img
                src="/img/family_button_3.svg"
                width="16"
                height="16"
                alt="family"
              ></img>
              <div className="prescription font_13 weight_semi_bold">자녀</div>
            </div>
          </div>
          <button className="display_flex_row align_items_center gap_4 border_gray_20 radius_8 background_gray_0 height_40 width_100 justify_content_center">
            <div className="font_15 weight_medium color_gray_90">
              가족 건강 보기
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow"
            ></img>
          </button>
        </li>
        <li className="display_flex_column gap_24_ border_gray_20 radius_8 background_gray_0 padding_16">
          <div className="display_flex_row space_between align_items_center">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/profile.png"
                width="40"
                height="40"
                alt="profile"
              ></img>
              <div className="font_17 weight_semi_bold colo_gray_90">
                윗집할머니
              </div>
            </div>
            <div className="display_flex_row gap_4 family_button_4 family_button_common align_items_center justify_content_center radius_6">
              <img
                src="/img/family_button_4.svg"
                width="16"
                height="16"
                alt="family"
              ></img>
              <div className="color_8F4BCB font_13 weight_semi_bold">기타</div>
            </div>
          </div>
          <button className="display_flex_row align_items_center gap_4 border_gray_20 radius_8 background_gray_0 height_40 width_100 justify_content_center">
            <div className="font_15 weight_medium color_gray_90">
              가족 건강 보기
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow"
            ></img>
          </button>
        </li>
        <li className="display_flex_row gap_4 height_48 align_items_center justify_content_center">
          <img src="/img/add_bk.svg" width="20" height="20" alt="add"></img>
          <div>가족 추가하기</div>
        </li>
      </ul>
      <div className="popup_toast display_flex_row gap_8 align_items_center justify_content_center">
        <img src="/img/check_gr.svg" width="16" height="16" alt="check"></img>
        <div className="color_gray_0 font_15 weight_medium">
          상대방에세 가족 수락 신청을 보냈어요
        </div>
      </div>
    </>
  );
}
