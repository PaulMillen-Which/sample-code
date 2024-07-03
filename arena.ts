import { ArenaCoordindates, Coordinate } from './types';

export class Arena {
  constructor(private arenaCoordinates: ArenaCoordindates) {}

  public isWithinArena = (location: Coordinate): boolean => {
    const { corner1, corner2 } = this.arenaCoordinates;
    return location.x > corner1.x && location.x < corner2.x && location.y > corner1.y && location.y < corner2.y;
  };
}
