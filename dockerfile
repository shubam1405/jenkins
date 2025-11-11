# 1. Start from Python 3.12 image
FROM python:3.8

# 2. Set working directory inside container
WORKDIR /main

# 3. Copy local files to container
COPY . /main



# 6. Command to run the app
CMD ["python", "main.py"]
