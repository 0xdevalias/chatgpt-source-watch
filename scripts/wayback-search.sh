#!/bin/zsh

SCRIPT_NAME="$(basename $0)"

# Main function to parse command-line arguments and fetch data
main() {
  # Default values
  local url="https://cdn.oaistatic.com/"
  local mimetype="application/javascript"
  local status_code="404"
  local from=""
  local to=""
  local limit="10"

  # Function to display usage help
  usage() {
    echo "Usage: $SCRIPT_NAME [options]"
    echo
    echo "Options:"
    echo "  -u, --url             The base URL to search in the Wayback Machine  [Default: '$url']"
    echo "  -m, --mimetype        MIME type to filter by                         [Default: '$mimetype']"
    echo "  -s, --exclude-status  Status code to exclude                         [Default: '$status_code']"
    echo "  -f, --from            Start date in YYYYMMDD format                  [Optional]"
    echo "  -t, --to              End date in YYYYMMDD format                    [Optional]"
    echo "  -l, --limit           Limit the number of results                    [Default: '$limit']"
    echo "  -h, --help            Display this help message."
    echo
    echo "See also:"
    echo "  https://archive.org/help/wayback_api.php"
    echo "  https://ws-dl.blogspot.com/2013/07/2013-07-15-wayback-machine-upgrades.html"
    echo "  https://github.com/internetarchive/wayback/tree/master/wayback-cdx-server"
    echo "    (Note: this tool is currently based on this API)"
    exit 1
  }

  # Parse command-line arguments
  while [[ "$#" -gt 0 ]]; do
    case $1 in
      -u|--url) url="$2"; shift ;;
      -m|--mimetype) mimetype="$2"; shift ;;
      -s|--exclude-status) status_code="$2"; shift ;;
      -f|--from) from="$2"; shift ;;
      -t|--to) to="$2"; shift ;;
      -l|--limit) limit="$2"; shift ;;
      -h|--help) usage ;;
      *) echo "Unknown parameter: $1"; usage ;;
    esac
    shift
  done

  # Construct and execute the curl command
  local curl_cmd="curl --silent 'http://web.archive.org/cdx/search/cdx?url=$url&matchType=prefix&filter=mimetype:$mimetype&filter=!statuscode:$status_code&output=json&fl=original,timestamp&collapse=urlkey"
  [ -n "$from" ] && curl_cmd+="&from=$from"
  [ -n "$to" ] && curl_cmd+="&to=$to"
  curl_cmd+="&limit=$limit'"

  echo "\nAPI Command:" >&2
  echo "  $curl_cmd" >&2
  echo >&2

  eval $curl_cmd | \
  jq -r '.[0] as $keys | .[1:] | map(.[0] as $url | .[1] as $timestamp | {($keys[0]): $url, ($keys[1]): $timestamp}) | sort_by(.timestamp)'
}

# Run the main function with all passed arguments
main "$@"
