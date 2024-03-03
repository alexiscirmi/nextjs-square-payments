export const PaymentStatus = ({ paymentStatus }) => {
  if (paymentStatus === 'idle') {
    return (
      <p>
        <span className='text-blue-600'>Payment status: </span>
        waiting
      </p>
    )
  } else {
    return (
      <div>
        <p>
          <span className='text-blue-600'>Payment status: </span>
          {paymentStatus.payment.status}
        </p>
        <p>
          <span className='text-blue-600'>Payment ID: </span>#
          {paymentStatus.payment.id}
        </p>
        <p>
          <span className='text-blue-600'>Amount paid: </span>
          {`${paymentStatus.payment.totalMoney.currency} `}
          {paymentStatus.payment.totalMoney.amount}
        </p>
      </div>
    )
  }
}
