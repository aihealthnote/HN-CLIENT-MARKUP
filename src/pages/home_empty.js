export default function HomeEmpty() {
  return (
    <>
      <div className="display_flex_column gap_40">
        <div className="display_flex_column text_align_center gap_20 align_items_center">
          <img src="/img/empty_blood_sugar.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              등록된 혈당 기록이 없어요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              혈당을 등록해주시면 관리해드릴게요
            </div>
          </div>
        </div>
        <div className="display_flex_column text_align_center gap_20 align_items_center">
          <img src="/img/empty_blood_pressure.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              등록된 혈압 기록이 없어요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              혈압을 등록해주시면 관리해드릴게요
            </div>
          </div>
        </div>
        <div className="display_flex_column text_align_center gap_20 align_items_center">
          <img src="/img/empty_weight.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              등록된 체중 기록이 없어요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              체중을 등록해주시면 관리해드릴게요
            </div>
          </div>
        </div>
        <div className="display_flex_column text_align_center gap_20 align_items_center">
          <img src="/img/empty_pill.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              등록된 복약 스케줄이 없어요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              스케줄을 등록해주시면 관리해드릴게요
            </div>
          </div>
        </div>
        <div className="display_flex_column text_align_center gap_20 align_items_center">
          <img src="/img/empty_meal.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              식단 기록을 시작해보세요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              작성한 기록으로 섭취 칼로리를 확인할 수 있어요
            </div>
          </div>
        </div>
        <div className="display_flex_column text_align_center gap_20 align_items_center">
          <img src="/img/empty_workout.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              운동 기록을 시작해보세요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              작성한 기록으로 소모 칼로리를 확인할 수 있어요
            </div>
          </div>
        </div>
        <div className="display_flex_column text_align_center gap_20 align_items_center">
          <img src="/img/empty_no_smoking.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              금연 기록을 시작해보세요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              작성한 기록으로 금연 현황을 확인할 수 있어요
            </div>
          </div>
        </div>
        <div className="display_flex_column text_align_center gap_20 align_items_center">
          <img src="/img/empty_no_drinking.svg" width="56" height="56"></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              금주 기록을 시작해보세요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              작성한 기록으로 금주 현황을 확인할 수 있어요
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
