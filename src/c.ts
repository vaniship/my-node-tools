import axios from 'axios';
import dayjs from 'dayjs';

;(async() => {
  const to = 'CNY';
  const date = dayjs().format('YYYY-MM-DD');
  let form;
  let res;
  let rate;
  let currentPrice;

  form = 'USD';
  res = await axios.get(`https://api.exchangerate.host/convert?from=${form}&to=${to}&date=${date}`);
  rate = res.data.result
  res = await axios.get(`https://sp1.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=5353&group=quotation_minute_hk&query=JD&code=JD&all=1`);
  currentPrice = res.data.Result[0].DisplayData.resultData.tplData.result.pankouinfos.origin_pankou.currentPrice - 0
  console.log(`USA(${currentPrice} * ${rate}): `, (rate * currentPrice).toFixed(2));

  form = 'HKD';
  res = await axios.get(`https://api.exchangerate.host/convert?from=${form}&to=${to}&date=${date}`);
  rate = res.data.result

  res = await axios.get(`https://sp1.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=5353&group=quotation_minute_hk&query=09618&code=09618&all=1`);
  currentPrice = res.data.Result[0].DisplayData.resultData.tplData.result.pankouinfos.origin_pankou.currentPrice - 0
  console.log(`HK(${currentPrice} * ${rate} * 2): `, (rate * currentPrice * 2).toFixed(2));

})()
