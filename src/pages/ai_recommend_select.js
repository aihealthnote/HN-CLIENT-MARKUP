export default function AiRecommendSelect() {
  return (
    <>
      <div className="my_care_padding display_flex_row space_between align_items_center">
        <div className="font_22 weight_semi_bold">AI 추천 식단·운동</div>
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
      <div className="position_relative display_flex_column gap_12 padding_20 background_gray_5">
        <div className="text_align_center font_17">
          좋아하는 음식을 알려주세요
          <br />
          가장 비슷한 식단으로 추천해드립니다
          <br />
          <span className="font_13 color_gray_50">
            * 최대 9개까지 선택이 가능해요
          </span>
        </div>

        <div className="display_flex_column gap_12">
          <div className="height_44 notice_event_tab_wrap display_flex_row gap_4">
            <div className="button_primary padding_0_10 radius_50 font_14 weight_medium display_flex_row align_items_center">
              전체
            </div>
            <div className="background_gray_0 border_gray_20 padding_0_10 radius_50 font_14 weight_medium color_gray_70 display_flex_row align_items_center">
              한식
            </div>
            <div className="background_gray_0 border_gray_20 padding_0_10 radius_50 font_14 weight_medium color_gray_70 display_flex_row align_items_center">
              일식
            </div>
            <div className="background_gray_0 border_gray_20 padding_0_10 radius_50 font_14 weight_medium color_gray_70 display_flex_row align_items_center">
              양식
            </div>
            <div className="background_gray_0 border_gray_20 padding_0_10 radius_50 font_14 weight_medium color_gray_70 display_flex_row align_items_center">
              중식
            </div>
            <div className="background_gray_0 border_gray_20 padding_0_10 radius_50 font_14 weight_medium color_gray_70 display_flex_row align_items_center">
              분식
            </div>
          </div>
          <div className=" display_flex_column padding_20 gap_24_ shadow_normal background_gray_0 radius_12">
            <div className="display_flex_row gap_24_">
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center border_gray_20 ">
                비빔밥
              </div>
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center border_gray_20 ">
                짜장면
              </div>
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center border_0CC25A background_E7FAEF weight_semi_bold">
                햄버거
              </div>
            </div>
            <div className="display_flex_row gap_24_">
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center border_gray_20 ">
                떡볶이
              </div>
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center border_gray_20 ">
                불고기
              </div>
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center  border_gray_20 ">
                스테이크
              </div>
            </div>
            <div className="display_flex_row gap_24_">
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center border_0CC25A background_E7FAEF weight_semi_bold">
                짬뽕
              </div>
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center  border_gray_20 ">
                순대
              </div>
              <div className="font_14 meal_select_normal display_flex_row align_items_center justify_content_center border_0CC25A background_E7FAEF weight_semi_bold">
                김치찌개
              </div>
            </div>
          </div>
        </div>
        <div className="text_align_center font_14 weight_medium color_gray_50 text_underline">
          건너뛰기
        </div>
        <div className="ballon_login_wrap2 text_align_center">
          <div className="ballon_login background_gray_0 font_12 color_gray_90 font_13 weight_medium padding_12 radius_8">
            선택하지 않아도 추천해드려요
            <div className="ballon_login_triangle2"></div>
          </div>
        </div>
        <button className="bottom_button button_primary margin_top_32">
          다음
        </button>
        <img
          src="/img/swipe.png"
          width="32"
          alt="swipe"
          className="position_absolute swipe_absolute"
        ></img>
      </div>
    </>
  );
}
