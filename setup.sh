#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 منهاجي - Monhaji Setup${NC}"
echo "================================"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js found: $(node -v)${NC}"

# Check npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ npm found: $(npm -v)${NC}"

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Failed to install dependencies${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Dependencies installed${NC}"

# Check for .env.local
if [ ! -f .env.local ]; then
    echo -e "${YELLOW}⚠️  .env.local not found. Creating from .env.example...${NC}"
    cp .env.example .env.local
    echo -e "${YELLOW}⚠️  Please update .env.local with your database credentials${NC}"
fi

# Run Prisma
echo -e "${YELLOW}🗄️  Setting up database...${NC}"
npx prisma db push

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Failed to setup database${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Database setup complete${NC}"

# Success message
echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}✓ Setup complete!${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
echo -e "${YELLOW}To start the development server, run:${NC}"
echo -e "${YELLOW}npm run dev${NC}"
echo ""
echo -e "Open ${YELLOW}http://localhost:3000${NC} in your browser"
