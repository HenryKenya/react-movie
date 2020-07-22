// flow-typed signature: 2eba16f65c54260602e5533ebfdd9830
// flow-typed version: c6154227d1/react-addons-perf_v15.x.x/flow_>=v0.25.x <=v0.103.x

declare module "react-addons-perf" {
  declare function start(): void;
  declare function stop(): void;
  declare function printWasted(): void;
  declare function getLastMeasurements(): mixed;
  declare function printInclusive(): void;
  declare function printExclusive(): void;
  declare function printOperations(): void;
}
