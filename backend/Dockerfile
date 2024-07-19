# Stage 1: Base image with root filesystem
FROM scratch

# Add Ubuntu root filesystem
ADD rootfs.tar.gz /

# Install Python3 and pip
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository universe && \
    apt-get update && \
    apt-get install -y python3 python3-pip && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy application code
COPY . .

# Install Python dependencies
RUN pip3 install -r requirements.txt

# Expose port
EXPOSE 5000

# Start Flask application
CMD ["python3", "run.py"]