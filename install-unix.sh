#!/bin/bash

pushd `dirname $0`
here=`pwd`
popd

# It is so for Arch Linux and possibly for some others too
targetdir=~/.data/applications
mkdir -p $targetdir

echo Installing...

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
