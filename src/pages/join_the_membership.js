export default function JoinTheMembership() {
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
            <div className="display_flex_row gap_4 align_items_center">
              <img
                src="/img/family_code_error.svg"
                width="16"
                height="16"
                alt="error"
              ></img>
              <div className="color_F35064 font_12 weight_regular">
                비밀번호가 불일치합니다
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
                비밀번호가 일치합니다
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">다음</button>
      </div>
    </>
  );
}
