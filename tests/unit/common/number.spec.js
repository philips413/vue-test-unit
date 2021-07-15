import {NumberUtil} from "../../../src/components/common/NumberUtil.js";

describe("공통 컴포넌트 테스트", () => {
    it("백단위 구분자 삽입되는가?", () => {
        // given
        const num = 1000+"";
        cosnt goal = "1,000";
        
        // when
        let result = NumberUtil.commas(num);
        
        // then
        expect(result).toBe(goal);
    })
});
