#!/bin/sh

python --version
echo "Working directory: $(pwd)"
echo "Command line arguments: $@"

run_service() {
	echo "Generating Alpheim config"
	env $(./config/.env | xargs) uvicorn server.app:app --host=127.0.0.1 --port=8000 --reload
}

run_service
