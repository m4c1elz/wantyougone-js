import delay from "./delay.js"
import chalk from "chalk"

export default async function writeDelay(text, interval) {
    let index = 0

    async function writeLetters() {
        if (index < text.length) {
           let char = text.charAt(index)
            await process.stdout.write(chalk.yellow(char))
            index++
            await delay(interval)
            await writeLetters()
        } else {
            process.stdout.write("\n")
        }
    }

    await writeLetters()
}
