import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {

    return (
        <div className="m-2 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col p-3 rounded-md hover:shadow-2xl
        "
        >
            <div className="py-3 flex flex-col text-center items-center w-full mt-3">
                <div className="display-flex justify-start w-full p-2">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">
                            From: <em>{shortenAddress(addressFrom)}</em>
                        </p>
                        

                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">
                            To: <em>{shortenAddress(addressTo)}</em>
                        </p>
                        

                    </a>
                    <p className="text-white text-base font-bold">Amount: {amount} ETH
                    </p>
                    {message && (
                        <>
                            <br/>
                            <p className="text-white text-base">Message: {message}</p>
                        </>
                    )}

                    <div className="text-[#00F4FF] font-bold px-5 w-flex flex-1 p-5 rounded-3xl -mt-5 shadow-2xl">
                        <p className="font-bold text-center">{timestamp}

                        </p>


                    </div>

                </div>

            </div>

        </div>
    )

}

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);
    
    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex-1 md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 className="text-white text-3xl text-center my-2">
                        <em>
                            Latest transactions
                        </em>
                    </h3>
                ) : (
                    <h3 className="text-white text-3xl text-center my-2">
                        <em>
                            Connect your account to see the latest transactions.
                        </em>
                    </h3>
                )} 
                
                <div className="flex flex-wrap justify-center items-center mt-10">
                    {[...dummyData, ...transactions].reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Transactions;