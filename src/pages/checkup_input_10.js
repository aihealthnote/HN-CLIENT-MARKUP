export default function CheckupInput10() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">검진 결과지 입력</span>
      </div>
      <div className="progress_indicator_wrap">
        <div className="display_flex_column gap_4">
          <div>
            <div className="progress_indicator_common progress_indicator_wrap_on_100 radius_12"></div>
            <div className="progress_indicator_wrap_bg width_100 background_gray_10 radius_12"></div>
          </div>
          <div className="display_flex_row gap_2 align_items_center progress_indicator_save justify_content_flex_end">
            <img
              src="/img/check_gray.svg"
              width="16"
              height="16"
              alt="check"
            ></img>
            <div className="font_12 weight_regular color_gray_50">
              저장됨{' '}
              <span className="font_12 weight_regular color_gray_50">
                (14:45)
              </span>
            </div>
          </div>
          <div className="display_flex_column gap_20">
            <div className="pregress_indicator_number_wrap font_13 weight_semi_bold text_align_center display_flex_row align_items_center justify_content_center">
              <span className="font_13 weight_semi_bold">10</span>/10
            </div>
            <div className="display_flex_row space_between">
              <div className="font_22 weight_semi_bold color_gray_90">
                기타 검진항목이<br></br>있다면 추가해주세요<br></br>
                <span className="font_13 weight_regular color_gray_50">
                  (선택 사항)
                </span>
              </div>
              <img
                src="/img/checkup_result_etc.svg"
                width="56"
                height="56"
                alt="etc"
              ></img>
            </div>
            <div className="font_14 weight_regular color_gray_70">
              기타 검진 항목에 대한 텍스트 내용
            </div>
          </div>
        </div>
      </div>
      <div className="checkup_input_all_wrap display_flex_column gap_16">
        <div className="padding_12_16 display_flex_row space_between border_gray_20 radius_8">
          <div>검진항목 추가하기</div>
          <img src="/img/add_bk.svg" width="20" height="20" alt="add"></img>
        </div>
        <div className="display_flex_column gap_8">
          <div className="padding_12_16 background_gray_5 border_gray_10 radius_8">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="font_14 weight_regular color_gray_50">
                  아밀라아제
                </div>
                <div className="font_17 weight_semi_bold color_gray_90">
                  28 mg/dL
                </div>
              </div>
              <img
                src="/img/close_bk.svg"
                width="20"
                height="20"
                alt="close"
              ></img>
            </div>
          </div>
          <div className="padding_12_16 background_gray_5 border_gray_10 radius_8">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="font_14 weight_regular color_gray_50">
                  아밀라아제
                </div>
                <div className="font_17 weight_semi_bold color_gray_90">
                  28 mg/dL
                </div>
              </div>
              <img
                src="/img/close_bk.svg"
                width="20"
                height="20"
                alt="close"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="checkup_input_bottom_wrap width_100 background_gray_0">
        <div className="checkup_input_bottom display_flex_row space_between">
          <button className="checkup_input_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            이전
          </button>
          <button className="checkup_input_common radius_8 font_15 weight_medium color_gray_0 checkup_input_next">
            다음
          </button>
        </div>
      </div>
    </>
  );
}
