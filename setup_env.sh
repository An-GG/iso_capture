#/usr/bin/env bash

## you just want to use the local typescript compiler in the node modules folder
SCRIPT_DIR="$(pwd)"
echo "guessing PROJECT ROOT: $(pwd)"

PROJECT_BIN="$SCRIPT_DIR/nb/bin"
export PATH="$PROJECT_BIN:$PATH"
echo "finished adding $PROJECT_BIN to the top of your path"
echo "\n"
echo "your new PATH ordering is\n"
echo $PATH | sed 's/:/:\n/g'

echo "\n"
