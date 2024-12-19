import { router } from "./route.js";
import "./store/index.js";
import { removeUser } from "./store/index.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

// 경로 표준화 함수
function normalizePath(path) {
  if (path.startsWith("#/")) {
    return { type: "hash", path: path.slice(1) }; // `/#/path` -> `/path`, Hash Router
  } else if (path.startsWith("/")) {
    return { type: "history", path }; // History Router
  }
  return { type: "unknown", path }; // 기타 케이스
}

// 현재 경로 가져오기
function getCurrentPath() {
  const hashPath = window.location.hash;
  const rawPath = hashPath || window.location.pathname; // Hash 우선, 없으면 Path
  return normalizePath(rawPath); // 타입과 경로를 포함한 객체 반환
}

// 페이지 렌더링 함수
function render() {
  const root = document.getElementById("root");
  const { path } = getCurrentPath();
  const page = router[path] || router["/404"];
  if (path === "/" || path === "/profile") {
    root.innerHTML = `<div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${Header()}
        <main id="main" class="p-4"></main>
        ${Footer()}
      </div>
    </div>`;
    bindGlobalNavigation();
    page();
  } else {
    root.innerHTML = `<main id="main" class="bg-gray-100 flex items-center justify-center min-h-screen">
    </main>`;
    page();
  }
}

/*
// history API URL 변경 처리
export function navigate(path) {
  if (path === window.location.pathname) return;
  history.pushState({}, "", path);
  render(path);
}

// history API를 사용하였을 때,
render(window.location.pathname);
 */

// 경로 변경 처리 함수
export function navigate(path) {
  const { type: currentType, path: currentPath } = getCurrentPath();
  const { path: targetPath } = normalizePath(path);

  if (currentPath === targetPath) return;

  if (currentType === "hash" || currentType === "unknown") {
    // hash 라우팅인 경우 "#/" 접두사 보장
    window.location.hash = `#${targetPath}`;
    render();
  } else if (currentType === "history") {
    history.pushState({}, "", targetPath);
    render();
  } else {
    console.error("Unknown route type");
  }
}

function handleRouteChange() {
  render();
}

//이벤트 리스너 설정
window.addEventListener("popstate", handleRouteChange);
window.addEventListener("hashchange", handleRouteChange);

//초기화
document.addEventListener("DOMContentLoaded", render);
