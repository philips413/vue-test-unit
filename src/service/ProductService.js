import _ from 'lodash';
import Axios from 'axios';
export default class ProductService {

    constructor() {
    }

    async list() {
        const result = await Axios.get("https://shallwe.link:3000/api/v1/operations/contents/lists").then(res => res.data);
        return result;
    }

    submitProduct(obj) {
        try {
            if (_.isNil(obj.name)) {
                throw "이름이 누락되었습니다.";
            }

            if (_.isNil(obj.price)) {
                throw "상품의 가격이 누락되었습니다.";
            }

            if (_.isNil(obj.productImage)) {
                throw "상품의 이미지가 누락되었습니다.";
            }
            console.log("상품등록에 성공하였습니다.")
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}