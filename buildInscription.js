function buildInscriptionScript(ownerAddress, content, type, map) {
    const script = bsvjs.Address.fromString(ownerAddress).toTxOutScript()
      .writeOpCode(bsvjs.OpCode.OP_FALSE)
      .writeOpCode(bsvjs.OpCode.OP_IF)
      .writeBuffer(Buffer.from("ord"))
      .writeOpCode(bsvjs.OpCode.OP_1)
      .writeBuffer(Buffer.from(type))
      .writeOpCode(bsvjs.OpCode.OP_0)
      .writeBuffer(content)
      .writeOpCode(bsvjs.OpCode.OP_ENDIF);

    if (map) {
      outScript
        .writeOpCode(bsvjs.OpCode.OP_RETURN)
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