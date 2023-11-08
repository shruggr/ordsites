function buildBScript(content, type, map) {
    const script = new bsvjs.Script()
      .writeOpCode(bsvjs.OpCode.OP_FALSE)
      .writeOpCode(bsvjs.OpCode.OP_RETURN)
      .writeBuffer(content)
      .writeBuffer(Buffer.from(type))

    if (map) {
      outScript
        .writeOpCode(Buffer.from("|"))
        .writeBuffer(Buffer.from("1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5"))
        .writeBuffer(Buffer.from("SET"));

      Object.entries(map).forEach(([key, value]) => {
        outScript
          .writeBuffer(Buffer.from(key))
          .writeBuffer(Buffer.from(value));
      });
    }
    return outScript.toHex();
 } 