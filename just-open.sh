#!/usr/bin/env bash

target=$1
target=${target/just-open\:/}

xdg-open "$target"
if [ $? == 127 ]; then
  echo No xdg-open. Achtung!
fi
