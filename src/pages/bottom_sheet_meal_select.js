export default function BottomSheetMealSelect() {
  return (
    <>
      {' '}
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column align_items_center gap_24">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold">식사 종류</div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="bottom_two_button_wrap display_flex_column gap_8">
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_60 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_12">
              <img src="/img/meal_breakfast.svg" width="40" height="40"></img>
              <div className="font_15 weight_semi_bold color_gray_90">아침</div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_60 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_12">
              <img src="/img/meal_lunch.svg" width="40" height="40"></img>
              <div className="font_15 weight_semi_bold color_gray_90">점심</div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_60 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_12">
              <img src="/img/meal_dinner.svg" width="40" height="40"></img>
              <div className="font_15 weight_semi_bold color_gray_90">저녁</div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_60 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_12">
              <img src="/img/meal_night_snack.svg" width="40" height="40"></img>
              <div className="font_15 weight_semi_bold color_gray_90">야식</div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
          <button className="display_flex_row space_between background_gray_5 border_gray_10 height_60 align_items_center padding_12_16">
            <div className="display_flex_row align_items_center gap_12">
              <img src="/img/meal_dessert.svg" width="40" height="40"></img>
              <div className="font_15 weight_semi_bold color_gray_90">간식</div>
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="20"
              height="20"
              alt="arrow right"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}
