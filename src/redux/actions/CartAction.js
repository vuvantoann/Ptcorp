import { http } from "../../utils/response";


export const CartAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/order/order', value);
            console.log(result.data.paymentUrl)
            window.location.href = result.data.paymentUrl;
        } catch (error) {
            console.log(error);
        }
    }
}


export const PaymentAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/order/payment', value);
            localStorage.removeItem('userID')
            localStorage.removeItem('productId')
            localStorage.removeItem('price')
        } catch (error) {
            console.log(error);
        }
    }
}
