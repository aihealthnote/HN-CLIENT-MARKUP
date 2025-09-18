export default function LoadingMdical2() {
  return (
    <div className="checkup_result_loading_warp bg_linear_0CC25A display_flex_column align_items_center">
      <img
        src="/img/logo_horizontal.svg"
        width="150"
        className="margin_bottom_120"
      ></img>
      <div className="display_flex_column gap_56">
        <div className="display_flex_column align_items_center gap_16">
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                최근에 처방 받은 약,{' '}
              </span>
              기억나시나요?
            </div>
            <div className="font_22 weight_semi_bold msg">확인해 볼게요</div>
          </div> */}
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                의료 이용 내역을 불러오는 중
              </span>
              이에요
            </div>
            <div className="font_22 weight_semi_bold msg">
              대기표 뽑은 것처럼 느껴지시죠?
            </div>
          </div> */}
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                동일한 약물 복용 이력이{' '}
              </span>
              있는지
            </div>
            <div className="font_22 weight_semi_bold msg">확인하고 있어요</div>
          </div> */}
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                감기로 병원에 다녀오셨던 내역
              </span>
              을
            </div>
            <div className="font_22 weight_semi_bold msg">불러오고 있어요.</div>
          </div> */}
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                자주 다니시던 병원과 약국
              </span>
              을
            </div>
            <div className="font_22 weight_semi_bold msg">
              우선 조회하고 있어요
            </div>
          </div> */}
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                1년 이내에 진단명이 반복되었는지
              </span>
            </div>
            <div className="font_22 weight_semi_bold msg">살펴보고 있어요</div>
          </div> */}
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                특정 시기에 진료가 왜 많았는지
              </span>
            </div>
            <div className="font_22 weight_semi_bold msg">보고 있어요</div>
          </div> */}
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                처방 기록 정리 중...
              </span>
            </div>
            <div className="font_22 weight_semi_bold msg">
              약사 선생님도 놀라실 만큼 꼼꼼하게요.
            </div>
          </div> */}
          {/* <div className="font_22 weight_semi_bold text_align_center display_flex_column  message_container">
            <div className="font_22 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                의료 기록이 많아서
              </span>
            </div>
            <div className="font_22 weight_semi_bold msg">
              생각보다 오래 걸리네요
            </div>
          </div> */}
          <div className="font_22 weight_semi_bold text_align_center display_flex_column message_container">
            <div className="font_19 weight_semi_bold msg">
              <span className="font_22 weight_semi_bold "></span>
              <span className="font_22 weight_semi_bold checkup_loading_content">
                처방 기록은 안전하게{' '}
              </span>
              불러오고 있어요
            </div>
            <div className="font_22 weight_semi_bold msg">
              조금만 기다려주세요
            </div>
          </div>
        </div>
      </div>
      <div className="loading_bar radius_50 notice_empty_relative border_6094EB">
        <div className="graph_56 graph_absolute"></div>
        <div className="loading_bar_absolute background_6094EB radius_50"></div>
        <div className="number_around display_flex_row space_between">
          <div className="weight_semi_bold">0</div>
          <div className="weight_semi_bold">50</div>
          <div className="weight_semi_bold">100</div>
        </div>
      </div>
    </div>
  );
}
