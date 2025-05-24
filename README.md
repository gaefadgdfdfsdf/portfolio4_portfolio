## 250524
마우스 hover ?

hover시에
work , skill ,contact
작업물, 스킬, 연락처

https://velog.io/@bami/React-GitHub-Pages%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0


https://atolldigital.com/


##
✅ 1. Recoil 상태 정의 (atoms/headerHeight.ts)
import { atom } from "recoil";

export const headerHeightState = atom<number>({
  key: "headerHeightState",
  default: 0, // 초기값
});

✅ 2. Header 컴포넌트에서 높이 측정 및 저장
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { headerHeightState } from "@/recoil/atoms/headerHeight";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const setHeaderHeight = useSetRecoilState(headerHeightState);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [setHeaderHeight]);

  return (
    <header ref={headerRef} className="sticky top-0 bg-white z-50">
      {/* 헤더 내용 */}
    </header>
  );
}

✅ 3. Section2에서 그 값을 받아서 top에 적용
import { useRecoilValue } from "recoil";
import { headerHeightState } from "@/recoil/atoms/headerHeight";

export default function Section2() {
  const headerHeight = useRecoilValue(headerHeightState);

  return (
    <section
      style={{ top: `${headerHeight}px` }}
      className="relative"
    >
      {/* 섹션 내용 */}
    </section>
  );
}