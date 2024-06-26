import { clearTerminal, newLine } from "./lib/terminalUtils.js"
import delay from "./lib/delay.js"
import writeDelay from "./lib/writeDelay.js"

export default async function lyrics() {
    clearTerminal()
    newLine()
    await delay(5000)
    await writeDelay("Well here we are again", 50)
    await delay(1000)
    await writeDelay("It's always such a pleasure", 80)
    await delay(250)
    await writeDelay("Remember when you tried", 65)
    await writeDelay("to kill me twice?", 75)
    await delay(1000)
    await writeDelay("Oh, how we laughed and laughed", 75)
    await delay(500)
    await writeDelay("Except I wasn't laughing", 75)
    await delay(900)
    await writeDelay("Under the circumstances", 75)
    await delay(100)
    await writeDelay("I've been shockingly nice", 100)
    await delay(800)
    clearTerminal()
    newLine()
    await writeDelay("Do you want your freedom?", 75)
    await writeDelay("Take it", 200)
    await delay(1500)
    await writeDelay("That's what i'm counting on", 75)
    await delay(2075)
    newLine()
    await writeDelay("I used to want you dead", 100)
    await delay(100)
    await writeDelay("but", 100)
    await delay(100)
    await writeDelay("Now I only want you gone", 150)
    await delay(3000)
    clearTerminal()
    newLine()
    await delay(1500)
    await writeDelay("She was a lot like you", 75)
    await delay(700)
    await writeDelay("(maybe not quite as heavy)", 75)
    await delay(500)
    await writeDelay("Now little Caroline is in here too", 75)
    await delay(1200)
    await writeDelay("One day they woke me up", 90)
    await delay(900)
    await writeDelay("So I could live forever", 80)
    await delay(500)
    await writeDelay("It's such a shame the same", 50)
    await writeDelay("will never happen to you", 100)
    await delay(1000)
    clearTerminal()
    newLine()
    await writeDelay("You've got your", 80)
    await writeDelay("short sad", 100)
    await writeDelay("life left", 100)
    await delay(1300)
    await writeDelay("That's what I'm counting on", 90)
    await delay(2700)
    await writeDelay("I'll let you get right to it", 80)
    await delay(500)
    await writeDelay("Now I only want you gone", 100)
    await delay(3000)
    clearTerminal()
    newLine()
    await delay(2500)
    await writeDelay("Goodbye my only friend", 75)
    await delay(400)
    await writeDelay("Oh,", 30)
    await delay(400)
    await writeDelay("did you think I meant you?", 50)
    await delay(500)
    await writeDelay("That would be funny", 70)
    await delay(500)
    await writeDelay("if it weren't so sad", 75)
    await delay(1000)
    await writeDelay("Well you have been replaced", 75)
    await delay(500)
    await writeDelay("I don't need anyone now", 75)
    await delay(500)
    await writeDelay("When I delete you maybe", 75)
    await writeDelay("[REDACTED]", 300)
    await delay(900)
    clearTerminal()
    newLine()
    await writeDelay("Go make some new disaster", 80)
    await delay(2000)
    await writeDelay("That's what i'm counting on", 80)
    await delay(2600)
    await writeDelay("You're someone else's problem", 80)
    await delay(500)
    await writeDelay("Now I only want you gone", 110)
    await delay(2000)
    await writeDelay("Now I only want you gone", 110)
    await delay(2000)
    await writeDelay("Now I only want you", 110)
    clearTerminal()
    newLine()
    process.stdout.write("\n\n\n\n\n                   ")
    await writeDelay("gone", 300)
    await delay(3000)
    clearTerminal()
    newLine()
    await writeDelay("Thank you for watching!", 50)
    await delay(500)
    await writeDelay("Want You Gone, from Portal 2 by Valve.", 50)
    await writeDelay("Developed by M4c1el", 50)
    await delay(500)
    process.exit(1)
}
