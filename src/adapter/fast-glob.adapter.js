const fg = require('fast-glob');

const read = async glob =>
  new Promise((resolve, reject) => {
    // let result = await to(fg.async(glob.entries),{});
    fg
      .async(glob.entries)
      .then(res => {
        resolve(res);
        return res;
      })
      .catch(e => {
        console.error(e);
        reject(e);
      });

    // if(result && result[0] && result[0].code){
    //   console.log('JOOOOOOOOOO');
    //   // glob.entries.push(
    //   //   '!'+result[0].path,
    //   // '!**/*'+result[0].path,
    //   // '!./**'+result[0].path,
    //   // '!.*/**/**'+result[0].path
    //   // );
    //   glob.entries.push('!'+result[0].path+'/**');
    //   console.log('glob.entries', glob.entries);
    //   result = await to(fg.async(glob.entries))
    //   console.log('========> result', result);
    //   resolve(result);
    // }
  });

const readSync = glob => {
  return fg.sync(glob.entries);
};
module.exports = {
  read: read,
  readSync: readSync,
};

// module.exports.async = async (query) => fg.async(query);
// module.exports.sync = (query) => fg.sync(query);
