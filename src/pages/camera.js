export default function Camera() {
  return (
    <>
      <div className="display_flex_row space_between padding_24 width_100">
        <div className="font_19 weight_semi_bold"></div>
        <img src="/img/close_bk.svg" width="24" height="24" alt="close"></img>
      </div>
      <div className="position_relative height_475">
        <img
          src="/img/left_top.svg"
          width="60"
          height="60"
          alt="frame"
          className="position_absolute frame_left_top"
        ></img>
        <img
          src="/img/right_top.svg"
          width="60"
          height="60"
          alt="frame"
          className="position_absolute frame_right_top"
        ></img>
        <img
          src="/img/left_bottom.svg"
          width="60"
          height="60"
          alt="frame"
          className="position_absolute frame_left_bottom"
        ></img>
        <img
          src="/img/right_bottom.svg"
          width="60"
          height="60"
          alt="frame"
          className="position_absolute frame_right_bottom"
        ></img>
      </div>
      <div className="position_fixed_bg height_210">
        <div className="display_flex_row gap_10 padding_10">
          <div className="camera_photo_box background_gray_20 inquiry_photo_box display_flex_column gap_12 align_items_center justify_content_center">
            <img
              src="/img/close_circle_gray.svg"
              width="20"
              height="20"
              alt="close"
              className="inquiry_close_button"
            ></img>
          </div>
          <div className="camera_photo_box background_gray_20 inquiry_photo_box display_flex_column gap_12 align_items_center justify_content_center">
            <img
              src="/img/close_circle_gray.svg"
              width="20"
              height="20"
              alt="close"
              className="inquiry_close_button"
            ></img>
          </div>
          <div className="camera_photo_box background_gray_20 inquiry_photo_box display_flex_column gap_12 align_items_center justify_content_center">
            <img
              src="/img/close_circle_gray.svg"
              width="20"
              height="20"
              alt="close"
              className="inquiry_close_button"
            ></img>
          </div>
          <div className="camera_photo_box background_gray_20 inquiry_photo_box display_flex_column gap_12 align_items_center justify_content_center">
            <img
              src="/img/close_circle_gray.svg"
              width="20"
              height="20"
              alt="close"
              className="inquiry_close_button"
            ></img>
          </div>
        </div>
        <div className="position_fixed_reverse">
          <img
            src="/img/reverse.svg"
            width="43"
            height="43"
            alt="camera reverse"
          ></img>
        </div>
        <img
          src="/img/camera_outline.svg"
          width="67"
          height="67"
          className="position_camera_outline shutter-btn"
          alt="camera outline"
        ></img>
        <div className="position_fixed_save display_flex_column align_items_center gap_8">
          <div className="text_align_center camera_save_box color_gray_0 font_16 weight_regular radius_12">
            -
          </div>
          <div className="color_gray_100">저장하기</div>
        </div>
      </div>
    </>
  );
}
