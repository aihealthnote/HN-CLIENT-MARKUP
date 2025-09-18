export default function HealthCareNoDrinking() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">금주 관리</span>
        <img
          src="/img/calendar_bk.svg"
          width="24"
          height="24"
          className="top_right_more"
        ></img>
      </div>
      <div className="background_gray_5 padding_20 display_flex_column gap_40">
        <div className="display_flex_column background_gray_5 gap_8">
          <div className="font_13 weight_regular color_gray_50">
            4월 20일(목)
          </div>
          <div className="background_gray_0 border_gray_10 radius_12 display_flex_column gap_16 padding_20">
            <div className="display_flex_column gap_12">
              <div className="font_17 weight_semi_bold color_gray_90">금주</div>
              <div className="display_flex_row gap_4 space_between align_items_center">
                <div className="display_flex_column">
                  <div className="font_13 weight_regular color_gray_90">
                    누적 성공일자
                  </div>
                  <div className="display_flex_row align_items_baseline">
                    <div className="font_27 weight_bold color_gray_90">277</div>
                    <span className="font_15 weight_medium color_gray_70">
                      일{' '}
                    </span>
                    <span className="font_13 weight_regular color_gray_50">
                      {' '}
                      / 도전 일자 280일
                    </span>
                  </div>
                </div>
                <img
                  src="/img/no_drinking_gray.svg"
                  width="80"
                  height="80"
                ></img>
                {/* <img
                  src="/img/no_drinking_success.svg"
                  width="80"
                  height="80"
                ></img> */}
                {/* <img
                  src="/img/no_drinking_fail.svg"
                  width="80"
                  height="80"
                ></img> */}
                {/* <img
                  src="/img/no_smoking_gray.svg"
                  width="80"
                  height="80"
                ></img> 금연 입력 필요 */}
                {/* <img
                  src="/img/no_smoking_success.svg" 
                  width="80"
                  height="80"
                ></img> 금연 성공 */}
                {/* <img
                  src="/img/no_smoking_fail.svg"
                  width="80"
                  height="80"
                ></img> 금연 실패 */}
              </div>
            </div>

            <div className="success_or_failure_common font_14 weight_semi_bold radius_8 color_gray_50 text_align_center background_gray_5">
              매일매일 금연 관리로 절약한 금액을 확인해 보세요
            </div>
            {/* <div className="success_or_failure_common success_or_success_on font_14 weight_semi_bold radius_8 color_226DE7 text_align_center background_gray_5">
              2일 연속 성공했어요!
            </div> */}
            {/* <div className="success_or_failure_common success_or_failure_on font_14 weight_semi_bold radius_8 color_226DE7 text_align_center background_gray_5">
              내일 다시 도전해보세요
            </div> */}
            <div className="divider"></div>
            <div className="radius_12 display_flex_column gap_16">
              <div className="display_flex_row space_between">
                <div className="display_flex_row gap_8">
                  <img
                    src="/img/no_drinking_health.svg"
                    width="20"
                    height="20"
                  ></img>
                  <div className="font_14 weight_regular color_gray_90">
                    늘어난 건강
                  </div>
                </div>
                <div className="font_14 weight_semi_bold color_gray_90">
                  1일 15시간
                </div>
              </div>
              <div className="display_flex_row space_between">
                <div className="display_flex_row gap_8">
                  <img
                    src="/img/no_drinking_money.svg"
                    width="20"
                    height="20"
                  ></img>
                  <div className="font_14 weight_regular color_gray_90 display_flex_row align_items_center gap_4">
                    절약한 금액
                    <img
                      src="/img/information.svg"
                      width="16"
                      height="16"
                    ></img>
                  </div>
                </div>
                <div className="font_14 weight_semi_bold color_gray_90">
                  13,500원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">
          금주 여부 입력하기
        </button>
      </div>
    </>
  );
}
