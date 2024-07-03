import { CommandValidator, Coordinate, Heading, Output } from './types';
import { Arena } from './arena';

export class Robot {
  public static build = (input: string): Robot => {
    const command = CommandValidator.parse(JSON.parse(input));
    return new Robot(command.heading, command.location, command.directions, new Arena(command.arena));
  };
  private constructor(
    private heading: Heading,
    private location: Coordinate,
    private directions: string[],
    private arena: Arena,
    private path: string[] = []
  ) {}

  public run = (): Output => {
    for (const direction of this.directions) {
      const result = this.move(direction);

      if (result !== 'success') {
        return {
          status: result.failure,
          location: this.location,
          heading: this.heading,
          path: this.path,
        };
      }
    }

    return {
      status: 'ok',
      location: this.location,
      heading: this.heading,
      path: this.path,
    };
  };

  private move = (movement: string): 'success' | { failure: 'crash' | 'error' } => {
    if (!this.arena.isWithinArena(this.location)) {
      return { failure: 'crash' }
    }

    this.updatePath(movement);

    if (movement === 'forward') {
      this.location = this.getNextLocation();
      return this.arena.isWithinArena(this.location) ? 'success' : { failure: 'crash' };
    }

    if (movement === 'left' || movement === 'right') {
      this.heading = this.getNextHeading(movement);
      return 'success';
    }

    return { failure: 'error' };
  };

  private getNextLocation = () => {
    switch (this.heading) {
      case 'north':
        return { ...this.location, y: this.location.y + 1 };
      case 'south':
        return { ...this.location, y: this.location.y - 1 };
      case 'east':
        return { ...this.location, x: this.location.x + 1 };
      case 'west':
        return { ...this.location, x: this.location.x - 1 };
    }
  };

  private getNextHeading = (move: 'left' | 'right'): Heading => {
    const headingMap: Record<Heading, Record<'left' | 'right', Heading>> = {
      north: {
        left: 'west',
        right: 'east',
      },
      south: {
        left: 'east',
        right: 'west',
      },
      east: {
        left: 'north',
        right: 'south',
      },
      west: {
        left: 'south',
        right: 'north',
      },
    };

    return headingMap[this.heading][move];
  };

  private updatePath = (movement: string) => {
    this.path = [...this.path, movement];
  };
}
