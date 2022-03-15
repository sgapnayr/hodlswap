import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder, name, type, value, handleChange }) => (
    <input
    placeholder={placeholder} 
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm blue-glassmorphism"
    />
);

const Welcome = () => {
    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  
    const handleSubmit = (e) => {
      const { addressTo, amount, keyword, message } = formData;

      e.preventDefault();

      if (!addressTo || !amount || !keyword || !message) return;
  
      sendTransaction();
    };

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-16">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-4xl sm:text-5xl text-white text-gradient py-2">Send Ethereum, <br />anywhere.</h1>
                    <p className="text-left mt-4 text-white font-light md:w-9/12 w-11/12 text-base">Explore the Crypto Universe, send ethereum easily on Hodl Swap.</p>
                    {!currentAccount && (
                        <button
                        type="button"
                        onClick={connectWallet}
                        className="flex-row justify-center items-center my-7 bg-[#c5c5b9] mx-4 p-3 rounded-full cursor-pointer hover:bg-[#92927e]"
                    >
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>
                    )}
                    {/* <div className={`rounded-tl-2xl ${commonStyles}`}>Ethereum
                    <div className="-my-4 text-white grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        </div>
                        <div className={commonStyles}>Secure
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>Web3.0
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>Blockchain
                        </div>
                        <div className={commonStyles}>Reliability
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>Low Fees
                        </div>
                    </div>
    */}
                </div>

                <div className="flex flex-col flex-1 items-center justify-center w-full mf:mt-0 py-2 -mt-7">
                            <div className="p-2 justify-end items-center flex-col rounded-xl h-48 sm:w-72 w-full my-9 eth-card black-glassmorphism">
                                <div className="flex h-11 justify-between items-start">
                                    <div className="w-10 h-10 rounded-full border-4 border-white flex justify-center items-center">
                                        <SiEthereum fontSize={20} color="#fff" />
                                    </div>
                                       {/* <BsInfoCircle fontSize={18} color="#ffff" /> */}
                                </div>
                                    <p className="text-white p-11 text-sm">
                                       {""}
                                    </p>
                                <div>
                                    <p className="text-white p-1 py-4 font-bold text-lg mt-0">
                                        Ethereum <em>Card</em>
                                    </p>
                                </div>

                            </div>

                        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center font-bold blue-glassmorphism">
                            <Input placeholder="Address" name="addressto" type="text" handleChange={handleChange} />
                            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                            <Input placeholder="Keyword (Gif)" name="text" type="text" handleChange={handleChange} />
                            <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />
                             

                            <div className="h-[3rem] text-center text-[#92927e] w-full bg-gray-#c5c5b9 my-2">

                            {isLoading ? (
                                    <Loader />
                                ) : (
                                    <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="text-white w-full border-[5px] border-[
                                        #ffffff] mt-1 p-2 rounded-full cursor-pointer hover:bg-[#92927e]"
                                    >
                                    Send ETH
                                    </button>

                                )}

                            </div>
                        </div>
                            
                    </div>
            </div>
        </div>
    );
}

export default Welcome;