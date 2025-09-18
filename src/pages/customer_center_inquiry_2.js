export default function CustomerCenterInquiry2() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        />
        <span className="font_17 weight_semi_bold">문의하기</span>
      </div>
      <div className="padding_24_20 display_flex_column gap_24_">
        <div>
          <div className="display_flex_column gap_16">
            <div className="display_flex_row space_between border_gray_20 height_48 align_items_center padding_0_16 radius_8">
              <div>문의 유형을 선택해주세요</div>
              <img src="/img/arrow_down_bk.svg" width="24" height="24" />
            </div>
            <textarea
              className="textarea background_gray_5 padding_20_16"
              placeholder={`문의하실 내용을 입력해주세요

- 내용은 1,000자 까지 작성할 수 있어요
- 에티켓을 준수하지 않은 글은 삭제될 수 있어요`}
            />
          </div>
          <div className="font_13 weight_regular color_gray_50 text_align_right">
            <span className="color_226DE7 font_13 weight_medium">50</span>/1000
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            사진 등록
          </label>
          <div className="display_flex_row gap_8">
            <div className="background_gray_5 radius_8 inquiry_photo_box display_flex_column gap_12 align_items_center justify_content_center">
              <img
                src="/img/add_light_gray.svg"
                width="24"
                height="24"
                alt="add"
              ></img>
              <div className="font_13 weight_regular color_gray_50">
                <span className="color_226DE7 font_13 weight_medium">3 </span> /
                3
              </div>
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
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_gray">작성 완료</button>
      </div>
    </>
  );
}
