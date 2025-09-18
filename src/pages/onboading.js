export default function Onboading() {
  return (
    <>
      <div className="onboading_json_box">json 들어가는 자리</div>
      <div className="onboading_text_box text_align_center display_flex_column gap_32">
        <div className="font_24 weight_semi_bold color_gray_90">
          나만의 건강 기록, <br />
          쉽고 편하게 관리하세요
        </div>
        {/* <div className="font_24 weight_semi_bold color_gray_90">
          AI 건강주치의가 <br />
          알아서 건강을 챙겨드려요
        </div> */}
        {/* <div className="font_24 weight_semi_bold color_gray_90">
          우리 가족 건강도 함께 <br />
          놓치지 않고 챙겨드려요
        </div> */}
        <div className="font_15 weight_regular color_gray_50">
          건강검진 결과, 병원 내역, 복용 중인 약까지
          <br /> 이제 자동으로 모아 정리해 드려요.
        </div>
        {/* <div className="font_15 weight_regular color_gray_50">
          AI가 복약, 운동, 식단을 분석해
          <br /> 당신에게 딱 맞는 건강 팁을 드려요
        </div> */}
        {/* <div className="font_15 weight_regular color_gray_50">
          가족의 건강도 함께 관리하고,
          <br /> 놓치기 쉬운 알림 혜택까지 챙기세요
        </div> */}
      </div>
      <div className="onboading_dot_wrap height_52 display_flex_row gap_10 align_items_center justify_content_center">
        <img src="/img/dot_bk.svg" width="8" height="8" alt="dot"></img>
        <img src="/img/dot_gr.svg" width="8" height="8" alt="dot"></img>
        <img src="/img/dot_gr.svg" width="8" height="8" alt="dot"></img>
      </div>
      <div className="text_align_center font_14 weight_medium color_gray_50 skip skip_fixed width_100">
        건너뛰기
      </div>
      {/* <div className="padding_12_20 width_100 skip_fixed">
        <button className="bottom_button button_primary">시작하기</button>
      </div> */}
    </>
  );
}
