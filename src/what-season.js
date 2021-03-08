const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {
  if(data==0)
  return null;
if(data.getMonth()>11)
{
  return 'Error';
}
else
{
  if(data.getMonth()<(-1))
  {
    return 'Error';
  }
  else
  {
    if(data.getMonth()==0||data.getMonth()==1||data.getMonth()==11)
    return 'winter';
    if(data.getMonth()==2||data.getMonth()==3||data.getMonth()==4)
    return 'spring';
    if(data.getMonth()==5||data.getMonth()==6||data.getMonth()==7)
    return 'summer';
    if(data.getMonth()==8||data.getMonth()==8||data.getMonth()==10)
    return 'autumn';
  }
  

}

// remove line with error and write your code here
};
