export default function BottomSheetFamilyAgreement() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column align_items_center gap_24">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">추가 동의가 필요합니다</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="display_flex_column gap_20 width_100 margin_bottom_72">
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
                <span className="chk_on"></span>
                <span className="font_14 ">
                  [필수] 제 3자 제공 및 열람 동의
                </span>
              </label>
              <div className="font_13 agreement_view">보기</div>
            </div>
            <div className="display_flex_row space_between agreement_list">
              <label htmlFor="agree3" className="chk_box">
                <input type="checkbox" id="agree3" />
                <span className="chk_on"></span>
                <span className="font_14">[필수] 민감 정보 제공 동의</span>
              </label>
              <div className="font_13 agreement_view">보기</div>
            </div>
          </div>
        </div>
        <div className="bottom_button_wrap">
          <button className="bottom_button button_gray">동의하기</button>
        </div>
      </div>
    </>
  );
}
