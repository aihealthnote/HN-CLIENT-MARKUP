export default function EasyLoginKaKao() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="certification_kakao display_flex_column align_items_center text_align_center">
        <img
          src="/img/easy_login_kakao2.svg"
          width="144"
          height="90"
          alt="kakao"
        ></img>
        <div className="font_22 weight_semi_bold">
          카카오톡에 <br></br>
          간편인증 요청을 보냈습니다.
        </div>
        <div className="color_gray_70">인증 후 인증 요청하기를 눌러주세요</div>
      </div>
      <ul className="cetification_step_wrap display_flex_column gap_8">
        <li className="certification_step display_flex_row gap_20 radius_12">
          <img
            src="/img/certification_step01.svg"
            width="72"
            height="72"
            alt="step1"
          ></img>
          <div className="display_flex_column gap_10">
            <div className="font_13 weight_bold">STEP 1</div>
            <div className="font_14 color_gray_70">
              카카오톡에서<br></br>인증요청 메세지를 확인해주세요
            </div>
          </div>
        </li>
        <li className="certification_step display_flex_row gap_20 radius_12">
          <img
            src="/img/certification_step02.svg"
            width="72"
            height="72"
            alt="step2"
          ></img>
          <div>
            <div className="font_13 weight_bold">STEP 2</div>
            <div className="font_14 color_gray_70">
              비밀번호 또는 생체인식으로<br></br>인증을 완료해주세요
            </div>
          </div>
        </li>
        <li className="certification_step display_flex_row gap_20 radius_12">
          <img
            src="/img/certification_step03.svg"
            width="72"
            height="72"
            alt="step3"
          ></img>
          <div>
            <div className="font_13 weight_bold">STEP 3</div>
            <div className="font_14 color_gray_70">
              인증 완료 후 아래<br></br>[인증 완료] 버튼을 눌러주세요
            </div>
          </div>
        </li>
      </ul>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_gray">인증 완료</button>
      </div>
    </>
  );
}
