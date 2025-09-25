export default function AiRecommendView() {
  return (
    <>
      <div className="my_care_padding display_flex_row space_between align_items_center">
        <div className="font_22 weight_semi_bold">AI 추천 식단·운동</div>
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
      <div className="display_flex_row align_items_center radius_12 margin_20">
        <div className="font_15 weight_regular color_gray_70 padding_16_20 background_gray_5 radius_12">
          내 건강상태는 적당한 체중과 혈압, 혈액 지표도 안정적인 편이에요.
          콜레스테롤 수치가 조금 높아서 지방과 나트륨 섭취를 조절하는 게 좋아요.
          <br /> <br />주 3~4회 정도 가볍게 걷거나 스트레칭으로 활동량을
          유지하면 좋아요. 선호 음식은 짜거나 기름진 음식이 있는데, 대체품으로
          건강하게 즐 길 수 있도록 추천해드릴게요.
        </div>
      </div>
      <div className="margin_20 margin_top_20 position_relative">
        <button className="display_flex_row gap_6 align_items_center">
          <img
            src="/img/report_update_wh.svg"
            alt="report_update"
            width="26"
            className="background_0CC25A padding_4 radius_50"
          ></img>
          <span className="color_0CC25A weight_semi_bold">
            새로운 추천 식단·운동 만들기
          </span>
        </button>
        <div className="position_relative absolute_ballon">
          <div className="ballon_wrap">
            <div className="ballon_3 padding_8_12 radius_8 display_flex_row space_between align_items_center">
              <div className="font_12 weight_medium color_FFF200">
                내일 다시 추천 정보를 만들 수 있어요
              </div>
              <img src="/img/close_gr2.svg" width="16" height="16"></img>
            </div>
            <div className="ballon_triangle3"></div>
          </div>
        </div>
      </div>

      <div className="background_gray_5 padding_20_0 margin_bottom_50">
        <div className="padding_20 margin_0_20 background_gray_0 radius_12 margin_bottom_50 display_flex_column gap_20 shadow_normal">
          <div className="display_flex_column gap_16">
            <img src="/img/recommend_hand.svg" width="48" height="48"></img>
            <div className="font_19 weight_semi_bold color_gray_90">
              오늘은&nbsp;
              <span className="font_19 weight_semi_bold color_0CC25A">
                실천
              </span>
              해보세요
            </div>
          </div>
          <div className="display_flex_column gap_16">
            <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_12">
              <img src="/img/recommend_workout.svg" width="40"></img>
              <div className="display_flex_column">
                <div className="font_15 weight_semi_bold color_gray_90">
                  퇴근 후 걷기 + 스트레칭 = 30분!
                </div>
                <div className="color_gray_70">가까운 공원 or 집 주변</div>
              </div>
            </div>
            <div className="display_flex_column">
              <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_12">
                <img src="/img/meal_breakfast.svg" width="40"></img>
                <div className="display_flex_column">
                  <div className="font_15 weight_semi_bold color_gray_90">
                    아침 : 귀리죽
                  </div>
                  <div className="color_gray_70">1인분 / 100kcal</div>
                </div>
              </div>
              <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_12">
                <img src="/img/meal_lunch.svg" width="40"></img>
                <div className="display_flex_column">
                  <div className="font_15 weight_semi_bold color_gray_90">
                    점심 : 현미죽
                  </div>
                  <div className="color_gray_70">1인분 / 100kcal</div>
                </div>
              </div>
              <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_12">
                <img src="/img/meal_dessert.svg" width="40"></img>
                <div className="display_flex_column">
                  <div className="font_15 weight_semi_bold color_gray_90">
                    간식 : 아몬드 10알
                  </div>
                  <div className="color_gray_70">1인분 / 100kcal</div>
                </div>
              </div>
              <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_12">
                <img src="/img/meal_dinner.svg" width="40"></img>
                <div className="display_flex_column">
                  <div className="font_15 weight_semi_bold color_gray_90">
                    저녁 : 닭가슴살
                  </div>
                  <div className="color_gray_70">1인분 / 100kcal</div>
                </div>
              </div>
            </div>
            <div className="padding_20_16 background_gray_5 radius_8 display_flex_row gap_12">
              <img src="/img/recommend_meal.svg" width="40"></img>
              <div className="display_flex_column">
                <div className="color_gray_70">이렇게 바꿔보는 건 어때요?</div>
                <div className="font_15 weight_semi_bold color_gray_90">
                  김치찌개 → 저염 된장찌개
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="margin_20">
          <button className="bottom_button button_primary">
            추천 식단 저장하기
          </button>
        </div>
        <ul className="list_style_type padding_12_20">
          <li className="color_gray_50 font_13 weight_regular">
            이 식단 추천은 참고용이며 개인의 질환·약물·알레르기·영양 요구량을
            완전히 반영하지 않을 수 있습니다. 운동 강도·빈도 제안은 일반
            정보입니다. 심혈관 질환, 고혈압/저혈압, 당뇨, 근골격계 통증,
            임신/산후 등은 전문가 상담 후 시작하세요.
          </li>
          <li className="color_gray_50 font_13 weight_regular">
            식단 출처: 식품안전나라 영양성분DB, 2020 한국인 영양소 섭취기준,
            KDCA 영양표시 <br />
            운동 출처: KDCA
          </li>
          <li className="color_gray_50 font_13 weight_regular">
            신체활동 가이드 링크 :{' '}
            <a
              href="https://various.foodsafetykorea.go.kr/nutrient/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              color_gray_50
              font_13
              weight_regular
              text_underline"
            >
              식품안전나라 영양성분
            </a>{' '}
            |{' '}
            <a
              href="https://www.mohw.go.kr/board.es?act=view&bid=0019&list_no=362385&mid=a10411010200"
              target="_blank"
              rel="noopener noreferrer"
              className="
              color_gray_50
              font_13
              weight_regular
              text_underline"
            >
              2020 한국인 영양소 섭취 기준
            </a>{' '}
            |{' '}
            <a
              href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5346"
              target="_blank"
              rel="noopener noreferrer"
              className="
              color_gray_50
              font_13
              weight_regular
              text_underline"
            >
              KDCA 영양표시
            </a>{' '}
            |{' '}
            <a
              href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6251"
              target="_blank"
              rel="noopener noreferrer"
              className="
              color_gray_50
              font_13
              weight_regular
              text_underline"
            >
              KDCA 신체활동 가이드
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
