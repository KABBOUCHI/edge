(function (template, ctx) {
  let out = '';
  ctx.set('$filename', 'set-tag/index.edge');
  ctx.set('username', 'nikk');
  out += `${ctx.escape(ctx.resolve('username'))}`;
  return out;
})(template, ctx)