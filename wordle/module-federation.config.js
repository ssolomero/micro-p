module.exports = {
  name: 'wordle',
  exposes: {
    './Module': 'wordle/src/app/remote-entry/entry.module.ts',
  },
};
