#!/usr/bin/env node
const Git = require('simple-git')
const moment = require('moment')

let now = moment().format('YYYY-MM-DD HH:mm:ss')

Git()
    .add('./*')
    .commit(':page_facing_up:' + now)
    .push(['-u', 'origin', 'master'], () => console.log('上传已完成' + now))
