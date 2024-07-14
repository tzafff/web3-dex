const main = async () => {
    const transactionFactory = await hre.ethers.getContractFactory('Transactions')
    const transactionContract = await transactionFactory.deploy()
    
    await transactionContract.waitForDeployment();
    const address = await transactionContract.getAddress();
    console.log('Transaction.sol contract deployed to:',address)
}

;(async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
})()