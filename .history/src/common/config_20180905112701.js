//获取如 2018-01-01 00:00:00的时间戳
global.getTimeStampStart = function (time) {
  if (isNull(time)) return '';
  return new Date(new Date(time).toLocaleDateString()).getTime();
}
