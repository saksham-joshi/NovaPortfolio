#!/bin/bash

# Only build if files in these directories changed
BUILD_DIRS="src/ public/ package.json pnpm-lock.yaml"

# Check if any files in build directories changed
git diff --name-only HEAD~1 HEAD | grep -qE "^($BUILD_DIRS)" && exit 1 || exit 0