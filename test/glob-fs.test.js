const adapter = require('../src').adapter;

describe('test glob-fs adapter', async () => {
  it('should read async', async () => {
    const glob = adapter('glob-fs');
    const res = await glob.read('./test/*.js');
    expect(res).toHaveLength(2);
  });

  it('should readSync', () => {
    const glob = adapter('glob-fs');
    const res = glob.readSync('./test/*.*, *.js');
    expect(res).toHaveLength(0);
  });
});
