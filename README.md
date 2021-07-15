# Vuejs로 테스트 케이스 작성하고 개발하기
## 준비사항
`vue add unit-jest`를 커멘트 창에 입력하고 설치한다.

## 🎈1. 요구사항 및 사전준비사항
    1. commponents/common/NumberUtil.js
        - 유틸리티 파일
        - 공통적인 요소이므로, js파일에 로직이 포함되어 있음
    

    2. components/product/Product.vue
        - 상품을 등록하는 Vue
        - 화면단
    

    3. service/ProductService.js
        - 주로 로직이 이곳에 다 모임
    

## 🎈2. 테스트 케이스 작성 보기
    1. 테스트 케이스 작성시에 디렉토리 구조
        - 주로 테스트를 하게 될 components와 비슷하게 감  
    
    2. 컴포넌트 마운트시에 mounted 함수 존재 유무  

    3. 컴포넌트 초기값에 대한 유효성 검증

    4. 서비스에 존재하는 검증 로직 테스트

    5. 컴포넌트에 존재하는 함수 동작 검증

    - Given, When, Then 패턴
        - 데이터 준비 -> 실행 -> 검증 순서로 진행되는 테스트 패턴 
        - 명확하게 구분지어 주어서 추후에 유지보수 용이함


## 🎈3. 장점과 단점
### 장점 👍
    - 테스트 케이스 존재로 인한 직접입력 테스트 소요시간 줄어듬
    - 단위 테스트가 가능한 메소드 설계개선
    - 오류율의 변화
    - 충분한 테스트로 인한 마음의 안정감
    - QA의 수행력이 상승됨

### 단점 👎🏻
    - 구조에 대한 이해시간이 필요
    - 번거로움
    - 기능개발에 대한 시간이 현재보다 더 필요




### 출처
> http://labs.brandi.co.kr/2020/01/02/leekh.html  
> https://kr.vuejs.org/v2/guide/unit-testing.html  
> https://brunch.co.kr/@springboot/292  

