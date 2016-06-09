#!/bin/bash

pushd `dirname $0`
here=`pwd`
popd

# It is so for Arch Linux and possibly for some others too
if [ "$XDG_DATA_HOME" == "" ]; then
  echo Warning: XDG_DATA_HOME is not configured 
  export XDG_DATA_HOME=~/.data
fi

targetdir=$XDG_DATA_HOME/applications
echo Installing to $targetdir...
mkdir -p $targetdir

export XDG_UTILS_DEBUG_LEVEL=3

echo "[Desktop Entry]
Type=Application
Name=Just Open
MimeType=x-scheme-handler/just-open;
Exec=$here/just-open.sh %U
Icon=firefox
Categories=Network;
StartupNotify=true" >$targetdir/just-open-url.desktop

xdg-settings set default-url-scheme-handler just-open just-open-url.desktop

# Those two lines gave me great hopes, so I can't just remove them... %)
# xdg-mime default $targetdir/just-open-url.desktop x-scheme-handler/just-open
# update-desktop-database $targetdir

echo Done.
