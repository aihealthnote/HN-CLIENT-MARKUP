export default function UsageRecords() {
  return (
    <>
      <div className="my_care_padding display_flex_row space_between align_items_center">
        <div className="font_22 weight_semi_bold">내 진료</div>
        <div className="display_flex_row gap_20">
          <img src="/img/top_ai.svg" width="24" height="24" alt="ai"></img>
          <img
            src="/img/top_alarm.svg"
            width="24"
            height="24"
            alt="alarm"
          ></img>
        </div>
      </div>
      <div className="display_flex_row">
        <div className="text_align_center tab_width">
          <div className="tab_padding font_15 color_gray_50">건강검진</div>
          <div className="tab_underline_off"></div>
        </div>
        <div className="text_align_center tab_width">
          <div className="tab_padding font_15 weight_semi_bold">
            병원/약국 이용 기록
          </div>
          <div className="tab_underline_on"></div>
        </div>
      </div>
      <div className="usage_records_wrap display_flex_column gap_16">
        <div className="display_flex_column gap_12">
          <div className="font_14 weight_medium color_gray_80">
            최근 업데이트 : 2024.06.15
          </div>
          <button className="display_flex_row gap_6 align_items_center">
            <img
              src="/img/report_update_wh.svg"
              alt="report_update"
              width="26"
              className="background_0CC25A padding_4 radius_50"
            ></img>
            <span className="color_0CC25A weight_semi_bold">
              병원/약국 정보 업데이트 하기
            </span>
          </button>
        </div>
        <ul className="display_flex_column gap_8">
          <li className="display_flex_column usage_records_list radius_12 shadow_normal">
            <div className="usage_little_button outpatient_wrap radius_6 display_flex_row">
              <img
                src="/img/outpatient.svg"
                width="16"
                height="16"
                alt="outpatient"
              ></img>
              <div className="font_13 weight_semi_bold outpatient">
                일반 외래
              </div>
            </div>
            <div className="font_17 weight_semi_bold color_gray_90">
              연세 가정의학과 의원
            </div>
            <div className="display_flex_row gap_8">
              <div className="font_13 color_gray_50">방문일자</div>
              <div className="font_13 color_gray_70">2024-04-24</div>
            </div>
          </li>
        </ul>
        <ul className="display_flex_column gap_8">
          <li className="display_flex_column usage_records_list radius_12 shadow_normal">
            <div className="usage_little_button prescription_wrap radius_6 display_flex_row">
              <img
                src="/img/prescription.svg"
                width="16"
                height="16"
                alt="prescription"
              ></img>
              <div className="font_13 weight_semi_bold prescription">
                처방조제
              </div>
            </div>
            <div className="display_flex_row space_between">
              <div className="font_17 weight_semi_bold color_gray_90">
                빅 스마일 약국
              </div>
              <form>
                <button>
                  <img
                    src="/img/arrow_up_bk.svg"
                    width="24"
                    height="24"
                    alt="arrow-down"
                  ></img>
                </button>
              </form>
            </div>
            <div className="display_flex_row gap_8">
              <div className="font_13 color_gray_50">방문일자</div>
              <div className="font_13 color_gray_70">2024-04-10</div>
            </div>
            <div className="divider"></div>
            <div className="display_flex_row space_between">
              <div className="display_flex_row align_items_center gap_4">
                <img
                  src="/img/prescription_2.svg"
                  width="20"
                  height="20"
                  alt="prescription"
                ></img>
                <div className="font_15 weight_semi_bold">처방전</div>
              </div>
              <form>
                <button className="pill_add_button display_flex_row align_items_center gap_2 radius_20">
                  <img
                    src="/img/add_bk.svg"
                    width="16"
                    height="16"
                    alt="add"
                  ></img>
                  <div className="font_12 weight_medium">복약 등록</div>
                </button>
              </form>
            </div>
            <ul className="display_flex_column gap_8">
              <li className="pill_list display_flex_row space_between align_items_center background_gray_5 radius_12">
                <div className="display_flex_row align_items_center gap_12">
                  <img src="/img/pill_img.svg" width="40" height="40"></img>
                  <div className="display_flex_column gap_2">
                    <div className="font_15 weight_medium pill_list_title">
                      아세롱 CR정
                    </div>
                    <div className="display_flex_row gap_4">
                      <span className="color_gray_50 font_13">투약일수</span>
                      <span className="color_gray_70 font_13">3일치</span>
                    </div>
                  </div>
                </div>
                <form>
                  <button className="color_gray_70 font_12 background_gray_0 pill_button radius_8">
                    상세보기
                  </button>
                </form>
              </li>
              <li className="pill_list display_flex_row space_between align_items_center background_gray_5 radius_12">
                <div className="display_flex_row align_items_center gap_12">
                  <img src="/img/pill_img.svg" width="40" height="40"></img>
                  <div className="display_flex_column gap_2">
                    <div className="font_15 weight_medium pill_list_title">
                      아세롱 CR정 아니스펠 9시간이알서방정 아니스펜그외등등등
                    </div>
                    <div className="display_flex_row gap_4">
                      <span className="color_gray_50 font_13">투약일수</span>
                      <span className="color_gray_70 font_13">3일치</span>
                    </div>
                  </div>
                </div>
                <form>
                  <button className="color_gray_70 font_12 background_gray_0 pill_button radius_8">
                    상세보기
                  </button>
                </form>
              </li>
              <li className="pill_list display_flex_row space_between align_items_center background_gray_5 radius_12">
                <div className="display_flex_row align_items_center gap_12">
                  <img src="/img/pill_img.svg" width="40" height="40"></img>
                  <div className="display_flex_column gap_2">
                    <div className="font_15 weight_medium pill_list_title">
                      아세롱 CR정
                    </div>
                    <div className="display_flex_row gap_4">
                      <span className="color_gray_50 font_13">투약일수</span>
                      <span className="color_gray_70 font_13">3일치</span>
                    </div>
                  </div>
                </div>
                <form>
                  <button className="color_gray_70 font_12 background_gray_0 pill_button radius_8">
                    상세보기
                  </button>
                </form>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="display_flex_column gap_8">
          <li className="display_flex_column usage_records_list radius_12 shadow_normal">
            <div className="usage_little_button prescription_wrap radius_6 display_flex_row">
              <img
                src="/img/prescription.svg"
                width="16"
                height="16"
                alt="prescription"
              ></img>
              <div className="font_13 weight_semi_bold prescription">
                처방조제
              </div>
            </div>
            <div className="font_17 weight_semi_bold color_gray_90 display_flex_row space_between">
              <div className="font_17 weight_semi_bold color_gray_90">
                빅 스마일 약국
              </div>
              <form>
                <button>
                  <img
                    src="/img/arrow_down_bk.svg"
                    width="24"
                    height="24"
                    alt="arrow-down"
                  ></img>
                </button>
              </form>
            </div>
            <div className="display_flex_row gap_8">
              <div className="font_13 color_gray_50">방문일자</div>
              <div className="font_13 color_gray_70">2024-03-10</div>
            </div>
          </li>
        </ul>
        <ul className="display_flex_column gap_8">
          <li className="display_flex_column usage_records_list radius_12 shadow_normal">
            <div className="usage_little_button outpatient_wrap radius_6 display_flex_row">
              <img
                src="/img/outpatient.svg"
                width="16"
                height="16"
                alt="outpatient"
              ></img>
              <div className="font_13 weight_semi_bold outpatient">
                일반 외래
              </div>
            </div>
            <div className="font_17 weight_semi_bold color_gray_90">
              연세 가정의학과 의원
            </div>
            <div className="display_flex_row gap_8">
              <div className="font_13 color_gray_50">방문일자</div>
              <div className="font_13 color_gray_70">2024-04-24</div>
            </div>
          </li>
        </ul>
        <div className="display_flex_row gap_4 background_gray_0 border_gray_20 radius_4 align_items_center justify_content_center height_40">
          <div>병원/약국 이용기록 더보기</div>
          <img src="/img/arrow_down_gray.svg" width="24" height="24"></img>
        </div>
      </div>
    </>
  );
}
