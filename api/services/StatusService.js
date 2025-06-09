const StatusRepository = require('../repositories/StatusRepository');

class StatusService {
  async createStatus(data) {
    return StatusRepository.create(data);
  }

  async getAllStatus() {
    return StatusRepository.findAll();
  }

  async getStatusById(id) {
    return StatusRepository.findById(id);
  }

  async deleteStatus(id) {
    return StatusRepository.delete(id);
  }
}

module.exports = new StatusService();
