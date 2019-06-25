#!/bin/bash
cd ui
npm run-script build
cp -r build/* ../public
cd ..
cf push

