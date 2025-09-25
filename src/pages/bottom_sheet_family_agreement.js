export default function BottomSheetFamilyAgreement() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column align_items_center gap_24">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">연락처 접근 동의</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="display_flex_column gap_20 width_100 margin_bottom_72">
          <div className="display_flex_column space_between gap_20 agreement_wrap">
            <div className="display_flex_row space_between agreement_list">
              <label htmlFor="agree3" className="chk_box">
                <input type="checkbox" id="agree3" />
                <span className="chk_on"></span>
                <span className="font_14">
                  [필수] 연락처 접근 동의 필수 항목
                </span>
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
