#!/usr/bin/env bash

EXCLUDE_FILES="
node_modules
.idea
applitools.private.config.js
"

VAR=""
for ELEMENT in $EXCLUDE_FILES; do
  VAR+="-e ${ELEMENT} "
done
