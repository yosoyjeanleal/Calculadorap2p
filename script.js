function calcularPrecioDolar() {
    const bolivares = parseFloat(document.getElementById("bolivares").value);
    const precioDolar = parseFloat(document.getElementById("precioDolar").value);
    const comisionBanco = parseFloat(document.getElementById("tipoComisionBanco").value);
    const comisionBilletera = parseFloat(document.getElementById("tipoComisionBilletera").value);

    // Calcular la comisión total
    const comisionTotal = (comisionBanco + comisionBilletera) / 100;

    // Calcular el monto en dólares considerando las comisiones
    const montoDolares = (bolivares / precioDolar) * (1 - comisionTotal);

    // Mostrar el resultado
    document.getElementById("montoDolares").textContent = montoDolares.toFixed(2) + " USD";
}

function calcularGanancia() {
    const bolivares = parseFloat(document.getElementById("bolivares").value);
    const precioDolar = parseFloat(document.getElementById("precioDolar").value);
    const precioVenta = parseFloat(document.getElementById("precioVenta").value);
    const montoDolares = parseFloat(document.getElementById("montoDolares").textContent);

    // Calcular el ingreso por la venta
    const ingresoVenta = montoDolares * precioVenta;

    // Calcular la ganancia
    const ganancia = ingresoVenta - bolivares;

    // Calcular la ganancia en dólares
    const gananciaDolares = ganancia / precioDolar;

    // Mostrar el resultado
    document.getElementById("ganancia").textContent = ganancia.toFixed(2) + " Bs";
    document.getElementById("gananciaDolares").textContent = gananciaDolares.toFixed(2) + " USD";
}
