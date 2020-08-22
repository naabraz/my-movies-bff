#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  tar -czf package.tgz .
  scp package.tgz travis@nataliabraz.dev:~/build
else
  echo "Not deploying, since this branch isn't master."
fi
