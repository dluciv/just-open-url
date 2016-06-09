#!/usr/bin/env bash

target=$1
target=${target/just-open\:/}

xdg-open "$target"
if [ $? == 127 ]; then
  echo No xdg-open, likely running under Windows. Achtung!
  cmd /c start "" "$target"
  cmd_result=$?
  if [ $cmd_result != 0 ]; then
    echo Windows open URL result: $cmd_result
    read
  fi
fi
