import "./styles.css";
export const HomePage = lazy(() => import("./scenes/HomePage"));
export const VideoGame = lazy(() => import("./scenes/VideoGame"));
// import HomePage from "./scenes/HomePage";
// import VideoGame from "./scenes/VideoGame";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<VideoGame />} />
    </Routes>
  );
}
