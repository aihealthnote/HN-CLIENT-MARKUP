export default function HealthCareBloodSugarInput() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">혈당 기록하기</span>
      </div>
      <div className="display_flex_column background_gray_5">
        <div class="input_date_wrapper">
          <input
            type="text"
            id="input_normal"
            class="input_normal_background_10 radius_8 "
            placeholder="6월 17일(월) 오전 03:14"
          />
          <img
            src="/img/input_date.svg"
            width="20"
            height="20"
            alt="date"
            class="date_img_another"
          />
        </div>
        <div className="display_flex_column gap_8 padding_0_20 margin_top_8">
          <div className="padding_12_16 background_gray_0 border_gray_10 radius_12 gap_8 display_flex_column">
            <div className="display_flex_row gap_20 justify_content_center">
              <div className="text_align_center display_flex_column gap_8">
                <img
                  src="/img/home_record_on_1.svg"
                  width="56"
                  height="56"
                ></img>
                {/* <img src="/img/home_record_off_1.svg" width="56" height="56"></img> */}
                <div className="font_14 weight_medium color_0D9F4C">공복</div>
              </div>
              <div className="text_align_center display_flex_column gap_8">
                <img
                  src="/img/home_record_off_2.svg"
                  width="56"
                  height="56"
                ></img>
                {/* <img
                src="/img/home_record_on_2.svg"
                width="56"
                height="56"
              ></img> */}
                <div className="font_14 weight_medium color_gray_60">식전</div>
              </div>
              <div className="text_align_center display_flex_column gap_8">
                <img
                  src="/img/home_record_off_3.svg"
                  width="56"
                  height="56"
                ></img>
                {/* <img
                src="/img/home_record_on_3.svg"
                width="56"
                height="56"
              ></img> */}
                <div className="font_14 weight_medium color_gray_60">식후</div>
              </div>
              <div className="text_align_center display_flex_column gap_8">
                <img
                  src="/img/home_record_off_4.svg"
                  width="56"
                  height="56"
                ></img>
                {/* <img
                src="/img/home_record_on_4.svg"
                width="56"
                height="56"
              ></img> */}
                <div className="font_14 weight_medium color_gray_60">
                  취침 전
                </div>
              </div>
            </div>
          </div>
          <div className="padding_12_16 background_gray_0 border_gray_10 radius_12 gap_8 display_flex_column">
            <div className="display_flex_row gap_4">
              <img
                src="/img/health_care_blood_sugar.svg"
                width="24"
                height="24"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                혈당 (mg/dL)
              </div>
            </div>
            <div className="graph"></div>
          </div>
        </div>
        <div className="insulin_box">
          <div className="display_flex_row space_between padding_16_20 background_gray_0 border_gray_10 radius_12">
            <div className="display_flex_row gap_6 align_items_center">
              <img src="/img/insulin.svg" width="20" height="20"></img>
              <div className="font_14 weight_medium color_gray_90">인슐린</div>
            </div>
            <div class="input_date_wrapper width_50">
              <input
                type="text"
                id="input_normal"
                class="input_normal radius_8"
                placeholder="인슐린 입력"
                maxLength={4}
              />
              <span className="input_unit font_15 weight_regular color_gray_90">
                단위
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="display_flex_column memo_box gap_12">
        <div className="font_14 weight_medium color_gray_90">메모</div>
        <textarea
          className="background_gray_5 radius_8 memo_textarea"
          placeholder="오늘 혈당에 대한 메모를 남겨보세요."
        ></textarea>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">설정하기</button>
      </div>
    </>
  );
}
