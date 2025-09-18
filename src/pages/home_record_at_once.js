export default function HomeRecordAtOnce() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">기록하기</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="display_flex_column padding_16_20 gap_16_12">
          <div className="display_flex_row gap_4">
            <img
              src="/img/home_record_blood_sugar.svg"
              width="24"
              height="24"
              alt="blood sugar"
            ></img>
            <div className="font_19 weight_semi_bold">혈당</div>
          </div>
          <div className="display_flex_row gap_20 justify_content_center">
            <div className="text_align_center display_flex_column gap_8">
              <img src="/img/home_record_on_1.svg" width="56" height="56"></img>
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
              <div className="font_14 weight_medium color_gray_60">취침 전</div>
            </div>
          </div>
          <ul className="list_style_type_2 display_flex_row space_between align_items_center">
            <li className="font_15 weight_semi_bold color_gray_90">혈당수치</li>
            <div class="input_date_wrapper width_50">
              <input
                type="text"
                id="input_normal"
                class="input_normal radius_8"
                placeholder="혈당 입력"
                maxLength={3}
              />
              <span className="input_unit font_15 weight_regular color_gray_90">
                mg/dL
              </span>
            </div>
          </ul>
        </div>
        <div className="divider_wide"></div>
        <div className="display_flex_column padding_16_20 gap_16">
          <div className="display_flex_row gap_4">
            <img
              src="/img/home_record_blood_pressure.svg"
              width="24"
              height="24"
              alt="blood pressure"
            ></img>
            <div className="font_19 weight_semi_bold">혈압</div>
          </div>
          <div className="display_flex_column gap_8">
            <ul className="list_style_type_2 display_flex_row space_between align_items_center">
              <li className="font_15 weight_semi_bold color_gray_90">수축기</li>
              <div class="input_date_wrapper width_50">
                <input
                  type="text"
                  id="input_normal"
                  class="input_normal radius_8"
                  placeholder="수축기 입력"
                  maxLength={3}
                />
                <span className="input_unit font_15 weight_regular color_gray_90">
                  mg/dL
                </span>
              </div>
            </ul>
            <ul className="list_style_type_2 display_flex_row space_between align_items_center">
              <li className="font_15 weight_semi_bold color_gray_90">이완기</li>
              <div class="input_date_wrapper width_50">
                <input
                  type="text"
                  id="input_normal"
                  class="input_normal radius_8"
                  placeholder="이완기 입력"
                  maxLength={3}
                />
                <span className="input_unit font_15 weight_regular color_gray_90">
                  mg/dL
                </span>
              </div>
            </ul>
          </div>
        </div>
        <div className="divider_wide"></div>
        <div className="display_flex_row space_between align_items_center padding_16_20 gap_16">
          <div className="display_flex_row gap_4">
            <img
              src="/img/home_record_weight.svg"
              width="24"
              height="24"
              alt="weight"
            ></img>
            <div className="font_19 weight_semi_bold">체중</div>
          </div>
          <div class="input_date_wrapper width_50">
            <input
              type="text"
              id="input_normal"
              class="input_normal radius_8"
              placeholder="체중 입력"
              maxLength={3}
            />
            <span className="input_unit font_15 weight_regular color_gray_90">
              kg
            </span>
          </div>
        </div>
        <div className="divider_wide"></div>
        <div className="display_flex_row padding_16_20 gap_16 space_between">
          <div className="display_flex_row gap_4">
            <img
              src="/img/home_record_no_smoking.svg"
              width="24"
              height="24"
              alt="no_smoking"
            ></img>
            <div className="font_19 weight_semi_bold">금연</div>
          </div>
          <div className="display_flex_row hearing_button_wrap">
            <div className="hearing_button_normal success_fail width_50 text_align_center font_14 weight_medium">
              성공
            </div>
            <div className="hearing_button_right_off success_fail width_50 text_align_center font_14 weight_medium color_gray_70">
              실패
            </div>
          </div>
        </div>
        <div className="display_flex_row padding_16_20 gap_16 space_between">
          <div className="display_flex_row gap_4">
            <img
              src="/img/home_record_no_drinking.svg"
              width="24"
              height="24"
              alt="no_drinking"
            ></img>
            <div className="font_19 weight_semi_bold">금주</div>
          </div>
          <div className="display_flex_row hearing_button_wrap">
            <div className="hearing_button_left_off success_fail width_50 text_align_center font_14 weight_medium color_gray_70">
              성공
            </div>
            <div className="hearing_button_error success_fail width_50 text_align_center font_14 weight_medium color_gray_70">
              실패
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
