import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PaymentAction } from '../../redux/actions/CartAction';
import { useDispatch } from 'react-redux';

export default function Success() {
  const history = useHistory();
const dispatch = useDispatch()

  useEffect(() => {
    const data = {
            "product_id":localStorage.getItem("productId"),
            "total_amount":localStorage.getItem("price"),
            "user_id":localStorage.getItem("userID")

    }
    const action = PaymentAction(data);
    dispatch(action)
    const timeout = setTimeout(() => {
      history.push('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <div className='form-success'>
        <div className="success-container">
      <h3>Thanh toán thành công!</h3>
      <p>Cảm ơn bạn đã mua hàng của chúng tôi. Đơn hàng của bạn đã được xử lý thành công.</p>
    </div>
    </div>
  );
}
