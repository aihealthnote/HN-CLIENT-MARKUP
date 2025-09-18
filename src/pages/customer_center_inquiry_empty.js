export default function CustomerCenterInquiryEmpty() {
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
      <div className="background_gray_0 radius_12 padding_20">
        <div className="health_care_question display_flex_column text_align_center  gap_20 align_items_center">
          <img
            src="/img/health_care_question.svg"
            width="40"
            height="40"
            alt="question"
          ></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              아직 문의하신 내역이 없어요
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">문의하기</button>
      </div>
    </>
  );
}
