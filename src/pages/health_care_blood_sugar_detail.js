export default function HealthCareBloodSugarDetail() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">혈당 상세</span>
        <img
          src="/img/more.svg"
          width="24"
          height="24"
          alt="more"
          className="top_right_more"
        ></img>
      </div>
      <div className="health_care_more_popup_another background_gray_0 shadow_normal display_flex_column radius_4 justify_content_center">
        <div className="display_flex_row padding_8_12 gap_8">
          <img src="/img/trash.svg" width="16" weight="16" alt="target"></img>
          <div className="font_15 weight_regular color_gray_90">삭제</div>
        </div>
      </div>
      <div className="display_flex_column background_gray_5 padding_16 gap_8">
        <div className="font_13 weight_regular color_gray_50">4월 20일(목)</div>
        <div className="background_gray_0 border_gray_10 radius_12 display_flex_column gap_24_ padding_20">
          <div className="display_flex_row gap_12 align_items_center">
            <img src="/img/home_record_off_4.svg" width="56" height="56"></img>
            {/* <img src="/img/home_record_off_3.svg" width="56" height="56"></img> */}
            {/* <img src="/img/home_record_off_2.svg" width="56" height="56"></img> */}
            {/* <img src="/img/home_record_off_1.svg" width="56" height="56"></img> */}
            <div className="display_flex_column">
              <div className="display_flex_row gap_4">
                <div className="font_14 weight_medium color_gray_90">혈당</div>
                <div className="health_care_button_common health_care_button_off background_gray_10 font_12 text_align_center weight_regular color_gray_80 border_gray_20">
                  취침 전
                </div>
              </div>
              <div className="display_flex_row gap_4 align_items_center">
                <div className="display_flex_row align_items_baseline">
                  <div className="font_32 weight_bold colo_gray_90">120</div>
                  <span className="font_15 weight_medium colo_gray_70">
                    mmHg
                  </span>
                </div>
                {/* <button className="result_unit_button_common result_unit_button_normal radius_12 font_13 weight_semi_bold">
                  정상
                </button> */}
                <button className="result_unit_button_common result_unit_button_warning radius_12 font_13 weight_semi_bold">
                  경고
                </button>
                {/* <button className="result_unit_button_common result_unit_button_error radius_12 font_13 weight_semi_bold">
              질환의심
            </button> */}
              </div>
            </div>
          </div>
          <div className="display_flex_row space_between background_gray_5 border_gray_10 radius_8 padding_12_16">
            <div className="display_flex_row gap_4 align_items_center">
              <img
                src="/img/insulin.svg"
                width="20"
                height="20"
                alt="insulin"
              ></img>
              <div className="font_14 weight_medium color_gray_90">인슐린</div>
            </div>
            <div className="font_14 weight_semi_bold color_gray_90">55.0</div>
          </div>
        </div>
        <div className="background_gray_0 border_gray_10 radius_12 padding_20 display_flex_column gap_20">
          <div className="display_flex_row gap_4 align_items_center">
            <img
              src="/img/list_memo.svg"
              width="16"
              heght="16"
              alt="memo"
            ></img>
            <div className="font_14 weihgt_medium color_gray_90">메모</div>
          </div>
          <div className="color_gray_70 font_15 weight_regular">
            인슐린 투어 완료인슐린 투어 완료인슐린 투어 완료인슐린 투어
            완료인슐린 투어 완료인슐린 투어 완료인슐린 투어 완료인슐린 투어
            완료인슐린 투어 완료인슐린 투어 완료인슐린 투어 완료인슐린 투어
            완료인슐린 투어 완료인슐린 투어 완료인슐린 투어 완료인슐린 투어
            완료인슐린 투어 완료인슐린 투어 완료인슐린 투어 완료인슐린 투어
            완료인슐린 투어 완료인슐린 투어 완료인슐린 투어 완료인슐린 투어
            완료인슐린 투어 완료
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">설정하기</button>
      </div>
    </>
  );
}
