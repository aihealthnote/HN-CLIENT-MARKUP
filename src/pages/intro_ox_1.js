export default function IntroOX1() {
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
        {/*
        정답 맞췄을 때
         <div className="background_gray_5 display_flex_column align_items_center justify_content_center gap_12 padding_20 margin_top_48">
          <img src="/img/shake_hand.svg" width="30" alt="정답" />
          <div className="font_17 weight_semi_bold text_center line_height_24 text_align_center">
            정답이에요
            <br />
            정상 혈압은 수축기 120,
            <br />
            이완기 80 미만이에요
          </div>
        </div> */}
        <div className="background_gray_5 display_flex_column align_items_center justify_content_center gap_12 padding_20 margin_top_48">
          <div className="font_17 color_gray_50 weight_semi_bold text_center line_height_24 text_align_center">
            정상 혈압은 수축기 120,
            <br />
            이완기 80 미만이에요
          </div>
        </div>
        <div className="bottom_button_wrap">
          <div className="font_15 color_gray_50 text_center margin_bottom_10 text_align_center">
            내 혈압 정상 여부를 확인해보세요
          </div>
          <button className="bottom_button button_primary">
            내 건강 확인하기
          </button>
        </div>
      </div>
    </>
  );
}
