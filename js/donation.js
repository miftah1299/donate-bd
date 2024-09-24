// add money to noakhali donation
document
    .getElementById("btn-noakhali")
    .addEventListener("click", function (event) {
        //prevent default
        event.preventDefault();

        let accountBalance = getTextFieldById("acc-balance");
        const addMoney = getInputFieldById("noakhali");
        console.log(accountBalance);
        const balance = getTextFieldById("balance-noakhali");

        if (accountBalance < addMoney) {
            alert("Insufficient balance");
        } else {
            const currentBalance = balance + addMoney;
            accountBalance -= addMoney;
            document.getElementById("balance-noakhali").innerText =
                currentBalance;
            document.getElementById("acc-balance").innerText = accountBalance;
        }
    });


// add money to feni donation
document
    .getElementById("btn-feni")
    .addEventListener("click", function (event) {
        //prevent default
        event.preventDefault();

        let accountBalance = getTextFieldById("acc-balance");
        const addMoney = getInputFieldById("feni");
        console.log(accountBalance);
        const balance = getTextFieldById("balance-feni");

        if (accountBalance < addMoney) {
            alert("Insufficient balance");
        } else {
            const currentBalance = balance + addMoney;
            accountBalance -= addMoney;
            document.getElementById("balance-feni").innerText =
                currentBalance;
            document.getElementById("acc-balance").innerText = accountBalance;
        }
    });




// add money to chittagong donation
document
    .getElementById("btn-quota")
    .addEventListener("click", function (event) {
        //prevent default
        event.preventDefault();

        let accountBalance = getTextFieldById("acc-balance");
        const addMoney = getInputFieldById("quota");
        console.log(accountBalance);
        const balance = getTextFieldById("balance-quota");

        if (accountBalance < addMoney) {
            alert("Insufficient balance");
        } else {
            const currentBalance = balance + addMoney;
            accountBalance -= addMoney;
            document.getElementById("balance-quota").innerText =
                currentBalance;
            document.getElementById("acc-balance").innerText = accountBalance;
        }
    });