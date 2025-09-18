export default function FamilyManagementCoachMark() {
  return (
    <>
      <div className="dimmed2" />
      <div className="coachmark_container display_flex_column">
        <div className="coachmark_content">
          <div className="dimmed_text font_24 weight_semi_bold color_gray_0">
            나와{' '}
            <span className="font_24 weight_semi_bold color_00E563">
              가족의 건강
            </span>
            을
            <br />
            함께 관리 해보세요
          </div>
          <img
            src="/img/family_connection.png"
            width="279"
            className="dimmed_img"
            alt=""
          />
          <div>
            <img src="/img/family_popup1.svg" className="dimmed_img2" alt="" />
            <img src="/img/family_popup2.svg" className="dimmed_img3" alt="" />
          </div>
        </div>
        <div className="coachmark_bottom">
          <label
            htmlFor="agree3"
            className="chk_box display_flex_row align_items_center gap_8"
          >
            <input type="checkbox" id="agree3" />
            <span className="chk_on">
              <img
                src="/img/checkbox_checked_on.svg"
                width="13"
                height="13"
                alt="check"
                className="chk_on_after"
              />
            </span>
            <span className="font_14 color_gray_0">7일간 보지 않기</span>
          </label>

          <div className="coachmark_close_button text_align_center background_0CC25A">
            닫기
          </div>
        </div>
      </div>
    </>
  );
}
