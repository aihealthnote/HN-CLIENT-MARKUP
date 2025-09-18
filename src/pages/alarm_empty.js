export default function AlarmEmpty() {
  return (
    <>
      <div className="notice_empty_relative">
        <div className="top_title_wrap_2 display_flex_row space_between">
          <img
            src="/img/arrow_left_bk.svg"
            width="24px"
            height="24px"
            alt="arrow left"
          ></img>
          <span className="font_17 weight_semi_bold">알림함</span>
          <img
            src="/img/alarm_setting.svg"
            width="24px"
            height="24px"
            alt="setting"
          ></img>
        </div>
        <div className="display_flex_row padding_0_20 border_bottom_gray_20">
          <div className="text_align_center alarm_tab">
            <div className="tab_padding_2 font_15 weight_semi_bold color_gray_90 red_dot_wrap">
              서비스 알림 <div className="red_dot_2"></div>
            </div>
            <div className="tab_underline_on"></div>
          </div>
          <div className="text_align_center alarm_tab">
            <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
              복약 알림 <div className="red_dot_2"></div>
            </div>
          </div>
        </div>
        <div className="font_13 weight_regular color_gray_70 background_gray_5 height_36 display_flex_row align_items_center justify_content_center">
          서비스 알림은 최근
          <span className="font_13 weight_regular color_226DE7">30일</span>
          까지만 확인 가능해요!
        </div>
        <div className="background_gray_0 radius_12 padding_20 notice_empty_absolute">
          <div className="health_care_question display_flex_column text_align_center  gap_20 align_items_center">
            <img
              src="/img/health_care_question.svg"
              width="40"
              height="40"
              alt="question"
            ></img>
            <div className="display_flex_column gap_8">
              <div className="font_14 weight_medium color_gray_70">
                알림 내역이 없어요
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
