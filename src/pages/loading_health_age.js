import { useEffect, useRef, useState } from 'react';

export default function LoadingHealthAge() {
  const reels = 2; // 두 자리 → ?? 로 멈춤
  const cellSize = 56; // 원 지름(px) — UI 크기 용도일 뿐, 화면엔 숫자 안나옴
  const loops = 12; // 몇 바퀴 굴릴지
  const baseDur = 1400; // 첫 릴 회전시간(ms)
  const delayStep = 140; // 두 번째 릴 지연

  const [seqs, setSeqs] = useState([['?'], ['?']]); // 전부 물음표
  const refs = useRef([]);

  // 페이지 진입 시: 물음표만 여러 칸 생성 → 마지막 칸도 물음표로 설정
  useEffect(() => {
    const qs = Array.from({ length: loops * 10 }, () => '?').concat('?');
    setSeqs([qs, qs]);
  }, []);

  // 한 번만 회전 → 마지막 셀(?)에서 정지
  useEffect(() => {
    refs.current.forEach((node, idx) => {
      if (!node || !seqs[idx]?.length) return;
      node.style.transition = 'none';
      node.style.transform = 'translateY(0px)';
      const total = (seqs[idx].length - 1) * cellSize;
      setTimeout(() => {
        node.style.transition = `transform ${
          baseDur + idx * delayStep
        }ms cubic-bezier(.12,.78,.22,1)`;
        node.style.transform = `translateY(-${total}px)`;
      }, idx * 60);
    });
  }, [seqs]);

  return (
    <div className="healthage-scope">
      <div className="usage_records_empty display_flex_column">
        <div className="font_22 text_align_center weight_semi_bold">
          <span className="font_22 weight_semi_bold color_0CC25A">김도니</span>
          님의 <br />
          건강나이는 몇 살일까요?
        </div>
        <div className="jackpot" style={{ '--s': `${cellSize}px` }}>
          {Array.from({ length: reels }).map((_, i) => (
            <div className="reel" key={i}>
              <div className="track" ref={(el) => (refs.current[i] = el)}>
                {seqs[i].map((ch, j) => (
                  <div className="cell" key={j}>
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="gray_70 font_14 text_align_center">
          국민 건강보험공단의 검진결과로 <br />
          건강 나이와 실제 나이의 차이를 보여드립니다.
        </div>
        <form>
          <button className="center_pr_button font_15 weight_semi_bold">
            지금 바로 확인해보세요
          </button>
        </form>
      </div>
    </div>
  );
}
