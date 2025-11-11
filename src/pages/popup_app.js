export default function PopupApp() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="popup_wrap display_flex_column radius_16 align_items_center gap_24_">
        <div className="display_flex_row gap_8">
          <img
            src="/img/150.png"
            width="50"
            height="50"
            className="radius_8"
          ></img>
          <div className="font_19 weight_semi_bold color_gray_0">
            앱에서 쉽고 편리하게!<br></br>더 많은 기능을 이용해보세요
          </div>
        </div>
        <div className="display_flex_column gap_12 width_100">
          <button className="popup_button_common2 button_primary radius_8 font_15 weight_medium color_gray_0">
            앱으로 보기
          </button>
          <div className="color_gray_0 weight_medium font_15 text_align_center ">
            괜찮아요, 모바일 웹에서 볼게요
          </div>
        </div>
      </div>
    </>
  );
}
