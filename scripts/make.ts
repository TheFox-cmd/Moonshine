import { spawn } from "child_process";
import path from "path";

const root = path.resolve(process.cwd());

function tsc(args: string[], name: string) {
  return new Promise<void>((resolve, reject) => {
    console.log(`\n${name}...`);
    const p = spawn("node", ["./node_modules/typescript/bin/tsc", ...args], { stdio: "pipe" });

    p.stdout.on('data', data => process.stdout.write(`[${name}] ${data}`));
    p.stderr.on('data', data => process.stderr.write(`[${name}] ${data}`));

    p.on('error', reject);
    p.on('exit', code =>
      code === 0 ? resolve() : reject(new Error(`${name} exited with ${code}`))
    );
  });
}

try {
  // Script
  await tsc(["-b", "./src/backend", "./src/editor", "./src/game"], "Building: ");

  // await tsc(["-b", "./src/backend"], "Building backend: ");
  // await tsc(["-b", "./src/editor"], "Building editor: ");
  // await tsc(["-b", "./src/game"], "Building game: ");

} catch (e) {
console.error(`\nBuild failed: ${e}`);
} finally {
  process.exit(1);
}