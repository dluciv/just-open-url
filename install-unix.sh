#!/bin/bash

pushd `dirname $0`
here=`pwd`
popd

echo run with sudo
echo Installing...

#targetdir=~/.local/share/applications
targetdir=/usr/share/applications

echo "[Desktop Entry]
Type=Application
Name=Just Open
MimeType=x-scheme-handler/just-open;
Exec=\"$here/just-open.sh\" %U
Icon=firefox
Categories=Network;
StartupNotify=true" >$targetdir/just-open-url.desktop

xdg-mime default just-open-url.desktop x-scheme-handler/just-open
update-desktop-database $targetdir