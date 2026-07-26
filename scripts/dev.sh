#!/usr/bin/env bash

# Exit on error
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

USE_TERMS=false
if [ "$1" == "--terms" ] || [ "$1" == "-t" ]; then
    USE_TERMS=true
fi

echo "🚀 [Dev Master Script] Starting Fortschritt Healthcare dev suite..."
echo "   Tip: you can also just run 'pnpm run dev' from the project root!"

# 0. Kill any process occupying ports 3000 or 8000
echo "🧹 [0/3] Freeing ports 3000 and 5001..."
for PORT in 3000 5001; do
    PIDS=$(lsof -ti:$PORT 2>/dev/null || true)
    if [ -n "$PIDS" ]; then
        echo "  ⚠️  Port $PORT occupied by PID(s): $PIDS — terminating..."
        kill -9 $PIDS 2>/dev/null || true
    fi
done

# 1. Install Backend deps
echo "📦 [1/3] Checking Backend dependencies (Express / Prisma)..."
cd "$ROOT_DIR/backend"
if command -v pnpm &> /dev/null; then
    pnpm install --frozen-lockfile 2>/dev/null || pnpm install
else
    npm install
fi

# 2. Install Frontend deps
echo "📦 [2/3] Checking Frontend dependencies (Next.js)..."
cd "$ROOT_DIR/frontend"
if command -v pnpm &> /dev/null; then
    pnpm install --frozen-lockfile 2>/dev/null || pnpm install
else
    npm install
fi

# 3. Launch Services
if [ "$USE_TERMS" = true ]; then
    echo "🖥️  [3/3] Opening services in separate macOS Terminal windows..."
    # Backend — nodemon on port 8000
    osascript -e "tell application \"Terminal\" to do script \"cd '$ROOT_DIR/backend' && pnpm dev\"" >/dev/null
    sleep 1
    # Frontend — Next.js on port 3000
    osascript -e "tell application \"Terminal\" to do script \"cd '$ROOT_DIR/frontend' && pnpm dev\"" >/dev/null
    echo ""
    echo "✅ Terminals launched!"
    echo "   Backend  → http://localhost:5001"
    echo "   Frontend → http://localhost:3000"
else
    echo "✨ [3/3] Launching Backend (5001) & Frontend (3000) via concurrently..."
    cd "$ROOT_DIR"
    if command -v pnpm &> /dev/null; then
        pnpm dlx concurrently \
          --names "BACKEND,FRONTEND" \
          --prefix-colors "cyan,magenta" \
          --kill-others-on-fail \
          "cd '$ROOT_DIR/backend'  && pnpm dev" \
          "sleep 2 && cd '$ROOT_DIR/frontend' && pnpm dev"
    else
        npx -y concurrently \
          --names "BACKEND,FRONTEND" \
          --prefix-colors "cyan,magenta" \
          --kill-others-on-fail \
          "cd '$ROOT_DIR/backend'  && npm run dev" \
          "sleep 2 && cd '$ROOT_DIR/frontend' && npm run dev"
    fi
fi
