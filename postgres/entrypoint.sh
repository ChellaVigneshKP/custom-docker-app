#!/bin/bash
set -e

# Update PostgreSQL configuration
echo "listen_addresses = '*'" >> /etc/postgresql/16/main/postgresql.conf
echo "host    all             all             0.0.0.0/0           md5" >> /etc/postgresql/16/main/pg_hba.conf

# Start PostgreSQL
/usr/lib/postgresql/16/bin/postgres -D /var/lib/postgresql/data -c config_file=/etc/postgresql/16/main/postgresql.conf &

# Wait for PostgreSQL to start
until pg_isready -U postgres; do
  echo "Waiting for PostgreSQL to start..."
  sleep 2
done

# Run additional SQL commands
psql -U postgres -c "ALTER USER postgres PASSWORD 'password';"

# Keep the container running
wait
