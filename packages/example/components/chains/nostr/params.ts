export default {
  signEvent: [
    {
      id: 'signEvent',
      name: 'signEvent',
      value: JSON.stringify({
        created_at: 1700000000,
        kind: 1,
        content: 'UnionKey',
        tags: [],
      }),
    },
  ],
  signSchnorr: [
    {
      id: 'signSchnorr-32HexString',
      name: '32 位 Hex String',
      value: '2118c65161c7d68b4bdbe1374f658532670057ab1bb0c99937d0ff7cff45cb5e',
    },
    {
      id: 'signSchnorr',
      name: 'Hex String - 硬件报错符合预期',
      value: '010203',
    },
    // {
    //   id: 'signSchnorr-text',
    //   name: '普通文本',
    //   value: 'some text here',
    // }
  ],
  nip04encrypt: [
    {
      id: 'nip04encrypt',
      name: 'nip04encrypt',
      value: '010203',
    },
  ],
};
