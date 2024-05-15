import React from 'react';
import HarvestItem from './Farmer/HarvestItem';
import ProcessItem from './Farmer/ProcessItem';
import PackItem from './Farmer/PackItem';
import SellItem from './Farmer/SellItem';

import PurchaseItem from './Distributor/PurchaseItem';
import DistributorList from './Distributor/DistributorItems';
import ShipItem from './Distributor/ShipItem';

import RetailerList from './Retailer/RetailerItems';
import ReceiveItem from './Retailer/ReceiveItems';

import ConsumerList from './Consumer/ConsumerItems';
import BuyItem from './Consumer/BuyItem'

const Modal = ({ isOpen, closeModal, actionText }) => {
  console.log(actionText);
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="bg-gray-900 px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start bg-gray-00">
                  <>
                  {actionText === 'Harvest' && <HarvestItem closeModal={closeModal} actionText={actionText}/>}
                  {actionText === 'Process' && <ProcessItem closeModal={closeModal} actionText={actionText}/>}
                  {actionText === 'Pack' && <PackItem closeModal={closeModal} actionText={actionText}/>}
                  {actionText === 'List' && <SellItem closeModal={closeModal} actionText={actionText}/>}
                  </>
                  <>
                  {actionText === 'Fetch' && <DistributorList closeModal={closeModal} actionText={actionText}/>}
                  {actionText === 'Buy' && <PurchaseItem closeModal={closeModal} actionText={actionText}/>}
                  {actionText === 'Ship' && <ShipItem closeModal={closeModal} actionText={actionText}/>}
                  </>
                  <>
                  {actionText === 'Fetch Items' && <RetailerList closeModal={closeModal} actionText={actionText}/>}
                  {actionText === 'Receive' && <ReceiveItem closeModal={closeModal} actionText={actionText}/>}
                  </>
                  <>
                  {actionText === 'Fetch List' && <ConsumerList closeModal={closeModal} actionText={actionText}/>}
                  {actionText === 'Purchase' && <BuyItem closeModal={closeModal} actionText={actionText}/>}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </>
  );
};

export default Modal;
