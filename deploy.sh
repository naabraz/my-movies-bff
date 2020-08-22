#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  cd opt
  cd website
  cd public
  git init

  git remote add deploy "travis@nataliabraz.dev:/home/naabraz/app"
  git config user.name "Travis CI"
  git config user.email "naabraz@gmail.com"

  git add .
  git commit -m "Deploy"
  git push --force deploy master
else
  echo "Not deploying, since this branch isn't master."
fi
