(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{soDR:function(e,a,t){"use strict";t.r(a),t.d(a,"ModelPage",(function(){return g}));var o=t("q1tI"),l=t.n(o),i=t("Bl7J"),n=t("Wbzz"),m=function(){return l.a.createElement(l.a.Fragment,null)},r=t("9eSz"),d=t.n(r),h=function(e){var a=e.modelName,t=e.modelImage,o=e.modelLink,i=e.author,n=e.authorLink;return l.a.createElement("td",{style:{width:"10%"},align:"center"},o&&l.a.createElement("a",{href:o},t&&l.a.createElement(d.a,{fixed:t,alt:"Model of "+a})),l.a.createElement("br",null),a,l.a.createElement("br",null),n&&l.a.createElement("a",{style:{color:"#caaf76"},href:n},i)||l.a.createElement("div",{style:{color:"#caaf76"}},i))},s=function(){for(var e=Object(n.useStaticQuery)("4277999605"),a=[{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_ChibiRobo.pak",modelImage:e.Child_ChibiRobo.childImageSharp.fixed,modelName:"Chibi Robo",authorLink:"https://github.com/Unesag/Z64-CustomPlayerModels",author:"Unesag"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_FoxMcCloud.pak",modelImage:e.Child_FoxMcCloud.childImageSharp.fixed,modelName:"Fox McCloud",authorLink:"https://github.com/Unesag/Z64-CustomPlayerModels",author:"Unesag"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Hinata.pak",modelImage:e.Child_Hinata.childImageSharp.fixed,modelName:"Hinata",authorLink:"https://github.com/Psi-Hate",author:"Psi-Hate"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_JoeyWheeler.pak",modelImage:e.Child_JoeyWheeler.childImageSharp.fixed,modelName:"Joey Wheeler",authorLink:"https://github.com/Unesag/Z64-CustomPlayerModels",author:"Unesag"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Kafei.pak",modelImage:e.Child_Kafei.childImageSharp.fixed,modelName:"Kafei",authorLink:"https://github.com/CrookedPoe",author:"CrookedPoe"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Lizalfos.pak",modelImage:e.Child_Lizalfos.childImageSharp.fixed,modelName:"Lizalfos",authorLink:"https://twitter.com/ONI_3DArts",author:"ONI 3D-Arts"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Lonk.pak",modelImage:e.Child_Lonk.childImageSharp.fixed,modelName:"Lonk From Pennsylvania",authorLink:void 0,author:"Malon's Rose"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_MMLink.pak",modelImage:e.Child_MMLink.childImageSharp.fixed,modelName:"Majora's Mask Link",authorLink:"https://github.com/Neirn",author:"Neirn"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_PrincessRuto.pak",modelImage:e.Child_PrincessRuto.childImageSharp.fixed,modelName:"Princess Ruto",authorLink:"https://github.com/Unesag/Z64-CustomPlayerModels",author:"Unesag"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Psi-Hate.pak",modelImage:e.Child_PsiHate.childImageSharp.fixed,modelName:"Psi-Hate",authorLink:"https://github.com/Psi-Hate",author:"Psi-Hate"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Saria.pak",modelImage:e.Child_Saria.childImageSharp.fixed,modelName:"Saria",authorLink:void 0,author:"Malon's Rose"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Skullkid.pak",modelImage:e.Child_SkullKid.childImageSharp.fixed,modelName:"SkullKid",authorLink:"https://github.com/Psi-Hate",author:"Psi-Hate"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Tetra.pak",modelImage:e.Child_Tetra.childImageSharp.fixed,modelName:"Tetra",authorLink:"https://github.com/Psi-Hate",author:"Psi-Hate"},{modelLink:"https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_ToonLink.pak",modelImage:e.Child_ToonLink.childImageSharp.fixed,modelName:"Toon Link",authorLink:"https://github.com/Psi-Hate",author:"Psi-Hate"}],t=a.length/10,o=10-a.length%10,i=[],m=0;m<t;m++){var r=a.slice(10*m,10*(m+1));i.push(r)}return i.push(a.slice(10*t)),l.a.createElement("div",{id:"Child Models",className:"tabcontent",style:{display:"block"}},l.a.createElement("table",{className:"tg"},l.a.createElement("tbody",null,i.map((function(e,a){return l.a.createElement("tr",null,e.map((function(e){return l.a.createElement(h,Object.assign({key:e.modelLink},e))})),Array(o).map((function(){return l.a.createElement(h,null)})))})))))},u=function(){return l.a.createElement(l.a.Fragment,null)},c=t("vrFN"),g=function(){var e=Object(o.useState)(""),a=e[0],t=e[1],n=function(e){return"tablinks "+(a===e?"active":"")};return l.a.createElement(i.a,null,l.a.createElement(c.a,{title:"ModLoader64"}),l.a.createElement("br",null),l.a.createElement("div",{className:"tab",style:{width:"100%"}},l.a.createElement("button",{className:""+n("Adult Models"),onClick:function(){return t("Adult Models")}},"Adult Models"),l.a.createElement("button",{className:""+n("Child Models"),onClick:function(){return t("Child Models")}},"Child Models"),l.a.createElement("button",{className:""+n("Combined Models"),onClick:function(){return t("Combined Models")}},"Combined Models")),function(e){switch(e){case"Adult Models":return l.a.createElement(m,null);case"Child Models":return l.a.createElement(s,null);case"Combined Models":return l.a.createElement(u,null);default:return l.a.createElement(l.a.Fragment,null)}}(a),l.a.createElement("br",null),l.a.createElement("footer",{style:{textAlign:"center",fontSize:"10px"}},l.a.createElement("i",null,"All model copyrights belong to their original owners, rigging them for use was done by the noted authors.",l.a.createElement("br",null),"Special thanks to the zzPlayas crew for making custom models a thing.")))};a.default=g}}]);
//# sourceMappingURL=component---src-pages-models-jsx-6aea6362d29cdf62cbd5.js.map