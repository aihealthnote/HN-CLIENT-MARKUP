export default function IdentityVerification3() {
  return (
    <>
      <div className="top_title_wrap">
        <img src="/img/arrow_left_bk.svg"></img>
      </div>
      <div className="padding_20_24 display_flex_column gap_48">
        <div className="font_22 weight_semi_bold text_align_center">
          정확한 본인 확인과 보안을 위해<br></br>최초 1회 본인 인증이
          필요합니다.
        </div>
        <div className="display_flex_column gap_32">
          <img
            src="/img/additional_identity_verification1.svg"
            width="250"
            height="100%"
            className="margin_auto"
          ></img>
          <div className="text_align_center font_17 weight_semi_bold">
            건강보험공단 결과 불러오기 버튼을 선택하면, <br />
            내가 받은 건강검진 내역을 모두 확인 할 수 있어요.
          </div>
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">
          건강보험공단 결과 불러오기
        </button>
      </div>
    </>
  );
}
