#!/bin/zsh

SCRIPT_NAME="$(basename $0)"

# Main function to process URLs from standard input
main() {
  # Function to display usage help
  usage() {
    echo "Usage: echo 'URLs' | $SCRIPT_NAME"
    echo "       cat urls.txt | $SCRIPT_NAME"
    echo "       pbpaste | $SCRIPT_NAME"
    echo
    echo "This script checks the HTTP status codes for URLs provided via standard input."
    echo "It prints each URL along with its HTTP status code."
    echo
    echo "No options are needed to run this script, but you can use -h for this help message."
    exit 1
  }

  # Parse command-line arguments for any help request
  while [[ "$#" -gt 0 ]]; do
    case $1 in
      -h|--help) usage ;;
      *) echo "Unknown parameter: $1"; usage ;;
    esac
    shift
  done

  # Read URLs from standard input and check each one
  echo "Fetching HTTP status codes for URLs..."
  while read -r url; do
    if [ ! -z "$url" ]; then
      urlstatus=$(curl -o /dev/null -s -w "%{http_code}" "$url")
      echo "$url $urlstatus"
    fi
  done
}

# Run the main function with all passed arguments
main "$@"
