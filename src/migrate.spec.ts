import { Migrate } from './migrate';

describe('Migrate', () => {
  it('Should return true if migrate installed', () => {
    const migrate = new Migrate();

    expect(migrate.testBinary()).toBeTruthy();
  });

  it('Should return false if migrate not found', () => {
    const migrate = new Migrate({
      binaryPath: 'invalidPath',
    });

    expect(migrate.testBinary()).toBeFalsy();
  });
});
