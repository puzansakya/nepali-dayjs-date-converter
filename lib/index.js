"use strict";var S=Object.create;var y=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var U=(t,e)=>{for(var s in e)y(t,s,{get:e[s],enumerable:!0})},b=(t,e,s,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of k(e))!P.call(t,r)&&r!==s&&y(t,r,{get:()=>e[r],enumerable:!(n=j(e,r))||n.enumerable});return t};var f=(t,e,s)=>(s=t!=null?S(z(t)):{},b(e||!t||!t.__esModule?y(s,"default",{value:t,enumerable:!0}):s,t)),q=t=>b(y({},"__esModule",{value:!0}),t);var F={};U(F,{ADToBS:()=>N,BSToAD:()=>v,lookUp:()=>p});module.exports=q(F);var M=f(require("dayjs"));var p=()=>{let t=new Map;return t.set(1969,[0,31,31,32,31,31,31,30,29,30,29,30,31,366]),t.set(1970,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(1971,[0,31,31,32,31,32,30,30,29,30,29,30,30,365]),t.set(1972,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(1973,[0,30,32,31,32,31,30,30,30,29,30,29,31,365]),t.set(1974,[0,30,32,32,31,31,31,30,29,30,29,30,30,365]),t.set(1975,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(1976,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(1977,[0,30,32,31,32,31,31,29,30,29,30,29,31,365]),t.set(1978,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(1979,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(1980,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(1981,[0,31,31,31,32,31,31,29,30,30,29,30,30,365]),t.set(1982,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(1983,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(1984,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(1985,[0,31,31,31,32,31,31,29,30,30,29,30,30,365]),t.set(1986,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(1987,[0,31,32,31,32,31,30,30,29,30,29,30,30,365]),t.set(1988,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(1989,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(1990,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(1991,[0,31,32,31,32,31,30,30,30,29,29,30,30,365]),t.set(1992,[0,31,32,31,32,31,30,30,30,29,30,29,31,366]),t.set(1993,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(1994,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(1995,[0,31,32,31,32,31,30,30,30,29,29,30,30,365]),t.set(1996,[0,31,32,31,32,31,30,30,30,29,30,29,31,366]),t.set(1997,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(1998,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(1999,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2e3,[0,30,32,31,32,31,30,30,30,29,30,29,31,365]),t.set(2001,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2002,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2003,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2004,[0,30,32,31,32,31,30,30,30,29,30,29,31,365]),t.set(2005,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2006,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2007,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2008,[0,31,31,31,32,31,31,29,30,30,29,29,31,365]),t.set(2009,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2010,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2011,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2012,[0,31,31,31,32,31,31,29,30,30,29,30,30,365]),t.set(2013,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2014,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2015,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2016,[0,31,31,31,32,31,31,29,30,30,29,30,30,365]),t.set(2017,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2018,[0,31,32,31,32,31,30,30,29,30,29,30,30,365]),t.set(2019,[0,31,32,31,32,31,30,30,30,29,30,29,31,366]),t.set(2020,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(2021,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2022,[0,31,32,31,32,31,30,30,30,29,29,30,30,365]),t.set(2023,[0,31,32,31,32,31,30,30,30,29,30,29,31,366]),t.set(2024,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(2025,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2026,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2027,[0,30,32,31,32,31,30,30,30,29,30,29,31,365]),t.set(2028,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2029,[0,31,31,32,31,32,30,30,29,30,29,30,30,365]),t.set(2030,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2031,[0,30,32,31,32,31,30,30,30,29,30,29,31,365]),t.set(2032,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2033,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2034,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2035,[0,30,32,31,32,31,31,29,30,30,29,29,31,365]),t.set(2036,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2037,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2038,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2039,[0,31,31,31,32,31,31,29,30,30,29,30,30,365]),t.set(2040,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2041,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2042,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2043,[0,31,31,31,32,31,31,29,30,30,29,30,30,365]),t.set(2044,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2045,[0,31,32,31,32,31,30,30,29,30,29,30,30,365]),t.set(2046,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2047,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(2048,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2049,[0,31,32,31,32,31,30,30,30,29,29,30,30,365]),t.set(2050,[0,31,32,31,32,31,30,30,30,29,30,29,31,366]),t.set(2051,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(2052,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2053,[0,31,32,31,32,31,30,30,30,29,29,30,30,365]),t.set(2054,[0,31,32,31,32,31,30,30,30,29,30,29,31,366]),t.set(2055,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2056,[0,31,31,32,31,32,30,30,29,30,29,30,30,365]),t.set(2057,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2058,[0,30,32,31,32,31,30,30,30,29,30,29,31,365]),t.set(2059,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2060,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2061,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2062,[0,30,32,31,32,31,31,29,30,29,30,29,31,365]),t.set(2063,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2064,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2065,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2066,[0,31,31,31,32,31,31,29,30,30,29,29,31,365]),t.set(2067,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2068,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2069,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2070,[0,31,31,31,32,31,31,29,30,30,29,30,30,365]),t.set(2071,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2072,[0,31,32,31,32,31,30,30,29,30,29,30,30,365]),t.set(2073,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2074,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(2075,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2076,[0,31,32,31,32,31,30,30,30,29,29,30,30,365]),t.set(2077,[0,31,32,31,32,31,30,30,30,29,30,29,31,366]),t.set(2078,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(2079,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2080,[0,31,32,31,32,31,30,30,30,29,29,30,30,365]),t.set(2081,[0,31,32,31,32,31,30,30,30,29,30,29,31,366]),t.set(2082,[0,31,31,31,32,31,31,30,29,30,29,30,30,365]),t.set(2083,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2084,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2085,[0,30,32,31,32,31,30,30,30,29,30,29,31,365]),t.set(2086,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2087,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2088,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2089,[0,30,32,31,32,31,30,30,30,29,30,29,31,365]),t.set(2090,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2091,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t.set(2092,[0,31,32,31,32,31,30,30,30,29,29,30,31,366]),t.set(2093,[0,31,31,31,32,31,31,29,30,30,29,29,31,365]),t.set(2094,[0,31,31,32,31,31,31,30,29,30,29,30,30,365]),t.set(2095,[0,31,31,32,32,31,30,30,29,30,29,30,30,365]),t};var d=(t,e,s)=>t>=1913&&t<=2033&&e>=1&&e<=12&&s>=1&&s<=31;var u=t=>t>9?`${t}`:`0${t}`;var m=(t,e,s)=>{let n="-";return`${t}${n}${u(e)}${n}${u(s)}`};var E=(t,e,s)=>{let n={year:-1,month:-1,day:-1};if(d(t,e,s)){let a,i,o,T=new Date(m(1913,4,13)),A=new Date(m(t,e,s)),D=Math.ceil((0,M.default)(A).diff(T,"day",!0));a=1970,i=1,o=1;let l=p(),B=1970+(t-1913)-(t>4?1:0);for(;D!==0;)if(a<B)o=1,i=1,a++,D=D-l.get(a)[13];else{let R=l.get(a)[i];o++,o>R&&(i++,o=1),i>12&&(a++,i=1),D--}return n.year=a,n.month=i,n.day=o,n}else throw new Error("Invalid English Date")};var I=f(require("dayjs")),N=t=>{if(!t)return;let[e,s,n]=(0,I.default)(t).format("YYYY-MM-DD").split("-"),r=E(parseInt(e),parseInt(s),parseInt(n));return m(r.year,r.month,r.day)};var x=f(require("dayjs"));var Y=(t,e,s)=>t>=1970&&t<=2090&&e>=1&&e<=12&&s>=1&&s<=32;var w=(t,e,s)=>{if(Y(t,e,s)){let g={year:-1,month:-1,day:-1},c=0;for(let o=2e3;o<t;o++)c+=p().get(o)[13];for(let o=1;o<e;o++)c+=p().get(t)[o];c+=s;let[h,a,i]=(0,x.default)(m(1943,4,14)).add(c-1,"day").format("YYYY-MM-DD").split("-");return g.year=+h,g.month=+a,g.day=+i,g}else throw new Error("Nepali date is not in conversion range")};var v=t=>{if(!t)return;let[e,s,n]=t.split("-"),r=w(parseInt(e),parseInt(s),parseInt(n));return m(r.year,r.month,r.day)};0&&(module.exports={ADToBS,BSToAD,lookUp});