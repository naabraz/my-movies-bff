#!/usr/bin/env sh
set -x

rm -rf build && \
mkdir build && \
mv package.tgz build && \
cd build && \
tar zxvf package.tgz -C . && \
cp ~/.env my-movies-bff && \
rm package.tgz
