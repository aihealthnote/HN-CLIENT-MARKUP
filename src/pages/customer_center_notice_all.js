export default function CustomerCenterNoticeAll() {
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
      <div className="border_bottom_gray_20 notice_list">
        <div className="display_flex_column gap_8">
          <div className="display_flex_column gap_6">
            <div className="color_5967B4 font_13 weight_medium">공지사항</div>
            <div className="font_15 weight_regular color_gray_90">
              시스템 작업 공지 [2024.07.01]시스템 작업 공지 [2024.07.01]
            </div>
          </div>
          <div>
            <div className="font_13 weight_regular color_gray_50">
              2024.06.23
            </div>
          </div>
        </div>
      </div>
      <div className="border_bottom_gray_20 notice_list">
        <div className="display_flex_column gap_8">
          <div className="display_flex_column gap_6">
            <div className="color_5967B4 font_13 weight_medium">공지사항</div>
            <div className="font_15 weight_regular color_gray_90">
              개인정보처리방침 변경 사전 안내 공지
            </div>
          </div>
          <div>
            <div className="font_13 weight_regular color_gray_50">
              2024.06.23
            </div>
          </div>
        </div>
      </div>
      <div className="border_bottom_gray_20 notice_list">
        <div className="display_flex_column gap_8">
          <div className="display_flex_column gap_6">
            <div className="color_E66B49 font_13 weight_medium">이벤트</div>
            <div className="font_15 weight_regular color_gray_90">
              음식 사진 찍고 칼로리 입력하기 이벤트
            </div>
          </div>
          <div>
            <div className="font_13 weight_regular color_gray_50">
              2024.06.23
            </div>
          </div>
        </div>
      </div>
      <div className="border_bottom_gray_20 notice_list">
        <div className="display_flex_column gap_8">
          <div className="display_flex_column gap_6">
            <div className="color_5967B4 font_13 weight_medium">공지사항</div>
            <div className="font_15 weight_regular color_gray_90">
              앱 업데이트 안내 [2024.07.01] - 서비스 안정 및 기능 추가
            </div>
          </div>
          <div>
            <div className="font_13 weight_regular color_gray_50">
              2024.06.23
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
