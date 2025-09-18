export default function FamilyManagementView() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">가족 건강 보기</span>
        <img
          src="/img/more.svg"
          width="24"
          height="24"
          alt="more"
          className="top_right_more"
        ></img>
      </div>
      <div className="health_care_more_popup health_care_more_popup_2 background_gray_0 shadow_normal display_flex_column radius_4 justify_content_center">
        <div className="display_flex_row padding_8_12 gap_8">
          <img src="/img/edit.svg" width="16" weight="16" alt="target"></img>
          <div className="font_15 weight_regular color_gray_90">
            가족 정보 수정
          </div>
        </div>
        <div className="display_flex_row padding_8_12 gap_8">
          <img src="/img/trash.svg" width="16" weight="16" alt="trash"></img>
          <div className="font_15 weight_regular color_gray_90">가족 삭제</div>
        </div>
      </div>
      <div className="background_gray_5 family_view_box">
        <div className="font_13 weight_regular color_gray_50 text_align_center height_32 display_flex_row align_items_center justify_content_center">
          건강상태를 확인할 수 있는 화면이에요
        </div>
        <div className="display_flex background_gray_0 border_gray_20 radius_12 padding_20">
          <div className="display_flex_row gap_8 space_between">
            <div className="display_flex_column gap_12 family_name">
              <div className="display_flex_row gap_4">
                <button className="display_flex_row gap_4 align_items_center justify_content_center family_button family_button_common radius_6">
                  <img
                    src="/img/family_button.svg"
                    width="16"
                    height="16"
                    alt="family"
                  />
                  <span className="color_226DE7 font_13 weight_semi_bold">
                    부모
                  </span>
                </button>
                {/* <button className="display_flex_row gap_4 align_items_center justify_content_center family_button_3 family_button_common radius_6">
                  <img
                    src="/img/family_button_3.svg"
                    width="16"
                    height="16"
                    alt="family"
                  />
                  <span className="prescription font_13 weight_semi_bold">
                    자녀
                  </span>
                </button> */}
                {/* <button className="display_flex_row gap_4 align_items_center justify_content_center family_button_2 family_button_common radius_6">
                  <img
                    src="/img/family_button_2.svg"
                    width="16"
                    height="16"
                    alt="family"
                  />
                  <span className="color_17959C font_13 weight_semi_bold">
                    배우자
                  </span>
                </button> */}
                {/* <button className="display_flex_row gap_4 align_items_center justify_content_center family_button_4 family_button_common radius_6">
                  <img
                    src="/img/family_button_4.svg"
                    width="16"
                    height="16"
                    alt="family"
                  />
                  <span className="color_8F4BCB font_13 weight_semi_bold">
                    기타
                  </span>
                </button> */}
              </div>
              <div className="font_17 weight_semi_bold color_gray_90 ellipsis">
                내무부장관ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ
              </div>
            </div>
            <img
              src="/img/profile.png"
              width="64"
              height="64"
              alt="profile"
              className="flex_shrink_0"
            />
          </div>
        </div>
      </div>
      <div className="display_flex_row padding_0_20 border_bottom_gray_20">
        <div className="text_align_center width_25">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_90">
            복약
          </div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center width_25">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
            혈압
          </div>
        </div>
        <div className="text_align_center width_25">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
            혈당
          </div>
        </div>
        <div className="text_align_center width_25">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
            건강검진
          </div>
        </div>
      </div>
      <div className="display_flex_column gap_20 align_items_center margin_top_32">
        <img src="/img/empty_pill.svg" width="88"></img>
        <div className="text_align_center display_flex_column gap_8">
          <div className="font_14 color_gray_70">
            아직 가족의 복약 기록이 없어요
            <br />
            가족이 기록을 시작하면 함께 건강을 관리해볼까요?
          </div>
          <div className="font_13 color_gray_50">
            복약 여부는 푸시 알림으로 놓치지 않게 알려드릴게요
          </div>
        </div>
      </div>
      {/* <div className="display_flex_column gap_20 align_items_center margin_top_32">
        <img src="/img/empty_blood_pressure.svg" width="88"></img>
        <div className="text_align_center display_flex_column gap_8">
          <div className="font_14 color_gray_70">
            아직 가족의 혈압 기록이 없어요
            <br />
            가족이 기록을 시작하면 변화를 함께 지켜볼까요?
          </div>
          <div className="font_13 color_gray_50">
            혈압 기록은 푸시 알림으로 빠짐없이 알려드릴게요
          </div>
        </div>
      </div> */}
      {/* <div className="display_flex_column gap_20 align_items_center margin_top_32">
        <img src="/img/empty_blood_sugar.svg" width="88"></img>
        <div className="text_align_center display_flex_column gap_8">
          <div className="font_14 color_gray_70">
            아직 가족의 혈당 기록이 없어요
            <br />
            가족이 기록을 시작하면 관리에 도움이 되지 않을까요?
          </div>
          <div className="font_13 color_gray_50">
            혈당 기록은 푸시 알림으로 편하게 확인할 수 있어요
          </div>
        </div>
      </div> */}
      {/* <div className="display_flex_column gap_20 align_items_center margin_top_32">
        <img src="/img/empty_report.svg" width="88"></img>
        <div className="text_align_center display_flex_column gap_8">
          <div className="font_14 color_gray_70">
            아직 가족의 건강검진 기록이 없어요
            <br />
            가족이 기록을 불러오면 함께 살펴볼까요?
          </div>
          <div className="font_13 color_gray_50">
            새로운 건강검진 결과도 푸시 알림으로 알려드릴게요
          </div>
        </div>
      </div> */}
    </>
  );
}
