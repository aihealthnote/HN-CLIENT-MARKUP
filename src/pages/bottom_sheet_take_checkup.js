export default function BottomSheetTakeCheckup() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column align_items_center gap_24">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">검진 결과지 가져오기</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="checkup_empty_confirm display_flex_column text_align_center align_items_center">
          <img
            src="/img/checkup_empty_confirm.svg"
            width="120"
            height="90"
          ></img>
          <div className="font_17 weight_medium">
            건강검진 결과를 가져올 방법을<br></br>선택해주세요.
          </div>
        </div>
        <div className="bottom_two_button_wrap display_flex_column gap_8">
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_48 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_16">
              <img
                src="/img/take_checkup_camera.svg"
                width="20"
                height="20"
                alt="camera"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                카메라 열기
              </div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_48 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_16">
              <img
                src="/img/take_checkup_album.svg"
                width="20"
                height="20"
                alt="album"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                앨범 불러오기
              </div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}
