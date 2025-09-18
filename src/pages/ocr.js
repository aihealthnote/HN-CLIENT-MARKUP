export default function Ocr() {
  return (
    <>
      <div className="position_relative_ocr">
        <div className="display_flex_row gap_8 padding_0_20 position_absolute_ocr">
          <div className="background_gray_5 radius_8 inquiry_photo_box display_flex_column gap_12 align_items_center justify_content_center">
            <img
              src="/img/add_light_gray.svg"
              width="24"
              height="24"
              alt="add"
            ></img>
          </div>
          <div className="background_gray_5 radius_8 inquiry_photo_box display_flex_column gap_12 align_items_center justify_content_center">
            <img
              src="/img/close_circle_gray.svg"
              width="20"
              height="20"
              alt="close"
              className="inquiry_close_button"
            ></img>
          </div>
          <div className="background_gray_5 radius_8 inquiry_photo_box display_flex_column gap_12 align_items_center justify_content_center"></div>
        </div>
        <div className="bottom_button_wrap">
          <button className="bottom_button button_primary">
            확인 후 등록하기
          </button>
        </div>
      </div>
    </>
  );
}
