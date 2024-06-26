// 705.484.450-52 070.987.720-03

export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
    }

    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let digitos of cpfParcial) {
            total += reverso * Number(digitos);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequência()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}

// let validaCpf = new ValidaCPF('070.987.720-03');
// // validaCpf = new ValidaCPF('999.999.999-99');
// if(validaCpf.valida()) {
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido');
// }