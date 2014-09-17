#!/usr/bin/lsc
require! hackpad

{2:key, 3:secret, 4:pad-id, 5:site} = process.argv

if not (key and secret and pad-id)
  {1:filename} = /.*\/(.*)/exec process.argv.1
  console.log "Usage: ./#filename [key] [secret] [pad id] [site]"
  process.exit 0

options = site: site if site
client = new hackpad key, secret, options
err, revisions <- client.revisions pad-id
console.log JSON.stringify revisions, null, 2
