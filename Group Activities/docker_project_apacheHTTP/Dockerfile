# Use official Ubuntu base image
FROM ubuntu:22.04

# Prevent interactive prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Update package list and install Python and necessary dependencies
RUN apt-get update && \
    apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Create a symbolic link for python
RUN ln -s /usr/bin/python3 /usr/bin/python

# Create working directory
WORKDIR /app

# Create a basic Python script
RUN echo '#!/usr/bin/env python3\n\
print("Hello from Docker container!")\n\
print("Container is running successfully!")\n\
print("Group Name: Apache HTTP")\n\
print("Python version:")\n\
import sys\n\
print(sys.version)' > /app/hello.py

# Make the script executable
RUN chmod +x /app/hello.py

# Define the entry point
ENTRYPOINT ["python3", "/app/hello.py"]
