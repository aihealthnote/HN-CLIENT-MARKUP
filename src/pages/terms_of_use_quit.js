export default function TermsOfUseQuit() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">이용약관 및 정책</span>
      </div>
      <div className="quit_top_wrap display_flex_column gap_32">
        <div className="font_24 weight_semi_bold color_gray_90 display_flex_row justify_content_center text_align_center">
          이렇게 떠나신다니
          <br />
          너무 아쉬워요
        </div>
        <div className="quit_text_box radius_12 padding_20 display_flex_row space_between align_items_center">
          <div className="font_13 weight_regular color_gray_70">
            서비스를 해지하시면 소중한 <br />
            나의 건강기록, 건강검진결과, 등급 등<br />
            <span className="font_13 weight_medium color_F42A43">
              모든 정보가 삭제되며 복구가 불가해요
            </span>
          </div>
          <img
            src="/img/quit_text_box.svg"
            width="48"
            height="48"
            alt="quit paper"
          ></img>
        </div>
      </div>
      <div className="background_gray_5 padding_40_20 display_flex_column gap_32">
        <div className=" display_flex_column gap_24_">
          <div className="color_gray_90 weight_semi_bold font_17 text_align_center">
            <span className="color_5967B4 weight_semi_bold font_17">
              해지하려는 이유
            </span>
            를 알려주시면
            <br />
            서비스 개선에 반영하도록 할게요
          </div>
          <div className="display_flex_column gap_8">
            <div class="input_date_wrapper background_gray_0 height_48 border_gray_20 radius_8 display_flex_row space_between align_items_center">
              <div className="padding_left_16 font_15 weight_regular color_gray_90">
                기타
              </div>
              <img
                src="/img/arrow_down_bk.svg"
                width="24"
                height="24"
                className="input_unit"
              ></img>
            </div>
            <div>
              <textarea
                className="textarea_2 padding_20_16 background_gray_0 width_100 radius_8 border_gray_20"
                placeholder={`해지하시는 이유를 입력해주세요`}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="background_gray_10 quit_text_box_2 radius_12 display_flex_column gap_24_">
          <div className="display_flex_column gap_8 align_items_center">
            <img
              src="/img/customer_center_main_1.svg"
              width="40"
              height="40"
              alt="cloud"
            ></img>
            <div className="font_15 weight_semi_bold color_gray_90 text_align_center">
              언제든지 다시 돌아오실 날을 기다리며, <br />
              서비스를 이용해 주셔서 감사합니다.
            </div>
          </div>
          <div className="font_13 weight_semi_regular color_gray_70 text_align_center">
            말씀해주신 소중한 의견을 반영하여 <br />더 나은 서비스를 만들수
            있도록 노력할게요.
          </div>
        </div>
      </div>
      <div className="service_termination">
        <div className=" button_primary width_100 height_48 radius_8 display_flex_row align_items_center justify_content_center font_15 weight_semi_bold">
          서비스 해지하기
        </div>
      </div>
    </>
  );
}
