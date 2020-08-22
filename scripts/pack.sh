#!/bin/bash
set -xe

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

tar -czf package.tgz .
