#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';

import  './lib/rpsls.js';
import rpsls from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = args.port || 5000;

app.get('/app/', (req, res) => {
	res.status(200).send("200 OK");
});

app.get('/app/rps/', (req, res) => {
	res.status(200).send(rpsls.rpsStd());
});

app.get('/app/rpsls/', (req, res) => {
	res.status(200).send(rpsls.rpslsStd());
});

app.post('/app/rps/play/', (req,res) => {
	res.status(200).send(rpsls.rps(req.body.shot));
});

app.post('/app/rpsls/play/', (req,res) => {
	res.status(200).send(rpsls.rspls(req.body.shot));
});

app.get('/app/rps/play/', (req,res) => {
	res.status(200).send(rpsls.rps(req.query.shot));
});

app.get('/app/rpsls/play/', (req,res) => {
	res.status(200).send(rpsls.rpsls(req.query.shot));
});

app.get('/app/rpsls/play/:shot/', (req,res) => {
	res.status(200).send(rpsls.rps(req.params.shot));
});

app.get('/app/rpsls/play/:shot/', (req,res) => {
	res.status(200).send(rpsls.rpsls(req.params.shot));
});

app.get('*', (req,res) => {
	res.status(404).send('404 NOT FOUND')
});

app.listen(port);	
