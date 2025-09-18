export default function HomeTipDetail3() {
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
        <div className="background_FAE7E7 padding_20 radius_8 display_flex_row space_between">
          <div className="font_19 weight_semi_bold">
            배달앱 대신 건강앱,
            <br />
            선택이 몸을 바꾼다
          </div>
          <img src="/img/tip3.svg" width="56" height="56"></img>
        </div>
        <div className="display_flex_row gap_8 padding_20_0">
          <div className="font_15 weight_semi_bold background_C5B9C7 padding_2_10 radius_20">
            #다이어트
          </div>
          <div className="font_15 weight_semi_bold background_C5B9C7 padding_2_10 radius_20">
            #체중관리
          </div>
          <div className="font_15 weight_semi_bold background_C5B9C7 padding_2_10 radius_20">
            #생활습관
          </div>
        </div>
        <div>
          <img
            src="/img/diet.png"
            width="100%"
            className="img_opacity_80"
          ></img>
          <div className="padding_20_0">
            다이어트는 단순히 살을 빼는 일이 아니라, 생활 습관을 바꿔 건강을
            되찾는 과정이에요. 매일의 작은 선택이 쌓여 결국 몸을 만들고, 잘못된
            습관이 이어지면 질환으로 이어질 수 있어요. 그래서 다이어트는 ‘체중
            감량’이 아니라 ‘삶의 관리’라는 관점에서 접근해야 해요. <br />
            <br />
            특히 배달 음식과 가공식품에 의존하는 현대인일수록 더더욱 균형 잡힌
            습관이 필요해요. 체중계 숫자가 아니라, 몸이 가벼워지고 생활이
            활기차지는 변화를 경험할 때 진짜 다이어트가 성공하는 거예요.
          </div>
          <div className="font_19 weight_semi_bold text_align_center margin_top_20">
            건강한 다이어트를 위한 네 가지 선택
          </div>
          <div className="border_54E420 padding_20 margin_top_20">
            첫째, 정해진 시간에 식사해 몸의 리듬을 지켜보세요. 규칙적인 패턴은
            폭식을 막고 대사를 안정시켜요.
            <br />
            <br />
            둘째, 물을 자주 마셔보세요. 수분은 포만감을 주고, 음료 대신 물을
            선택하는 습관이 체중 관리에 큰 도움이 돼요.
            <br />
            <br />
            셋째, 규칙적인 운동을 해야 해요. 빠르게 걷기, 자전거 타기, 가벼운
            근력 운동은 혈압을 안정시키는 데 도움이 돼요. <br />
            <br />
            셋째, 일상 속에서 움직임을 늘리세요. 엘리베이터 대신 계단을 오르거나
            조금 더 걸어 다니는 것만으로도 효과가 있어요.
            <br />
            <br />
            넷째, 단기 성과보다 꾸준한 습관 개선을 목표로 하세요. 장기적으로
            건강한 체중을 유지하는 가장 확실한 방법이에요.
          </div>
          <div className="padding_20_0">
            마지막으로, 다이어트는 ‘빼는 것’이 아니라 ‘지키는 것’이라는
            마음가짐이 성공의 열쇠예요.
          </div>
        </div>
        <div className="divider"></div>
        <div className="font_19 weight_semi_bold margin_top_20 ">
          건강, 이런 정보는 어때요?
        </div>
        <div className="margin_top_8 padding_left_16 margin_bottom_50">
          · 조용한 살인자로 불리는 “고혈압"
          <br /> · 혈당 관리 한다 vs 안한다?
        </div>
        <div className="bottom_button">
          <button className="bottom_button button_primary">목록으로</button>
        </div>
      </div>
    </>
  );
}
