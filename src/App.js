import './App.css';
import {useEffect, useState, useLayoutEffect} from "react";
import Web3 from "web3";
import tokenABI from "./lib/tokenABI";
import tokens from "./lib/tokens";
import BalanceTable from "./components/Table/BalanceTable";
import Header from "./components/Header/Header";
import EthereumValue from "./components/EthereumValue/EthereumValue";
import BigNumber from "bignumber.js";
import {decimalConvert} from "./lib/decimalConvert";

const walletAdress ='0xa145ac099e3d2e9781c9c848249e2e6b256b030d'

function App() {
    const [balances, setBalances] = useState([])
    const [ethereumBal, setEthereumBal] = useState('')
    const web3 = new Web3('https://mainnet.infura.io/v3/fbcaff26d73140b79062175cad8d4ba9')

    useEffect(() => {
        const fetch = async () => {
            web3.eth.getBalance(walletAdress, ((error, balance) => {
                if (error){
                    console.log(error)
                }else{
                    setEthereumBal(web3.utils.fromWei(balance, "ether") + ' ETH')
                }
            }))
            for (const token of tokens) {
                const {contract, name, decimals} = token
                let tokenInst = new web3.eth.Contract(tokenABI, contract);
                let balance = await tokenInst.methods.balanceOf(walletAdress).call()
                setBalances(arr => [...arr, {name, balance: decimalConvert(balance, decimals)}])
            }
            return () => {
                setBalances([])
            }
        }
        fetch()

    },[])


    // const getBalance = async ({contract, name}) => {
    //     let tokenInst = new web3.eth.Contract(tokenABI, contract);
    //     let balance = await tokenInst.methods.balanceOf('0xa145ac099e3d2e9781c9c848249e2e6b256b030d').call()
    //     return {
    //         name,
    //         balancet
    //     }
    // }
    // const get = async () => {
    //     tokens.forEach(token => {
    //         getBalance(token).then(res => {
    //             setBalances(arr => [...arr, res])
    //         })
    //     })
    // }
    // const clickHandler = () => {
    //     get()
    //     balances.forEach(balance => {
    //         console.log(balance)
    //     })
    // }

    return (
        <div>
            <Header/>
            <EthereumValue
                value={ethereumBal}
            />
            <BalanceTable
                balances={balances}
            />
        </div>
    );
}

export default App;
