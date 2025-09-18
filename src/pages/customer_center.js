export default function CustomerCenter() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">고객센터</span>
      </div>
      <div className="customer_center_main_box display_flex_column gap_40">
        <div className="font_22 weight_semi_bold color_gray_90">
          홍길동님, <br />
          무엇을 도와드릴까요?
        </div>
        <div className="display_flex_column gap_20">
          <div className="display_flex_row gap_8">
            <div className="background_EAF5EB radius_12 width_50 customer_center_inside_box display_flex_column gap_6">
              <img
                src="/img/customer_center_main_1.svg"
                width="32"
                height="32"
                alt="question"
              ></img>
              <div className="font_17 weight_medium color_gray_90">
                자주 묻는 질문
              </div>
            </div>
            <div className="background_gray_5 radius_12 width_50 customer_center_inside_box display_flex_column gap_6">
              <img
                src="/img/customer_center_main_2.svg"
                width="32"
                height="32"
                alt="question"
              ></img>
              <div className="font_17 weight_medium color_gray_90">
                1:1 문의하기
              </div>
            </div>
          </div>
          <div>
            <div className="height_60 border_bottom_gray_20 display_flex_row space_between align_items_center">
              <div className="display_flex_row align_items_center gap_8">
                <img
                  src="/img/notice.svg"
                  width="20"
                  height="20"
                  alt="notice"
                ></img>
                <div>공지사항</div>
              </div>
              <img
                src="/img/arrow_right_gray.svg"
                width="16"
                height="16"
                alt="arrow"
              ></img>
            </div>
            <div className="height_60 border_bottom_gray_20 display_flex_row space_between align_items_center">
              <div className="display_flex_row align_items_center gap_8">
                <img
                  src="/img/paper.svg"
                  width="20"
                  height="20"
                  alt="paper"
                ></img>
                <div>이용약관 및 정책</div>
              </div>
              <img
                src="/img/arrow_right_gray.svg"
                width="16"
                height="16"
                alt="arrow"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
