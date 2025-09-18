export default function CustomerCenterInquiry3() {
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
        <img
          src="/img/more.svg"
          width="24"
          height="24"
          alt="more"
          className="top_right_more"
        ></img>
      </div>
      <div className="more_popup_common background_gray_0 shadow_normal display_flex_column radius_4 justify_content_center">
        <div className="display_flex_row padding_8_12 gap_8">
          <img src="/img/edit.svg" width="16" weight="16" alt="edit"></img>
          <div className="font_15 weight_regular color_gray_90">편집</div>
        </div>
        <div className="display_flex_row padding_8_12 gap_8">
          <img src="/img/trash.svg" width="16" weight="16" alt="trash"></img>
          <div className="font_15 weight_regular color_gray_90">삭제</div>
        </div>
      </div>
      <div className="inquiry_box_2 display_flex_row gap_12 padding_16 background_gray_0 radius_8">
        <div className="display_flex_row gap_12 flex_1">
          <img
            src="/img/question_2.svg"
            width="28"
            height="28"
            alt="question"
          />
          <div className="display_flex_column gap_40 flex_1 min_width_0">
            <div className="display_flex_column gap_24_">
              <div className="display_flex_column gap_12">
                <div className="display_flex_row space_between align_items_start">
                  <div className="color_5967B4 weight_semi_bold font_14">
                    [이용문의]에 대한 질문
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    2025.04.05
                  </div>
                </div>
                <div className="width_58 background_gray_0 border_78C499 height_20 radius_12 text_align_center font_12 weight_medium color_0D9F4C">
                  답변 완료
                </div>
              </div>
              <div className="answer_content font_14 weight_regular color_gray_90">
                메뉴 중 가족 등록 기능은 뭐하는데 쓰는건지 알고 싶습니다! 메뉴
                중 가족 등록 기능은 뭐하는데 쓰는건지 알고 싶습니다!
              </div>
            </div>
            <div className="width_100 gap_8 display_flex_row radius_8">
              <div className="inquiry_photo_box"></div>
              <div className="inquiry_photo_box"></div>
              {/* <div className="inquiry_photo_box"></div>  3개 한줄로하면 위에 텍스트가 넘어가서 일단 두 개만 넣어뒀습니다*/}
            </div>
          </div>
        </div>
      </div>
      <div className="inquiry_box_2 display_flex_row gap_12 padding_16 background_gray_0 radius_8 background_gray_5">
        <div className="display_flex_row gap_12 flex_1">
          <img src="/img/answer_2.svg" width="28" height="28" alt="answer" />
          <div className="display_flex_column gap_40 flex_1 min_width_0">
            <div className="display_flex_column gap_24_">
              <div className="display_flex_column gap_12">
                <div className="display_flex_row space_between align_items_start">
                  <div className="color_5967B4 weight_semi_bold font_14">
                    [이용문의]에 대한 질문
                  </div>
                  <div className="font_12 weight_regular color_gray_50">
                    2025.04.05 13:15
                  </div>
                </div>
              </div>
              <div className="answer_content font_14 weight_regular color_gray_90">
                안녕하세요, 건강수첩입니다. <br />
                <br />
                미성년 자녀분, 노령의 부모님 등 직계 가족분들 중 직접 앱 사용이
                어려운 분이나 기록 확인용 등으로 사용하실 수 있는 서비스 입니다.
                <br />
                <br />
                다만, 성인의 경우 개인정보동의가 반드시 필요하오니 참고
                부탁드립니다. <br />
                <br />
                감사합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="background_gray_5 padding_20">
        <div className="health_care_question display_flex_column text_align_center  gap_20 align_items_center">
          <img
            src="/img/health_care_question.svg"
            width="40"
            height="40"
            alt="question"
          ></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              아직 등록된 답변이 없어요
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
