export default function TakingMedicationInput() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">복용약 등록</span>
      </div>
      <div className="display_flex_column gap_8 padding_0_20_8 shadow_normal">
        <div className="profress_indicator_warp2 display_flex_row gap_4">
          <div className="progress_indicator_wrap_on_bl radius_12"></div>
          <div className="progress_indicator_wrap_bg background_gray_10 radius_12"></div>
          <div className="progress_indicator_wrap_bg background_gray_10 radius_12"></div>
          <div className="progress_indicator_wrap_bg background_gray_10 radius_12"></div>
        </div>
        <div className="display_flex_row gap_6 align_items_center">
          <div className="pregress_indicator_number_wrap font_13 weight_semi_bold text_align_center display_flex_row align_items_center justify_content_center">
            <span className="font_13 weight_semi_bold">1</span>/4
          </div>
          <div className="font_14 weight_regular color_gray_70">
            약 이름 입력하기
          </div>
        </div>
      </div>
      <div className="display_flex_column gap_32 taking_medication_box">
        <div className="display_flex_row space_between">
          <div className="font_22 weight_semi_bold color_gray_90">
            어떤 약을<br></br>드시고 있나요?
          </div>
          <img
            src="/img/taing_medication_pill.svg"
            width="56"
            height="56"
            alt="pill"
          ></img>
        </div>
        <div class="input_date_wrapper width_100">
          <input
            type="text"
            id="input_normal"
            class="input_normal radius_8"
            placeholder="ex. 혈압약, 영양제 먹기 등 입력(최대 15글자)"
            maxLength={15}
          />
        </div>
      </div>
      <div className="display_flex_column gap_4 padding_20">
        <div className="weight_semi_bold">[참고] 영양제 복용 가이드</div>
        <div className="display_flex_row gap_4">
          <div className="padding_0_4 graph_height_30 flex_05 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            조합
          </div>
          <div className="graph_height_30 flex_1 background_gray_20 text_align_center radius_4 font_13 weight_semi_bold">
            설명
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="padding_0_4 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            감기약+혈압약
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="padding_6 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              일부 감기약(특히 코막힘 완화제)은 혈압 상승을 일으킬 수 있음.
              감기약 성분 중 '슈도에페드린'확인 필요.
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="padding_0_4 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            고지혈증(스타틴계열)+자몽주스
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="padding_6 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              자몽 성분의 약물 분해 억제로 부작용 증가.{' '}
              <span className="color_f42a43 weight_semi_bold font_13">
                절대 금지.
              </span>
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="padding_0_4 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            수면제+항우울제
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="padding_6 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              졸림, 중추신경 억제 작용 증가로 혼수상태 위험 가능.{' '}
              <span className="color_f42a43 weight_semi_bold font_13">
                의사 확인 필수.
              </span>
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="padding_0_4 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            진통제(NSAIDs)+혈압약
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="padding_6 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              진통제가 혈압약 효과를 감소시킬 수 있음
            </div>
          </div>
        </div>
        <div className="display_flex_row gap_4">
          <div className="padding_0_4 flex_05 background_gray_5 text_align_center radius_4 font_13 weight_semi_bold display_flex_column justify_content_center">
            와파린(항응고제)+비타민K
          </div>
          <div className="flex_1 display_flex_column gap_4 justify_content_between">
            <div className="padding_6 background_gray_5 color_gray_70 font_13 weight_regular text_align_center flex_1 display_flex_column justify_content_center">
              비타민K가 혈액 응고를 촉진함
            </div>
          </div>
        </div>
      </div>
      <div className="checkup_input_bottom_wrap width_100 background_gray_0">
        <div className="checkup_input_bottom display_flex_row space_between">
          {/*<button className="checkup_input_common border_gray_20 radius_8 font_15 weight_medium color_gray_90">
            이전
          </button> */}
          <button className="checkup_input_common radius_8 font_15 weight_medium color_gray_0 checkup_input_next">
            다음
          </button>
        </div>
      </div>
    </>
  );
}
