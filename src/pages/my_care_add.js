export default function MyCareAdd() {
  return (
    <>
      <div className="top_title_wrap">
        <img
          src="/img/close_bk.svg"
          className="top_left_close"
          width="24px"
          height="24px"
        ></img>
        <span>검진 항목 추가</span>
      </div>
      <form>
        <div className="label_input_wrap display_flex_column gap_12">
          <label for="item" className="font_14">
            검진 항목명
          </label>
          <input
            type="text"
            id="item"
            className="input_text radius_8 height_48"
            placeholder="예) 아밀라아제"
          ></input>
        </div>
        <div className="label_input_wrap display_flex_column gap_12">
          <label for="item" className="font_14">
            참고치
          </label>
          <input
            type="text"
            id="item"
            className="input_text radius_8 height_48"
            placeholder="예) 28~70, 정상, 음성"
          ></input>
          <button className="input_close_button"></button>
        </div>
        <div className="label_input_wrap display_flex_column gap_12">
          <label for="item" className="font_14">
            단위
          </label>
          <div class="input_date_wrapper width_100">
            <input
              type="text"
              id="input_normal"
              class="input_select radius_8"
              placeholder=""
            />
            <img
              src="/img/arrow_down_bk.svg"
              width="24"
              height="24"
              className="input_unit"
            ></img>
          </div>
        </div>
      </form>
      <form>
        <div className="bottom_button_wrap">
          <button className="bottom_button button_gray">추가하기</button>
        </div>
      </form>
    </>
  );
}
