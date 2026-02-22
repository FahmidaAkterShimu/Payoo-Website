document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1. get the agent number and validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert("Invalid agent number");
        return;
    }

    // 2. get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount")

    // 3. get the current balance, validate, convert to number
    const currentBalance = getBalance();

    // 4. calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    // 5. get the pin and verify
    const pin = getValueFromInput("cashout-pin");
    if (pin === '1234') {
        alert("Cashout Successful");
        console.log("New balance", newBalance);
        setBalance(newBalance);

        // 1. get the history
        const history = document.getElementById("history-container");

        // 2. new div create
        const newHistory = document.createElement("div");

        // 3. add innerHTML in new div
        newHistory.innerHTML = `
        <div class="transition-card bg-base-100 py-3.5 px-4 rounded-xl">
        Cash Out ${cashoutAmount} BDT Successful to ${cashoutNumber} 
    at ${new Date()}
        </div>
        `;

        // 4. append newDiv in history container
        history.append(newHistory);
    }

    else {
        alert("Invalid pin");
        return;
    }
})




// document.getElementById("cashout-btn").addEventListener("click", function () {
//     // 1. get the agent number and validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if (cashoutNumber.length != 11) {
//         alert("Invalid agent number");
//         return;
//     }

//     // 2. get the amount, validate, convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3. get the current balance, validate, convert to number
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // 4. calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }

//     // 5. get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if (pin === '1234') {
//         alert("Cashout Successful");
//         console.log(newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else {
//         alert("Invalid pin");
//         return;
//     }
// })
