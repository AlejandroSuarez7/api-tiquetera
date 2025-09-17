const tiqueteraService = require('../usecases/TiqueteraService');

const getAll = (req, res) => {
    res.json(tiqueteraService.getAll());
    };

    const getById = (req, res) => {
    const tiquetera = tiqueteraService.getById(req.params.id);
    if (!tiquetera) return res.status(404).json({ error: 'No encontrada' });
    res.json(tiquetera);
    };

    const create = (req, res) => {
    const tiquetera = tiqueteraService.create(req.body);
    res.status(201).json(tiquetera);
    };

    const update = (req, res) => {
    const tiquetera = tiqueteraService.update(req.params.id, req.body);
    if (!tiquetera) return res.status(404).json({ error: 'No encontrada' });
    res.json(tiquetera);
    };

    const remove = (req, res) => {
    const tiquetera = tiqueteraService.delete(req.params.id);
    if (!tiquetera) return res.status(404).json({ error: 'No encontrada' });
    res.json(tiquetera);
};

module.exports = { getAll, getById, create, update, remove };
