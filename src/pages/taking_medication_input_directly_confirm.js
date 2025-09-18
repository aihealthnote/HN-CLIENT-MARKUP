export default function TakingMedicationInputDirectlyConfirm() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column gap_24_">
        <div>
          <div className="display_flex_row space_between padding_24 width_100">
            <div className="font_19 weight_semi_bold">약 이름 입력</div>
            <img src="/img/close_bk.svg"></img>
          </div>
          <div className="display_flex_column gap_32 padding_12_20_16">
            <div className="display_flex_column gap_12">
              <label
                for="input_normal"
                className="font_14 weight_medium color_gray_90"
              >
                어떤 약을 드시나요?
              </label>
              <div class="input_date_wrapper width_100">
                <input
                  type="text"
                  id="input_normal"
                  class="input_normal radius_8"
                  placeholder="ex. 내 혈압약, 영양제 먹기 등 입력(최대 15자)"
                  maxLength={15}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_two_button_wrap display_flex_column gap_8">
          <button className="button_common button_gray font_15 weight_semi_bold color_gray_0">
            다음
          </button>
        </div>
      </div>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">복용약 등록</span>
      </div>
      <div className="display_flex_column gap_8 padding_0_20_8 shadow_normal">
        <div className="profress_indicator_warp2 display_flex_row gap_4">
          <div className="progress_indicator_wrap_on_bl_50 radius_12"></div>
          <div className="progress_indicator_wrap_bg_50 background_gray_10 radius_12"></div>
        </div>
        <div className="display_flex_row gap_6 align_items_center">
          <div className="pregress_indicator_number_wrap font_13 weight_semi_bold text_align_center display_flex_row align_items_center justify_content_center">
            <span className="font_13 weight_semi_bold">1</span>/2
          </div>
          <div className="font_14 weight_regular color_gray_70">
            복용약 검색
          </div>
        </div>
      </div>
      <div className="display_flex_column gap_32 taking_medication_box">
        <div className="display_flex_row space_between">
          <div className="font_22 weight_semi_bold color_gray_90">
            복용 약 등록방법을<br></br>선택해주세요
          </div>
        </div>
      </div>
      <div className="display_flex_row gap_8 padding_0_20 margin_bottom_50">
        <div className="display_flex_column align_items_center border_gray_10 background_gray_5 radius_8 gap_16 padding_20_16 width_50">
          <img
            src="/img/taking_medication_search.svg"
            width="56"
            height="56"
          ></img>
          <div className="display_flex_column gap_12 text_align_center">
            <div className="font_15 weight_semi_bold color_gray_90">
              약 이름으로 검색하기
            </div>
            <div className="font_12 weight_regular color_gray_70">
              (ex. 타이레놀 등)
            </div>
          </div>
        </div>
        <div className="display_flex_column align_items_center border_gray_10 background_gray_5 radius_8 gap_16 padding_20_16 width_50">
          <img
            src="/img/taking_medication_input.svg"
            width="56"
            height="56"
          ></img>
          <div className="display_flex_column gap_12 text_align_center">
            <div className="font_15 weight_semi_bold color_gray_90">
              직접 입력하기
            </div>
            <div className="font_12 weight_regular color_gray_70">
              (ex. 약봉투, 혈압약 등)
            </div>
          </div>
        </div>
      </div>
      <div className="checkup_input_bottom_wrap width_100 background_gray_0">
        <div className="checkup_input_bottom display_flex_row space_between">
          {/*<button className="checkup_input_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            이전
          </button> */}
          <button className="checkup_input_common radius_8 font_15 weight_medium color_gray_0 checkup_input_next">
            다음
          </button>
        </div>
      </div>
    </>
  );
}
