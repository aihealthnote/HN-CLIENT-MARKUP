export default function FamilyManagementConfirm() {
  return (
    <>
      <div className="top_title_wrap display_flex_row ">
        <img
          src="/img/close_bk.svg"
          width="24px"
          height="24px"
          alt="close"
        ></img>
        <span className="font_17 weight_semi_bold">가족 등록 완료</span>
      </div>
      <div className=" display_flex_column gap_20 align_items_center padding_20">
        {/*<img></img> [가족 등록 완료] 부분 로티파일 참조 */}
        <div className="text_align_center display_flex_column gap_24_">
          <div className="font_24 weight_semi_bold color_gray_90">
            홍길동 님과 김승돈님이
            <br />
            가족으로 등록되었습니다
          </div>
          <div className="font_15 weight_regular color_gray_70">
            홍길동님과 같이 건강을 기록하고 <br />
            결과를 함께 관리해보세요
          </div>
        </div>
      </div>
      <div className="family_confirm_box display_flex_row align_items_center padding_16_20 radius_12">
        <img
          src="/img/see_more_checkup.svg"
          width="56"
          height="56"
          alt="checkup"
        ></img>
        <div className="font_15 weight_regular color_gray_70">
          가족의 건강 검진 결과 열람을 위해 <br />
          <span className="color_226DE7 weight_semi_bold font_17">
            건강 검진
          </span>
          <span className="color_gray_90 weight_semi_bold font_17">
            을 불러와야 합니다
          </span>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">
          함께 건강 검진 관리하기
        </button>
      </div>
    </>
  );
}
