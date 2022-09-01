export type MigrateOpts = {
  binaryPath: string;
  disableBinaryTest: boolean;
  encodeDatabaseUrls: boolean;
};

export type MigrateCommandOpts = {
  source: string;
  database: string;
  path?: string;
  prefetch?: number;
  lockTimeout?: number;
  verbose?: boolean;
};
