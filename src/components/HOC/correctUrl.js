const correctUrl = (pathname, to) => {
  if (pathname[pathname.length - 1] !== '/') {
    return `${pathname}/${to}`;
  }
  return `${pathname}${to}`;
};

export default correctUrl;
