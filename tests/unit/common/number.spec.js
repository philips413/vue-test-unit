import {NumberUtil} from "../../../src/components/common/NumberUtil.js";

describe("공통 컴포넌트 테스트", () => {
    it("백단위 구분자 삽입되는가?", () => {
        const num = 1000+"";
        expect(NumberUtil.commas(num)).toBe("1,000");
    })
});