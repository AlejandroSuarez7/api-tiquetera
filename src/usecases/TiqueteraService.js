const tiqueteraRepository = require('../repositories/TiqueteraRepository');

class TiqueteraService {
    getAll() {
        return tiqueteraRepository.getAll();
    }

    getById(id) {
        return tiqueteraRepository.getById(Number(id));
    }

    create(data) {
        return tiqueteraRepository.create(data);
    }

    update(id, data) {
        return tiqueteraRepository.update(Number(id), data);
    }

    delete(id) {
        return tiqueteraRepository.delete(Number(id));
    }
}

module.exports = new TiqueteraService();
