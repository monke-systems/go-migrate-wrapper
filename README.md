# @monkee/go-migrate-wrapper package

## Description

Wrapper for golang cli tool [migrate](https://github.com/golang-migrate/migrate)

## Installation

First you need to [install the migrate tool](https://github.com/golang-migrate/migrate/tree/master/cmd/migrate#installation)

Then install the library

```bash
npm i @monkee/go-migrate-wrapper
```

## Example usage

```typescript
import { Migrate } from '@monkee/go-migrate-wrapper';

const main = () => {
  const migrate = new Migrate();

  migrate.up({
    source: 'file://migrations',
    database: 'mysql://root:123321@tcp(localhost:3306)/test_db',
  });
};

main();
```
