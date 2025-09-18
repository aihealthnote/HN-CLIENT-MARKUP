export default function HealthCareWorkoutSelect() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">운동 선택</span>
        <img
          src="/img/edit.svg"
          width="24"
          height="24"
          alt="edit"
          className="top_right_more"
        ></img>
      </div>
      <div className="display_flex_column gap_12 margin_24_20">
        <div className="display_flex_row gap_4 align_items_center">
          <img src="/img/bookmark.svg" width="16" height="16"></img>
          <div className="font_13 weight_medium color_gray_70">즐겨찾기</div>
        </div>
        <div className="display_flex_column gap_8">
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 radius_8 background_gray_5">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_walking_fast_clear.svg"
                width="24"
                height="24"
                alt="walking fast"
              ></img>
              <div className="font_15 weight_medium color_gray_90">
                빠르게 걷기
              </div>
            </div>
            <img
              src="/img/workout_star_on.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_running.svg"
                width="24"
                height="24"
                alt="running"
              ></img>
              <div className="font_15 weight_medium color_gray_90">달리기</div>
            </div>
            <img
              src="/img/workout_star_on.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8 border_transparent">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_bicycle.svg"
                width="24"
                height="24"
                alt="bicycle"
              ></img>
              <div className="font_15 weight_medium color_gray_90">자전거</div>
            </div>
            <img
              src="/img/workout_star_on.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
        </div>
      </div>
      <div className="display_flex_column gap_12 margin_24_20">
        <div className="display_flex_row gap_4 align_items_center">
          <img src="/img/bookmark.svg" width="16" height="16"></img>
          <div className="font_13 weight_medium color_gray_70">운동 더보기</div>
        </div>
        <div className="display_flex_column gap_8">
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 radius_8 background_gray_5">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_walking_clear.svg"
                width="40"
                height="40"
                alt="walking"
              ></img>
              <div className="font_15 weight_medium color_gray_90">걷기</div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_stretching_clear.svg"
                width="40"
                height="40"
                alt="running"
              ></img>
              <div className="font_15 weight_medium color_gray_90">
                스트레칭
              </div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8 border_transparent">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_mountain_climbing_clear.svg"
                width="40"
                height="40"
                alt="mountain_climbing"
              ></img>
              <div className="font_15 weight_medium color_gray_90">등산</div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_golf_clear.svg"
                width="40"
                height="40"
                alt="golf"
              ></img>
              <div className="font_15 weight_medium color_gray_90">골프</div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8 border_transparent">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_football_clear.svg"
                width="40"
                height="40"
                alt="football"
              ></img>
              <div className="font_15 weight_medium color_gray_90">축구</div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8 border_transparent">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_baseball_clear.svg"
                width="40"
                height="40"
                alt="baseball"
              ></img>
              <div className="font_15 weight_medium color_gray_90">야구</div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8 border_transparent">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_basketball_clear.svg"
                width="40"
                height="40"
                alt="basketball"
              ></img>
              <div className="font_15 weight_medium color_gray_90">농구</div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8 border_transparent">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_tennis_clear.svg"
                width="40"
                height="40"
                alt="tennis"
              ></img>
              <div className="font_15 weight_medium color_gray_90">테니스</div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
          <div className="display_flex_row space_between align_items_center padding_0_16 height_56 background_gray_5 radius_8 border_transparent">
            <div className="display_flex_row gap_8 align_items_center">
              <img
                src="/img/workout_table_tennis_clear.svg"
                width="40"
                height="40"
                alt="table_tennis"
              ></img>
              <div className="font_15 weight_medium color_gray_90">탁구</div>
            </div>
            <img
              src="/img/workout_star_off.svg"
              width="28"
              height="28"
              alt="star"
            ></img>
          </div>
        </div>
        <div className="border_gray_20 radius_8 height_48 gap_4 display_flex_row align_items_center justify_content_center">
          <img src="/img/add_bk.svg" width="20" height="20"></img>
          <div className="font_15 weight_medium color_gray_90">
            다른 운동 추가하기
          </div>
        </div>
      </div>
    </>
  );
}
