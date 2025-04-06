function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "請輸入有效數字！";
        return;
    }
    
    const result = num1 + num2;
    document.getElementById("result").textContent = `結果：${result}`;
}
