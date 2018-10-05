'use strict';

var ytdl = require('ytdl-run');
var fs = require('fs');
var commandExists = require('command-exists').sync;



async function downloadIt () {

  if (commandExists('youtube-dl')) {
    console.log('the youtube-dl binary exists')
  }
  else {
    console.log('the youtube-dl binary does NOT exist!')
  }


  try {
    await ytdl('https://youtu.be/q6EoRBvdVPQ')
  }
  catch (err) {
    console.error(err)
  }
}


downloadIt()

