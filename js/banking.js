//Deposit Amount
document.getElementById('deposit-btn').addEventListener('click', function(){
    //get the deposit Amount
    const depositField = document.getElementById('deposit-amount');
    const depositAmountText = depositField.value;
    const depositAmount = parseFloat(depositAmountText);
    //show the deposit amount
    const preDepositField = document.getElementById('deposit-money');
    const preDepositText = preDepositField.innerText;
    const preDeposit = parseFloat(preDepositText);
    const depositTotal = preDeposit + depositAmount;
    preDepositField.innerText = depositTotal;

    //update balance
    const totalBalanceInput = document.getElementById('balance');
    const totalBalanceText = totalBalanceInput.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    const newTotalBalance = totalBalance + depositAmount;
    totalBalanceInput.innerText = newTotalBalance;
    
    //clear the field
    depositField.value = '';
})

//withdraw amount
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawValueText = withdrawInput.value;
    const withdrawValue = parseFloat(withdrawValueText);

    // withdraw money show
    const prewithdrawInput = document.getElementById('withdraw-money');
    const prewithdrawText = prewithdrawInput.innerText;
    const prewithdrawAmount = parseFloat(prewithdrawText);

    const totalWithdraw = withdrawValue+ prewithdrawAmount;
    prewithdrawInput.innerText = totalWithdraw;

    //Update Balance
    const totalBalanceInput = document.getElementById('balance');
    const totalBalanceText = totalBalanceInput.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    const totalBalanceNew = totalBalance - totalWithdraw;
    totalBalanceInput.innerText = totalBalanceNew;

    //Clear Withdraw Input 
    withdrawInput.value = '';
})