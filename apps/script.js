// Fee Calculation Logic
function calculateFee(sellAmount) {
    if (sellAmount > 0) {  // Ensure the amount is positive
        const feeDetails = [];

        // eBay Fee
        const ebayFee = 0.12;
        const ebayTotal = ebayFee * sellAmount;
        const ebayProfit = sellAmount - ebayTotal;
        feeDetails.push(`eBay Fee: $${ebayTotal.toFixed(2)} | Profit: $${ebayProfit.toFixed(2)}`);

        // Depop Fee
        const depopFee = 0.1;
        const depopTotal = depopFee * sellAmount;
        const depopProfit = sellAmount - depopTotal;
        feeDetails.push(`Depop Fee: $${depopTotal.toFixed(2)} | Profit: $${depopProfit.toFixed(2)}`);

        // StockX Fee
        const stockxFee = 0.09;
        const stockxTotal = stockxFee * sellAmount;
        const stockxProfit = sellAmount - stockxTotal;
        feeDetails.push(`StockX Fee: $${stockxTotal.toFixed(2)} | Profit: $${stockxProfit.toFixed(2)}`);

        // Goat Fee
        const goatFee = 0.095;
        const goatTotal = goatFee * sellAmount;
        const goatProfit = sellAmount - goatTotal;
        feeDetails.push(`Goat Fee: $${goatTotal.toFixed(2)} | Profit: $${goatProfit.toFixed(2)}`);

        // Etsy Fee
        const etsyFee = 0.082;
        const etsyTotal = etsyFee * sellAmount;
        const etsyProfit = sellAmount - etsyTotal;
        feeDetails.push(`Etsy Fee: $${etsyTotal.toFixed(2)} | Profit: $${etsyProfit.toFixed(2)}`);

        // Poshmark Fee
        let poshmarkTotal, poshmarkProfit;
        if (sellAmount < 15) {
            poshmarkTotal = sellAmount - 2.95;
            poshmarkProfit = sellAmount - 2.95;  // No fee percentage for sales under $15
        } else {
            const poshmarkFee = 0.2;
            poshmarkTotal = sellAmount * poshmarkFee;
            poshmarkProfit = sellAmount - poshmarkTotal;
        }
        feeDetails.push(`Poshmark Fee: $${poshmarkTotal.toFixed(2)} | Profit: $${poshmarkProfit.toFixed(2)}`);

        // Mercari Fee
        const mercariFee = 0.1;
        const mercariProcessingFee = 0.029 + 0.30;  // Processing fee
        const mercariBTotal = sellAmount * mercariFee;
        const mercariTotal = mercariBTotal + mercariProcessingFee;
        const mercariProfit = sellAmount - mercariTotal;
        feeDetails.push(`Mercari Fee: $${mercariTotal.toFixed(2)} | Profit: $${mercariProfit.toFixed(2)}`);

        // Display all fee details
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = feeDetails.join("<br>");
        resultDiv.style.display = "block";

        // Hide error if any
        document.getElementById("error").style.display = "none";

    } else {
        showError("The sale price can't be negative!");
    }
}

function showError(message) {
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    document.getElementById("result").style.display = "none";
}

// Event listener for button click
document.getElementById("calculateBtn").addEventListener("click", function() {
    const salePrice = parseFloat(document.getElementById("salePrice").value);
    if (isNaN(salePrice)) {
        showError("Please enter a valid sale price!");
    } else {
        calculateFee(salePrice);
    }
});
