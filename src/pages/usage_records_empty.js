export default function UsageRecordsEmpty() {
  return (
    <>
      <div className="my_care_padding display_flex_row space_between align_items_center">
        <div className="font_22 weight_semi_bold">내 진료</div>
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
          <div className="tab_padding font_15 color_gray_50">건강검진</div>
          <div className="tab_underline_off"></div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding font_15 weight_semi_bold">
            병원/약국 이용 기록
          </div>
          <div className="tab_underline_on"></div>
        </div>
      </div>
      <div className="usage_records_empty display_flex_column">
        <img
          src="/img/usage_records_empty.svg"
          width="130"
          height="100"
          alt="hospital"
        ></img>
        <div className="font_22 text_align_center weight_semi_bold">
          최근에 몸이 불편해<br></br>병원을 다녀오셨나요?
        </div>
        <button className="center_pr_button2 font_15 weight_semi_bold">
          의료 이용 기록 불러오기
        </button>
        <div className="display_flex_column gap_8">
          <div className="margin_top_32 display_flex_row radius_12 gap_8 background_gray_5 height_42 align_items_center width_295 padding_12">
            <img src="/img/tip.svg" width="26" height="18"></img>
            <div className="font_15 weight_regular color_gray_90">
              의료 정보로 확인할 수 있는 Tip
            </div>
          </div>
          <div className=" display_flex_column gap_8">
            <div className="display_flex_row space_between align_items_center gap_24_">
              <div className="display_flex_row gap_6">
                <span className="color_0CC25A weight_semi_bold">1</span>
                <div className="gray_70 font_15 weight_regular">
                  어떤 약을 처방 받았는지 알 수 있어요
                </div>
              </div>
              <img src="/img/pill_see_more.svg" width="32"></img>
            </div>
            <div className="display_flex_row space_between align_items_center gap_24_">
              <div className="display_flex_row gap_6">
                <span className="color_0CC25A weight_semi_bold">2</span>
                <div className="gray_40 font_15 weight_regular">
                  주사 맞은 내역도 확인 가능해요
                </div>
              </div>
              <img src="/img/injection.png" width="32"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
