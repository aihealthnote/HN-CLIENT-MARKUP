export default function Login() {
  return (
    <>
      <div className="login_logo_wrap display_flex_column align_items_center gap_20">
        <div className="display_flex_row gap_6">
          <div className=" font_17 weight_regular color_gray_70 ">
            스마트한 나의 건강 수첩
          </div>
          <img src="/img/beta.svg" width="44"></img>
        </div>

        <img src="/img/login_logo.svg" width="243" height="86" alt="logo"></img>
      </div>
      <div className="display_flex_column padding_0_20 gap_8 login_wrap">
        <button className="width_100 radius_8 login_kakao height_48 display_flex_row align_items_center justify_content_center gap_8">
          <img
            src="/img/login_kakao.svg"
            width="20"
            height="20"
            alt="kakao"
          ></img>
          <div className="color_gray_90 font_15 weight_semi_bold">
            카카오로 시작하기
          </div>
        </button>
        <button className="width_100 radius_8 login_naver height_48 display_flex_row align_items_center justify_content_center gap_8">
          <img
            src="/img/login_naver.svg"
            width="20"
            height="20"
            alt="naver"
          ></img>
          <div className="color_gray_0 font_15 weight_semi_bold">
            네이버로 시작하기
          </div>
        </button>
        <button className="width_100 radius_8 height_48 align_items_center justify_content_center border_gray_20">
          <div className="color_gray_90 font_15 weight_semi_bold">
            이메일로 시작하기
          </div>
        </button>
      </div>
    </>
  );
}
