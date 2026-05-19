document.getElementById("calculate-btn").addEventListener("click", function() {
    console.log("Calculate button clicked");
    const fuelEfficiency = parseFloat(document.getElementById("fuel_efficiency").value);
    const gasPrice = parseFloat(document.getElementById("gas_price").value);
    const distance = parseFloat(document.getElementById("distance").value);
    const tollFees = parseFloat(document.getElementById("toll_fees").value) || 0;

    // 計算ロジック
    const fuelConsumption = distance / fuelEfficiency;
    const fuelCost = fuelConsumption * gasPrice;
    const totalCost = fuelCost + tollFees;
    console.log("totalCost: " + totalCost);
    // 結果を表示
    document.getElementById("result").innerHTML = "合計コスト: " + totalCost.toFixed(0) + " 円";
});