import { Robot } from './robot';

process.stdin.on('data', (data) => {
  const robot = Robot.build(data.toString().replace(/\s/g, ''));
  const output = robot.run();
  process.stdout.write(JSON.stringify(output));
});
