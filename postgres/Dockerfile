FROM scratch

# Add Ubuntu root filesystem
ADD rootfs.tar.gz /

# Install required packages and PostgreSQL 16
RUN apt-get update && \
    apt-get install -y wget gnupg lsb-release && \
    echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list && \
    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
    apt-get update && \
    apt-get install -y postgresql-16 postgresql-client-16 postgresql-contrib-16 && \
    rm -rf /var/lib/apt/lists/*


COPY ./entrypoint.sh /entrypoint.sh

# Make entrypoint.sh executable
RUN chmod +x /entrypoint.sh

# Set environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=postgres

# Expose port 5432
EXPOSE 5432

# Create the data directory and set permissions
RUN mkdir -p /var/lib/postgresql/data && chown -R postgres:postgres /var/lib/postgresql

# Set the default user to postgres
USER postgres

# Initialize the database
RUN /usr/lib/postgresql/16/bin/initdb -D /var/lib/postgresql/data

ENTRYPOINT ["/entrypoint.sh"]