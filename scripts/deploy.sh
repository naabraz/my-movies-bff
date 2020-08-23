#!/usr/bin/env sh
set -x

cd $HOME/build/naabraz && \
tar -czf package.tgz my-movies-bff && \
scp package.tgz travis@nataliabraz.dev:~ && \
cd $TRAVIS_BUILD_DIR && \
ssh travis@nataliabraz.dev 'bash -s' < ./scripts/untar.sh
