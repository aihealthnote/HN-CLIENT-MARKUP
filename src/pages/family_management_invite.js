export default function FamilyManagementInvite() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">가족 추가</span>
      </div>
      <div className="bg_linear_ECFBFF display_flex_column gap_20 align_items_center padding_20">
        <img
          src="/img/family_management_main_2.svg"
          width="220"
          height="220"
          alt="family"
        ></img>
        <div className="text_align_center display_flex_column gap_24_">
          <div className="font_24 weight_semi_bold color_gray_90">
            홍*동님이
            <br />
            가족 관리에 초대했어요
          </div>
          <div className="font_15 weight_regular color_gray_70">
            공유받은 가족 코드를 입력해주세요
          </div>
        </div>
      </div>
      <div className="checkup_input_all_wrap_2 display_flex_column gap_32">
        <div className="display_flex_column gap_6">
          <div className="display_flex_column gap_12">
            <label
              for="input_normal"
              className="font_14 weight_medium color_gray_90"
            >
              가족 코드
            </label>
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_2 radius_8"
                placeholder="가족 코드를 입력해주세요"
              />
            </div>
          </div>
          <div className="display_flex_row gap_4 align_items_center">
            <img
              src="/img/family_code_error.svg"
              width="16"
              height="16"
              alt="error"
            ></img>
            <div className="color_F35064 font_12 weight_regular">
              가족 코드가 불일치합니다
            </div>
          </div>

          {/*<div className="display_flex_row gap_4 align_items_center">
            <img
              src="/img/family_code_confirm.svg"
              width="16"
              height="16"
              alt="confirm"
            ></img>
            <div className="color_2386E9 font_12 weight_regular">
              가족 코드가 일치합니다
            </div>
          </div>*/}
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_gray">가족 연결하기</button>
      </div>
    </>
  );
}
