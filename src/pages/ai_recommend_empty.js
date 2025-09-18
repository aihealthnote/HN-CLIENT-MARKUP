export default function AiRecommendEmpty() {
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
          <div className="tab_padding font_15 weight_semi_bold">
            AI건강리포트
          </div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding font_15 color_gray_50">
            AI 추천 식단·운동
          </div>
          <div className="tab_underline_off"></div>
        </div>
      </div>
      <div className="ballon_wrap">
        <div className="ballon_2 padding_8_12 radius_8 display_flex_row space_between">
          <div className=" font_12 color_gray_0 weight_medium">
            <span className="font_12 weight_medium color_FFF200">
              나에게 꼭 맞는 식단과 운동을
              <br /> 매일 매일 받아보세요
            </span>
          </div>
          <img src="/img/close_gr2.svg" width="16" height="16"></img>
        </div>
        <div className="ballon_triangle2"></div>
      </div>
      <div className="usage_records_empty display_flex_column">
        <img
          src="/img/ai_report_empty2.svg"
          width="130"
          height="100"
          alt="hospital"
        ></img>
        <div className="font_22 text_align_center weight_semi_bold">
          김도니님의<br></br>
          <span className="color_0CC25A font_22 weight_semi_bold">
            건강나이
          </span>
          는 몇 세일까요?
        </div>
        <button className="center_pr_button2 font_15 weight_semi_bold">
          지금 바로 확인하기
        </button>
        <div className="font_15 weight_regular color_gray_70 margin_top_12">
          최근 건강검진 결과로 생성되요
        </div>
      </div>
    </>
  );
}
