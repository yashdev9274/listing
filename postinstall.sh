#!/bin/bash
if [ "$VERCEL" = "1" ]; then
  npx prisma generate
fi
