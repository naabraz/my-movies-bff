#!/bin/bash
set -xe

scp package.tgz travis@nataliabraz.dev:~/build

echo "package sent"
