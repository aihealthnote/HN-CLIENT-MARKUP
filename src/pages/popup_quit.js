export default function PopupQuit() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="popup_wrap background_gray_0 display_flex_column radius_16 align_items_center gap_28">
        <div className="display_flex_column gap_24_ text_align_center">
          <div className="font_19 weight_semi_bold color_gray_90">
            계정을 삭제하면 복구할 수 없으며, <br />
            법적 보관 의무를 제외한 <br /> 모든 데이터가 삭제됩니다 <br />
          </div>
          <div className="font_15 weight_regular color_gray_70">
            정말 삭제하시겠습니까? <br />이 작업은 되돌릴 수 없습니다
          </div>
        </div>
        <div className="display_flex_row gap_8">
          <button className="popup_button_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            취소
          </button>
          <button className="popup_button_common  button_primary radius_8 font_15 weight_medium color_gray_0">
            삭제
          </button>
        </div>
      </div>
    </>
  );
}
