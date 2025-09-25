export default function FindPw2() {
  return (
    <>
      <div className="top_title_wrap display_flex_row align_items_center">
        <img src="/img/arrow_left_bk.svg"></img>
        <span>아이디/비밀번호 찾기</span>
      </div>
      <div className="display_flex_row padding_0_20">
        <div className="text_align_center width_50">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
            아이디 찾기
          </div>
        </div>
        <div className="text_align_center width_50">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_90">
            비밀번호 찾기
          </div>
          <div className="tab_underline_on"></div>
        </div>
      </div>
      <div className="padding_20_24 display_flex_column gap_48">
        <div className="display_flex_column gap_32">
          <div className="display_flex_column gap_12">
            <label
              for="input_normal"
              className="font_14 weight_medium color_gray_90"
            >
              비밀번호
            </label>
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_2 radius_8"
                placeholder="비밀번호를 입력해주세요(문자, 숫자, 특수문자 포함)"
              />
            </div>
          </div>
          <div className="display_flex_column gap_12">
            <label
              for="input_normal"
              className="font_14 weight_medium color_gray_90"
            >
              비밀번호 재입력
            </label>
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_2 radius_8"
                placeholder="비밀번호를 입력해주세요(문자, 숫자, 특수문자 포함)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">비밀번호 변경</button>
      </div>
    </>
  );
}
