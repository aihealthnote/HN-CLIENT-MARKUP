export default function FamilyManagementAdd() {
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
      <div className="bg_linear_ECFBFF display_flex_column gap_32 align_items_center family_management_main_2">
        <div className="text_align_center display_flex_column gap_24_">
          <div className="font_24 weight_semi_bold color_gray_90">
            가족의 건강을
            <br />
            함께 관리해주세요
          </div>
          <div className="font_15 weight_regular color_gray_50">
            지금 가족 정보를 등록하고 <br /> 소중한 분들의 건강도 함께
            챙겨보세요
          </div>
        </div>
        <img
          src="/img/family_management_main_2.svg"
          width="220"
          height="220"
          alt="family"
        ></img>
      </div>
      <div className="checkup_input_all_wrap_2 display_flex_column gap_32">
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            가족 이름
          </label>
          <div class="input_date_wrapper display_flex_row gap_6">
            <input
              type="text"
              id="input_normal"
              class="input_normal_2 radius_8"
              placeholder="이름을 입력해주세요"
              maxLength={10}
            />
            <button className="background_EAF5EB height_48 width_120 weight_semi_bold radius_12">
              연락처
            </button>
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            휴대폰 번호
          </label>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal_2 radius_8"
              placeholder="010-1234-5678"
              maxLength={3}
            />
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            가족 관계
          </label>
          <ul className="border_gray_10 radius_12 family_relationship_box display_flex_row gap_16 justify_content_center">
            <li className="display_flex_column align_items_center gap_8">
              <img
                src="/img/family_relationship_1_on.svg"
                width="56"
                height="56"
                alt="family"
              ></img>
              {/* <img
                src="/img/family_relationship_1_off.svg"
                width="56"
                height="56"
                alt="family"
              ></img> */}
              <div className="color_0D9F4C weight_medium font_14">부모</div>
            </li>
            <li className="display_flex_column align_items_center gap_8">
              <img
                src="/img/family_relationship_2_off.svg"
                width="56"
                height="56"
                alt="family"
              ></img>
              {/* <img
                src="/img/family_relationship_2_on.svg"
                width="56"
                height="56"
                alt="family"
              ></img> */}
              <div className="weight_medium font_14 color_gray_60">배우자</div>
            </li>
            <li className="display_flex_column align_items_center gap_8">
              <img
                src="/img/family_relationship_3_off.svg"
                width="56"
                height="56"
                alt="family"
              ></img>
              {/* <img
                src="/img/family_relationship_3_on.svg"
                width="56"
                height="56"
                alt="family"
              ></img> */}
              <div className="weight_medium font_14 color_gray_60">기타</div>
            </li>
            <li className="display_flex_column align_items_center gap_8">
              <img
                src="/img/family_relationship_4_off.svg"
                width="56"
                height="56"
                alt="family"
              ></img>
              {/* <img
                src="/img/family_relationship_4_on.svg"
                width="56"
                height="56"
                alt="family"
              ></img> */}
              <div className="weight_medium font_14 color_gray_60">기타</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">가족 요청</button>
      </div>
    </>
  );
}
