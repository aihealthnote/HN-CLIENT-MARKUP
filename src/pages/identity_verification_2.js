export default function IdentityVerification2() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="padding_20_24 display_flex_column gap_48">
        <div className="font_22 weight_semi_bold text_align_center">
          정확한 본인 확인과 보안을 위해<br></br>최초 1회 본인 인증이
          필요합니다.
        </div>
        <div className="display_flex_column gap_32">
          <img
            src="/img/additional_identity_verification2.svg"
            width="250"
            height="100%"
            className="margin_auto"
          ></img>
          <div className="display_flex_column gap_12">
            <label
              for="input_normal"
              className="font_14 weight_medium color_gray_90"
            >
              이름
            </label>
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_2 radius_8"
                placeholder="이름을 입력해주세요"
              />
            </div>
          </div>
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
              <button className="font_15 weight_medium width_200 radius_8 button_primary">
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
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_gray">인증 완료</button>
        {/* <button className="bottom_button button_primary">인증 완료</button> */}
      </div>
    </>
  );
}
