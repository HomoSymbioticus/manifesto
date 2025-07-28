#!/usr/bin/env node

import { ritual } from './lib/ritual.js'
import { reflect } from './lib/reflect.js'
import { fuse } from './lib/fuse.js'

const [, , command, ...args] = process.argv;

switch (command) {
  case 'ritual':
    ritual();
    break;
  case 'reflect':
    reflect();
    break;
  case 'fuse':
    fuse(args.join(' '));
    break;
  default:
    console.log('Comandos disponibles: ritual, reflect, fuse <texto>');
}
