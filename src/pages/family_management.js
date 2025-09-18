export default function FamilyManagement() {
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
            <div className="tab_padding_2 font_15 weight_semi_bold color_gray_90">
              내 가족
            </div>
            <div className="tab_underline_on"></div>
          </div>
          <div className="text_align_center width_50">
            <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
              신청 목록 <div className="red_dot"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="background_gray_0 radius_12 padding_20">
        <div className="health_care_question display_flex_column text_align_center  gap_20 align_items_center">
          <img
            src="/img/health_care_question.svg"
            width="40"
            height="40"
            alt="question"
          ></img>
          <div className="display_flex_column gap_40">
            <div className="display_flex_column gap_8">
              <div className="font_14 weight_medium color_gray_70">
                아직 추가하신 가족이 없어요
              </div>
              <div className="font_13 weight_regular color_gray_50">
                가족을 추가해보세요
              </div>
            </div>
            <button className="result_button_on height_48 radius_8 family_add_button gap_4 display_flex_row align_items_center justify_content_center">
              <img
                src="/img/add_wh.svg"
                width="20"
                height="20"
                alt="plus"
              ></img>
              <div className=" weight_semi_bold color_gray_0 font_15">
                가족 추가하기
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
