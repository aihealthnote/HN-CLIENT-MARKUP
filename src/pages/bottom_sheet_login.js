export default function BottomSheetLogin() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column align_items_center gap_24">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">동의가 필요합니다</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="display_flex_column gap_20 width_100 margin_bottom_72">
          <div className="all_agreement_wrap radius_8 display_flex_column gap_8">
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
            <div className="font_14 weight_regular color_gray_90">
              ez건강다이어리 서비스 제공을 위해 회원번호와 함께 개인정보가
              제공됩니다. 보다 자게한 개인정보 제공 항목은 동의 내용에서
              확인하실 수 있습니다. 해당 정보는 동의 철회 또는 서비스 탈퇴 시
              지체없이 파기됩니다.
            </div>
          </div>
          <div className="display_flex_column space_between gap_10 padding_0_20">
            <div className="font_15 weight_semi_bold color_gray_90">
              카카오 동의 항목
            </div>
            <div className="display_flex_column gap_12">
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
                  <span className="font_14 ">
                    [필수] 카카오 개인정보 제3자 제공
                  </span>
                </label>
                <div className="font_13 agreement_view">보기</div>
              </div>
              <div className="display_flex_column gap_12">
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
                    <span className="font_14">
                      [선택] 카카오 개인정보 제3자 제공
                    </span>
                  </label>
                  <div className="font_13 agreement_view">보기</div>
                </div>
                <div className="display_flex_column gap_12">
                  <div className="agreement_left display_flex_row space_between agreement_list">
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
                      <span className="font_14">성별</span>
                    </label>
                  </div>
                  <div className="agreement_left display_flex_row space_between agreement_list">
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
                      <span className="font_14">연령대</span>
                    </label>
                  </div>
                  <div className="agreement_left display_flex_row space_between agreement_list">
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
                      <span className="font_14">출생년도</span>
                    </label>
                  </div>
                  <div className="agreement_left display_flex_row space_between agreement_list">
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
                      <span className="font_14">생일</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="display_flex_column space_between gap_10 agreement_wrap_2">
            <div className="font_15 weight_semi_bold color_gray_90">
              ez건강다이어리 동의 항목
            </div>
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
                <span className="font_14 ">[필수] 서비스 이용약관</span>
              </label>
              <div className="font_13 agreement_view">보기</div>
            </div>
            <div className="display_flex_column gap_10">
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
                  <span className="font_14">
                    [필수] 개인(민감정보) 수집 및 이용 동의
                  </span>
                </label>
                <div className="font_13 agreement_view">보기</div>
              </div>
            </div>
            <div className="display_flex_column gap_10">
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
                  <span className="font_14">[필수] 개인정보 처리방침</span>
                </label>
                <div className="font_13 agreement_view">보기</div>
              </div>
            </div>
            <div className="display_flex_column gap_10">
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
                  <span className="font_14">[필수] 만 14세 이상입니다.</span>
                </label>
                <div className="font_13 agreement_view">보기</div>
              </div>
            </div>
            <div className="display_flex_column gap_10">
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
                  <span className="font_14">
                    [선택] 혜택 및 이벤트 알림 수신 동의
                  </span>
                </label>
                <div className="font_13 agreement_view">보기</div>
              </div>
            </div>
            <div className="display_flex_column gap_10">
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
                  <span className="font_14">
                    [선택] 건강수첩 광고와 마케팅 메세지를 카카오톡으로 받습니다
                  </span>
                </label>
                <div className="font_13 agreement_view">보기</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_button_wrap">
          <button className="bottom_button button_gray">
            동의하고 계속하기
          </button>
        </div>
      </div>
    </>
  );
}
