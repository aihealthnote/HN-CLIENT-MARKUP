export default function CustomerCenterEmpty() {
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
              <div className="font_15 weight_semi_bold color_gray_50 notice_tab_inner">
                전체
              </div>
            </div>
          </div>
          <div className="text_align_center">
            <div className="font_15 weight_semi_bold color_gray_50 notice_tab_inner">
              공지사항
            </div>
          </div>
          <div className="text_align_center">
            <div className="font_15 weight_semi_bold color_gray_90 notice_tab_inner">
              이벤트
            </div>
            <div className="tab_underline_on"></div>
          </div>
        </div>
      </div>
      <div className="height_44 background_gray_10 notice_event_tab_wrap display_flex_row gap_4">
        <div className="button_primary padding_0_10 radius_50 font_14 weight_medium display_flex_row align_items_center">
          진행중 이벤트
        </div>
        <div className="background_gray_0 border_gray_20 padding_0_10 radius_50 font_14 weight_medium color_gray_70 display_flex_row align_items_center">
          종료된 이벤트
        </div>
      </div>
      <div className="border_bottom_gray_20 notice_list">
        <div className="display_flex_column gap_8">
          <div className="display_flex_column gap_6">
            <div className="color_E66B49 font_13 weight_medium">이벤트</div>
            <div className="font_15 weight_regular color_gray_90">
              건강검진 결과 확인하기 당첨자 발표
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
              걷기 1만보 인증하기 이벤트
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
            <div className="color_E66B49 font_13 weight_medium">이벤트</div>
            <div className="font_15 weight_regular color_gray_90">
              걷기 1만보 인증하기 이벤트
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
