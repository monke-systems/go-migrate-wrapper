import { buildBinaryOpts } from './opts-builder';

describe('Opts builder', () => {
  it('Opts builder complex test', () => {
    const res = buildBinaryOpts({
      source: 'file://path/to/migrations',
      database: 'postgres://root:12#3@localhost:5432/database',
      prefetch: 40,
      lockTimeout: 50,
      verbose: true,
    });

    const expected =
      '-source "file://path/to/migrations" -database "postgres://root:12#3@localhost:5432/database" -prefetch "40" -lock-timeout "50" -verbose ';

    expect(res).toStrictEqual(expected);
  });
});
