#! /bin/sh

# Path to the JSON data file.
if [ -z "$NSANAME_JSON" ]; then
    NSANAME_JSON=src/nsaname.json
fi

usage() {
    cat <<EOF

NSA Name

  Like petname, but for naming secret projects and tools.

Options

  --help                   Print this usage guide.
  -l, --lowercase          Output in lowercase.
  -n, --no-suffix          Don't add a suffix.
  -h, --hostname           Output a sensible hostname.

EOF
    exit 0
}

# Default values for the options.
OPT_HOSTNAME=0
OPT_LOWERCASE=0
OPT_NO_SUFFIX=0

# Parse long options manually.
for arg in "$@"; do
    case "$arg" in
    --help)
        usage
        ;;

    --lowercase)
        OPT_LOWERCASE=1
        ;;

    --no-suffix)
        OPT_NO_SUFFIX=1
        ;;

    --hostname)
        OPT_HOSTNAME=1
        ;;
    esac
done

# Parse short options using `getopts`.
OPTIND=1
while getopts lnh opt; do
    case "$opt" in
    h)
        OPT_HOSTNAME=1
        ;;

    l)
        OPT_LOWERCASE=1
        ;;

    n)
        OPT_NO_SUFFIX=1
        ;;

    *)
        usage
        ;;
    esac
done

if [ ! -f "$NSANAME_JSON" ]; then
    echo "Error: $NSANAME_JSON not found." >&2
    exit 1
fi

# A portable random integer generator.
rand() {
    if ! [ -r /dev/urandom ]; then
        printf "cannot access /dev/urandom\n" >&2
        return 1
    fi

    # Use od(1) to read four random bytes and convert them to decimal.
    # Remove whitespace and leading zeroes.
    od -A n -N 4 -t u4 </dev/urandom | sed 's|^ *0*||;s| *$||'
}

SEPARATOR=
if [ "$OPT_HOSTNAME" -eq 1 ]; then
    SEPARATOR=-
fi

# Fetch random words using jq.
# Use the `rand` function to generate random numbers.
FIRST=$(jq -r '.first | .[$r % length]' --argjson r "$(rand)" "$NSANAME_JSON")
SECOND=$(jq -r '.second | .[$r % length]' --argjson r "$(rand)" "$NSANAME_JSON")

NAME=${FIRST}${SEPARATOR}${SECOND}

# Handle the suffix.
if [ "$OPT_HOSTNAME" -eq 0 ] && [ "$OPT_NO_SUFFIX" -eq 0 ]; then
    SUFFIX=$(jq -r '.suffixes | .[$r % length]' --argjson r "$(rand)" "$NSANAME_JSON")
    NAME="$NAME $SUFFIX"
fi

# Handle lowercase.
if [ "$OPT_LOWERCASE" -eq 1 ] || [ "$OPT_HOSTNAME" -eq 1 ]; then
    NAME=$(echo "$NAME" | tr '[:upper:]' '[:lower:]')
fi

echo "$NAME"
