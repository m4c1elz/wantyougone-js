const delay = require("./delay.js")

async function writeDelay(texto, intervalo) {
    let index = 0

    async function writeLetters() {
        if (index < texto.length) {
            await process.stdout.write(texto.charAt(index))
            index++
            await delay(intervalo)
            await writeLetters()
        } else {
            process.stdout.write("\n")
        }
    }

    await writeLetters()
}

module.exports = writeDelay