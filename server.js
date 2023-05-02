#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';

import {rps, rpsls } from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = args.port || 5000;


