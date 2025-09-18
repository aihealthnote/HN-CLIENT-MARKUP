export default function IdentityVerification() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="padding_20_24 display_flex_column gap_48">
        <div className="font_22 weight_semi_bold">
          본인인증 정보를<br></br>입력해주세요
        </div>
        <div className="display_flex_column gap_32">
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
              생년월일
            </label>
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_2 radius_8"
                placeholder="예: 19900101"
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
            <div className="display_flex_row gap_8">
              <div className="border_gray_20 display_flex_row gap_12 identity_verification_number_select align_items_center justify_content_center height_48 radius_8">
                <div>010</div>
                <img
                  src="/img/arrow_down_bk.svg"
                  width="24"
                  height="24"
                  alt="arrow"
                ></img>
              </div>
              <div class="input_date_wrapper width_100">
                <input
                  type="text"
                  id="input_normal"
                  class="input_normal_2 radius_8"
                  placeholder="12341234"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_gray">인증 요청하기</button>
      </div>
    </>
  );
}
