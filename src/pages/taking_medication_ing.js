export default function TakingMedicationIng() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">복용중인 약</span>
      </div>
      <div className="more_popup_common background_gray_0 shadow_normal display_flex_column radius_4 justify_content_center">
        <div className="display_flex_row padding_8_12 gap_8">
          <img src="/img/edit.svg" width="16" weight="16" alt="edit"></img>
          <div className="font_15 weight_regular color_gray_90">편집</div>
        </div>
        <div className="display_flex_row padding_8_12 gap_8">
          <img src="/img/trash.svg" width="16" weight="16" alt="trash"></img>
          <div className="font_15 weight_regular color_gray_90">삭제</div>
        </div>
        <div className="display_flex_row padding_8_12 gap_8">
          <img
            src="/img/taking_medication_done.svg"
            width="16"
            weight="16"
            alt="taking_medication_done"
          ></img>
          <div className="font_15 weight_regular color_gray_90">복용종료</div>
        </div>
      </div>
      <div className="background_gray_10">
        <div className="display_flex_column background_gray_5 taking_medication_ing_wrap">
          <div className="display_flex_column gap_12">
            <div className="font_13 color_gray_70 weight_medium">
              등록한 복약 총{' '}
              <span className="font_13 color_gray_70 weight_medium">3</span>건
            </div>
            <div className="padding_12_16 background_gray_0 border_gray_10 radius_12 gap_8 display_flex_column">
              <div className="display_flex_column gap_16">
                <div className="display_flex_row space_between">
                  <div className="display_flex_row radius_6 gap_4 align_items_center taking_medication_pill_button">
                    <img
                      src="/img/prescription.svg"
                      width="16"
                      height="16"
                    ></img>
                    <div className="taking_medication_pill_text font_13 weight_semi_bold">
                      복약
                    </div>
                  </div>
                  <img src="/img/more_gray.svg" width="20" height="20"></img>
                </div>
                <div className="font_19 weight_semi_bold color_gray_90">
                  감기약
                </div>
                <div className="font_13 weight_regular color_gray_70">
                  타이레놀, 에페린플러스정, 경동아스피린장용정, 배포스타정,
                  엘스테인캡슐
                </div>
                <div className="divider"></div>
                <div className="display_flex_column gap_8">
                  <div className="display_flex_row space_between">
                    <div className="font_14 weight_regular color_gray_50">
                      복약 주기
                    </div>
                    <div className="font_14 weight_regular color_gray_90">
                      매월 3일, 20일
                    </div>
                  </div>
                  <div className="display_flex_row space_between">
                    <div className="font_14 weight_regular color_gray_50">
                      복약 시간
                    </div>
                    <div className="font_14 weight_regular color_gray_90">
                      오전 8:30
                    </div>
                  </div>
                  <div className="display_flex_row space_between">
                    <div className="font_14 weight_regular color_gray_50">
                      복약 기간
                    </div>
                    <div className="font_14 weight_regular color_gray_90">
                      2025.04.14 ~ 2025.08.14
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding_12_16 background_gray_0 border_gray_10 radius_12 gap_8 display_flex_column">
              <div className="display_flex_column gap_16">
                <div className="display_flex_row space_between">
                  <div className="display_flex_row radius_6 gap_4 align_items_center taking_medication_pill_button">
                    <img
                      src="/img/prescription.svg"
                      width="16"
                      height="16"
                    ></img>
                    <div className="taking_medication_pill_text font_13 weight_semi_bold">
                      복약
                    </div>
                  </div>
                  <img src="/img/more_gray.svg" width="20" height="20"></img>
                </div>
                <div className="font_19 weight_semi_bold color_gray_90">
                  감기약
                </div>
                <div className="font_13 weight_regular color_gray_70">
                  타이레놀, 에페린플러스정, 경동아스피린장용정, 배포스타정,
                  엘스테인캡슐
                </div>
                <div className="divider"></div>
                <div className="display_flex_column gap_8">
                  <div className="display_flex_row space_between">
                    <div className="font_14 weight_regular color_gray_50">
                      복약 주기
                    </div>
                    <div className="font_14 weight_regular color_gray_90">
                      매월 3일, 20일
                    </div>
                  </div>
                  <div className="display_flex_row space_between">
                    <div className="font_14 weight_regular color_gray_50">
                      복약 시간
                    </div>
                    <div className="font_14 weight_regular color_gray_90">
                      오전 8:30
                    </div>
                  </div>
                  <div className="display_flex_row space_between">
                    <div className="font_14 weight_regular color_gray_50">
                      복약 기간
                    </div>
                    <div className="font_14 weight_regular color_gray_90">
                      2025.04.14 ~ 2025.08.14
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
