export default function FindId() {
  return (
    <>
      <div className="top_title_wrap display_flex_row align_items_center">
        <img src="/img/arrow_left_bk.svg"></img>
        <span>아이디/비밀번호 찾기</span>
      </div>
      <div className="display_flex_row padding_0_20">
        <div className="text_align_center width_50">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_90">
            아이디 찾기
          </div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center width_50">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
            비밀번호 찾기
          </div>
        </div>
      </div>
      <div className="padding_20_24 display_flex_column gap_48">
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            휴대폰번호
          </label>
          <div class="display_flex_row gap_8 input_date_wrapper">
            <input
              type="text"
              id="input_normal"
              class="input_normal_2 radius_8"
              placeholder="01012345678"
            />
            <button className="font_15 weight_medium width_200 radius_8 button_secondary">
              인증 번호 발송
            </button>
            {/* <button className="font_15 weight_medium width_200 radius_8 background_gray_30 color_gray_0">
                인증 번호 발송
              </button> */}
          </div>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal_2 radius_8"
              placeholder="인증 코드를 입력해주세요"
            />
          </div>
          <div className="display_flex_row gap_4 align_items_center">
            <img
              src="/img/family_code_error.svg"
              width="16"
              height="16"
              alt="error"
            ></img>
            <div className="color_F35064 font_12 weight_regular">
              인증 번호가 불일치합니다
            </div>
          </div>
          {/* <div className="display_flex_row gap_4 align_items_center">
              <img
                src="/img/family_code_confirm.svg"
                width="16"
                height="16"
                alt="confirm"
              ></img>
              <div className="color_2386E9 font_12 weight_regular">
                인증 번호가 일치합니다
              </div>
            </div> */}
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">아이디 찾기</button>
      </div>
    </>
  );
}
