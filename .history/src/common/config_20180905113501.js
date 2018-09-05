//获取如 2018-01-01 00:00:00的时间戳
global.getTimeStampStart = function (time) {
  if (isNull(time)) return '';
  return new Date(new Date(time).toLocaleDateString()).getTime();
}
// 空字符判断
global.isNull = function (str) {
  if (str === 0) {
      return false;
  }
  if (str == "" || str == null || str == 'undefined' || str == '&nbsp;')
      return true;
  var regu = "^[ ]+$";
  var re = new RegExp(regu);
  return re.test(str);
};
