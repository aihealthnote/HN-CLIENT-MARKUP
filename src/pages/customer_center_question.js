export default function CustomerCenterQuestion() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">자주 묻는 질문</span>
      </div>
      <div className="meal_search_box display_flex_column gap_16 ">
        <div className="display_flex_column gap_12">
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_left"
              class="input_left radius_8 width_100"
              placeholder="궁금한 질문을 입력해주세요"
            />
            <img
              src="/img/search_bk.svg"
              width="24"
              height="24"
              className="input_search"
            ></img>
            <img
              src="/img/close_circle_gray.svg"
              width="20"
              height="20"
              className="input_unit"
            ></img>
          </div>
        </div>
      </div>
      <div className="customer_center_tab_wrap">
        <div className="display_flex_row padding_0_20 gap_4">
          <div className="text_align_center tab_flex_grow">
            <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90 ">
              전체
            </div>
            <div className="tab_underline_on"></div>
          </div>
          <div className="text_align_center tab_flex_grow">
            <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50 ">
              이용문의
            </div>
          </div>
          <div className="text_align_center tab_flex_grow">
            <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50 ">
              회원문의
            </div>
          </div>
          <div className="text_align_center tab_flex_grow">
            <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50 ">
              기타 문의
            </div>
          </div>
          <div className="text_align_center tab_flex_grow">
            <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50 ">
              서비스 문의
            </div>
          </div>
        </div>
      </div>
      <div className="display_flex_column">
        <div className="display_flex_row space_between align_items_center padding_16_20 min_height_56">
          <div className="display_flex_row align_items_center gap_8">
            <img
              src="/img/question.svg"
              width="24"
              height="24"
              alt="question"
            />
            <div className="font_15 weight_regular color_gray_90 multi_line_text">
              건강수첩 앱 <span className="color_0CC25A">이용</span>은 무료
              인가요?
            </div>
          </div>
          <img src="/img/arrow_up_gray.svg" />
        </div>
      </div>
      <div className="display_flex_column">
        <div className="display_flex_row space_between align_items_center padding_16_20 min_height_56">
          <div className="display_flex_row align_items_center gap_8">
            <img
              src="/img/question.svg"
              width="24"
              height="24"
              alt="question"
            />
            <div className="font_15 weight_regular color_gray_90 multi_line_text">
              병원/약국 이용 정보를 불러왔는데{' '}
              <span className="color_0CC25A">이용</span>했던 내용이랑 다른 것
              같아요
            </div>
          </div>
          <img src="/img/arrow_up_gray.svg" />
        </div>
      </div>
      <div className="background_gray_5 display_flex_row gap_8 padding_24_20">
        <img src="/img/answer.svg" width="24" height="24" alt="answer"></img>
        <div className="font_14 weight_regular color_gray_70">
          개인정보 수정은 [더보기 &gt; 고객 프로필] 영역을 선택해서 수정할 수
          있습니다. 고객 프로필 화면에서는 ‘연락처’, ‘닉네임’ 을 수정 할 수
          있습니다.
        </div>
      </div>
    </>
  );
}
