export default function CustomerCenterNoticeAllEmpty() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">공지사항</span>
      </div>
      <div className="notice_tab_wrap border_bottom_gray_20">
        <div className="display_flex_row padding_0_20 gap_8">
          <div className="text_align_center notice_tab_1">
            <div>
              <div className="font_15 weight_semi_bold color_gray_90 notice_tab_inner">
                전체
              </div>
              <div className="tab_underline_on"></div>
            </div>
          </div>
          <div className="text_align_center">
            <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50 notice_tab_2">
              공지사항
            </div>
          </div>
          <div className="text_align_center">
            <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50 notice_tab_3">
              이벤트
            </div>
          </div>
        </div>
      </div>
      <div className="notice_empty_relative">
        <div className="notice_empty_absolute display_flex_column text_align_center  gap_20 align_items_center">
          <img
            src="/img/health_care_question.svg"
            width="40"
            height="40"
            alt="question"
          ></img>
          <div className="font_14 weight_medium color_gray_70">
            등록된 내역이 없어요.
          </div>
        </div>
      </div>
    </>
  );
}
