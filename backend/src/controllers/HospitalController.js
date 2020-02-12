const Hospital = require('../models/Hospital');
//const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(req, res) {
        try {
            const hospitais = await Hospital.find();
            return res.json(hospitais);
        } catch (err) {
            return res.status(400).send({ error: 'Falha na listagem de hospitais' })
        }
    },
    async store(req, res) {
        try {
            const { email, password, latitude, longitude, name, phone, cnpj, cnes, city, state } = req.body;

            if (await Hospital.findOne({ email })) return res.status(400).send({ error: 'Hospital já cadastrado' });
            if (await Hospital.findOne({ cnes })) return res.status(400).send({ error: 'Hospital já cadastrado' });
            if (await Hospital.findOne({ cnpj })) return res.status(400).send({ error: 'Hospital já cadastrado' });

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            const hospital = await Hospital.create({
                email,
                password,
                name,
                location,
                phone,
                cnpj,
                cnes,
                city,
                state
            });
            hospital.password = undefined;
            return res.json(hospital);

        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro' })
        }
    },
    async update(req, res) {
        try {
            const { email, password, latitude, longitude, name, phone, cnpj, cnes, city, state} = req.body;

            if (email || password || cnpj || cnes ) return res.status(400).send({ error: 'Esses dados não podem ser atualizados' });
            const hospital = await Hospital.findByIdAndUpdate(req.params.id, {
                latitude,
                longitude,
                name,
                phone,
                state,
                city,
            }, { new: true });
            return res.json(hospital);
        } catch (err) {
            return res.status(400).send({ error: 'Falha na atualização do hospital' })
        }

    },
    async destroy(req, res) {
        try {
            await Hospital.findOneAndDelete(req.params.id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: 'Falha na remoção do hospital' });
        }
    },
}