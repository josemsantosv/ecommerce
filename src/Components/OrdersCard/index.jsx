import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    const currentDate = () => {
      const date = new Date().toLocaleDateString();
      return date
   }
    return (
      <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className='flex justify-between w-full'>
        <div className=''>
        <p className='flex flex-row items-center gap-2'>
          <CalendarDaysIcon className='h-6 w-6 text-black cursor-pointer' />
          <span className='font-light'>{currentDate()}</span>
        </p>
        <p className='flex flex-row items-center gap-2'>
          <ShoppingBagIcon className='h-6 w-6 text-black cursor-pointer' />          
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        </div>
        <p className='flex flex-row items-center gap-3'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>
    </div>
    )
  
}

export default OrdersCard