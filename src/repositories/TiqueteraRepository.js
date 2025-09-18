const Tiquetera = require('../entities/Tiquetera');

class TiqueteraRepository {
    constructor() {
        this.tiqueteras = [];
        this.nextId = 1;
        this.totalTransaccionesGlobal = 0;
    }

    getAll() {
        return this.tiqueteras;
    }

    getById(id) {
        return this.tiqueteras.find(t => t.NroTiquetera === id);
    }

    create(data) {
        const tiquetera = new Tiquetera({
            ...data,
            NroTiquetera: this.nextId,
            Observaciones: data.Observaciones || ""
        });
        this.tiqueteras.push(tiquetera);
        this.nextId++;
        this.totalTransaccionesGlobal++;
        return tiquetera;
    }


    update(id, data) {
        const tiquetera = this.getById(id);
        if (!tiquetera) return null;
        tiquetera.cliente = data.cliente || tiquetera.cliente;
        tiquetera.saldo = data.saldo !== undefined ? data.saldo : tiquetera.saldo;
        tiquetera.Observaciones = data.Observaciones !== undefined ? data.Observaciones : tiquetera.Observaciones;
        tiquetera.totalTransacciones++;
        this.totalTransaccionesGlobal++;
        return tiquetera;
    }

    delete(id) {
        const index = this.tiqueteras.findIndex(t => t.NroTiquetera === id);
        if (index === -1) return null;
        const [deleted] = this.tiqueteras.splice(index, 1);
        deleted.totalTransacciones++;
        this.totalTransaccionesGlobal++;
        return deleted;
    }
    getTotalTransaccionesGlobal() {
        return this.totalTransaccionesGlobal;
    }
}

module.exports = new TiqueteraRepository();
