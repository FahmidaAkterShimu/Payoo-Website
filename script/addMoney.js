document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1. get bank account
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount === "Select bank") {
        alert("Please select a bank");
        return;
    }

    // 2. get bank account number
    const accNo = getValueFromInput("add-money-number");
    if (accNo.length !== 11) {
        alert("Invalid account number");
        return;
    }

    // 3. get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin = getValueFromInput("add-money-pin");
    if (pin == "1234") {
        alert(`Add Money Successful 
    from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
    }
    else {
        alert("Invalid Pin");
        return;
    }
})


