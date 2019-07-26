#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "postgres" --dbname "postgres" <<-EOSQL
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE DATABASE example;
  CREATE DATABASE test;
  GRANT ALL PRIVILEGES ON DATABASE example TO postgres;
  GRANT ALL PRIVILEGES ON DATABASE test TO postgres;
EOSQL