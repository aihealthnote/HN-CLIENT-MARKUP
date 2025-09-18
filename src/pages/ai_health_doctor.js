export default function AiHealthDoctor() {
  return (
    <>
      <div className="position_relative">
        <div className="top_title_wrap background_gray_0 display_flex_row space_between">
          <img
            src="/img/close_bk.svg"
            width="24px"
            height="24px"
            alt="close"
          ></img>
          <span className="font_17 weight_semi_bold">AI 건강 주치의</span>
        </div>
        <div className="health_doctor_json_box">
          <div className="font_13 weight_medium width_100 color_gray_50 text_align_center health_doctor_json_text">
            안녕하세요! 저는 AI 건강 주치의입니다.
            <br />
            궁금한 게 있으시면 무엇이든 말씀해보세요!
          </div>
        </div>
        <div className="position_absolute position_absolute_ai_doctor">
          <div className="display_flex_column gap_10 align_items_flex_start">
            <div className="border_gray_30 padding_12_20 display_inline_block radius_50">
              <div className="display_flex_row gap_4">
                <img src="/img/search_gr.svg" width="24"></img>
                <div className="height_24 font_16 weight_medium">
                  하루에 커피는 몇 잔이 적당해?
                </div>
              </div>
            </div>
            <div className="border_gray_30 padding_12_20 display_inline_block radius_50">
              <div className="display_flex_row gap_4">
                <img src="/img/search_gr.svg" width="24"></img>
                <div className="height_24 font_16 weight_medium">
                  혈압을 낮추려면 어떤 식단이 좋을까?
                </div>
              </div>
            </div>
            <div className="border_gray_30 padding_12_20 display_inline_block radius_50">
              <div className="display_flex_row gap_4">
                <img src="/img/search_gr.svg" width="24"></img>
                <div className="height_24 font_16 weight_medium">
                  수면부족이 건강에 미치는 영향은 뭘까?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding_10 display_flex_row align_items_center gap_10 skip_fixed width_100">
          <img src="/img/add_gray.svg" width="20" height="20" alt="add"></img>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_50"
              placeholder="메세지를 입력해주세요"
            />
            <img
              src="/img/enter_gray.svg"
              width="28"
              height="28"
              alt="arrow"
              className="input_unit"
            ></img>
            {/*<img
            src="/img/enter_primary.svg"
            width="28"
            height="28"
            alt="arrow"
            className="input_unit"
          ></img>*/}
          </div>
        </div>
      </div>
    </>
  );
}
