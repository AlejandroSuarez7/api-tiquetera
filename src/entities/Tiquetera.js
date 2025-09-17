class Tiquetera {
    constructor({ NroTiquetera, cliente, saldo, totalTransacciones }) {
        this.NroTiquetera = NroTiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totalTransacciones = totalTransacciones || 0;
    }
}

module.exports = Tiquetera;
