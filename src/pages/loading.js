export default function Loading() {
  return (
    <>
      <div className="display_flex_column gap_12">
        <div className="top_title_wrap">
          <img src="/img/arrow_left_bk.svg"></img>
        </div>
        <div className="padding_0_20">
          <div className="weight_semi_bold font_17">
            건강검진 정보를 확인 중입니다
          </div>
          <div className="weight_regular font_15 color_gray_70">
            잠시만 기다려주세요
          </div>
        </div>
      </div>
      <div className="splash_absolute2">
        <div className="message_container text_align_center display_flex_column gap_12">
          <div>
            <div className="msg font_19 weight_semi_bold">
              하루 15분 빨리 걷기만 해도
            </div>
            <div className="msg font_19 weight_semi_bold">
              혈압이 평균 5mmHg 낮아집니다
            </div>
          </div>
          <div className="graph">로딩바</div>
        </div>
      </div>
    </>
  );
}
