export default function CheckupInput4() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">검진 결과지 입력</span>
      </div>
      <div className="progress_indicator_wrap">
        <div className="display_flex_column gap_4">
          <div>
            <div className="progress_indicator_common progress_indicator_wrap_on_40 radius_12"></div>
            <div className="progress_indicator_wrap_bg width_100 background_gray_10 radius_12"></div>
          </div>
          <div className="display_flex_row gap_2 align_items_center progress_indicator_save justify_content_flex_end">
            <img
              src="/img/check_gray.svg"
              width="16"
              height="16"
              alt="check"
            ></img>
            <div className="font_12 weight_regular color_gray_50">
              저장됨{' '}
              <span className="font_12 weight_regular color_gray_50">
                (14:45)
              </span>
            </div>
          </div>
          <div className="display_flex_column gap_20">
            <div className="pregress_indicator_number_wrap font_13 weight_semi_bold text_align_center display_flex_row align_items_center justify_content_center">
              <span className="font_13 weight_semi_bold">4</span>/10
            </div>
            <div className="display_flex_row space_between">
              <div className="font_22 weight_semi_bold color_gray_90">
                혈중지질검사<br></br>정보를 입력해주세요
              </div>
              <img
                src="/img/checkup_result_all_cholesterol.svg"
                width="56"
                height="56"
                alt="cholesterol"
              ></img>
            </div>
            <div className="font_14 weight_regular color_gray_70">
              혈중지질검사에 대한 텍스트 내용
            </div>
          </div>
        </div>
      </div>
      <div className="checkup_input_all_wrap display_flex_column gap_32">
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            총 콜레스테롤
          </label>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="총 콜레스테롤을 입력해주세요"
              maxLength={3}
            />
            <span className="input_unit font_15 weight_regular color_gray_90">
              mmHg
            </span>
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            HDL 콜레스테롤
          </label>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="HDL 콜레스테롤을 입력해주세요"
              maxLength={3}
            />
            <span className="input_unit font_15 weight_regular color_gray_90">
              mmHg
            </span>
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            중성지방
          </label>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="중성지방을 입력해주세요"
              maxLength={3}
            />
            <span className="input_unit font_15 weight_regular color_gray_90">
              mg/dL
            </span>
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            DL 콜레스테롤
          </label>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="DL 콜레스테롤을 입력해주세요"
              maxLength={3}
            />
            <span className="input_unit font_15 weight_regular color_gray_90">
              mg/dL
            </span>
          </div>
        </div>
      </div>
      <div className="checkup_input_bottom_wrap width_100 background_gray_0">
        <div className="checkup_input_bottom display_flex_row space_between">
          <button className="checkup_input_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            이전
          </button>
          <button className="checkup_input_common radius_8 font_15 weight_medium color_gray_0 checkup_input_next">
            다음
          </button>
        </div>
      </div>
    </>
  );
}
