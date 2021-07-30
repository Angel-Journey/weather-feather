(this["webpackJsonpweather-feather"]=this["webpackJsonpweather-feather"]||[]).push([[0],{33:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i,r,a,o,c,s,l=n(0),d=n(24),u=n.n(d),h=(n(33),n(3)),j=n(48),b=n(49),p=n(50),m=n(17),g=n(1),x=function(e){return Object(g.jsx)("div",{children:200===e.responseObj.cod?Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:["Location: ",Object(g.jsx)("strong",{children:e.responseObj.name})]}),Object(g.jsxs)("h3",{children:["Temperature: ",Math.round(e.responseObj.main.temp)," degrees"]}),Object(g.jsxs)("h3",{children:["Feels like: ",Math.round(e.responseObj.main.feels_like)," degrees"]}),Object(g.jsxs)("h3",{children:["Conditions: ",e.responseObj.weather[0].description]}),Object(g.jsxs)("h3",{children:["Humidity: ",e.responseObj.main.humidity,"%"]})]}):null})},f=n(11),O=n(12),y=O.a.button(i||(i=Object(f.a)(["\n  border-radius: ",";\n  margin: 0 1em;\n  padding: 0.25 1em;\n  border: 2px solid;\n  background-color: ",";\n  color: ",";\n  &:hover {\n    color: yellow;\n  }\n"])),(function(e){return e.rounded?"25px":"3px"}),(function(e){return e.primaryColor?e.primaryColor:"transparent"}),(function(e){return e.primaryColor?"white":"HotPink"})),v=Object(O.a)(y)(r||(r=Object(f.a)(["\n  color: ",";\n  background-color: transparent;\n  font-size: 1rem;\n  &:hover {\n    color: white;\n    background-color: ","\n  }\n"])),(function(e){return e.primaryColor}),(function(e){return e.primaryColor})),w=function(){var e=Object(l.useState)(""),t=Object(m.a)(e,2),n=t[0],i=t[1],r=Object(l.useState)("imperial"),a=Object(m.a)(r,2),o=a[0],c=a[1],s=Object(l.useState)({}),d=Object(m.a)(s,2),u=d[0],h=d[1],j=encodeURIComponent(n);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Find Current Weather Conditions"}),Object(g.jsxs)("form",{onSubmit:function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(j,"&units=").concat(o,"&appid=").concat("c5a026ac9ab9526110cc834070c7d60f")).then((function(e){return e.json()})).then((function(e){h(e)})).catch((function(e){console.error(e)}))},children:[Object(g.jsx)("input",{type:"text",placeholder:"Enter City",maxLength:"50",value:n,onChange:function(e){return i(e.target.value)}}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",name:"units",checked:"imperial"===o,value:"imperial",onChange:function(e){return c(e.target.value)}}),"Fahrenheit"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",name:"units",checked:"metric"===o,value:"metric",onChange:function(e){return c(e.target.value)}}),"Celcius"]}),Object(g.jsx)(v,{primaryColor:"LightSteelBlue",rounded:"true",type:"submit",children:"Get Forecast"})]}),Object(g.jsx)(x,{responseObj:u})]})},k=function(){var e={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center"},t={display:"flex",justifyContent:"space-around",alignItems:"center",backgroundImage:"url(".concat("https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",")"),backgroundSize:"cover",backgroundPosition:"center",height:"100vh",width:"80vh",color:"white",textAlign:"center"};return Object(g.jsxs)("div",{style:e,children:[Object(g.jsx)("div",{style:t,children:Object(g.jsx)(j.a,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(p.a,{children:[" ",Object(g.jsx)("h1",{children:"Weather Feather \ud83e\udd9a"})," "]}),Object(g.jsxs)(p.a,{children:[" ",Object(g.jsx)("h2",{children:"Find out the temperature, weather conditions, and more..."})," "]})]})})}),Object(g.jsx)("div",{style:e,children:Object(g.jsx)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",marginLeft:"0px",backgroundColor:"grey",backgroundSize:"cover",backgroundPosition:"center",height:"100vh",width:"100vh",color:"white",textAlign:"left"},children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(p.a,{children:[" ",Object(g.jsx)(w,{})," "]})})})})]})},C=n(14),F=O.a.header(a||(a=Object(f.a)(["\n  background-color: lightgrey;\n  color: black;\n"]))),L=O.a.span(o||(o=Object(f.a)(["\n  font-size: 2.5rem;\n"]))),H=O.a.span(c||(c=Object(f.a)(["\n  height: 100%;\n  margin-left: auto;\n  margin-right: 0;\n  width: 100%;\n"]))),P=Object(O.a)(C.b)(s||(s=Object(f.a)(["\n  margin-right: 1rem;\n  font-size: 1.5rem;\n  height: 100%;\n  color: black;\n  &:hover {\n     color: LightSkyBlue;\n  }\n"]))),S=function(){return Object(g.jsx)(F,{children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(L,{children:" Weather Feather \ud83e\udd9a "}),Object(g.jsxs)(H,{children:[Object(g.jsx)(P,{to:"/",children:"Home"}),Object(g.jsx)(P,{to:"/about",children:"About"}),Object(g.jsx)(P,{to:"/stylesheet",children:"Stylesheet Demo"})]})]})})},q=(n(45),function(){return Object(g.jsx)("button",{className:"awesome2",children:"Awesome & Pink"})}),I=(n(46),function(){return Object(g.jsx)("button",{className:"awesome",children:"Awesome & Blue"})}),B=function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h3",{children:"Stylesheet"}),Object(g.jsx)(q,{}),Object(g.jsx)(I,{})]})},U=function(){return Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"radial-gradient(circle, rgba(203,201,0,1) 0%, rgba(114,9,121,1) 35%, rgba(0,212,255,1) 100%)",height:"30vh",color:"white"},children:Object(g.jsx)("h1",{children:"The Coolest Birds In Town"})})},T=[{id:1,name:"Perry Penguin",backgroundUrl:"https://c0.wallpaperflare.com/preview/425/700/946/african-penguin-animal-animal-photography-antarctic.jpg",description:"Perry is a huge fan of \ud83d\udc20. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:2,name:"Flavio Flamingo",backgroundUrl:"https://p1.pxfuel.com/preview/633/474/506/flamingo-pink-flamingo-bird-colorful-wildlife-exotic.jpg",description:"Flavio is a huge fan of \ud83c\udf64. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:3,name:"Heather Hawk",backgroundUrl:"https://p2.piqsels.com/preview/268/700/936/animal-animal-photography-bird-macro.jpg",description:"Heather is a huge fan of \ud83d\udc2d. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:4,name:"Flavio Flamingo",backgroundUrl:"https://p1.pxfuel.com/preview/633/474/506/flamingo-pink-flamingo-bird-colorful-wildlife-exotic.jpg",description:"Flavio is a huge fan of \ud83c\udf64. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:5,name:"Heather Hawk",backgroundUrl:"https://p2.piqsels.com/preview/268/700/936/animal-animal-photography-bird-macro.jpg",description:"Heather is a huge fan of \ud83d\udc2d. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:6,name:"Perry Penguin",backgroundUrl:"https://c0.wallpaperflare.com/preview/425/700/946/african-penguin-animal-animal-photography-antarctic.jpg",description:"Perry is a huge fan of \ud83d\udc20. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],A=n(51),z=n(52),D=function(){var e=T.map((function(e){return Object(g.jsxs)(A.a,{style:{width:"18rem"},children:[Object(g.jsx)(A.a.Img,{variant:"top",src:e.backgroundUrl}),Object(g.jsxs)(A.a.Body,{children:[Object(g.jsx)(A.a.Title,{children:e.name}),Object(g.jsx)(A.a.Text,{children:e.description}),Object(g.jsx)(z.a,{children:"Contact"})]})]},e.id)}));return Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center",flexFlow:"row wrap"},children:e})},M=function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(U,{}),Object(g.jsx)(D,{})]})},N=Object(h.e)((function(e){return Object(g.jsxs)(l.Fragment,{children:[Object(g.jsx)(h.a,{path:"/",component:S}),Object(g.jsx)(h.a,{exact:!0,path:"/",component:k}),Object(g.jsx)(h.a,{exact:!0,path:"/stylesheet",component:B}),Object(g.jsx)(h.a,{exact:!0,path:"/about",component:M})]})})),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))},G=Object(g.jsx)(C.a,{children:Object(g.jsx)(N,{})});u.a.render(G,document.getElementById("root")),W()}},[[47,1,2]]]);
//# sourceMappingURL=main.7b904474.chunk.js.map