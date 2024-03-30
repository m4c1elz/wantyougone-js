const { exec } = require("node:child_process")
const lyrics = require("./lyrics.js")

const music = exec("mpv wantyougone.mp3")
;(async () => {
    await music.stdout
    await lyrics()
})()
