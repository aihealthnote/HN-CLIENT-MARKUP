export default function TakingMedicationInput2() {
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
      <div className="display_flex_column taking_medication_indicator shadow_normal">
        <div className="display_flex_column gap_8 ">
          <div className="profress_indicator_warp2 display_flex_row gap_4">
            <div className="progress_indicator_wrap_on_bl radius_12"></div>
            <div className="progress_indicator_wrap_on_bl radius_12"></div>
            <div className="progress_indicator_wrap_bg background_gray_10 radius_12"></div>
            <div className="progress_indicator_wrap_bg background_gray_10 radius_12"></div>
          </div>
          <div className="display_flex_row gap_6 align_items_center">
            <div className="pregress_indicator_number_wrap font_13 weight_semi_bold text_align_center display_flex_row align_items_center justify_content_center">
              <span className="font_13 weight_semi_bold">2</span>/4
            </div>
            <div className="font_14 weight_regular color_gray_70">
              복용약 검색하기
            </div>
          </div>
        </div>
        <div className="padding_12_0">
          <div className="display_flex_column gap_12">
            <div class="input_date_wrapper width_100">
              <input
                type="text"
                id="input_left"
                class="input_left radius_8 width_100"
                placeholder="드시는 약/영양제 검색"
              />
              <img
                src="/img/search_bk.svg"
                width="24"
                height="24"
                className="input_search"
              ></img>
              <img
                src="/img/close_circle_gray.svg"
                width="20"
                height="20"
                className="input_unit"
              ></img>
            </div>
          </div>
        </div>
        <div className="taking_medication_chip_wrap display_flex_row gap_6 padding_12_0">
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">타이레놀</div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              에페린플러스정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">타이레놀</div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              에페린플러스정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
          <div className="display_flex_row gap_6 align_items_center background_gray_10 radius_4 padding_6">
            <div className="font_12 weight_regular color_gray_90">
              경동아스피린장용정
            </div>
            <img src="/img/close_gray.svg" width="12" height="12"></img>
          </div>
        </div>
      </div>
      <div className="background_gray_0 radius_12 padding_20">
        <div className="health_care_question display_flex_column text_align_center  gap_20 align_items_center">
          <img
            src="/img/health_care_question.svg"
            width="40"
            height="40"
            alt="question"
          ></img>
          <div className="display_flex_column gap_8">
            <div className="font_14 weight_medium color_gray_70">
              검색 결과가 없어요
            </div>
            <div className="font_13 weight_regular color_gray_50">
              입력한 단어를 확인해주세요
            </div>
          </div>
        </div>
      </div>
      <div className="taking_medication_list_wrap gap_2">
        <div className="taking_medication_list display_flex_row space_between align_items_center padding_16_0">
          <div className="display_flex_row gap_8 align_items_center">
            <img
              src="/img/taking_medication_list.svg"
              width="24"
              height="24"
            ></img>
            <div className="text_block_container">
              <div className="font_13 weight_regular color_gray_70">
                영진약품(주)
              </div>
              <div className="font_15 weight_medium color_gray_90 ellipsis">
                아세롱CR정
              </div>
            </div>
          </div>
          <img src="/img/check_circle_gray.svg" width="24" height="24"></img>
        </div>
        <div className="taking_medication_list display_flex_row space_between align_items_center padding_16_0">
          <div className="display_flex_row gap_8 align_items_center">
            <img
              src="/img/taking_medication_list.svg"
              width="24"
              height="24"
            ></img>
            <div className="text_block_container">
              <div className="font_13 weight_regular color_gray_70">
                영진약품(주)
              </div>
              <div className="font_15 weight_medium color_gray_90 ellipsis">
                아세롱CR정 아스펜8시간이알서방정
              </div>
            </div>
          </div>
          <img src="/img/check_circle_gr.svg" width="24" height="24"></img>
        </div>
        <div className="taking_medication_list display_flex_row space_between align_items_center padding_16_0">
          <div className="display_flex_row gap_8 align_items_center">
            <img
              src="/img/taking_medication_list.svg"
              width="24"
              height="24"
            ></img>
            <div className="text_block_container">
              <div className="font_13 weight_regular color_gray_70">
                영진약품(주)
              </div>
              <div className="font_15 weight_medium color_gray_90 ellipsis">
                아세롱CR정
              </div>
            </div>
          </div>
          <img src="/img/check_circle_gray.svg" width="24" height="24"></img>
        </div>
        <div className="taking_medication_list display_flex_row space_between align_items_center padding_16_0">
          <div className="display_flex_row gap_8 align_items_center">
            <img
              src="/img/taking_medication_list.svg"
              width="24"
              height="24"
            ></img>
            <div className="text_block_container">
              <div className="font_13 weight_regular color_gray_70">
                영진약품(주)
              </div>
              <div className="font_15 weight_medium color_gray_90 ellipsis">
                아세롱CR정 아스펜8시간이알서방정
              </div>
            </div>
          </div>
          <img src="/img/check_circle_gr.svg" width="24" height="24"></img>
        </div>
        <ul className="list_style_type padding_12_20">
          <li className="font_12 weight_regular color_gray_60">
            참고용 정보입니다. 최종 복용 지시는 처방전·약국 라벨을 따르세요.
          </li>
          <li className="font_12 weight_regular color_gray_60">
            동일 성분/함량/제형인지 항상 확인하세요. 상호작용·금기 정보는
            완전하지 않을 수 있습니다.
          </li>
          <li className="font_12 weight_regular color_gray_60">
            출처 : 의약품안전나라, 식품의약품안전처 참고. 최신 정보는
            처방전·첨부문서·전문가 상담으로 확인하세요.
          </li>
          <li className="font_12 weight_regular color_gray_60">
            링크 :{' '}
            <a
              href="https://nedrug.mfds.go.kr/index"
              target="_blank"
              rel="noopener noreferrer"
              className="link_text font_13 weight_regular color_gray_50 text_underline"
            >
              의약품 안전나라 /
            </a>
            <a
              href="https://www.pharm.or.kr/search/drugidfy/search.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="link_text font_13 weight_regular color_gray_50 text_underline"
            >
              {' '}
              식품의약품안전처
            </a>
          </li>
        </ul>
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
