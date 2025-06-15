import './App.css';
import { useEffect, useState } from "react";
import './reset.css';
import Loading from "./components/Loading";
import Header from './components/Header';
import { useRecoilState } from "recoil";
import { loadingProgressState } from "./store";
import Section01 from './section/section01';
import Section02 from './section/section02';
import Section03 from './section/section03';
import Section04 from './section/section04';
import Section05 from './section/section05';



function App() {
  const [progress, setProgress] = useRecoilState(loadingProgressState);
  if(progress < 100){
    return <Loading />
  }

  return (
    <>
       <Header /> {/* 전역에서 항상 렌더링되도록 */}
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Section05/>
     
      
    </>
  );
}

export default App;
