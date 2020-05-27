const Client = require('../models/client.model');

module.exports = {
  async getAll(req, res) {
    try {
      clients = await Client.find();
      res.status(200).json(clients); 
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findById(id);
      res.status(200).json(client);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      console.log(req.body);
      const client = await Client.create(req.body);
      res.status(200).json(client);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };

      const client = await Client.findByIdAndUpdate(id, req.body, options);

      res.status(200).json(client);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findByIdAndDelete(id);
      res.status(200).json(client);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}