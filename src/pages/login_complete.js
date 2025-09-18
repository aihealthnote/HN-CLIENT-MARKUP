export default function LoginComplete() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="padding_20_24 display_flex_column gap_32">
        <div>가입을 환영해요!</div>
        <div className="font_22 weight_semi_bold">
          건강상태 확인을 위해
          <br />
          <span className="font_22 weight_semi_bold color_0CC25A">
            건강검진 내역
          </span>
          을
          <br />
          터치 한번에 가져오세요!
        </div>
      </div>
      <div className="display_flex_row gap_8 align_items_center justify_content_center background_gray_5 radius_12 tip_box_2 margin_0_20">
        <img src="/img/tip.svg" width="26" height="18"></img>
        <div className="font_14 weight_regular color_gray_70">
          내가 받은 건강검진 내역을 모두 확인할 수 있어요.
        </div>
      </div>
      <div className="login_complete_img_wrap display_flex_row">
        <img
          src="/img/login_complete.svg"
          width="144"
          height="145"
          alt="paper"
          className="login_complete_img"
        ></img>
      </div>
      <div className="login_complete_button_wrap">
        <div className="ballon_login_wrap text_align_center">
          <div className="ballon_login background_gray_0 font_12 color_gray_90 font_13 weight_medium padding_12 radius_8 ballon_login_2">
            30초면 끝나요!
            <div className="ballon_login_triangle"></div>
          </div>
        </div>
        <button className="bottom_button button_primary">
          동의하고 내 검진기록 불러오기
        </button>
        <div className="text_align_center font_14 weight_medium color_gray_50 skip">
          건너뛰기
        </div>
      </div>
    </>
  );
}
