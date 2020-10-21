(function(){
  return cookies = {
    set: (name, value, options = {}) => {
      let cookie = `${name}=`;

      if (
        Array.isArray(value) ||
        Object.prototype.toString.call(value) === '[object Object]'
      ) {
        cookie = cookie.concat(JSON.stringify(value));
      } else {
        cookie = cookie.concat(value);
      }

      if (options.expires) {
        const date = new Date();

        date.setTime(date.getTime() + 1000 * options.expires);
        cookie = cookie.concat(`; Expires=${date.toUTCString()}`);
      }

      if (options.path) {
        cookie = cookie.concat(`; Path=${options.path}`);
      }

      if (options.domain) {
        cookie = cookie.concat(`; Domain=${options.domain}`);
      }

      if (options.maxAge) {
        cookie = cookie.concat(`; Max-Age=${options.maxAge}`);
      }

      if (options.sameSite) {
        cookie = cookie.concat(`; SameSite=${options.sameSite}`);
      }

      if (options.secure) {
        cookie = cookie.concat('; Secure');
      }

      if (options.httpOnly) {
        cookie = cookie.concat('; HttpOnly');
      }

      document.cookie = cookie;
    },
    get: (name) => {
      let value = '';

      const cookie = document.cookie
        .split(';')
        .filter((item) => item.trim().indexOf(name) === 0);

      if (cookie.length) {
        value = cookie[0].replace(`${name}=`, '').trim();
      }

      return value;
    },
  };
})()
