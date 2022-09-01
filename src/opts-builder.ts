import type { MigrateCommandOpts } from './types';

export const buildBinaryOpts = (opts: MigrateCommandOpts): string => {
  return Object.entries(opts)
    .map(([key, value]) => {
      const str = value.toString();
      const isBoolValue = typeof value === 'boolean';

      let keyRenamed = key;
      if (key === 'lockTimeout') {
        keyRenamed = 'lock-timeout';
      }

      return `-${keyRenamed} ${isBoolValue === true ? '' : `"${str}"`}`;
    })
    .join(' ');
};
