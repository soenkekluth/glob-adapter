const regex = /,?[\s]+/g;

const appendWildcard = q => {
  let nq = q;
  nq = q.charAt(q.length - 1).match(/[^*]/) ? q + '*' : q;
  return nq;
};

const parse = (globString, wildcard = false) =>  {
  const res = globString.split(regex);
  if(wildcard){
    return res.map(i => appendWildcard(i));
  }
  return res;
}

const filter = entries => {
  const result = {
    include: [],
    exclude: [],
  };
  for (let i = 0, l = entries.length; i < l; i++) {
    const e = entries[i];
    (e.indexOf('!') === 0 && result.exclude.push(e.substr(1))) ||
      result.include.push(e);
  }
  return result;
};

function to(promise, errorExt) {
  return promise
      .then(function (data) { return [null, data]; })
      .catch(function (err) {
      if (errorExt) {
          Object.assign(err, errorExt);
      }
      return [err, undefined];
  });
}


module.exports = {
  to:to,
  regex:regex,
  parse: parse,
  filter: filter
};
//.map(entry => appendWildcard(entry))
