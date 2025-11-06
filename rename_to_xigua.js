function operator(proxies, targetPlatform) {
  const _ = lodash;
  return proxies.map((p, i) => {
    _.set(p, 'name', `西瓜专线${i + 1}`); // 序号从1开始
    return p;
  });
}
