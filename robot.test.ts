import { Robot } from './robot';
import {
  crashExpected,
  crashInput,
  errorExpected,
  errorInput,
  walkThroughExpected,
  walkThroughInput,
} from './fixtures';

describe('Robot', () => {
  it('returns the expected success output', () => {
    const robot = Robot.build(JSON.stringify(walkThroughInput));

    const actual = robot.run();
    expect(actual).toEqual(walkThroughExpected);
  });

  it('returns the expected error output', () => {
    const robot = Robot.build(JSON.stringify(errorInput));

    const actual = robot.run();
    expect(actual).toEqual(errorExpected);
  });

  it('returns the expected crash output', () => {
    const robot = Robot.build(JSON.stringify(crashInput));

    const actual = robot.run();
    expect(actual).toEqual(crashExpected);
  });
});
