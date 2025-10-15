#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';

console.log('Cleaning development cache...');

// Clean Next.js cache
if (existsSync('.next')) {
  rmSync('.next', { recursive: true, force: true });
  console.log('Cleaned .next directory');
}

// Clean node_modules cache
if (existsSync('node_modules/.cache')) {
  rmSync('node_modules/.cache', { recursive: true, force: true });
  console.log('Cleaned node_modules/.cache');
}

// Clean ESLint cache
if (existsSync('.eslintcache')) {
  rmSync('.eslintcache', { force: true });
  console.log('Cleaned .eslintcache');
}

console.log('Starting development server...');
execSync('npm run dev', { stdio: 'inherit' });
