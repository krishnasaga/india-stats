#!/bin/bash

# Define an associative array where keys are directories and values are Node.js commands
declare -A commands
commands=(
    ["content"]="npm run dev"
    ["gatsby-starter-hello-world"]="npm run start"
)

# Function to run a command in the background
run_command() {
    local dir=$1
    local command=$2

    # Change to the directory
    cd "$dir" || { echo "Failed to change directory to $dir"; exit 1; }

    # Run the associated Node.js command in the background
    eval "${command}" &

    # Change back to the original directory
    cd - || { echo "Failed to change back to the original directory"; exit 1; }
}

# Loop through each directory and command
for dir in "${!commands[@]}"; do
    # Check if the directory exists
    if [ -d "$dir" ]; then
        echo "Running command in $dir"
        run_command "$dir" "${commands[$dir]}"
    else
        echo "Directory $dir does not exist."
    fi
done

# Wait for all background processes to finish
wait
