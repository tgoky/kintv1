(this.webpackJsonpKintsugi=this.webpackJsonpKintsugi||[]).push([[44],{3269:function(t,a,i){"use strict";i.r(a),i.d(a,"OnRampApi",(function(){return s}));var n=i(143),o=i.n(n);class s{constructor(){this.api=void 0,this.api=o.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ONRAMP_URL||"https://onramp.beefy.finance"})}async getSupported(){return(await this.api.get("/onboard")).data}async getQuote(t){return(await this.api.post("/onboard/quote",t)).data}async getUrl(t){return(await this.api.post("/onboard/init",t)).data}}}}]);
//# sourceMappingURL=44.ea2beab2.chunk.js.map