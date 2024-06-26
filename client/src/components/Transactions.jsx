import React from "react";

const getTransactionHistory = () => {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  return transactions.sort((a, b) => b.timestamp - a.timestamp);
};

const TransactionHistory = () => {
  const transactions = getTransactionHistory();
  console.log(transactions);

  return (
    <>
      <h2 className="text-white text-4xl font-extrabold mb-4 mx-auto text-center">Transaction History</h2>
    <hr/>
    <div className="text-white max-w-screen-xl mx-48 min-h-60">
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <a
            key={index}
            href={`https://sepolia.etherscan.io/tx/${transaction.transactionHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300"
          >
            <p className="text-gray-300">
              {`Event Name: ${transaction.eventName}`} <br />
              {`From: ${transaction.senderAddress} To: ${transaction.receiverAddress}`}{" "}
              <br />
              {`Transaction Hash: ${transaction.transactionHash}`} <br />
              {`Timestamp: ${new Date(
                transaction.timestamp
              ).toLocaleString()}`}{" "}
              <br />
            </p>
          </a>
        ))}
      </div>
    </div>
            </>
  );
};

export default TransactionHistory;
