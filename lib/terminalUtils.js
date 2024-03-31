function clearTerminal() {
    process.stdout.write("\x1b[2J\x1b[H")
}

function newLine() {
    process.stdout.write("\n")
}

export { clearTerminal, newLine }