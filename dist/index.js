!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.lchColorUtils=n():t.lchColorUtils=n()}(this,(()=>{return t={55:(t,n,r)=>{const o=r(430),a=[.3457/.3585,1,.2958/.3585];function u(t){return t.map((function(t){let n=t<0?-1:1,r=Math.abs(t);return r<.04045?t/12.92:n*Math.pow((r+.055)/1.055,2.4)}))}function e(t){return t.map((function(t){let n=t<0?-1:1,r=Math.abs(t);return r>.0031308?n*(1.055*Math.pow(r,1/2.4)-.055):12.92*t}))}function i(t,n,r){return t.map(((t,o)=>t*(r===o?1:n)))}t.exports={lin_sRGB:u,gam_sRGB:e,lin_sRGB_to_XYZ:function(t){return o([[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],t)},XYZ_to_lin_sRGB:function(t){return o([[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],t)},lin_P3:function(t){return u(t)},gam_P3:function(t){return e(t)},lin_P3_to_XYZ:function(t){return o([[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],t)},XYZ_to_lin_P3:function(t){return o([[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]],t)},lin_ProPhoto:function(t){return t.map((function(t){let n=t<0?-1:1;return Math.abs(t)<=.03125?t/16:n*Math.pow(t,1.8)}))},gam_ProPhoto:function(t){return t.map((function(t){let n=t<0?-1:1,r=Math.abs(t);return r>=.001953125?n*Math.pow(r,1/1.8):16*t}))},lin_ProPhoto_to_XYZ:function(t){return o([[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],t)},XYZ_to_lin_ProPhoto:function(t){return o([[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]],t)},lin_a98rgb:function(t){return t.map((function(t){let n=t<0?-1:1,r=Math.abs(t);return n*Math.pow(r,563/256)}))},gam_a98rgb:function(t){return t.map((function(t){let n=t<0?-1:1,r=Math.abs(t);return n*Math.pow(r,256/563)}))},lin_a98rgb_to_XYZ:function(t){return o([[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],t)},XYZ_to_lin_a98rgb:function(t){return o([[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]],t)},lin_2020:function(t){const n=1.09929682680944;return t.map((function(t){let r=t<0?-1:1,o=Math.abs(t);return o<.08124285829863151?t/4.5:r*Math.pow((o+n-1)/n,1/.45)}))},gam_2020:function(t){const n=1.09929682680944;return t.map((function(t){let r=t<0?-1:1,o=Math.abs(t);return o>.018053968510807?r*(n*Math.pow(o,.45)-(n-1)):4.5*t}))},lin_2020_to_XYZ:function(t){return o([[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],t)},XYZ_to_lin_2020:function(t){return o([[1.7166511879712674,-.35567078377639233,-.25336628137365974],[-.6666843518324892,1.6164812366349395,.01576854581391113],[.017639857445310783,-.042770613257808524,.9421031212354738]],t)},D65_to_D50:function(t){return o([[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]],t)},D50_to_D65:function(t){return o([[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]],t)},XYZ_to_Lab:function(t){var n=t.map(((t,n)=>t/a[n])).map((t=>t>.008856451679035631?Math.cbrt(t):(903.2962962962963*t+16)/116));return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},Lab_to_XYZ:function(t){var n=24389/27,r=216/24389,o=[];return o[1]=(t[0]+16)/116,o[0]=t[1]/500+o[1],o[2]=o[1]-t[2]/200,[Math.pow(o[0],3)>r?Math.pow(o[0],3):(116*o[0]-16)/n,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/n,Math.pow(o[2],3)>r?Math.pow(o[2],3):(116*o[2]-16)/n].map(((t,n)=>t*a[n]))},Lab_to_LCH:function(t){var n=180*Math.atan2(t[2],t[1])/Math.PI;return[t[0],Math.sqrt(Math.pow(t[1],2)+Math.pow(t[2],2)),n>=0?n:n+360]},LCH_to_Lab:function(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]},XYZ_to_OKLab:function(t){var n=o([[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],t);return o([[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],n.map((t=>Math.cbrt(t))))},OKLab_to_XYZ:function(t){var n=o([[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],t);return o([[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],n.map((t=>t**3)))},OKLab_to_OKLCH:function(t){var n=180*Math.atan2(t[2],t[1])/Math.PI;return[t[0],Math.sqrt(t[1]**2+t[2]**2),n>=0?n:n+360]},OKLCH_to_OKLab:function(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]},rectangular_premultiply:function(t,n){return t.map((t=>t*n))},rectangular_un_premultiply:function(t,n){return 0===n?t:t.map((t=>t/n))},polar_premultiply:i,polar_un_premultiply:function(t,n,r){return 0===n?t:t.map(((t,o)=>t/(r===o?1:n)))},hsl_premultiply:function(t,n){return i(t,n,0)}}},430:t=>{t.exports=function(t,n){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(n[0])||(n=n.map((t=>[t])));let o=n[0].length,a=n[0].map(((t,r)=>n.map((t=>t[r])))),u=t.map((t=>a.map((n=>Array.isArray(t)?t.reduce(((t,r,o)=>t+r*(n[o]||0)),0):n.reduce(((n,r)=>n+r*t),0)))));return 1===r&&(u=u[0]),1===o?u.map((t=>t[0])):u}},287:(t,n,r)=>{const{gam_sRGB:o,XYZ_to_lin_sRGB:a,D50_to_D65:u,Lab_to_XYZ:e,LCH_to_Lab:i}=r(55);t.exports={LCH_to_sRGB:function(t){return o(a(u(e(i(t)))))}}},138:(t,n,r)=>{const o=r(130);t.exports={lchToRgb:o}},130:(t,n,r)=>{const{LCH_to_sRGB:o}=r(287);function a(t,n,r){var a=o([+t,+n,+r]);const u=5e-6;return a.reduce(((t,n)=>t&&n>=0-u&&n<=1+u),!0)}t.exports=function(t,n,r,u=100,e=!0){e&&([t,n,r]=function(t,n,r,o){if(o(t,n,r))return[t,n,r];let a=n,u=0;for(n/=2;a-u>1e-4;)o(t,n,r)?u=n:a=n,n=(a+u)/2;return[t,n,r]}(t,n,r,a));var i=o([+t,+n,+r]),_="rgb("+i.map((t=>Math.round(1e4*t)/100+"%")).join(" ")+function(t=100){return t<100?` / ${t}%`:""}(u)+")",c=i.map((t=>Math.round(1e4*t)/100));return{values:c,string:_}}}},n={},function r(o){var a=n[o];if(void 0!==a)return a.exports;var u=n[o]={exports:{}};return t[o](u,u.exports,r),u.exports}(138);var t,n}));