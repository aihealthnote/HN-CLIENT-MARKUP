export default function TermsOfUseDetail() {
  return (
    <>
      <div className="service_termination_wrap">
        <div className="top_title_wrap display_flex_row">
          <img
            src="/img/arrow_left_bk.svg"
            width="24px"
            height="24px"
            alt="arrow left"
          ></img>
          <span className="font_17 weight_semi_bold">이용약관 및 정책</span>
        </div>
        <div className="display_flex_column gap_12">
          <div className="padding_40_20 display_flex_column gap_48">
            <div className="font_24 weight_semi_bold color_gray_90">
              서비스 이용 약관
            </div>
            <div className="display_flex_column gap_40">
              <div className="font_14 weight_regular color_gray_90">
                건강수첩 및 건강수첩 관련 제반 서비스의 이용과 관련하여 필요한
                사항을 규정합니다. <br />
                건강수첩 앱에서 제공하는 서비스는 예고 없이 중단될 수 있으며,
                회사는 이에 대해 아무런 책임을 지지 않습니다. <br />
                건강수첩은 다음과 같은 서비스로 구성되어 있습니다.
              </div>
              <div className="display_flex_column gap_16">
                <div className="font_15 weight_semi_bold color_gray_90">
                  제1조 (목적)
                </div>
                <div className="font_14 weight_regular color_gray_90">
                  이 약관은 메인라인(이하 “회사”라 칭함)이 제공하는 앱 및 관련
                  서비스(이하 “서비스”라 칭함)의 이용과 관련하여 “회사”와
                  “회원”의 권리, 의무, 책임, 이용조건, 절차, 중단, 해지 등
                  기본적인 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                </div>
              </div>
              <div className="display_flex_column gap_16">
                <div className="font_15 weight_semi_bold color_gray_90">
                  제2조 (정의)
                </div>
                <div className="display_flex_column gap_8">
                  <div className="font_14 weight_regular color_gray_90">
                    이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                  </div>
                  <ul className="list_style_type_3">
                    <li className="font_14 weight_regular color_gray_70">
                      “서비스”라 함은 구현되는 단말기를 통하여 “회원”이 이용할
                      수 있는 “회사”가 “회원”에게 제공하는 서비스와 관련 제반
                      서비스를 말합니다.
                    </li>
                    <li className="font_14 weight_regular color_gray_70">
                      “회원”이라 함은 “회사”의 “서비스”에 접속하여 이 약관에
                      따라 “회사”와 회원 가입을 통하여 “이용계약”을 체결하고
                      “회사”가 제공하는 “서비스”를 이용하는 고객을 칭합니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="display_flex_column gap_16">
                <div className="font_15 weight_semi_bold color_gray_90">
                  제3조 (약관 게시와 개정)
                </div>
                <div className="font_14 weight_regular color_gray_90">
                  “회사”는 이 약관의 내용과 개정 내용을 앱 내 메뉴 또는
                  메인화면에 게시하여 화면을 통해 볼 수 있도록 합니다.
                </div>
              </div>
            </div>
          </div>
          <div className="service_termination padding_12_20 width_100">
            <div className="  service_termination radius_8 background_gray_0 height_48 border_gray_20 color_F42A43 font_15 weight_medium display_flex_row align_items_center justify_content_center">
              서비스 해지
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
