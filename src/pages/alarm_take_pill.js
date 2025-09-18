export default function AlarmTakePill() {
  return (
    <>
      <div className="top_title_wrap_2 display_flex_row space_between">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">알림함</span>
        <img
          src="/img/alarm_setting.svg"
          width="24px"
          height="24px"
          alt="setting"
        ></img>
      </div>
      <div className="display_flex_row padding_0_20 border_bottom_gray_20">
        <div className="text_align_center alarm_tab">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_50 red_dot_wrap">
            서비스 알림 <div className="red_dot_2"></div>
          </div>
        </div>
        <div className="text_align_center alarm_tab">
          <div className="tab_padding_2 font_15 weight_semi_bold color_gray_90 red_dot_wrap">
            복약 알림 <div className="red_dot_2"></div>
          </div>
          <div className="tab_underline_on"></div>
        </div>
      </div>
      <div className="font_13 weight_regular color_gray_70 background_gray_5 height_36 display_flex_row align_items_center justify_content_center">
        서비스 알림은 최근
        <span className="font_13 weight_regular color_226DE7">30일</span>
        까지만 확인 가능해요!
      </div>
      <div className="alarm_service display_flex_row space_between">
        <div className="font_14 weight_semi_bold color_gray_70">알림 내역</div>
        <div className="font_14 weight_regular color_gray_70">모두 읽음</div>
      </div>
      <div className="padding_16_20 background_F1F5FF display_flex_row gap_8 width_100">
        <img
          src="/img/alarm_take_pill.svg"
          width="24"
          height="24"
          alt="take pill"
        />
        <div className="display_flex_column gap_8 width_100 tab_flex_grow">
          <div className="display_flex_row space_between align_items_center width_100">
            <div className="font_14 weight_regular color_gray_70">
              복약 알림
            </div>
            <div className="font_13 weight_regular color_gray_50">1시간 전</div>
          </div>
          <div className="font_15 weight_medium color_gray_90">
            약 드실 시간이 됐어요. <br />
            건강을 위해 잊지 말고 꼭 챙겨드세요!
          </div>
        </div>
      </div>
      <div className="padding_16_20 background_gray_0 display_flex_row gap_8 width_100">
        <img
          src="/img/alarm_take_pill.svg"
          width="24"
          height="24"
          alt="take pill"
        />
        <div className="display_flex_column gap_8 width_100 tab_flex_grow">
          <div className="display_flex_row space_between align_items_center width_100">
            <div className="font_14 weight_regular color_gray_70">
              종합 서비스
            </div>
            <div className="font_13 weight_regular color_gray_50">한달 전</div>
          </div>
          <div className="font_15 weight_medium color_gray_90">
            가족(홍아빠)의 약 드실 시간이 됐어요. <br />
            소중한 가족 건강, 잊지 말고 챙겨주세요!
          </div>
        </div>
      </div>
      <div className="padding_16_20 background_gray_0 display_flex_row gap_8 width_100">
        <img
          src="/img/alarm_take_pill.svg"
          width="24"
          height="24"
          alt="take pill"
        />
        <div className="display_flex_column gap_8 width_100 tab_flex_grow">
          <div className="display_flex_row space_between align_items_center width_100">
            <div className="font_14 weight_regular color_gray_70">
              종합 서비스
            </div>
            <div className="font_13 weight_regular color_gray_50">1시간 전</div>
          </div>
          <div className="font_15 weight_medium color_gray_90">
            가족(홍엄마)의 약 드실 시간이 됐어요. <br />
            소중한 가족 건강, 잊지 말고 챙겨주세요!
          </div>
        </div>
      </div>
      <div className="padding_16_20 background_F1F5FF display_flex_row gap_8 width_100">
        <img
          src="/img/alarm_take_pill.svg"
          width="24"
          height="24"
          alt="take pill"
        />
        <div className="display_flex_column gap_8 width_100 tab_flex_grow">
          <div className="display_flex_row space_between align_items_center width_100">
            <div className="font_14 weight_regular color_gray_70">
              종합 서비스
            </div>
            <div className="font_13 weight_regular color_gray_50">1시간 전</div>
          </div>
          <div className="font_15 weight_medium color_gray_90">
            홍길동 님이 가족 신청을 했어요.
            <br />
            가족과 함께 건강을 관리해보세요.
          </div>
        </div>
      </div>
      <div className="padding_16_20 background_F1F5FF display_flex_row gap_8 width_100">
        <img
          src="/img/alarm_take_pill.svg"
          width="24"
          height="24"
          alt="take pill"
        />
        <div className="display_flex_column gap_8 width_100 tab_flex_grow">
          <div className="display_flex_row space_between align_items_center width_100">
            <div className="font_14 weight_regular color_gray_70">
              종합 서비스
            </div>
            <div className="font_13 weight_regular color_gray_50">1시간 전</div>
          </div>
          <div className="font_15 weight_medium color_gray_90">
            가족(내무부장관)의 약 드실 시간이 됐어요. <br />
            소중한 가족 건강, 잊지 말고 챙겨주세요!
          </div>
        </div>
      </div>
      <div className="padding_16_20 background_F1F5FF display_flex_row gap_8 width_100">
        <img
          src="/img/alarm_take_pill.svg"
          width="24"
          height="24"
          alt="take pill"
        />
        <div className="display_flex_column gap_8 width_100 tab_flex_grow">
          <div className="display_flex_row space_between align_items_center width_100">
            <div className="font_14 weight_regular color_gray_70">
              종합 서비스
            </div>
            <div className="font_13 weight_regular color_gray_50">1시간 전</div>
          </div>
          <div className="font_15 weight_medium color_gray_90">
            가족(홍아들)의 약 드실 시간이 됐어요. <br />
            소중한 가족 건강, 잊지 말고 챙겨주세요!
          </div>
        </div>
      </div>
    </>
  );
}
