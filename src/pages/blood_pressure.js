export default function BloodPressure() {
  return (
    <>
      <div className="top_title_wrap_2 display_flex_row space_between">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">혈압 관리</span>
        <img src="/img/more.svg" width="24px" height="24px" alt="more"></img>
      </div>
      <div className="graph">그래프 영역</div>
      <div className="padding_16 background_gray_5">
        <div className="font_13 color_gray_50">4월 22일 (토)</div>
        <ul className="background_gray_0 radius_12 shadow_normal border_gray_10 padding_20 display_flex_column gap_16">
          <li>
            <div className="display_flex_column gap_12">
              <div>
                <div className="font_14 weight_medium">수축기 혈압</div>
                <div className="display_flex_row align_items_baseline">
                  <div className="blood_pressure_unit_wrap display_flex_row gap_4">
                    <span className="font_32 weight_bold">112~138</span>
                    <span className="font_15 weight_medium color_gray_70">
                      mmHg
                    </span>
                  </div>
                  <form>
                    <button className="little_button_common little_button_warning font_13 weight_semi_bold">
                      경고
                    </button>
                  </form>
                </div>
              </div>
              <div className="graph_line">그래프 영역?</div>
            </div>
          </li>
          <li className="divider"></li>
          <li>
            <div className="display_flex_column gap_12">
              <div>
                <div className="font_14 weight_medium">이완기 혈압</div>
                <div className="display_flex_row align_items_center gap_4">
                  <span className="font_32 weight_bold">81~101</span>
                  <span className="font_15 weight_medium color_gray_70">
                    mmHg
                  </span>
                  <form>
                    <button className="little_button_common little_button_normal font_13 weight_semi_bold">
                      정상
                    </button>
                  </form>
                </div>
              </div>
              <div className="graph_line">그래프 영역?</div>
            </div>
          </li>
        </ul>
      </div>
      <ul className="blood_pressure_list_wrap background_gray_0">
        <li className="blood_pressure_list display_flex_row space_between align_items_center">
          <div className="display_flex_row gap_12">
            <img
              src="/img/blood_pressure_list_img.svg"
              width="40"
              height="40"
              alt="blood pressure"
            ></img>
            <div className="display_flex_column">
              <div className="display_flex_row gap_8">
                <div className="display_flex_row align_items_baseline">
                  <div>
                    <span className="font_17 weight_semi_bold">138</span>
                    <span className="font_17 weight_semi_bold">/</span>
                    <span className="font_17 weight_semi_bold">101</span>
                  </div>
                  <div className="font_14 weight_medium color_gray_70">
                    mmHg
                  </div>
                </div>
                <div className="divider_vertical"></div>
                <div className="display_flex_row align_items_center">
                  <img
                    src="/img/biceps.svg"
                    width="16"
                    height="16"
                    alr="heart"
                  ></img>
                  <div className="display_flex_row ">
                    <span className="font_13">68</span>
                    <div className="font_13">bpm</div>
                  </div>
                </div>
              </div>
              <div className="font_12 color_gray_50">오후 02:14</div>
            </div>
          </div>
        </li>
        <li className="divider"></li>
        <li className="blood_pressure_list display_flex_row space_between align_items_center">
          <div className="display_flex_row gap_12">
            <img
              src="/img/blood_pressure_list_img.svg"
              width="40"
              height="40"
              alt="blood pressure"
            ></img>
            <div className="display_flex_column">
              <div className="display_flex_row gap_8">
                <div className="display_flex_row align_items_baseline">
                  <div>
                    <span className="font_17 weight_semi_bold">120</span>
                    <span className="font_17 weight_semi_bold">/</span>
                    <span className="font_17 weight_semi_bold">85</span>
                  </div>
                  <div className="font_14 weight_medium color_gray_70">
                    mmHg
                  </div>
                </div>
              </div>
              <div className="font_12 color_gray_50">오후 02:14</div>
            </div>
          </div>
          <form>
            <button>
              <img
                src="/img/list_memo.svg"
                width="24"
                height="24"
                alt="memo"
              ></img>
            </button>
          </form>
        </li>
        <li className="divider"></li>
        <li className="blood_pressure_list display_flex_row space_between align_items_center">
          <div className="display_flex_row gap_12">
            <img
              src="/img/blood_pressure_list_img.svg"
              width="40"
              height="40"
              alt="blood pressure"
            ></img>
            <div className="display_flex_column">
              <div className="display_flex_row gap_8">
                <div className="display_flex_row align_items_baseline">
                  <div>
                    <span className="font_17 weight_semi_bold">135</span>
                    <span className="font_17 weight_semi_bold">/</span>
                    <span className="font_17 weight_semi_bold">87</span>
                  </div>
                  <div className="font_14 weight_medium color_gray_70">
                    mmHg
                  </div>
                </div>
              </div>
              <div className="font_12 color_gray_50">오후 02:14</div>
            </div>
          </div>
        </li>
        <li className="divider"></li>
        <li className="blood_pressure_list display_flex_row space_between align_items_center">
          <div className="display_flex_row gap_12">
            <img
              src="/img/blood_pressure_list_img.svg"
              width="40"
              height="40"
              alt="blood pressure"
            ></img>
            <div className="display_flex_column">
              <div className="display_flex_row gap_8">
                <div className="display_flex_row align_items_baseline">
                  <div>
                    <span className="font_17 weight_semi_bold">112</span>
                    <span className="font_17 weight_semi_bold">/</span>
                    <span className="font_17 weight_semi_bold">81</span>
                  </div>
                  <div className="font_14 weight_medium color_gray_70">
                    mmHg
                  </div>
                </div>
              </div>
              <div className="font_12 color_gray_50">오후 02:14</div>
            </div>
          </div>
        </li>
        <li className="divider"></li>
      </ul>
      <form>
        <div className="bottom_button_wrap">
          <button className="bottom_button button_primary">
            혈압 입력하기
          </button>
        </div>
      </form>
    </>
  );
}
