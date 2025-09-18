export default function Agreement() {
  return (
    <>
      <div className="agreement_wrap_3 display_flex_column gap_40">
        <div className="font_22 weight_semi_bold color_gray_90 text_align_center">
          AI건강수첩 서비스 이용을 위해<br></br>권한 동의가 꼭 필요해요
        </div>
        <div className="display_flex_column gap_20">
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_1.svg"
              width="40"
              height="40"
              alt="alarm"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">알림</div>
              <div className="font_13 weight_regular color_gray_50">
                서비스 이용을 위한 필요 알림 제공
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_2.svg"
              width="40"
              height="40"
              alt="location"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">위치</div>
              <div className="font_13 weight_regular color_gray_50">
                건강검진 센터 예약 정보 제공
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_3.svg"
              width="40"
              height="40"
              alt="camera"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">
                카메라
              </div>
              <div className="font_13 weight_regular color_gray_50">
                QR코드, 건강검진 기록 촬영
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_4.svg"
              width="40"
              height="40"
              alt="photo"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">사진</div>
              <div className="font_13 weight_regular color_gray_50">
                건강검진 기록 불러오기
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_5.svg"
              width="40"
              height="40"
              alt="phone"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">전화</div>
              <div className="font_13 weight_regular color_gray_50">
                병원/약국 전화번호로 통화 기능
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_6.svg"
              width="40"
              height="40"
              alt="mike"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">
                마이크
              </div>
              <div className="font_13 weight_regular color_gray_50">
                전문가와 상담 시 제공
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_7.svg"
              width="40"
              height="40"
              alt="alarm"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">
                연락처
              </div>
              <div className="font_13 weight_regular color_gray_50">
                가족, 친구 초대를 위해 제공
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_8.svg"
              width="40"
              height="40"
              alt="alarm"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">
                음악 및 오디오
              </div>
              <div className="font_13 weight_regular color_gray_50">
                검진 기록 검색
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_9.svg"
              width="40"
              height="40"
              alt="alarm"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">
                신체활동 정보
              </div>
              <div className="font_13 weight_regular color_gray_50">
                걸음수 등 신체활동 기록
              </div>
            </div>
          </div>
          <div className="display_flex_row gap_12">
            <img
              src="/img/agreement_10.svg"
              width="40"
              height="40"
              alt="app"
            ></img>
            <div>
              <div className="font_15 weight_semi_bold color_gray_90">
                다른 앱 위에 표시
              </div>
              <div className="font_13 weight_regular color_gray_50">
                서비스 이용을 위한 필요 알림 제공
              </div>
            </div>
          </div>
        </div>
        <div className="font_13 weight_medium color_gray_70 text_align_center padding_16_0 background_gray_5 radius_12">
          선택권한을 허용하지 않은 경우<br></br>일부 서비스 이용이 제한될 수
          있습니다.
        </div>
      </div>
      <div className="bottom_button_wrap">
        <button className="bottom_button button_primary">확인</button>
      </div>
    </>
  );
}
