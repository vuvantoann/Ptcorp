import { http } from "../../utils/response";


export const GetListProductAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/product/getallproducts');
            console.log(result.data);
            const action = {
                type: "GET_LIST_PRODUCT",
                arrProduct: result.data
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}
