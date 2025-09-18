export default function HomeRecordAtOnceConfirm() {
  return (
    <>
      <div className="dimmed"></div>
      <div className="bottom_sheet_wrap display_flex_column">
        <div className="display_flex_row space_between padding_24 width_100">
          <div className="font_19 weight_semi_bold"></div>
          <img src="/img/close_bk.svg"></img>
        </div>
        <div className="checkup_empty_confirm display_flex_column gap_16 text_align_center align_items_center">
          <img
            src="/img/check_gr_2.svg"
            width="64"
            height="64"
            alt="check"
          ></img>
          <div className="display_flex_column gap_8">
            <div className="font_17 weight_medium color_gray_90">
              기록이 완료되었어요!
            </div>
            <div className="font_15 weight_regular color_gray_70">
              식단과 복약 내역도 기록하시겠어요?
            </div>
          </div>
        </div>
        <div className="bottom_two_button_wrap display_flex_column gap_8">
          <button className="button_common button_primary font_15 weight_semi_bold">
            식단, 복약내역 기록하러 가기
          </button>
          <button className="button_common button_secondary font_15 weight_semi_bold">
            다음에 기록할게요
          </button>
        </div>
      </div>
    </>
  );
}
