export default function AiReportEmpty() {
  return (
    <>
      <div className="usage_records_empty display_flex_column">
        <img src="/img/ai_report_empty.svg" height="100" alt="report"></img>
        <div className="font_22 text_align_center weight_semi_bold">
          내 건강검진 결과로<br></br>
          <span className="color_0CC25A font_22 text_align_center weight_semi_bold">
            맞춤형 건강 리포트
          </span>
          를 제공합니다
        </div>
        <div className="gray_70 font_14 text_align_center">
          지금 바로 확인해보세요
        </div>
        <form>
          <button className="center_pr_button font_15 weight_semi_bold">
            AI 건강 리포트 확인하기
          </button>
        </form>
      </div>
    </>
  );
}
