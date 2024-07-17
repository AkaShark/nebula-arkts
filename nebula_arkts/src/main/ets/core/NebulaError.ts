class NebulaError extends Error {
  public code: string = "ERR_NEBULA"
  public errno: number = 0;

  constructor(errno: number, message: string) {
    super(message);
    this.errno = errno;
  }
}

export default NebulaError