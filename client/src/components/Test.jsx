import React from 'react'
import BuyItem from './Distributor/BuyItem'
import DistributorItems from './Distributor/DistributorItems'
import ShipItem from './Distributor/ShipItem'
import RetailerItems from './Retailer/RetailerItems'
import ReceiveItems from './Retailer/ReceiveItems'
import ConsumerItems from './Consumer/ConsumerItems'
import PurchaseItem from './Consumer/PurchaseItems'

const Test = () => {
  return (
    <div className='text-red-500'>
        <div className='border-[1px]'>
            <h1>Distributor...</h1>
            <BuyItem />
            <DistributorItems />
            <ShipItem />
        </div>
        <div className='mt-6 border-[1px]'>
            <h1>Reatiler...</h1>
            <RetailerItems />
            <ReceiveItems />
        </div>
        <div className='mt-6 border-[1px]'>
            <h1>Consumer...</h1>
            <ConsumerItems />
            <PurchaseItem />
        </div>
    </div>
  )
}

export default Test