export default function IntroPage2() {
  return (
    <>
      <div className="font_24 weight_bold text_align_center">
        "AI건강수첩 하나로<br></br>
        가능해요!"
      </div>
      <div className="ai_grandmother_wrap display_flex_row justify_content_center">
        <img src="/img/ai_grandmother.svg" width="152"></img>
      </div>
      <div className="padding_0_20 margin_top_32 display_flex_column gap_20">
        <div className="display_flex_row">
          <img src="img/num1.svg" width="90"></img>
          <div className="font_19 weight_semi_bold">
            건강검진 결과, 손쉽게<br></br>한 곳에 모아 점검해보세요
          </div>
        </div>
        <div className="aireport_divider"></div>
        <div className="display_flex_row">
          <img src="img/num2.svg" width="90"></img>
          <div className="font_19 weight_semi_bold">
            검사 결과를 'AI건강리포트'로<br></br>만들어서 실천해보세요
          </div>
        </div>
        <div className="aireport_divider"></div>
        <div className="display_flex_row">
          <img src="img/num3.svg" width="90"></img>
          <div className="font_19 weight_semi_bold">
            우리 가족 건강도 함께<br></br>관리해보시겠어요?
          </div>
        </div>
      </div>
    </>
  );
}
