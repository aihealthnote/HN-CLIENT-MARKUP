export default function IntroOX() {
  return (
    <>
      <div className="position_relative height_100vh">
        <div className="display_flex_column gap_28 align_items_center padding_28_32">
          <div className="font_24 weight_semi_bold">
            지금 나의 혈압은{' '}
            <span className="font_24 weight_semi_bold color_F42A43">정상</span>
            이다
          </div>
          <div className="display_flex_row gap_12">
            <div className="success_left padding_16_20 radius_8">
              {' '}
              O<br /> 그렇다
            </div>
            <div className="bg_F4605B padding_16_20 radius_8">
              {' '}
              X<br /> 모르겠다
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_6 align_items_center justify_content_center position_absolute position_ox_bottom width_100">
          <img src="/img/light_ox.svg" width="24" />
          <div className="font_15 color_gray_50">
            정상 혈압은 120/80mmHg 미만이에요
            <br /> 혈압은 생활습관과 컨디션에 따라 달라질 수 있습니다
          </div>
        </div>
      </div>
    </>
  );
}
