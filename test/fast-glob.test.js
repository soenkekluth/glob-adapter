const adapter = require('../src').adapter;

describe('test fast-glob adapter', async () => {
  it('should read async', async () => {
    const glob = adapter('fast-glob');
    const res = await glob.read('./test/*.js');

    expect(res).toHaveLength(2);
  });

  it('should read async with folder', async () => {
    const glob = adapter('fast-glob');
    const res = await glob.read('test');

    expect(res).toHaveLength(2);
  });

  it('should readSync', () => {
    const glob = adapter('fast-glob');
    const res = glob.readSync('./test/*.js');
    expect(res).toHaveLength(2);
  });

  it('should work without adapter id', async () => {
    const glob = adapter();
    const res = await glob.read('./test/*.js');

    expect(res).toHaveLength(2);
  });
});
