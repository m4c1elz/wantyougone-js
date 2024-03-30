const delay = require("./delay.js")

async function writeDelay(text, interval) {
    let index = 0

    async function writeLetters() {
        if (index < text.length) {
            await process.stdout.write(text.charAt(index))
            index++
            await delay(interval)
            await writeLetters()
        } else {
            process.stdout.write("\n")
        }
    }

    await writeLetters()
}

module.exports = writeDelay