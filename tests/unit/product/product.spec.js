import Vue from 'vue'
import Product from '@/components/product/Product.vue'

describe("상품컴포넌트에 대한 단위 테스트", () => {

    // Vuejs의 라이프사이클에 포함된 메소드 검증
    it("상품컴포넌트의 초기 데이터 세팅이 맞는지", () => {
        expect(typeof Product.mounted).toBe("function");
    });

    // 컴포넌트의 data 검증
    // 숫자형 문자형 구분 가능
    it("상품컴포넌트 초기 데이터 유효성", () => {

        // given
        const mountComponent = Product.data();
        const goal = 33

        // when
        let prdtSysId = mountComponent.prdtSysId;

        // then
        expect(prdtSysId).toBe(goal);
    });

    // 컴포넌트내의 서비스 유효성 검사 테스트
    it("상품등록 유효성 검사", () => {
        // given
        const vm = new Vue(Product).$mount();
        const testObj = {
            name: '상품이름',
            price: 1000,
            productImage: 'https://image.shallwe.shop'
        }
        const goal = true;

        // when
        const result = vm.productService.submitProduct(testObj);

        // then
        expect(result).toBe(goal);

    });

    // 컴포넌트의 함수 검사 테스트
    it("입력된 변수가 제대로 출력되나", () => {
       // given
        const vm = new Vue(Product).$mount();
        const goal = "msg";

        // when
        const result = vm.getResultMessage("msg");

        // then
       expect(result).toBe(goal);
    });

})
