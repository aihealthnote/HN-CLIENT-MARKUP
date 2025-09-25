export default function LoginInput() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="padding_20_24 display_flex_column gap_48">
        <div className="display_flex_column gap_32">
          <div className="display_flex_column gap_12">
            <label
              for="input_normal"
              className="font_14 weight_medium color_gray_90"
            >
              이메일
            </label>
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_2 radius_8"
                placeholder="이메일을 입력해주세요"
              />
            </div>
          </div>
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
        </div>
        <div className="height_48 text_align_center font_14 weight_medium color_gray_50 text_underline">
          아이디/패스워드 찾기
        </div>
      </div>
      <div className="bottom_button_wrap">
        <div className="height_48 text_align_center font_14 weight_medium color_gray_50 text_underline">
          회원가입
        </div>
        <button className="bottom_button button_primary">로그인</button>
      </div>
    </>
  );
}
