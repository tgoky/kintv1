(this.webpackJsonpKintsugi=this.webpackJsonpKintsugi||[]).push([[48],{3199:function(e,t,a){"use strict";a.r(t),a.d(t,"ccipRequest",(function(){return l})),a.d(t,"offchainLookup",(function(){return d})),a.d(t,"offchainLookupAbiItem",(function(){return i})),a.d(t,"offchainLookupSignature",(function(){return u}));var r=a(2363),s=a(1874);class n extends s.c{constructor(e){var t;let{callbackSelector:a,cause:r,data:n,extraData:c,sender:o,urls:u}=e;super(r.shortMessage||"An error occurred while fetching for an offchain result.",{cause:r,metaMessages:[...r.metaMessages||[],null!==(t=r.metaMessages)&&void 0!==t&&t.length?"":[],"Offchain Gateway Call:",u&&["  Gateway URL(s):",...u.map((e=>"    ".concat(Object(s.x)(e))))],"  Sender: ".concat(o),"  Data: ".concat(n),"  Callback selector: ".concat(a),"  Extra data: ".concat(c)].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class c extends s.c{constructor(e){let{result:t,url:a}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: ".concat(Object(s.x)(a)),"Response: ".concat(Object(r.s)(t))]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class o extends s.c{constructor(e){let{sender:t,to:a}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: ".concat(a),"OffchainLookup sender address: ".concat(t)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const u="0x556f1830",i={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function d(e,t){let{blockNumber:a,blockTag:c,data:u,to:d}=t;const{args:f}=Object(r.d)({data:u,abi:[i]}),[b,p,h,w,y]=f,{ccipRead:m}=e,g=m&&"function"===typeof(null===m||void 0===m?void 0:m.request)?m.request:l;try{if(!function(e,t){if(!Object(s.X)(e,{strict:!1}))throw new s.Y({address:e});if(!Object(s.X)(t,{strict:!1}))throw new s.Y({address:t});return e.toLowerCase()===t.toLowerCase()}(d,b))throw new o({sender:b,to:d});const t=await g({data:h,sender:b,urls:p}),{data:n}=await Object(r.c)(e,{blockNumber:a,blockTag:c,data:Object(s.k)([w,Object(r.e)([{type:"bytes"},{type:"bytes"}],[t,y])]),to:d});return n}catch(O){throw new n({callbackSelector:w,cause:O,data:u,extraData:y,sender:b,urls:p})}}async function l(e){let{data:t,sender:a,urls:n}=e,o=new Error("An unknown error occurred.");for(let l=0;l<n.length;l++){const e=n[l],f=e.includes("{data}")?"GET":"POST",b="POST"===f?{data:t,sender:a}:void 0;try{var u;const n=await fetch(e.replace("{sender}",a).replace("{data}",t),{body:JSON.stringify(b),method:f});let d;if(d=null!==(u=n.headers.get("Content-Type"))&&void 0!==u&&u.startsWith("application/json")?(await n.json()).data:await n.text(),!n.ok){var i;o=new r.H({body:b,details:null!==(i=d)&&void 0!==i&&i.error?Object(r.s)(d.error):n.statusText,headers:n.headers,status:n.status,url:e});continue}if(!Object(s.T)(d)){o=new c({result:d,url:e});continue}return d}catch(d){o=new r.H({body:b,details:d.message,url:e})}}throw o}}}]);
//# sourceMappingURL=48.3f79edf4.chunk.js.map