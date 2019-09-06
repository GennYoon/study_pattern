# 패턴공부

> 순수 자바스크립트로 각 패턴 구현

### Observer 동작

1. 미리 어떤 행동(함수)에 대해서 구독(Subscribe)합니다.
2. 행동은 해지(Unsubscribe)하지 않는 이상 유지됩니다.
3. 이벤트가 동작하는 시점에 퍼트리기(Broadcast)를 발생시키면 저장되어 있던 행동이 동작합니다.

### Observer 특징

1. 거의 모든 Pattern에 기초가 되어 포함되는 패턴입니다.

---

### MVC 특징

1. 1개의 Controller가 n개의 View를 선택할 수 있는 1:n의 구조 입니다.
2. Controller는 View를 선택할 뿐 직접 업데이트 하지 않습니다.
3. 널리 사용되고 있는 가장 쉬운 Pattern 입니다.

### MVC 단점

1. View와 Model의 의존성이 높습니다. 그로 인해서 프로젝트가 규모가 커질수록 복잡해지고 유지보수가 어렵습니다.

---

### MVP 특징

1. 1개의 Presenter는 1개의 View와 연동되어 1:1의 구조 입니다.

### MVP 장점

1. View와 Model간의 의존성이 없습니다.

### MVP 단점

1. Presenter와 View의 의존성이 높아지고, 프로젝트의 규모가 커질수록 의존성은 더 높아집니다.

---

### MVVM 특징

1. Command 팬턴과 Data Binding을 이용합니다.
2. Command 팬턴과 Data Binding을 이용하여 View와 ViewModel의 의존성을 없앴습니다.
3. View와 ViewModel는 1:n의 관계입니다.

### MVVM 장점

1. View와 Model, View와 ViewModel간의 의존성을 없애 각 부분이 독립적이어서 모듈화 개발이 가능합니다.

### MVVM 단점

1. ViewModel의 설계가 쉽지 않습니다.
