export default function SeeMoreMy() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">내 정보 수정</span>
      </div>
      <div className="display_flex_column gap_32 my_information_warp">
        <div className="display_flex_row justify_content_center my_information_profile">
          <img
            src="/img/profile.png"
            width="120"
            height="120"
            alt="profile"
            className=""
          ></img>
          <img
            src="/img/profile_change.svg"
            width="28"
            height="28"
            alt="change"
            className="profile_edit"
          ></img>
        </div>
        <div className="display_flex_column gap_4">
          <div className="display_flex_row align_items_center justify_content_center gap_8">
            <div className="font_24 weight_medium text_align_center">
              홍길동
            </div>
            <img
              src="/img/arrow_right_bk.svg"
              width="24px"
              height="24px"
              alt="arrow right"
            ></img>
          </div>
          <div className="font_15 weight_regular color_gray_90 display_flex_row gap_8 align_items_center margin_auto">
            <img
              src="/img/connected_kakao.svg"
              width="20"
              height="20"
              alt="kakao"
            ></img>
            help-ai-healthnote@mainlineit.com
          </div>
        </div>
        <div>
          <ul>
            <li className="padding_0_20 display_flex_row gap_20 height_48 align_items_center border_bottom_gray_16 border_bottom_gray_20">
              <div className="font_14 weight_regular color_gray_50 width_68">
                성별
              </div>
              <div className="font_15 weight_regular color_gray_90">남</div>
            </li>
            <li className="padding_0_20 display_flex_row gap_20 height_48 align_items_center border_bottom_gray_16 border_bottom_gray_20">
              <div className="font_14 weight_regular color_gray_50 width_68">
                생년월일
              </div>
              <div className="font_15 weight_regular color_gray_90">
                1962.05.22
              </div>
            </li>

            <li className="padding_0_20 display_flex_row space_between height_48 align_items_center border_bottom_gray_20">
              <div className="display_flex_row gap_16">
                <div className="font_14 weight_regular color_gray_50 width_68">
                  연락처
                </div>
                <div className="font_15 weight_regular color_gray_90">
                  010.1234.5678
                </div>
              </div>
              <div className="display_flex_row gap_2 border_gray_20 radius_50 profile_number_edit_icon align_items_center justify_content_center">
                <img
                  src="/img/profile_edit.svg"
                  width="16"
                  height="16"
                  alt="edit"
                ></img>
                <div className="font_12 weight_medium color_gray_70">변경</div>
              </div>
            </li>
            {/* <li className="padding_0_20 display_flex_row gap_16 height_48 align_items_center border_bottom_gray_16">
              <div className="font_14 weight_regular color_gray_50 width_68">
                연동된 계정
              </div>

            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
