module.exports = function getArgv(argv) {
  return argv
    .slice(2)
    .map(item => {
      if (item.indexOf(' ') > -1) {
        return `'${item}'`;
      } else {
        return item;
      }
    })
    .join(' ');
};
