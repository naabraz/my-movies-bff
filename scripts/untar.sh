#!/usr/bin/env sh
set -x

rm -rf build && \
mkdir build && \
mv package.tgz build && \
cd build && \
tar zxvf package.tgz -C .
rm package.tgz
