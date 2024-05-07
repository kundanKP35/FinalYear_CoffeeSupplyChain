import React from 'react'
import PurchaseItem from './Distributor/PurchaseItem'
import DistributorItems from './Distributor/DistributorItems'
import ShipItem from './Distributor/ShipItem'
import RetailerItems from './Retailer/RetailerItems'
import ReceiveItems from './Retailer/ReceiveItems'
import ConsumerItems from './Consumer/ConsumerItems'
import BuyItem from './Consumer/BuyItem'

const Test = () => {
  return (
    <div className='text-red-500'>
        <div className='border-[1px]'>
            <h1>Distributor...</h1>
            <PurchaseItem />
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
            <BuyItem />

        </div>
    </div>
  )
}

export default Test