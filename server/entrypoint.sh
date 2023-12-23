#!/bin/sh

python --version
echo "Working directory: $(pwd)"
echo "Command line arguments: $@"

run_service() {
	echo "Generating Alpheim config"
	env $(/config/.env | xargs) uvicorn server.app:app --host=0.0.0.0 --port=9999 --workers=4
}

run_service
