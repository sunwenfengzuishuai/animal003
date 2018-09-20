var http = require('superagent')
var base = require('./base').default
var url = base.root

export default {
  async queryTrade(pageNo, pageSize, elementid, oiefid, itemid, name, oiecountryid, year){
    var resp = await http.post(url + 'trade/special/trade/query').query( {pageNo:pageNo, pageSize:pageSize, elementid:elementid, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
    return resp.body;
  },
  async queryTradeReportByAnimalfamily(afid, name, oiecountryid, year, pageNo, pageSize,){
    var resp = await http.post(url + 'trade/special/report/queryReportByAnimalfamily').query({ afid:afid, name:name, oiecountryid:oiecountryid, year:year, pageNo:pageNo, pageSize:pageSize});
    return resp.body;
  },
  async queryTradeCountryPro(pageNo, pageSize, oiefid, itemid, name, oiecountryid, year){//畜牧生产模块查询活体动物
    var resp = await http.post(url + 'trade/special/product/query').query({pageNo:pageNo, pageSize:pageSize,oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
    return resp.body;
  },
  async queryTradeCountryPro1(pageNo, pageSize, oiefid, itemid, name, oiecountryid, year){//畜牧生产模块查询活体动物
    var resp = await http.post(url + 'trade/special/product/queryProducttion').query({pageNo:pageNo, pageSize:pageSize,oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
    return resp.body;
  },
  async queryTradeAnimalLiveCount(elementid, name, countryid, years){//活体动物统计（右一）
    var resp = await http.post(url + 'trade/special/trade/queryAnimalLiveCount').query({elementid:elementid, name:name, countryid:countryid, years:years});
    return resp.body;
  },
  async queryTradeAnimalYearCount(elementid, name, countryid,oiefid, itemid){//活体动物统计（右一）
    var resp = await http.post(url + 'trade/special/trade/queryAnimalYearCount').query({elementid:elementid,name:name, countryid:countryid, oiefid:oiefid, itemid:itemid});
    return resp.body;
  },
}
