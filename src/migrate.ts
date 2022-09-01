import { execSync } from 'child_process';
import { buildBinaryOpts } from './opts-builder';
import type { MigrateCommandOpts, MigrateOpts } from './types';
import { isError } from './utils';

const defaultMitrateOpts: MigrateOpts = {
  binaryPath: 'migrate',
  disableBinaryTest: false,
  encodeDatabaseUrls: true,
};

export class Migrate {
  private opts: MigrateOpts;

  constructor(opts: Partial<MigrateOpts> = {}) {
    // If you need to use nested opts, please install deep-merge
    this.opts = Object.assign(defaultMitrateOpts, opts);

    if (!this.opts.disableBinaryTest) {
      this.testBinary();
    }
  }

  testBinary(): boolean {
    try {
      this.runBinary('--help');
      return true;
    } catch (e) {
      if (isError(e)) {
        console.error(`Something wrong with 'migrate' binary.
Error message: '${e.message}'.
Do you installed it correclty?
https://github.com/golang-migrate/migrate/tree/master/cmd/migrate#installation`);

        return false;
      }

      throw e;
    }
  }

  up(opts: MigrateCommandOpts, n?: number) {
    const args = buildBinaryOpts(opts);

    return this.runBinary(`${args} up ${n !== undefined ? n : ''}`);
  }

  private runBinary(args: string) {
    const fullCommand = `${this.opts.binaryPath} ${args}`;

    return execSync(fullCommand, {
      stdio: 'pipe',
      encoding: 'utf-8',
    });
  }
}
