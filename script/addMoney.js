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
        // 1. get the history
        const history = document.getElementById("history-container");

        // 2. new div create
        const newHistory = document.createElement("div");

        // 3. add innerHTML in new div
        newHistory.innerHTML = `
        <div class="transition-card bg-base-100 py-3.5 px-4 rounded-xl">
        Add Money Successful 
    from ${bankAccount}, 
    Account Number: ${accNo} 
    at ${new Date()}
        </div>
        `;

        // 4. append newDiv in history container
        history.append(newHistory);
    }
    else {
        alert("Invalid Pin");
        return;
    }
})


