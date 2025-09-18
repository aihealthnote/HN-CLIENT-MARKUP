export default function BottomSheetNoDrinking() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold"></div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="bottom_sheet_no_drinking_wrap display_flex_column gap_28">
          <div className="text_align_center display_flex_column gap_8">
            <div className="font_13 weight_medium color_gray_50">
              4월 20일 (목)
            </div>
            <div className="font_19 weight_semi_bold color_gray_90">
              금주 여부를 선택해주세요
            </div>
          </div>
          <div className="display_flex_row gap_16 text_align_center ">
            {/* <div className="radius_16 width_50 bottom_sheet_no_drinking_common no_drinking_failure  display_flex_column justify_content_center align_items_center gap_6">
              <img src="/img/success_blue.svg" width="32" height="32"></img>
              <div className="color_226DE7  weight_semi_bold font_15">
                금주 성공!
              </div>
            </div> */}
            {/* <div className="radius_16 width_50 bottom_sheet_no_drinking_common success_left  display_flex_column justify_content_center align_items_center gap_6">
              <img src="/img/success_white.svg" width="32" height="32"></img>
              <div className="color_gray_0 weight_semi_bold font_15">
                금주 성공!
              </div>
            </div> */}
            <div className="radius_16 width_50 bottom_sheet_no_drinking_common background_gray_10  display_flex_column justify_content_center align_items_center gap_6">
              <img src="/img/success_gray.svg" width="32" height="32"></img>
              <div className="color_gray_40 weight_semi_bold font_15">
                금주 성공!
              </div>
            </div>
            {/* <div className="radius_16 width_50 bottom_sheet_no_drinking_common no_drinking_success display_flex_column justify_content_center align_items_center gap_6">
              <img src="/img/failure_red.svg" width="32" height="32"></img>
              <div className=" weight_semi_bold font_15 color_F42A43">
                금주 실패
              </div>
            </div> */}
            {/* <div className="radius_16 width_50 bottom_sheet_no_drinking_common background_gray_10 display_flex_column justify_content_center align_items_center gap_6">
              <img src="/img/failure_gray.svg" width="32" height="32"></img>
              <div className="weight_semi_bold font_15 color_gray_40">
                금주 실패
              </div>
            </div> */}
            <div className="radius_16 width_50 bottom_sheet_no_drinking_common bg_F4605B display_flex_column justify_content_center align_items_center gap_6">
              <img src="/img/failure_white.svg" width="32" height="32"></img>
              <div className="weight_semi_bold font_15 color_gray_0">
                금주 실패
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
