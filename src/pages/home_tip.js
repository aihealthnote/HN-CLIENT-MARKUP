export default function HomeTip() {
  return (
    <>
      <div className="margin_20 background_gray_0 shadow_normal padding_20">
        <div className="display_flex_column gap_20">
          <div className="font_22 weight_semi_bold">오늘의 건강 팁</div>
          <div className="display_flex_column gap_12">
            <div className="background_EAF0F5 radius_8 padding_20">
              <div className="font_19 color_gray_90 weight_semi_bold">
                조용한 살인자로
                <br />
                불리는 "고혈압"
              </div>
              <div className="display_flex_row space_between align_items_center">
                <div className="display_flex_row">
                  <div className="color_gray_90 ">컨텐츠 확인하기</div>
                  <img src="/img/arrow_right_gray.svg" width="16"></img>
                </div>
                <img src="/img/tip1.svg"></img>
              </div>
            </div>
            <div className="background_EAF5EB radius_8 padding_20">
              <div className="font_19 color_gray_90 weight_semi_bold">
                혈당 관리
                <br />
                한다 vs 안 한다?
              </div>
              <div className="display_flex_row space_between align_items_center">
                <div className="display_flex_row">
                  <div className="color_gray_90 ">컨텐츠 확인하기</div>
                  <img src="/img/arrow_right_gray.svg" width="16"></img>
                </div>
                <img src="/img/tip2.svg"></img>
              </div>
            </div>
            <div className="background_FAE7E7 radius_8 padding_20">
              <div className="font_19 color_gray_90 weight_semi_bold">
                배달앱 대신 건강앱,
                <br />
                선택이 몸을 바꾼다
              </div>
              <div className="display_flex_row space_between align_items_center">
                <div className="display_flex_row">
                  <div className="color_gray_90 ">컨텐츠 확인하기</div>
                  <img src="/img/arrow_right_gray.svg" width="16"></img>
                </div>
                <img src="/img/tip3.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
