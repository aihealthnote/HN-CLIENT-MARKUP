export default function AiRecommendEmpty2() {
  return (
    <>
      <div className="my_care_padding display_flex_row space_between align_items_center">
        <div className="font_22 weight_semi_bold">AI 건강</div>
        <div className="display_flex_row gap_20">
          <img src="/img/top_ai.svg" width="24" height="24" alt="ai"></img>
          <img
            src="/img/top_alarm.svg"
            width="24"
            height="24"
            alt="alarm"
          ></img>
        </div>
      </div>
      <div className="display_flex_row">
        <div className="text_align_center tab_width">
          <div className="tab_padding font_15 color_gray_50">AI건강리포트</div>
          <div className="tab_underline_off"></div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding font_15 weight_semi_bold">
            AI 추천 식단·운동
          </div>
          <div className="tab_underline_on"></div>
        </div>
      </div>
      <div className="usage_records_empty display_flex_column">
        <img
          src="/img/ai_report_empty3.svg"
          width="130"
          height="100"
          alt="hospital"
        ></img>
        <div className="font_22 text_align_center weight_semi_bold">
          AI로 질환 예측하고<br></br>
          건강 관리하세요
        </div>
        <button className="center_pr_button2 font_15 weight_semi_bold">
          추천 식단·운동 만들기
        </button>
        <div className="text_align_center font_15 weight_regular color_gray_70 margin_top_12">
          내 건강상태와 식습관을 고려해
          <br />
          맞춤형 식단과 운동을 생성해드려요
        </div>
      </div>
    </>
  );
}
