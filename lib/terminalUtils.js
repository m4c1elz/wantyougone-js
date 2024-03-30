function clearTerminal() {
    process.stdout.write("\033c")
}

function newLine() {
    process.stdout.write("\n")
}

module.exports = { clearTerminal, newLine }