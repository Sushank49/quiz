import { useReducer, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import StartScreen from "./StartScreen";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuiz } from "../context/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header></Header>
      <Main>
        {status === "loading" && <Loader></Loader>}
        {status === "error" && <Error></Error>}
        {status === "ready" && <StartScreen></StartScreen>}
        {status === "active" && (
          <>
            <Progress></Progress>
            <Question></Question>

            <Footer>
              <Timer></Timer>
              <NextButton></NextButton>
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen></FinishScreen>}
      </Main>
    </div>
  );
}
