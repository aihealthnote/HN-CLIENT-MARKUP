export default function JoinTheMembership2() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="padding_20_24 display_flex_column gap_48">
        <div className="display_flex_column gap_32">
          <div className="display_flex_column gap_12">
            <label
              for="input_normal"
              className="font_14 weight_medium color_gray_90"
            >
              이름
            </label>
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_normal"
                class="input_normal_2 radius_8"
                placeholder="이름을 입력해주세요"
              />
            </div>
          </div>
          <div className="display_flex_column gap_12">
            <label
              htmlFor="birth_year"
              className="font_14 weight_medium color_gray_90"
            >
              생년월일
            </label>
            <div className="input_date_wrapper display_flex_row gap_12">
              <select id="birth_year" className="input_normal_2 radius_8">
                <option value="" disabled selected>
                  년
                </option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                {/* ... */}
              </select>

              <select id="birth_month" className="input_normal_2 radius_8">
                <option value="" disabled selected>
                  월
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                {/* ... */}
              </select>

              <select id="birth_day" className="input_normal_2 radius_8">
                <option value="" disabled selected>
                  일
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                {/* ... */}
              </select>
            </div>
          </div>

          <div className="display_flex_column gap_12">
            <label
              for="input_normal"
              className="font_14 weight_medium color_gray_90"
            >
              성별
            </label>
            <ul className=" display_flex_row gap_12">
              <li className="width_50 meal_list_off display_flex_row background_gray_5 space_between padding_16 radius_8 background_gray_0 align_items_center">
                <div className="display_flex_row gap_12 align_items_center">
                  <img
                    src="/img/check_circle_gray_empty.svg"
                    width="20"
                    height="20"
                    alt="check"
                  ></img>
                  <div className="display_flex_column">
                    <div className="font_15 weight_medium color_gray_90">
                      남
                    </div>
                  </div>
                </div>
              </li>
              <li className="width_50 meal_list_off display_flex_row space_between padding_16 radius_8 background_EAF5EB align_items_center">
                <div className="display_flex_row gap_12 align_items_center">
                  <img
                    src="/img/check_circle_gr.svg"
                    width="20"
                    height="20"
                    alt="check"
                  ></img>
                  <div className="display_flex_column">
                    <div className="font_15 weight_medium color_gray_90">
                      여
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="display_flex_column gap_12">
          <label
            for="input_normal"
            className="font_14 weight_medium color_gray_90"
          >
            휴대폰번호
          </label>
          <div class="display_flex_row gap_8 input_date_wrapper">
            <input
              type="text"
              id="input_normal"
              class="input_normal_2 radius_8"
              placeholder="01012345678"
            />
            <button className="font_15 weight_medium width_200 radius_8 button_secondary">
              인증 번호 발송
            </button>
            {/* <button className="font_15 weight_medium width_200 radius_8 background_gray_30 color_gray_0">
                인증 번호 발송
              </button> */}
          </div>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_normal_2 radius_8"
              placeholder="인증 코드를 입력해주세요"
            />
          </div>
          <div className="display_flex_row gap_4 align_items_center">
            <img
              src="/img/family_code_error.svg"
              width="16"
              height="16"
              alt="error"
            ></img>
            <div className="color_F35064 font_12 weight_regular">
              인증 번호가 불일치합니다
            </div>
          </div>
          {/* <div className="display_flex_row gap_4 align_items_center">
              <img
                src="/img/family_code_confirm.svg"
                width="16"
                height="16"
                alt="confirm"
              ></img>
              <div className="color_2386E9 font_12 weight_regular">
                인증 번호가 일치합니다
              </div>
            </div> */}
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">다음</button>
      </div>
    </>
  );
}
