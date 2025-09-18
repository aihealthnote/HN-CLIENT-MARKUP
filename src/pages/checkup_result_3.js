export default function CheckupResult3() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">건강검진 결과</span>
      </div>
      <div className="display_flex_row prediction_tab_wrap">
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            계측검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            안과검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            청력검사
          </div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            혈압/심전도검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            혈중지질검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            빈혈 및 혈액학적검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            간담도계 및 간염검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            당뇨질환 및 췌장기능검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            신장기능검사
          </div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            영상검사
          </div>
        </div>
      </div>
      <div className="checkup_result_top_wrap display_flex_column gap_32">
        <div className="display_flex_column gap_24_">
          <div className="display_flex_column gap_24_">
            <div className="display_flex_row space_between">
              <div className="display_flex_column">
                <div className="color_gray_50 font_13 weight_midium">
                  청력검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  청력
                </div>
              </div>
              <img
                src="/img/checkup_result_hearing.svg"
                width="56"
                height="56"
              ></img>
            </div>
            <div className="font_14 weight_regular color_gray_70">
              청력에 대한 텍스트 내용
            </div>
          </div>
          <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
            <div className="display_flex_row align_items_center width_100 gap_16 ">
              <div className="width_50">
                <div>좌측</div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  정상
                </div>
              </div>
              <div className="divider_vertical_64"></div>
              <div className="width_50">
                <div>우측</div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  정상
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider_wide"></div>
      <div className="display_flex_column gap_20 result_bottom_wrap">
        <div className="font_19 weight_semi_bold color_gray_90">
          청력의 추이
        </div>
        <div className="display_flex_column gap_32">
          <div className="display_flex_column gap_32">
            <div className="display_flex_column gap_16">
              <div className="color_gray_90 font_17 weight_medium ">• 좌측</div>
              <div className="checkup_result_unit_wrap checkup_result_unit_wrap_hearing radius_12 align_items_center display_flex_row justify_content_center">
                <ul className="display_flex_row gap_8 hearing_box">
                  <li className="display_flex_row">
                    <div className="hearing_imoji_warp display_flex_column align_items_center">
                      <img
                        src="/img/hearing_normal.svg"
                        width="32"
                        height="32"
                        alt="normal"
                      ></img>
                      <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                        정상
                      </div>
                      <div className="font_13 weight_medium color_gray_70">
                        2014
                      </div>
                    </div>
                  </li>
                  <li className="arrow_polygon_wrap">
                    <img
                      src="/img/arrow_right_polygon.svg"
                      width="7.22"
                      height="6.54"
                    ></img>
                  </li>
                  <li className="display_flex_row">
                    <div className="hearing_imoji_warp display_flex_column align_items_center">
                      <img
                        src="/img/hearing_normal.svg"
                        width="32"
                        height="32"
                        alt="normal"
                      ></img>
                      <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                        정상
                      </div>
                      <div className="font_13 weight_medium color_gray_70">
                        2016
                      </div>
                    </div>
                  </li>
                  <li className="arrow_polygon_wrap">
                    <img
                      src="/img/arrow_right_polygon.svg"
                      width="7.22"
                      height="6.54"
                    ></img>
                  </li>
                  <li className="display_flex_row">
                    <div className="hearing_imoji_warp display_flex_column align_items_center">
                      <img
                        src="/img/hearing_error.svg"
                        width="32"
                        height="32"
                        alt="normal"
                      ></img>
                      <div className="hearing_imoji_common hearing_imoji_error text_align_center font_12 weight_medium radius_12">
                        이상
                      </div>
                      <div className="font_13 weight_medium color_gray_70">
                        2018
                      </div>
                    </div>
                  </li>
                  <li className="arrow_polygon_wrap">
                    <img
                      src="/img/arrow_right_polygon.svg"
                      width="7.22"
                      height="6.54"
                    ></img>
                  </li>
                  <li className="display_flex_row">
                    <div className="hearing_imoji_warp display_flex_column align_items_center">
                      <img
                        src="/img/hearing_normal.svg"
                        width="32"
                        height="32"
                        alt="normal"
                      ></img>
                      <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                        정상
                      </div>
                      <div className="font_13 weight_medium color_gray_70">
                        2023
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="display_flex_column gap_32">
            <div className="display_flex_column gap_16">
              <div className="color_gray_90 font_17 weight_medium ">• 우측</div>
              <div className="checkup_result_unit_wrap checkup_result_unit_wrap_hearing radius_12 align_items_center display_flex_row justify_content_center">
                <ul className="display_flex_row gap_8 hearing_box">
                  <li className="display_flex_row">
                    <div className="hearing_imoji_warp display_flex_column align_items_center">
                      <img
                        src="/img/hearing_normal.svg"
                        width="32"
                        height="32"
                        alt="normal"
                      ></img>
                      <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                        정상
                      </div>
                      <div className="font_13 weight_medium color_gray_70">
                        2014
                      </div>
                    </div>
                  </li>
                  <li className="arrow_polygon_wrap">
                    <img
                      src="/img/arrow_right_polygon.svg"
                      width="7.22"
                      height="6.54"
                    ></img>
                  </li>
                  <li className="display_flex_row">
                    <div className="hearing_imoji_warp display_flex_column align_items_center">
                      <img
                        src="/img/hearing_error.svg"
                        width="32"
                        height="32"
                        alt="normal"
                      ></img>
                      <div className="hearing_imoji_common hearing_imoji_error text_align_center font_12 weight_medium radius_12">
                        이상
                      </div>
                      <div className="font_13 weight_medium color_gray_70">
                        2016
                      </div>
                    </div>
                  </li>

                  <li className="arrow_polygon_wrap">
                    <img
                      src="/img/arrow_right_polygon.svg"
                      width="7.22"
                      height="6.54"
                    ></img>
                  </li>
                  <li className="display_flex_row">
                    <div className="hearing_imoji_warp display_flex_column align_items_center">
                      <img
                        src="/img/hearing_normal.svg"
                        width="32"
                        height="32"
                        alt="normal"
                      ></img>
                      <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                        정상
                      </div>
                      <div className="font_13 weight_medium color_gray_70">
                        2018
                      </div>
                    </div>
                  </li>
                  <li className="arrow_polygon_wrap">
                    <img
                      src="/img/arrow_right_polygon.svg"
                      width="7.22"
                      height="6.54"
                    ></img>
                  </li>
                  <li className="display_flex_row">
                    <div className="hearing_imoji_warp display_flex_column align_items_center">
                      <img
                        src="/img/hearing_normal.svg"
                        width="32"
                        height="32"
                        alt="normal"
                      ></img>
                      <div className="hearing_imoji_common hearing_imoji_normal text_align_center font_12 weight_medium radius_12">
                        정상
                      </div>
                      <div className="font_13 weight_medium color_gray_70">
                        2023
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
