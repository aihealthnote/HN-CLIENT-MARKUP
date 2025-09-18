export default function HomeTipDetail() {
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
        <div className="background_EAF5EB padding_20 radius_8 display_flex_row space_between">
          <div className="font_19 weight_semi_bold">
            혈당 관리
            <br />
            한다 vs 안 한다?
          </div>
          <img src="/img/tip2.svg" width="56" height="56"></img>
        </div>
        <div className="display_flex_row gap_8 padding_20_0">
          <div className="font_15 weight_semi_bold backgoround_B9C7BF padding_2_10 radius_20">
            #심근경색
          </div>
          <div className="font_15 weight_semi_bold backgoround_B9C7BF padding_2_10 radius_20">
            #인슐린
          </div>
          <div className="font_15 weight_semi_bold backgoround_B9C7BF padding_2_10 radius_20">
            #혈당
          </div>
        </div>
        <div>
          <img
            src="/img/bloodsugar_img.png"
            width="100%"
            className="img_opacity_80"
          ></img>
          <div className="padding_20_0">
            혈당은 우리 몸의 에너지원으로 꼭 필요하지만, 일정 범위를 벗어나면
            건강에 큰 위협이 돼요. 혈당이 높게 유지되면 혈관이 손상되고 신경까지
            영향을 주어 당뇨병 합병증, 심근경색, 뇌졸중, 신부전 같은 심각한
            질환으로 이어질 수 있어요. <br />
            <br />또 혈당이 자주 떨어지는 저혈당 상태는 집중력 저하, 두통,
            어지럼증뿐 아니라 심하면 의식 저하나 쇼크를 일으킬 수도 있어요.
            그래서 혈당 관리의 핵심은 균형이에요.
          </div>
          <div className="font_19 weight_semi_bold text_align_center margin_top_20">
            "<span className="font_19 weight_semi_bold color_rd">혈당</span>"을
            낮추는{' '}
            <span className="font_19 weight_semi_bold color_rd">4가지</span>{' '}
            핵심 Tip
          </div>
          <div className="border_54E420 padding_20 margin_top_20">
            첫째, 식사에서 탄수화물 섭취를 조절하고 가공식품보다는 채소, 단백질,
            통곡물을 함께 먹는 게 좋아요. <br />
            <br />
            둘째, 꾸준한 운동이 필요해요. 걷기, 자전거, 근력 운동 등은 혈당을
            낮추고 인슐린 저항성을 개선해요. <br />
            <br />
            셋째, 체중 관리가 중요해요. 복부비만은 혈당 조절을 어렵게 만들기
            때문에 정상 체중을 유지해야 해요.
            <br />
            <br />
            넷째, 정기적인 혈당 체크와 건강검진으로 변화를 확인하고, 필요하다면
            의사 처방에 따른 약물이나 인슐린 치료를 병행해야 해요.
          </div>
          <div className="padding_20_0">
            이렇게 생활습관과 의료적 관리가 함께 이루어져야 혈당을 안정적으로
            유지할 수 있어요.
          </div>
        </div>
        <div className="divider"></div>
        <div className="font_19 weight_semi_bold margin_top_20 ">
          건강, 이런 정보는 어때요?
        </div>
        <div className="margin_top_8 padding_left_16 margin_bottom_50">
          · 조용한 살인자로 불리는 "고혈압"
          <br /> · 배달앱 대신 건강앱, 선택이 몸을 바꾼다
        </div>

        <div className="bottom_button">
          <button className="bottom_button button_primary">목록으로</button>
        </div>
      </div>
    </>
  );
}
