import Audic from "audic"
import lyrics from "./lyrics.js"

const music = new Audic("wantyougone.mp3")
music.volume = 0.4
;(async () => {
    await music.play()
    await lyrics()
})()
