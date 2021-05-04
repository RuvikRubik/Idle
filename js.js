/*! js-cookie v3.0.0-beta.4 | MIT */
 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});
 !function(i,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("decimal.js")):"function"==typeof define&&define.amd?define(["decimal.js"],n):"object"==typeof exports?exports.numberformat=n(require("decimal.js")):i.numberformat=n(i["decimal.js"])}(this,function(i){return function(i){function n(l){if(t[l])return t[l].exports;var o=t[l]={exports:{},id:l,loaded:!1};return i[l].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=i,n.c=t,n.p="",n(0)}([function(i,n,t){(function(i){"use strict";function l(i){return i&&i.__esModule?i:{default:i}}function o(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function r(i,n){if(!i)throw new Error(n);return i}function e(i,n){var t=r(v[n.backend],"not a backend: "+n.backend);i=t.normalize(i,n);var l=t.index(i),o=n.suffixFn(l);if(Math.abs(i)<n.minSuffix)return Math.abs(i)>=n.minRound&&(i=Math.floor(i)),i.toLocaleString(void 0,{maximumSignificantDigits:n.sigfigs});if(!o&&""!==o)return i.toExponential(n.sigfigs-1).replace("e+","e");var e=t.prefix(i,l,n);return""+e+o}Object.defineProperty(n,"__esModule",{value:!0}),n.formatShort=n.formatFull=n.format=n.Formatter=n.Formats=void 0;var a=Object.assign||function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(i[l]=t[l])}return i},u=function(){function i(i,n){for(var t=0;t<n.length;t++){var l=n[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(i,l.key,l)}}return function(n,t,l){return t&&i(n.prototype,t),l&&i(n,l),n}}(),d=t(1),s=l(d),g=t(2),f=l(g),c=function(){return Math.log10?Math.log10:function(i){var n=Math.log(i)/Math.LN10;return n=Math.round(1e6*n)/1e6}}(),v={native:{normalize:function(i){return i},index:function(i){return Math.max(0,Math.floor(c(Math.abs(i))/3))},prefix:function(i,n,t){var l=t.sigfigs;return(i/Math.pow(1e3,n)).toPrecision(l)}},"decimal.js":{_requireDecimal:function(n){var l=void 0;return l=i.window&&window.Decimal?window.Decimal:t(3),l.clone(n)},normalize:function(i,n){var t=n.rounding,l=this._requireDecimal({rounding:t});return new l(i)},index:function(i){var n=this._requireDecimal();return i=new n(i),Math.floor(i.e/3)},prefix:function(i,n,t){var l=t.sigfigs,o=t.rounding,r=this._requireDecimal({rounding:o}),e=new r(1e3).pow(n);return new r(i).dividedBy(e).toPrecision(l)}}},p={backend:"native",flavor:"full",suffixGroup:"full",suffixFn:function(i){var n=this.suffixes||this.suffixGroups[this.suffixGroup];if(r(n,"no such suffixgroup: "+this.suffixGroup),i<n.length)return n[i]||""},minSuffix:1e5,minRound:0,sigfigs:3,format:"standard"},q=n.Formats={standard:{suffixGroups:s.default},longScale:{suffixGroups:f.default},scientific:{suffixGroups:{full:[],short:[]}},hybrid:{suffixGroups:{full:s.default.full.slice(0,12),short:s.default.short.slice(0,12)}},engineering:{suffixFn:function(i){return 0===i?"":"E"+3*i}}},m={full:{suffixGroup:"full",sigfigs:5},short:{suffixGroup:"short",sigfigs:3}};p.formats=q,p.flavors=m;var x=n.Formatter=function(){function i(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,i),this.opts=t;for(var l=Object.keys(this._normalizeOpts().flavors),r=0;r<l.length;r++)!function(i){var t=l[i],o="format"+t.charAt(0).toUpperCase()+t.substr(1);n[o]=function(i,l){return n.formatFlavor(i,t,l)}}(r)}return u(i,[{key:"_normalizeOpts",value:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=a({},this.opts,i);var n=i&&i.format,t=i&&i.formats||p.formats,l=t[n||p.format];r(l,"no such format: "+n);var o=i&&i.flavor,e=i&&i.flavors||p.flavors,u=e[o||p.flavor];return r(u,"no such flavor: "+o),a({},p,l,u,i)}},{key:"index",value:function(i,n){return n=this._normalizeOpts(n),v[n.backend].index(i)}},{key:"suffix",value:function(i,n){n=this._normalizeOpts(n);var t=v[n.backend].index(i);return n.suffixFn(t)}},{key:"format",value:function(i,n){return n=this._normalizeOpts(n),e(i,n)}},{key:"formatFlavor",value:function(i,n,t){return this.format(i,a({},t,{flavor:n}))}},{key:"listFormats",value:function(i){return i=this._normalizeOpts(i),Object.keys(i.formats)}}]),i}(),D=new x;D.defaultOptions=p,D.Formatter=x,n.default=D;n.format=function(i,n){return D.format(i,n)},n.formatFull=function(i,n){return D.formatFlavor(i,"full",n)},n.formatShort=function(i,n){return D.formatFlavor(i,"short",n)}}).call(n,function(){return this}())},function(i,n){i.exports={short:["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","UDc","DDc","TDc","QaDc","QiDc","SxDc","SpDc","ODc","NDc","Vi","UVi","DVi","TVi","QaVi","QiVi","SxVi","SpVi","OVi","NVi","Tg","UTg","DTg","TTg","QaTg","QiTg","SxTg","SpTg","OTg","NTg","Qd","UQd","DQd","TQd","QaQd","QiQd","SxQd","SpQd","OQd","NQd","Qq","UQq","DQq","TQq","QaQq","QiQq","SxQq","SpQq","OQq","NQq","Sg","USg","DSg","TSg","QaSg","QiSg","SxSg","SpSg","OSg","NSg","St","USt","DSt","TSt","QaSt","QiSt","SxSt","SpSt","OSt","NSt","Og","UOg","DOg","TOg","QaOg","QiOg","SxOg","SpOg","OOg","NOg"],full:[""," thousand"," million"," billion"," trillion"," quadrillion"," quintillion"," sextillion"," septillion"," octillion"," nonillion"," decillion"," undecillion"," duodecillion"," tredecillion"," quattuordecillion"," quinquadecillion"," sedecillion"," septendecillion"," octodecillion"," novendecillion"," vigintillion"," unvigintillion"," duovigintillion"," tresvigintillion"," quattuorvigintillion"," quinquavigintillion"," sesvigintillion"," septemvigintillion"," octovigintillion"," novemvigintillion"," trigintillion"," untrigintillion"," duotrigintillion"," trestrigintillion"," quattuortrigintillion"," quinquatrigintillion"," sestrigintillion"," septentrigintillion"," octotrigintillion"," noventrigintillion"," quadragintillion"," unquadragintillion"," duoquadragintillion"," tresquadragintillion"," quattuorquadragintillion"," quinquaquadragintillion"," sesquadragintillion"," septenquadragintillion"," octoquadragintillion"," novenquadragintillion"," quinquagintillion"," unquinquagintillion"," duoquinquagintillion"," tresquinquagintillion"," quattuorquinquagintillion"," quinquaquinquagintillion"," sesquinquagintillion"," septenquinquagintillion"," octoquinquagintillion"," novenquinquagintillion"," sexagintillion"," unsexagintillion"," duosexagintillion"," tresexagintillion"," quattuorsexagintillion"," quinquasexagintillion"," sesexagintillion"," septensexagintillion"," octosexagintillion"," novensexagintillion"," septuagintillion"," unseptuagintillion"," duoseptuagintillion"," treseptuagintillion"," quattuorseptuagintillion"," quinquaseptuagintillion"," seseptuagintillion"," septenseptuagintillion"," octoseptuagintillion"," novenseptuagintillion"," octogintillion"," unoctogintillion"," duooctogintillion"]}},function(i,n){i.exports={short:["","K","M","Md","B","Bd","T","Td","Qa","Qad","Qi","Qid","Sx","Sxd","Sp","Spd","Oc","Od","No","Nd","Dc","Dd","UDc","UDd","DDc","DDd","TDc","TDd","QaDc","QaDd","QiDc","QiDd","SxDc","SxDd","SpDc","SpDd","ODc","ODd","NDc","NDd","Vi","Vd","UVi","UVd","DVi","DVd","TVi","TVd","QaVi","QaVd","QiVi","QiVd","SxVi","SxVd","SpVi","SpVd","OVi","OVd","NVi","NVd","Tg","TD","UTg","UTD","DTg","DTD","TTg","TTD","QaTg","QaTD","QiTg","QiTD","SxTg","SxTD","SpTg","SpTD","OTg","OTD","NTg","NTD","Qd","QD","UQd","UQD","DQd","DQD","TQd","TQD","QaQd","QaQD"],full:[""," thousand"," million"," milliard"," billion"," billiard"," trillion"," trilliard"," quadrillion"," quadrilliard"," quintillion"," quintilliard"," sextillion"," sextilliard"," septillion"," septilliard"," octillion"," octilliard"," nonillion"," nonilliard"," decillion"," decilliard"," undecillion"," undecilliard"," duodecillion"," duodecilliard"," tredecillion"," tredecilliard"," quattuordecillion"," quattuordecilliard"," quinquadecillion"," quinquadecilliard"," sedecillion"," sedecilliard"," septendecillion"," septendecilliard"," octodecillion"," octodecilliard"," novendecillion"," novendecilliard"," vigintillion"," vigintilliard"," unvigintillion"," unvigintilliard"," duovigintillion"," duovigintilliard"," tresvigintillion"," tresvigintilliard"," quattuorvigintillion"," quattuorvigintilliard"," quinquavigintillion"," quinquavigintilliard"," sesvigintillion"," sesvigintilliard"," septemvigintillion"," septemvigintilliard"," octovigintillion"," octovigintilliard"," novemvigintillion"," novemvigintilliard"," trigintillion"," trigintilliard"," untrigintillion"," untrigintilliard"," duotrigintillion"," duotrigintilliard"," trestrigintillion"," trestrigintilliard"," quattuortrigintillion"," quattuortrigintilliard"," quinquatrigintillion"," quinquatrigintilliard"," sestrigintillion"," sestrigintilliard"," septentrigintillion"," septentrigintilliard"," octotrigintillion"," octotrigintilliard"," noventrigintillion"," noventrigintilliard"," quadragintillion"," quadragintilliard"," unquadragintillion"," unquadragintilliard"]}},function(n,t){n.exports=i}])});

var click = {
    money:0,
    zloto:0,
    upg: {
        drwal: {
            ilosc:0,
            cost:10,
            gps:1,
            nazwa:"drwal"
        },
        drwal2: {
            ilosc:0,
            cost: 50,
        gps:50,
        nazwa:"drwal2"
        }
    }
};

/*function exp() { 
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
var fs = require('fs');*/
var czas =  0;
function click2(thing){
    click[thing]++;
}

function upg_clicked(thing){
    if(click.money>= click.upg[thing].cost){
        click.money= click.money - click.upg[thing].cost;
        click.upg[thing].ilosc++;
        click.upg[thing].cost += Math.round(click.upg[thing].cost*0.2);
        update_upg();
    }
    
}

function update_upg(){
    document.querySelector("#upg").innerHTML ="";
    for(i in click.upg){
        document.querySelector("#upg").innerHTML += `<button onclick="upg_clicked('${i}')">${click.upg[i].nazwa}
        </button> masz: ${click.upg[i].ilosc}  gps: ${click.upg[i].gps*click.upg[i].ilosc} cena: ${numberformat.format(Number(click.upg[i].cost))}<br>`;
    }
}   

function aktualizacja(){
    if(Cookies.get("click") != null && Cookies.get("click") != "undefined"){
        var click3 = JSON.parse(Cookies.get("click"));
        for(i in click.upg){
            if(click3.upg[i] == null){
                click3.upg[i] = click.upg[i];
            }
        }
        click = click3;
    }
    update_upg();
     setInterval(()=> {
     for(i in click.upg){
        click.money+=click.upg[i].ilosc*click.upg[i].gps/20;
     }
    document.querySelector('#money').innerHTML = ': '+numberformat.format(Number( String(click.money).split(".")[0]));
    document.querySelector('#zloto').innerHTML = ': '+numberformat.format(Number(String(click.zloto).split(".")[0])); 
    czas++;
    if(czas >=10){
        Cookies.set("click",JSON.stringify(click), {expires: 100000});
        Cookies.set("lasttime", Date.now(), {expires: 100000});
        czas = 0;
    }
    },50)
}