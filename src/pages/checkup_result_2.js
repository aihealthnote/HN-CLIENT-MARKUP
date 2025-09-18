export default function CheckupResult2() {
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
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_90">
            안과검사
          </div>
          <div className="tab_underline_on"></div>
        </div>
        <div className="text_align_center">
          <div className="tab_padding_3 font_15 weight_semi_bold color_gray_50">
            청력검사
          </div>
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
                  안과검사
                </div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  시력
                </div>
              </div>
              <img
                src="/img/checkup_result_eyesight.svg"
                width="56"
                height="56"
              ></img>
            </div>
            <div className="font_14 weight_regular color_gray_70">
              시력은 눈이 사물을 얼마나 뚜렷하게 볼 수 있는지를 나타내는
              지표입니다.
            </div>
          </div>
          <div className="display_flex_row space_between checkup_result_unit_wrap padding_20_16 radius_12 align_items_center">
            <div className="display_flex_row align_items_center width_100 gap_16 ">
              <div className="width_50">
                <div>좌측</div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  1.0
                </div>
              </div>
              <div className="divider_vertical_100"></div>
              <div className="width_50">
                <div>우측</div>
                <div className="color_gray_90 font_28 weight_semi_bold">
                  1.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider_wide"></div>
      <div className="display_flex_column gap_20 result_bottom_wrap">
        <div className="font_19 weight_semi_bold color_gray_90">
          시력의 추이
        </div>
        <div className="display_flex_column gap_32">
          <div className="display_flex_column gap_32">
            <div className="display_flex_column gap_16">
              <div className="color_gray_90 font_17 weight_medium ">
                • 좌측{' '}
              </div>
              <div className="graph"></div>
            </div>
            <div className="display_flex_row result_message_wrap padding_16 gap_8">
              <img
                src="/img/checkup_result_message.svg"
                width="20"
                height="20"
                alt="message"
              ></img>
              <div className="font_15 weight_medium color_gray_90">
                이전 검사 대비
                <span className="result_message_span weight_semi_bold">
                  {' '}
                  0.6{' '}
                </span>
                증가했습니다.
              </div>
            </div>
          </div>
          <div className="display_flex_column gap_32">
            <div className="display_flex_column gap_16">
              <div className="color_gray_90 font_17 weight_medium ">
                • 우측{' '}
              </div>
              <div className="graph"></div>
            </div>
            <div className="display_flex_row result_message_wrap padding_16 gap_8">
              <img
                src="/img/checkup_result_message.svg"
                width="20"
                height="20"
                alt="message"
              ></img>
              <div className="font_15 weight_medium color_gray_90">
                이전 검사 대비
                <span className="result_message_span weight_semi_bold">
                  {' '}
                  0.6{' '}
                </span>
                증가했습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
