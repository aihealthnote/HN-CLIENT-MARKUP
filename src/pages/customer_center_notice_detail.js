export default function CustomerCenterNoticeDetail() {
  return (
    <>
      <div className="top_title_wrap display_flex_row">
        <img
          src="/img/arrow_left_bk.svg"
          width="24px"
          height="24px"
          alt="arrow left"
        ></img>
        <span className="font_17 weight_semi_bold">공지사항</span>
      </div>
      <div className="border_bottom_gray_20 notice_list">
        <div className="display_flex_column gap_8">
          <div className="display_flex_column gap_6">
            <div className="color_5967B4 font_13 weight_medium">공지사항</div>
            <div className="font_15 weight_regular color_gray_90">
              시스템 작업 공지 [2024.07.01]시스템 작업 공지 [2024.07.01]
            </div>
          </div>
          <div>
            <div className="font_13 weight_regular color_gray_50">
              2024.06.23
            </div>
          </div>
        </div>
      </div>
      <div className="notice_detail_content font_14 weight_refular color_gray_90">
        안녕하세요. AI건강수첩입니다.
        <br />
        <br />
        건강수첩 앱 리뉴얼 및 시스템 개선작업으로 인해 아래 기간동안 시스템 작업
        예정이오니 서비스 이용에 참고하시기 바랍니다. <br />
        <br />
        점검 기간 : 2024.07.01 <br />
        <br />
        오전 03:00~오전 06:00 점검 기간 동안 서비스 이용이 불가하며 점검 후 더욱
        새로운 건강수첩 앱을 만날 수 있습니다. <br />
        <br />
        감사합니다.
      </div>
    </>
  );
}
