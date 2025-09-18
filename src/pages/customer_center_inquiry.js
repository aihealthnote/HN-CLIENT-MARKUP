export default function CustomerCenterInquiry() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">1:1 문의</span>
      </div>
      <div className="padding_0_20">
        <div className="border_bottom_gray_20 inquiry_box display_flex_column gap_16">
          <div className="display_flex_column gap_10">
            <div className="display_flex_row space_between">
              <div className="color_5967B4 font_13 weight_medium">이용문의</div>
              <div className="background_gray_10 border_gray_20 height_20 font_12 weight_regular color_gray_90 answer_box">
                답변 준비중
              </div>
            </div>
            <div className="font_15 weight_regular color_gray_90 ellipsis">
              개인정보 수정은 어디서 하나요?개인정보 수정은 어디서
              하나요?개인정보 수정은 어디서 하나요?개인정보 수정은 어디서
              하나요?
            </div>
          </div>
          <div className="font_13 weight_regular color_gray_50">
            2024.06.23 13:15
          </div>
        </div>
      </div>
      <div className="padding_0_20">
        <div className="border_bottom_gray_20 inquiry_box display_flex_column gap_16">
          <div className="display_flex_column gap_10">
            <div className="display_flex_row space_between">
              <div className="color_5967B4 font_13 weight_medium">이용문의</div>
              <div className="background_gray_0 border_78C499 height_20 font_12 weight_medium color_0D9F4C answer_box">
                답변 완료
              </div>
            </div>
            <div className="font_15 weight_regular color_gray_90 ellipsis">
              메뉴 중 가족 등록 기능은 뭐하는데 쓰는건지 알 수 있나요?
            </div>
          </div>
          <div className="font_13 weight_regular color_gray_50">
            2024.06.23 13:15
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">문의하기</button>
      </div>
    </>
  );
}
