import { FaCartPlus } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className='cartIcon-container p-3'>
        <FaCartPlus className='cartIcon'/>
        <span>5</span>
    </div>
  )
}

export default CartWidget