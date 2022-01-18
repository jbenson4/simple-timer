const args = process.argv.slice(2);

for (const input of args) {
  if (args.length === 0 || input < 0 || !Number(input)) {
    return;
  }
  const sec = Number(input);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sec * 1000);
}