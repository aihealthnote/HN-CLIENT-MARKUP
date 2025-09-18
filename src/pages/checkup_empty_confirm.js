export default function CheckupEmptyConfirm() {
  return (
    <>
      <div className="dimmed"></div>
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
          <div className="tab_padding font_15 weight_semi_bold">건강검진</div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding">병원/약국 이용 기록</div>
          <div className="tab_underline_off font_15 color_gray_50"></div>
        </div>
      </div>
      <div className="usage_records_empty display_flex_column">
        <img
          src="/img/checkup_empty.svg"
          width="130"
          height="100"
          alt="hospital"
        ></img>
        <div className="font_22 text_align_center weight_semi_bold">
          건강검진 결과로<br></br>건강을 관리해보세요!
        </div>
        <div className="gray_70 font_14 text_align_center">
          내가 받은 건강검진 내역을<br></br>모두 확인할 수 있어요.
        </div>
        <form>
          <button className="center_pr_button font_15 weight_semi_bold">
            검진 결과 확인하기
          </button>
        </form>
      </div>
      <div className="bottom_sheet_wrap display_flex_column align_items_center gap_24">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">건강 검진 결과 등록</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="bottom_two_button_wrap display_flex_column gap_8">
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_48 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_16">
              <img
                src="/img/NationalHealthInsuranceService.svg"
                width="20"
                height="20"
                alt="search"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                국민건강보험에서 가져오기
              </div>
              <div className="button_primary recommend_button font_12 weight_medium display_flex_row align_items_center">
                추천
              </div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_48 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_16">
              <img
                src="/img/take_checkup_directly.svg"
                width="20"
                height="20"
                alt="pencil"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                직접 입력하기
              </div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_48 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_16">
              <img
                src="/img/take_checkup_camera.svg"
                width="20"
                height="20"
                alt="camera"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                검진 결과 사진/파일로 등록하기
              </div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}
