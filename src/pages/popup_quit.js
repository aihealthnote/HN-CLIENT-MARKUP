export default function PopupQuit() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="popup_wrap background_gray_0 display_flex_column radius_16 align_items_center gap_28">
        <div className="display_flex_column gap_24_ text_align_center">
          <div className="font_19 weight_semi_bold color_gray_90">
            해지 안내는 모두 확인하셨나요? <br />
            정말 해지하시겠어요?
          </div>
          <div className="font_15 weight_regular color_gray_70">
            모든 정보가 삭제되어 복구가 불가해요
          </div>
        </div>
        <div className="display_flex_row gap_8">
          <button className="popup_button_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            더 이용할게요
          </button>
          <button className="popup_button_common border_gray_20 color_F42A43 radius_8 font_15 weight_medium color_gray_0">
            해지할게요
          </button>
        </div>
      </div>
    </>
  );
}
