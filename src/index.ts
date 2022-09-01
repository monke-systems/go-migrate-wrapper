import { Migrate } from './migrate';

const main = () => {
  const migrate = new Migrate();

  const res = migrate.up({
    source: 'file://migrations',
    database: 'mysql://root:123321a@tcp(10.43.184.163:3306)/test_db',
  });

  console.log(res);
};

main();
