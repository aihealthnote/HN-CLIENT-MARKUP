export default function HomeTipDetail2() {
  return (
    <>
      <div className="my_care_padding display_flex_row space_between align_items_center">
        <div className="font_22 weight_semi_bold">오늘의 건강 팁</div>
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
      <div className="padding_20">
        <div className="background_EAF0F5 padding_20 radius_8 display_flex_row space_between">
          <div className="font_19 weight_semi_bold">
            조용한 살인자로
            <br />
            불리는 "고혈압"
          </div>
          <img src="/img/tip1.svg" width="56" height="56"></img>
        </div>
        <div className="display_flex_row gap_8 padding_20_0">
          <div className="font_15 weight_semi_bold background_B9BBC7 padding_2_10 radius_20">
            #고혈압
          </div>
          <div className="font_15 weight_semi_bold background_B9BBC7 padding_2_10 radius_20">
            #뇌졸중
          </div>
          <div className="font_15 weight_semi_bold background_B9BBC7 padding_2_10 radius_20">
            #수면
          </div>
        </div>
        <div>
          <img
            src="/img/muscle.png"
            width="100%"
            className="img_opacity_80"
          ></img>
          <div className="padding_20_0">
            고혈압은 가장 흔한 건강 위험 신호 중 하나에요. 혈압이 오래 높게
            유지되면 혈관 벽이 손상되고, 그 결과 심근경색, 뇌졸중, 신부전 같은
            치명적인 합병증으로 이어질 수 있어요. <br />
            <br />
            하지만 증상이 뚜렷하지 않아 “조용한 살인자”라고도 불리죠. 그래서
            정기적으로 혈압을 측정해 스스로 상태를 확인하는 게 중요해요.
          </div>
          <div className="font_19 weight_semi_bold text_align_center margin_top_20">
            관리 요법은 생활 습관에서 시작돼요.
          </div>
          <div className="border_54E420 padding_20 margin_top_20">
            첫째, 식단 조절이 필수예요. 소금 섭취를 줄이고, 신선한 채소와 과일,
            저지방 단백질을 충분히 섭취하는 것이 좋아요. 가공식품과 짠 음식은
            피하는 게 안전해요. <br />
            <br />
            둘째, 체중 관리가 필요해요. 복부비만은 혈압을 올리는 주요 원인 중
            하나라서 정상 체중을 유지하는 것이 중요해요. <br />
            <br />
            셋째, 규칙적인 운동을 해야 해요. 빠르게 걷기, 자전거 타기, 가벼운
            근력 운동은 혈압을 안정시키는 데 도움이 돼요. <br />
            <br />
            넷째, 금연과 절주가 필요해요. 담배는 혈관을 수축시키고 술은 혈압을
            올리기 때문에 습관적으로 줄여야 해요.
            <br />
            <br />
            마지막으로, 충분한 수면과 스트레스 관리가 뒷받침돼야 해요.
            필요하다면 의사의 진단과 약물 치료를 병행하는 것도 필수예요.
          </div>
          <div className="padding_20_0">
            생활습관과 의료적 관리가 함께 이루어져야 고혈압을 안전하게 조절할 수
            있어요.
          </div>
        </div>
        <div className="divider"></div>
        <div className="font_19 weight_semi_bold margin_top_20 ">
          건강, 이런 정보는 어때요?
        </div>
        <div className="margin_top_8 padding_left_16 margin_bottom_50">
          · 혈당 관리 한다 vs 안한다?
          <br /> · 배달앱 대신 건강앱, 선택이 몸을 바꾼다
        </div>
        <div className="bottom_button">
          <button className="bottom_button button_primary">목록으로</button>
        </div>
      </div>
    </>
  );
}
