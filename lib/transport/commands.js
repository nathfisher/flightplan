var util = require('util');

var common = [
	'awk',
	'cat',
	'cd',
	'chgrp',
	'chmod',
	'chown',
	'cp',
	'echo',
	'find',
	'ftp',
	'grep',
	'groups',
	'hostname',
	'kill',
	'ln',
	'whoami',
	'ls',
	'mkdir',
	'mv',
	'ps',
	'pwd',
	'rm',
	'rmdir',
	'scp',
	'sed',
	'tail',
	'tar',
	'touch',
	'unzip',
	'whoami',
	'zip'
];

var extra = [
	'git',
	'hg',
	'node',
	'npm',
	'rsync',
	'svn'
];

module.exports = common.concat(extra);