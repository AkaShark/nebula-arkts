interface ConnectionOption {
  host: string;
  prot: number;
  userName: string;
  password: string;
  space: string;
}

interface EndPoint {
  host: string;
  prot: number;
}

interface ClientOption {
  servers: string[] | EndPoint[];
  userName: string;
  password: string;
  space: string; // database name
  poolSize?: number; // connect pool size default 5
  bufferSize?: number;
  executeTimeout?: number;
  pingInterval?: number; // heartbeat time
}

interface ConnectionInfo {
  connectionId: string;
  host: string;
  prot: number;
  space: string;
  isReady: boolean;
}

enum ConnectionEvents {
  connectionReadyEvent = 0,
  connectionErrorEvent,
  connectionConnectedEvent,
  connectionAuthorizedEvent,
  connectionReconnectingEvent,
  connectionCloseEvent
}

export {
  EndPoint,
  ClientOption,
  ConnectionInfo,
  ConnectionEvents,
  ConnectionOption
}

