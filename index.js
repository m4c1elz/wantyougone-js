import { exec } from "node:child_process"
import lyrics from "./lyrics.js"

const music = exec("mpv wantyougone.mp3")
;(async () => {
    await lyrics()
})()
