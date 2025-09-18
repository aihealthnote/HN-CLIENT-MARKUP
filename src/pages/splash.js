export default function Splash() {
  return (
    <>
      <div className="splash_relative">
        <div className="splash_absolute_top width_100 background_gray_70 height_27 justify_content_center align_items_center display_flex_row text_align_center">
          <div className="color_gray_0">베타 버전입니다</div>
        </div>
        <div className="splash_absolute">
          <img src="/img/logo_splash.svg" width="120" height="120"></img>
        </div>
        <div className="splash_absolute2">
          <img src="/img/poweredby.svg" width="180"></img>
        </div>
      </div>
    </>
  );
}
