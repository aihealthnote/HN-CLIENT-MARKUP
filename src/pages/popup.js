export default function Popup() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="popup_wrap background_gray_0 display_flex_column radius_16 align_items_center gap_28">
        <div className="display_flex_column gap_24_ text_align_center">
          <div className="font_19 weight_semi_bold color_gray_90">
            작성 중이던 정보가 있어요
          </div>
          <div className="font_15 weight_regular color_gray_70">
            이전에 입력하신 내용이 저장되어 있어요. <br></br>
            이어서 작성하시겠어요?
          </div>
          {/*<div className="font_15 weight_regular color_gray_70">
            지금 페이지를 나가도, 저장된 위치부터<br></br>
            다시 이어서 작성하실 수 있어요.
          </div>*/}
        </div>
        <div className="display_flex_row gap_8">
          <button className="popup_button_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            처음부터 새로 작성
          </button>
          {/*<button className="popup_button_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            계속 작성하기
          </button>*/}
          <button className="popup_button_common button_primary radius_8 font_15 weight_medium color_gray_0">
            이어서 작성하기
          </button>
          {/*<button className="popup_button_common button_primary radius_8 font_15 weight_medium color_gray_0">
            나가기
          </button>*/}
        </div>
      </div>
    </>
  );
}
