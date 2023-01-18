
function espumantePorPessoa() {
    const quant = parseInt(document.querySelector('#quant').value);

    if (quant > 0) {
        let result = ((quant / 2) + " garrafa(s)")
        document.querySelector("#quant").innerHTML;
        document.querySelector("#resultado").innerHTML = result
    } else {
        document.querySelector("#resultado").innerHTML = ("digite a quantidade de pessoas")
    }
}

function vinhoPorPessoa() {
    const quant = parseInt(document.querySelector('#quant').value);

    if (quant > 0) {
        let result = ((quant / 6) + " garrafa(s)")
        document.querySelector("#quant").innerHTML;
        document.querySelector("#resultado").innerHTML = result
    } else {
        document.querySelector("#resultado").innerHTML = ("digite a quantidade de pessoas")
    }
}