export default function SeeMoreSetting() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">앱 설정</span>
      </div>
      <div className="padding_4_16 height_44 font_14 weight_medium color_gray_50">
        알림 설정
      </div>
      <div className="padding_0_16 height_54 display_flex_row space_between">
        <div className="font_17 weight_regular color_gray_90">
          복약알림(본인)
        </div>
        <div class="toggle_switch">
          <input type="checkbox" class="toggle_input" id="toggle" />
          <label class="toggle_label" for="toggle"></label>
        </div>
      </div>
      <div className="padding_0_16 height_54 display_flex_row space_between">
        <div className="font_17 weight_regular color_gray_90">
          복약알림(가족)
        </div>
        <div class="toggle_switch">
          <input type="checkbox" class="toggle_input" id="toggle2" />
          <label class="toggle_label" for="toggle2"></label>
        </div>
      </div>
      <div className="padding_0_16 height_54 display_flex_row space_between">
        <div className="font_17 weight_regular color_gray_90">공지사항</div>
        <div class="toggle_switch">
          <input type="checkbox" class="toggle_input" id="toggle3" />
          <label class="toggle_label" for="toggle3"></label>
        </div>
      </div>
      <div className="padding_0_16 height_54 display_flex_row space_between">
        <div className="font_17 weight_regular color_gray_90">
          이벤트, 혜택 알림
        </div>
        <div class="toggle_switch">
          <input type="checkbox" class="toggle_input" id="toggle4" />
          <label class="toggle_label" for="toggle4"></label>
        </div>
      </div>
      <div className="divider_wide"></div>
      <div className="padding_0_16 height_54 display_flex_row space_between height_68 align_items_center">
        <div className="font_17 weight_regular color_gray_90">앱 버전</div>
        <div className="font_17 weight_regular color_gray_50">3.04.12</div>
      </div>
      <div className="margin_16 height_48 display_flex_row gap_4 align_items_center justify_content_center border_gray_20 radius_8">
        <img src="/img/log_out.svg" width="20" height="20" alt="log out"></img>
        <div className="font_15 weight_medium color_gray_90">로그아웃</div>
      </div>
    </>
  );
}
