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
        } else if (addMoney <= 0 || isNaN(addMoney)) {
            alert("Invalid input");
        } else {
            // show modal
            document.getElementById("modal").checked = true;

            const currentBalance = balance + addMoney;
            accountBalance -= addMoney;
            document.getElementById("balance-noakhali").innerText =
                currentBalance;
            document.getElementById("acc-balance").innerText = accountBalance;

            // clear input field
            document.getElementById("noakhali").value = "";

            // update history
            const div = document.createElement("div");
            div.classList.add(
                "border",
                "border-gray-300",
                "rounded-md",
                "p-4",
                "space-y-4"
            );
            // console.log(div);
            div.innerHTML = `
            <h4 class = text-xl font-bold>${addMoney} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
             <p class = text-gray-500>Date: ${new Date()} </p>
            `;
            document.getElementById("history-container").appendChild(div);
        }
    });

// add money to feni donation
document.getElementById("btn-feni").addEventListener("click", function (event) {
    //prevent default
    event.preventDefault();

    let accountBalance = getTextFieldById("acc-balance");
    const addMoney = getInputFieldById("feni");
    console.log(accountBalance);
    const balance = getTextFieldById("balance-feni");

    if (accountBalance < addMoney) {
        alert("Insufficient balance");
    } else if (addMoney <= 0 || isNaN(addMoney)) {
        alert("Invalid input");
    } else {
        // show modal
        document.getElementById("modal").checked = true;

        const currentBalance = balance + addMoney;
        accountBalance -= addMoney;
        document.getElementById("balance-feni").innerText = currentBalance;
        document.getElementById("acc-balance").innerText = accountBalance;

        // clear input field
        document.getElementById("feni").value = "";

        // update history
        const div = document.createElement("div");
        div.classList.add(
            "border",
            "border-gray-300",
            "rounded-md",
            "p-4",
            "space-y-4"
        );
        // console.log(div);
        div.innerHTML = `
        <h4 class = text-xl font-bold>${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
        <p class = text-gray-500>Date: ${new Date()} </p>
        `;
        document.getElementById("history-container").appendChild(div);
    }
});

// add money to Quota donation
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
        } else if (addMoney <= 0 || isNaN(addMoney)) {
            alert("Invalid input");
        } else {
            // show modal
            document.getElementById("modal").checked = true;

            const currentBalance = balance + addMoney;
            accountBalance -= addMoney;
            document.getElementById("balance-quota").innerText = currentBalance;
            document.getElementById("acc-balance").innerText = accountBalance;

            // clear input field
            document.getElementById("quota").value = "";

            // update history
            const div = document.createElement("div");
            div.classList.add(
                "border",
                "border-gray-300",
                "rounded-md",
                "p-4",
                "space-y-4"
            );
            // console.log(div);
            div.innerHTML = `
            <h4 class = text-xl font-bold>${addMoney} Taka is Donated for Aid for Injured in the Quota Movement</h4>
             <p class = text-gray-500>Date: ${new Date()} </p>
            `;
            document.getElementById("history-container").appendChild(div);
        }
    });
