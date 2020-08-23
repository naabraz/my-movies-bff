#!/usr/bin/env sh
set -x

tar -czf package.tgz . && \
scp package.tgz travis@nataliabraz.dev:~/build && \
ssh travis@nataliabraz.dev 'bash -s' < ./untar.sh
