class Tiquetera {
    constructor({ NroTiquetera, cliente, saldo, totalTransacciones, Observaciones }) {
        this.NroTiquetera = NroTiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totalTransacciones = totalTransacciones || 0;
        this.Observaciones = Observaciones || "";
    }
}

module.exports = Tiquetera;
