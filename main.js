function calcularDesconto() {

    let compra = Number(document.getElementById("valorCompra").value);

    let desconto = 0;

    if (compra > 500) {
        desconto = compra * 0.10;
    } else if (compra > 100) {
        desconto = compra * 0.05;
    }

    let valorFinal = compra - desconto;

    if (document.getElementById("valorCompra").value === "" || compra < 0) {
        document.getElementById("resultado").innerHTML =
            "<p>Digite um valor válido para a compra.</p>";
        return;
    }

    document.getElementById("resultado").innerHTML = `
        <p><strong>Valor da compra:</strong> ${compra.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>

        <p><strong>Valor do desconto:</strong> ${desconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>

        <p><strong>Valor final:</strong> ${valorFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
    `;
}