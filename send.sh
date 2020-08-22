#!/bin/bash
set -xe

scp package.tgz travis@nataliabraz.dev:~/build
ssh travis@nataliabraz.dev 'bash -s' < ./untar.sh

echo "package sent"
