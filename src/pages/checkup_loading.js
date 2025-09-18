export default function CheckupLoading() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="checkup_result_loading_warp">
        <div className="display_flex_column gap_56">
          <div className="display_flex_column align_items_center gap_16">
            <div className="graph_150"></div>
            <div className="font_22 weight_semi_bold text_align_center">
              <span className="font_22 weight_semi_bold ">홍길동</span>님의{' '}
              <span className="font_22 weight_semi_bold checkup_loading_content">
                건강검진 내역
              </span>
              <br></br>
              가져오는 중...
            </div>
          </div>
          <div className="display_flex_column gap_8">
            <div className="background_gray_5 text_align_center padding_20_16 radius_12 checkup_result_loading_list">
              <div className="display_flex_row gap_10">
                <img
                  src="/img/check_gr.svg"
                  width="20"
                  height="20"
                  alt="check"
                ></img>
                <div className="font_14 weight_medium">
                  10년치 검진 내역을 가져오고 있어요.
                </div>
              </div>
            </div>
            <div className="background_gray_5 text_align_center padding_20_16 radius_12 checkup_result_loading_list">
              <div className="display_flex_row gap_10">
                <img
                  src="/img/check_gr.svg"
                  width="20"
                  height="20"
                  alt="check"
                ></img>
                <div className="font_14 weight_medium">
                  내역을 정리하는 중이에요.
                </div>
              </div>
            </div>
            <div className="background_gray_5 text_align_center padding_20_16 radius_12 checkup_result_loading_list">
              <div className="display_flex_row gap_10">
                <img
                  src="/img/check_gr.svg"
                  width="20"
                  height="20"
                  alt="check"
                ></img>
                <div className="font_14 weight_medium">
                  건강검진 내역을 모두 확인할 수 있어요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
