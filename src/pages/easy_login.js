export default function EasyLogin() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="text_align_center display_flex_column gap_20 margin_top_20">
        <div className="font_22 weight_semi_bold">
          간편인증으로<br></br>의료 이용 기록을 가져올게요
        </div>
        <div className="font_15 color_gray_70">
          의료 이용 내역을 모두 확인할 수 있어요.
        </div>
      </div>
      <div className="easy_login_certification display_flex_row gap_32">
        <div className="certification_wrap display_flex_column gap_16">
          <img
            src="/img/easy_login_pass.svg"
            width="68"
            height="68"
            alt="pass"
            className="certification"
          ></img>
          <div className="font_14 color_gray_70">PASS 인증</div>
        </div>
        <div className="certification_wrap display_flex_column gap_16">
          <img
            src="/img/easy_login_kakao.svg"
            width="68"
            height="68"
            alt="kakao"
            className="certification"
          ></img>
          <div className="font_14 color_gray_70">카카오 인증</div>
        </div>
        <div className="certification_wrap display_flex_column gap_16">
          <img
            src="/img/easy_login_naver.svg"
            width="68"
            height="68"
            alt="naver"
            className="certification"
          ></img>
          <div className="font_14 color_gray_70">네이버 인증</div>
        </div>
      </div>
      <div className="display_flex_column gap_20">
        <div className="all_agreement_wrap radius_8">
          <label htmlFor="agree" className="chk_box">
            <input type="checkbox" id="agree" />
            <span className="chk_on">
              <img
                src="/img/checkbox_checked_on.svg"
                width="13"
                height="13"
                alt="check"
                className="chk_on_after"
              ></img>
            </span>
            <div className="font_15 weight_semi_bold">전체 동의하기</div>
          </label>
        </div>
        <div className="display_flex_column space_between gap_20 agreement_wrap">
          <div className="display_flex_row space_between agreement_list">
            <label htmlFor="agree2" className="chk_box">
              <input type="checkbox" id="agree2" />
              <span className="chk_on">
                <img
                  src="/img/checkbox_checked_on.svg"
                  width="13"
                  height="13"
                  alt="check"
                  className="chk_on_after"
                ></img>
              </span>
              <span className="font_14 ">[필수] 개인정보 수집/이용 동의</span>
            </label>
            <div className="font_13 agreement_view">보기</div>
          </div>
          <div className="display_flex_row space_between agreement_list">
            <label htmlFor="agree3" className="chk_box">
              <input type="checkbox" id="agree3" />
              <span className="chk_on">
                <img
                  src="/img/checkbox_checked_on.svg"
                  width="13"
                  height="13"
                  alt="check"
                  className="chk_on_after"
                ></img>
              </span>
              <span className="font_14">[필수] 민감정보 수집/이용 동의</span>
            </label>
            <div className="font_13 agreement_view">보기</div>
          </div>
          <div className="display_flex_row space_between agreement_list">
            <label htmlFor="agree4" className="chk_box">
              <input type="checkbox" id="agree4" />
              <span className="chk_on">
                <img
                  src="/img/checkbox_checked_on.svg"
                  width="13"
                  height="13"
                  alt="check"
                  className="chk_on_after"
                ></img>
              </span>
              <span className="font_14">
                [필수] 국민건강보험공단 서비스 이용약관 동의
              </span>
            </label>
            <div className="font_13 agreement_view">보기</div>
          </div>
          <div className="display_flex_row space_between agreement_list">
            <label htmlFor="agree5" className="chk_box">
              <input type="checkbox" id="agree5" />
              <span className="chk_on">
                <img
                  src="/img/checkbox_checked_on.svg"
                  width="13"
                  height="13"
                  alt="check"
                  className="chk_on_after"
                ></img>
              </span>
              <span className="font_14">
                [필수] 국민건강보험공단 개인정보 수집/이용 동의
              </span>
            </label>
            <div className="font_13 agreement_view">보기</div>
          </div>
          <div className="display_flex_row space_between agreement_list">
            <label htmlFor="agree6" className="chk_box">
              <input type="checkbox" id="agree6" />
              <span className="chk_on">
                <img
                  src="/img/checkbox_checked_on.svg"
                  width="13"
                  height="13"
                  alt="check"
                  className="chk_on_after"
                ></img>
              </span>
              <span className="font_14">
                [필수] 국민건강보험공단 개인정보 제3자 제공동의
              </span>
            </label>
            <div className="font_13 agreement_view">보기</div>
          </div>
          <div className="display_flex_row space_between agreement_list">
            <label htmlFor="agree7" className="chk_box">
              <input type="checkbox" id="agree7" />
              <span className="chk_on">
                <img
                  src="/img/checkbox_checked_on.svg"
                  width="13"
                  height="13"
                  alt="check"
                  className="chk_on_after"
                ></img>
              </span>
              <span className="font_14">
                [필수] 국민건강보험공단 기타 고지사항
              </span>
            </label>
            <div className="font_13 agreement_view">보기</div>
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_gray">인증 요청하기</button>
      </div>
    </>
  );
}
