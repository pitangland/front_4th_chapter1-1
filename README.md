## 과제 체크포인트

### 기본과제

#### 1) 라우팅 구현:
- [x] History API를 사용하여 SPA 라우터 구현
  - [x] '/' (홈 페이지)
  - [x] '/login' (로그인 페이지)
  - [x] '/profile' (프로필 페이지)
- [x] 각 라우트에 해당하는 컴포넌트 렌더링 함수 작성
- [x] 네비게이션 이벤트 처리 (링크 클릭 시 페이지 전환)
- [x] 주소가 변경되어도 새로고침이 발생하지 않아야 한다.

#### 2) 사용자 관리 기능:
- [x] LocalStorage를 사용한 간단한 사용자 데이터 관리
  - [x] 사용자 정보 저장 (이름, 간단한 소개)
  - [x] 로그인 상태 관리 (로그인/로그아웃 토글)
- [x] 로그인 폼 구현
  - [x] 사용자 이름 입력 및 검증
  - [x] 로그인 버튼 클릭 시 LocalStorage에 사용자 정보 저장
- [x] 로그아웃 기능 구현
  - [x] 로그아웃 버튼 클릭 시 LocalStorage에서 사용자 정보 제거

#### 3) 프로필 페이지 구현:
- [x] 현재 로그인한 사용자의 정보 표시
  - [x] 사용자 이름
  - [x] 간단한 소개
- [x] 프로필 수정 기능
  - [x] 사용자 소개 텍스트 수정 가능
  - [x] 수정된 정보 LocalStorage에 저장

#### 4) 컴포넌트 기반 구조 설계:
- [x] 재사용 가능한 컴포넌트 작성
  - [x] Header 컴포넌트
  - [x] Footer 컴포넌트
- [x] 페이지별 컴포넌트 작성
  - [x] HomePage 컴포넌트
  - [x] ProfilePage 컴포넌트
  - [x] NotFoundPage 컴포넌트

#### 5) 상태 관리 초기 구현:
- [x] 간단한 상태 관리 시스템 설계
  - [x] 전역 상태 객체 생성 (예: 현재 로그인한 사용자 정보)
- [x] 상태 변경 함수 구현
  - [x] 상태 업데이트 시 관련 컴포넌트 리렌더링

#### 6) 이벤트 처리 및 DOM 조작:
- [x] 사용자 입력 처리 (로그인 폼, 프로필 수정 등)
- [x] 동적 컨텐츠 렌더링 (사용자 정보 표시, 페이지 전환 등)

#### 7) 라우팅 예외 처리:
- [x] 잘못된 라우트 접근 시 404 페이지 표시

### 심화과제

#### 1) 해시 라우터 구현
- [x] location.hash를 이용하여 SPA 라우터 구현
  - [x] '/#/' (홈 페이지)
  - [x] '/#/login' (로그인 페이지) 
  - [x] '/#/profile' (프로필 페이지)
 
#### 2) 라우트 가드 구현
- [x] 로그인 상태에 따른 접근 제어
- [x] 비로그인 사용자의 특정 페이지 접근 시 로그인 페이지로 리다이렉션

#### 3) 이벤트 위임

- [x] 이벤트 위임 방식으로 이벤트를 관리하고 있다.

## 과제 셀프회고

<!-- 과제에 대한 회고를 작성해주세요 -->
정확한 개념을 모르고 사용하던 부분들이 많아 과제를 진행하며 테스트 코드가 통과될 때 개념을 이해했고 활용했구나 생각하며 개념을 정립할 수 있었습니다.

처음에는 개발서버를 기준으로 과제를 진행하면서 잘 동작한다고 생각했지만, 테스트서버에서는 모든 테스트가 실패하는 상황을 보았습니다. 이후에는 테스트 페이지만을 보며 작업을 진행했지만, 그 덕분에 동작을 정확히 확인할 수 있었던 것은 아니었습니다. 실제로는 해시라우터는 정상적으로 동작했지만 반환 시 히스토리라우터로 돌아가는 문제가 있었음을 알게 되었습니다. 이를 통해 테스트 케이스의 중요성과, 단순히 테스트를 통과하는 것 이상의 의미가 있음을 깨닫게 되었습니다.
 
### 기술적 성장
<!-- 예시
- 새로 학습한 개념
- 기존 지식의 재발견/심화
- 구현 과정에서의 기술적 도전과 해결
-->

해시라우터의 동작 원리를 학습하며, 처음 스케치 단계에서는 route.js에서 router와 hashRouter를 따로 구현하고 main.hash.js에서 해시와 히스토리를 구분하려 했습니다. 하지만, 비슷한 코드를 두번 반복하느니 main.js에서 두 라우팅 방식을 모두 지원하도록 구현했습니다. 이 과정에서 type으로 라우팅을 관리한 점은 깔끔하지는 않지만 개인적으로 만족스러운 도전이었습니다.

또한, 개념을 알지 못한 채 구현했던 상태 관리가 테스트를 통과하면서 역으로 "이것이 상태 관리 시스템이었구나"라고 깨닫게 되었고, 이를 통해 상태 관리의 개념을 정립할 수 있었습니다.

### 코드 품질
<!-- 예시
- 특히 만족스러운 구현
- 리팩토링이 필요한 부분
- 코드 설계 관련 고민과 결정
-->

1. 만족스러우면서 아쉬웠던 부분은 main.js에서 해시라우터일 때와 아닐 때 타입으로 관리한 것입니다.


```
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
```


특히, main.js에서 해당 로직을 처리한 이유는 다른 컴포넌트들이 해시라우터와 히스토리라우터에 상관없이 재사용될 수 있도록 설계하기 위함입니다. 이를 위해 type으로 경로의 유형을 관리하면서도, 컴포넌트에 넘겨주는 값은 기본 경로로 통일해 처리할 수 있게끔 구현하였습니다.

이 접근은 다른 컴포넌트들의 재사용성과 유연성을 높이는 데 효과적이었지만, 경로 관리 로직을 더욱 일반화하거나 재사용성을 극대화하는 방식으로 리팩토링이 필요할 것 같습니다.

2. 각 컴포넌트를 기반으로 구조를 설계하였으나, 여전히 공통화할 수 있는 부분이 남아 있다고 판단됩니다. 현재는 HTML을 문자열(string) 형태로 삽입하고 있지만, 이러한 방식 대신 해당 HTML을 별도로 관리하거나 컴포넌트 단위로 분리하여 처리함으로써 로직이 더욱 간단하고 명확하게 보이도록 리팩토링할 계획입니다.

### 학습 효과 분석
<!-- 예시
- 가장 큰 배움이 있었던 부분
- 추가 학습이 필요한 영역
- 실무 적용 가능성
-->

이벤트 위임 방식을 더 효과적으로 활용하기 위해서는 DOM이 변경되는 과정과 브라우저에서 렌더링이 이루어지는 순서에 대한 추가 학습이 필요하다고 생각합니다. 특히, 동적 요소가 추가되거나 제거될 때 DOM 업데이트가 어떤 방식으로 진행되는지 이벤트 버블링이 이 과정에서 어떻게 동작하는지를 추가적으로 학습할 계획입니다.

### 과제 피드백
<!-- 예시
- 과제에서 모호하거나 애매했던 부분
- 과제에서 좋았던 부분
-->

E2E 테스트를 처음 진행하면서 HTML의 계층 구조, placeholder와 같은 사소한 요소까지 테스트 통과 여부에 영향을 미친다는 점을 알게 되었습니다. 특히, `npx playwright test --update-snapshots` 명령어를 사용하여 현재 계층 구조를 기준으로 테스트 코드를 업데이트하면 테스트를 통과할 수 있음을 확인할 수 있었습니다.

과제를 진행하며 로직상의 문제는 없었지만, 구조상의 차이로 인해 발생하는 문제가 과연 중요한가에 대해 고민했습니다. 동시에 프론트엔드 개발자로서 UI 요구사항을 명확히 하고 이를 기반으로 철저히 테스트를 진행하는 것이 올바른 접근인지에 대한 의문도 갖게 되었습니다.

따라, 과제를 구현하는 점에 있어서 개념을 확립해나갈 수 있어서 좋았고, 테스트 코드에 대해서 생각해볼 수 있어서 좋았습니다.

## 리뷰 받고 싶은 내용

<!--
피드백 받고 싶은 내용을 구체적으로 남겨주세요
모호한 요청은 피드백을 남기기 어렵습니다.

참고링크: https://chatgpt.com/share/675b6129-515c-8001-ba72-39d0fa4c7b62

모호한 질문의 예시)
- 무엇을 질문해야 할지 몰라서 코치님이 보시기에 고쳐야할것들 전반적으로 피드백 부탁드립니다.
- 코드 스타일에 대한 피드백 부탁드립니다.
- 코드 구조에 대한 피드백 부탁드립니다.
- 개념적인 오류에 대한 피드백 부탁드립니다.
- 추가 구현이 필요한 부분에 대한 피드백 부탁드립니다.

구체적인 질문의 예시)
- 파일A의 함수B와 그 안의 변수명을 보면 직관성이 떨어지는 것 같습니다. 함수와 변수 이름을 더 명확하게 지을 방법에 대해 조언해 주실 수 있나요?
- 현재 파일 단위로 코드를 분리했지만, 이번 주차 발제를 기준으로 봤을 때 모듈화나 계층화에서 부족함이 있는 것 같습니다. 특히 A와 B 부분에서 모듈화를 더 진행할지 그대로 둘지 고민하였습니다. (...구체적인 고민 사항 적기...). 코치님의 의견이 궁금합니다.
- 옵저버 패턴을 사용해 상태 관리 로직을 구현해 보려 했습니다. 제가 구현한 코드가 옵저버 패턴에 맞게 잘 구성되었는지 검토해 주시고, 보완할 부분을 제안해 주실 수 있을까요?
- 컴포넌트 A를 테스트 할 때 B와의 의존성 때문에 테스트 코드를 작성하려다 포기했습니다. A와 B의 의존성을 낮추고 테스트 가능성을 높이는 구조 개선 방안이 있을까요?
-->

저는 현재 패턴을 사용하지 않고(?) 고려하지 않고(?) 코드를 작성했는데, 나중에 코드 유지보수나 확장성을 고려할 때 설계 패턴을 적용하는 것이 더 나을까요? 그렇다면 어떤 패턴을 적용하는 것이 좋을까요?
> 설계에 관한 질문
지금 좀 더 해보셔도 좋지 않을까요~ 현재의 코드는 과제를 통과하기에 충분한 코드이지만, 스토어에 대한 설계나 각 비즈니스 로직들과 컴포넌트가 결합되어 있고, 라우팅 부분에 있어서도 렌더 부분과의 결합 가딩 처리 등의 분리등을 진행하면 좋을것 같아요. 결국 관심사를 나누고 그 관심사를 나눠야만 저희는 확장할 수 있으니 고민 같이해봐요!

main.js에서 hash와 history를 type으로 구분하여 분기 처리를 했는데 이 부분을 전역 상태 관리 도구를 사용해 구현하면 더 나은 방법이 될 수 있을까요? 전역 상태 관리로 구현할 경우 어떤 장점이나 단점이 있을지 그리고 적용 시 고려해야 할 점이 있다면 알려주세요..
> router 질문
- 우선 해당 로직이 main.js에서 분리되어서 관리가 되면 좋을것 같아요!
- 이 부분을 전역 상태로 관리하신다면 전체 앱에서 좀 더 쉽게 히스토리 관리나 타입을 참고하기 좋을것 같기는 한데요! 전역으로 관리한다는 접근보다는 현재 라우터 구성을 분리해서 잘 관리하는 형태로 운영해보면 좋을 것 같아요~
