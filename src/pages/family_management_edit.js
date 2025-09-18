export default function FamilyManagementEdit() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">가족 정보 수정</span>
      </div>
      <div className="family_management_edit display_flex_column gap_48">
        <div className="font_22 weight_semi_bold color_gray_90">
          가족분의<br></br>정보를 입력해주세요
        </div>
        <div className="display_flex_column gap_32">
          <div className="display_flex_column gap_12">
            <label
              for="input_normal"
              className="font_14 weight_medium color_gray_90"
            >
              가족 이름
            </label>
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_2 radius_8"
                placeholder="가족 이름을 입력해주세요"
              />
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
                class="input_disabled radius_8 "
                placeholder="010-1234-5678"
                readOnly
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
                <div className="weight_medium font_14 color_gray_60">
                  배우자
                </div>
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
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_gray">완료</button>
      </div>
    </>
  );
}
