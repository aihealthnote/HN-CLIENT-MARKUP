export default function AiReport() {
  return (
    <>
      <div className="ai_report_top bg_linear_F1F5FC gap_8 display_flex_column">
        <div className="display_flex_row space_between align_items_center">
          <div className="display_flex_column gap_12">
            <div className="font_14 weight_regular color_gray_60">
              검진 데이터 기반으로
              <br />
              건강 예측을 제공하는 리포트입니다
            </div>
            <div className="font_13 weight_regular color_gray_50">
              * 리포트는 참고용으로만 활용됩니다
              <br />
              <span className="font_13 weight_semi_bold color_0CC25A">
                * 최근 건강검진 결과로 생성됩니다
              </span>
            </div>
          </div>
          <img
            src="/img/ai_report.svg"
            width="76.75"
            height="83.42"
            alt="report"
          ></img>
        </div>
      </div>
      <div className="ai_report_box display_flex_column gap_16">
        <div className="display_flex_row gap_12">
          <img src="img/report_threshold.svg" width="56" height="56"></img>
          <div className="font_19 weight_semi_bold color_gray_90">
            종합 의견은
            <br />
            <span className="font_19 weight_semi_bold color_F67700">
              관리가 필요해요
            </span>
          </div>
        </div>
        <div className="display_flex_row align_items_center padding_12_0 border_gray_20 radius_12">
          <div className="width_50 align_items_center justify_content_center display_flex_row gap_8 divider_vertical_20">
            <div className="font_14 color_gray_50">건강 나이</div>
            <span>
              <span className="color_bl font_24 weight_semi_bold">59</span>
              <span className="font_17 color_gray_70">세</span>
            </span>
          </div>
          <div className="width_50 align_items_center justify_content_center display_flex_row gap_8 ">
            <div className="font_14 color_gray_50">실제 나이</div>
            <span>
              <span className="font_24 weight_semi_bold">58</span>
              <span className="font_17 color_gray_70">세</span>
            </span>
          </div>
        </div>
        <div className="font_15 weight_regular color_gray_70 padding_16_20 background_gray_5 radius_12">
          체중과 배 둘레가 많아 비만 상태로,{' '}
          <span className="weight_semi_bold">심장이나 혈관 질환</span>의 위험이
          높아요.
          <br />
          양쪽 귀의 <span className="weight_semi_bold">청력</span>이 떨어져 일상
          대화에 불편함이 있을 수 있어요. <br />
          <span className="weight_semi_bold">혈당 수치</span>가 높아 당뇨병
          전단계일 가능성이 있고,{' '}
          <span className="weight_semi_bold">간 수치</span>도 높아 간에 무리가
          가고 있을 수 있어요.{' '}
          <span className="weight_semi_bold">신장 기능</span>이 약해져 관리가
          필요하며, <span className="weight_semi_bold">혈액 속 지방</span>도
          많아 혈관 건강에 주의가 필요해요.
        </div>
      </div>
      <div className="background_gray_5">
        <div className="checkup_result_top_wrap display_flex_column gap_12 ">
          <div className="display_flex_column background_gray_0 radius_12 gap_12 together_box">
            <div className="display_flex_row align_items_center gap_12">
              <img
                src="/img/report_together.svg"
                width="24"
                height="24"
                alt="text"
              ></img>
              <div className="font_15 weight_semi_bold color_gray_90">
                지금부터 함께 관리해봐요!
              </div>
            </div>
            <div className="font_13 weight_regular color_gray_70">
              지금 건강상태를 보면 몇 가지 신호들이 보여요. 너무 걱정하지
              마세요. 중요한 건 지금부터 천천히, 꾸준히 실천하는 거니까요!
            </div>
          </div>
        </div>
        <div className="display_flex_column gap_12 margin_bottom_50">
          <div className="padding_20 margin_0_20 background_gray_0 radius_12 display_flex_column gap_20 shadow_normal">
            <div className="display_flex_column gap_16">
              <img src="/img/report_workout.svg" width="48" height="48"></img>
              <div className="font_19 weight_semi_bold color_gray_90">
                <span className="font_19 weight_semi_bold color_0CC25A">
                  운동
                </span>
                은 이렇게 해보세요
              </div>
            </div>
            <div className="padding_20_16 background_gray_5 radius_8 font_15 weight_regular color_gray_70">
              살도 빼고 근력도 키우려면 유산소 운동이랑 근력 운동을 같이 해주는
              게 좋아요. 걷기, 조깅, 수영 같은 유산소 운동은 심장과 폐를
              튼튼하게 해주고, 스쿼트나 런지 같은 근력 운동은 근육을 유지하고
              기초대사량을 높여줘요. 주 3~5회, 하루 30분 이상을 목표로 해보세요.
              무리하지 말고, 내가 할 수 있는 만큼만! 시작이 반이에요
            </div>
          </div>
          <div className="padding_20 margin_0_20 background_gray_0 radius_12 display_flex_column gap_20 shadow_normal">
            <div className="display_flex_column gap_16">
              <img src="/img/report_meal.svg" width="48" height="48"></img>
              <div className="font_19 weight_semi_bold color_gray_90">
                <span className="font_19 weight_semi_bold color_0CC25A">
                  식사
                </span>
                는 이렇게 바꿔보면 어때요?
              </div>
            </div>
            <div className="padding_20_16 background_gray_5 radius_8 font_15 weight_regular color_gray_70">
              혈당이랑 중성지방 수치를 낮추려면, 흰쌀밥이나 빵 같은 정제된
              탄수화물, 설탕, 가공식품은 조금 줄이고, 채소, 과일, 통곡물, 저지방
              단백질 위주로 식단을 구성해보세요. 특히 기름진 음식과 음주는 간에
              부담을 주니까 가능한 피해주세요. 한 끼 한 끼가 쌓이면 분명 달라질
              거예요.
            </div>
            <div className="padding_20_16 border_gray_10 radius_12 display_flex_column gap_32">
              <div className="font_17 weight_semi_bold color_gray_90">
                권장 식단의
                <br />
                필수 영양소 비중입니다.
              </div>
              <div className="display_flex_column gap_12">
                <div className="display_flex_row gap_8 justify_content_flex_end">
                  <div className="display_flex_row align_items_center gap_4">
                    <img src="/img/report_tan.svg" width="8" height="8"></img>
                    <div className="font_12 weight_medium color_gray_70">
                      탄수화물
                    </div>
                  </div>
                  <div className="display_flex_row align_items_center gap_4">
                    <img src="/img/report_dan.svg" width="8" height="8"></img>
                    <div className="font_12 weight_medium color_gray_70">
                      단백질
                    </div>
                  </div>
                  <div className="display_flex_row align_items_center gap_4">
                    <img src="/img/report_ji.svg" width="8" height="8"></img>
                    <div className="font_12 weight_medium color_gray_70">
                      지방
                    </div>
                  </div>
                </div>
                <div className="display_flex_column gap_6">
                  <div className="display_flex_row graph_line_wrap">
                    <div className="graph_48">
                      <span className="graph_48_span color_gray_0 font_13 weight_semi_bold">
                        48.2
                      </span>
                    </div>
                    <div className="graph_27">
                      <span className="graph_27_span color_gray_0 font_13 weight_semi_bold">
                        27.5
                      </span>
                    </div>
                    <div className="graph_24">
                      <span className="graph_24_span color_gray_0 font_13 weight_semi_bold">
                        24.3
                      </span>
                    </div>
                  </div>
                  <div className="text_align_right font_12 weight_regular color_gray_50">
                    (%)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padding_20 margin_0_20 background_gray_0 radius_12 display_flex_column gap_20 shadow_normal">
            <div className="display_flex_column gap_16">
              <img src="/img/report_pill.svg" width="48" height="48"></img>
              <div className="font_19 weight_semi_bold color_gray_90">
                <span className="font_19 weight_semi_bold color_0CC25A">
                  영양제
                </span>
                는 이렇게 고려해보세요.
              </div>
            </div>
            <div className="display_flex_column gap_12">
              <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_8">
                <img src="/img/report_check.svg" width="16" height="16"></img>
                <div>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    오메가-3
                  </div>
                  <div className="font_13 weight_regular color_gray_70">
                    혈중 중성지방 낮추는 데 효과 있어요
                  </div>
                </div>
              </div>
              <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_8">
                <img src="/img/report_check.svg" width="16" height="16"></img>
                <div>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    밀크씨슬 같은 간 기능 보조제
                  </div>
                  <div className="font_13 weight_regular color_gray_70">
                    간 건강에도움
                  </div>
                </div>
              </div>
              <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_8">
                <img src="/img/report_check.svg" width="16" height="16"></img>
                <div>
                  <div className="font_15 weight_semi_bold color_gray_90">
                    비타민 D
                  </div>
                  <div className="font_13 weight_regular color_gray_70">
                    신장 기능 저하와 관련 있어요 하지만 꼭 의사와 상담 후 복용
                    여부를 결정해주세요!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padding_20 margin_0_20 background_gray_0 radius_12 display_flex_column gap_20 shadow_normal">
            <div className="display_flex_column gap_16">
              <img src="/img/report_total.svg" width="48" height="48"></img>
              <div className="font_19 weight_semi_bold color_gray_90">
                전체적인{' '}
                <span className="font_19 weight_semi_bold color_0CC25A">
                  건강 요약
                </span>
              </div>
              <div className="padding_20_16 background_gray_5 radius_8 font_15 weight_regular color_gray_70">
                <span className="weight_semi_bold">
                  지금은 몸 상태가 많이 지쳐 있는 상태예요.
                </span>{' '}
                체중 감량, 식습관 개선, 꾸준한 운동이 정말 중요해요. 특히 간이랑
                신장 기능이 많이 약해진 상태라서 정기적으로 건강검진을 받고
                의사와 상담하면서 관리하는 게 필요해요. <br /> <br />
                <span className="weight_semi_bold">
                  작은 습관 하나씩 바꾸는 것부터 시작해보세요.{' '}
                </span>
                당장은 느리더라도, 꾸준히 하면 분명히 건강한 변화가 따라올
                거예요. 당신의 몸은 당신이 제일 잘 돌볼 수 있어요. 응원할게요!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
