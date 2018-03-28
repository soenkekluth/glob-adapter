const Glob = require('./data/glob');
const create = require('./adapter/create');

class GlobAdapter {
  constructor(id) {
    this.engine = create(id);
  }

  async read(pattern, opts = {}) {
    const glob = new Glob(pattern, opts);
    const entries = await this.engine.read(glob);
    if (entries) {
      return entries;
    }
    return [];
  }

  readSync(pattern, opts = {}) {
    const glob = new Glob(pattern, opts);
    return this.engine.readSync(glob);
  }
}

const adapter = id => new GlobAdapter(id);

module.exports = GlobAdapter;
module.exports.adapter = adapter;
