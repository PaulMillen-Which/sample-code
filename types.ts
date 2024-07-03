import * as z from 'zod';

const HeadingValidator = z.union([z.literal('north'), z.literal('south'), z.literal('east'), z.literal('west')]);
export type Heading = z.TypeOf<typeof HeadingValidator>;

export const DirectionValidator = z.union([z.literal('forward'), z.literal('left'), z.literal('right')]);
type Direction = z.TypeOf<typeof DirectionValidator>;

const CoordianteValidator = z.object({
  x: z.number(),
  y: z.number(),
});
export type Coordinate = z.TypeOf<typeof CoordianteValidator>;

const ArenaCoordinatesValidator = z.object({
  corner1: CoordianteValidator,
  corner2: CoordianteValidator,
});

export type ArenaCoordindates = z.TypeOf<typeof ArenaCoordinatesValidator>;

export const CommandValidator = z.object({
  arena: ArenaCoordinatesValidator,
  location: CoordianteValidator,
  heading: HeadingValidator,
  directions: z.array(z.string()),
});

export type Command = z.TypeOf<typeof CommandValidator>;

type OutputStatus = 'ok' | 'crash' | 'error';
export interface Output {
  status: OutputStatus;
  location: Coordinate;
  heading: Heading;
  path: string[];
}
