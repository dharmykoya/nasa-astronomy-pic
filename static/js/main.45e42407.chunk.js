(this["webpackJsonpnasa-astronomy-pic"]=this["webpackJsonpnasa-astronomy-pic"]||[]).push([[0],{40:function(e,a,t){e.exports=t(77)},45:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=(t(45),t(19)),o=t(2),s=t(9),u=t(38),m=t(39),f=t(10),v=t.n(f),d=t(18),g=t(36),E=t.n(g),p=t(24),h=t(14),N=t.n(h),I=function(e,a){return Object(p.a)(Object(p.a)({},e),a)},b=function(){var e=new Date;return N()(e).format("YYYY-MM-DD")},y=function(e){return N()(e).subtract(1,"day").format("YYYY-MM-DD")},O=function(e){var a=JSON.parse(localStorage.getItem("images"))||{};return!!a[e]&&a[e]},S=function(e){return{type:"GET_IMAGE_FAILED",error:e}},w=function(e){return{type:"TOGGLE_FAVORITE_IMAGE",images:e}},_=function(e){return function(){var a=Object(d.a)(v.a.mark((function a(t){var n,r,c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,""!==e&&void 0!==e||(e=y()),t({type:"GET_IMAGE_START"}),a.next=5,E.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat("WvGmXFcbtnoQcp4FaH6wtwlTrdyVcwRAqgZgjAhu","&date=").concat(e));case 5:n=a.sent,r=n.data,(c=JSON.parse(localStorage.getItem("images"))||{})[e]=r,localStorage.setItem("images",JSON.stringify(c)),t({type:"GET_IMAGE_SUCCESS",imageDetails:r}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),t(S("Network/Invalid Image"));case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()},k=(t(69),function(e){var a=e.side,t=e.handleClick;return r.a.createElement("div",{className:"navigate-btn",onClick:t},r.a.createElement("i",{className:"fas fa-chevron-".concat(a)}))}),A=(t(70),t(71),function(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),C=(t(72),function(e){var a=e.customClass,t=e.handleClick;return r.a.createElement("i",{className:a,onClick:t})}),G=function(e){var a=Object(n.useState)(y),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(s.b)(),o=Object(s.c)((function(e){return e.image})),f=o.loading,g=o.imageDetails,E=o.error,p=o.favouriteImages;Object(n.useEffect)((function(){i(_())}),[i]);var h,I,G,D=function(){var e;i((e=c,function(){var a=Object(d.a)(v.a.mark((function a(t){var n,r,c,l,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{n=O(e),r=JSON.parse(localStorage.getItem("favImages"))||[],c=r.filter((function(a){return a.date===e})),l=c.length>0?r.filter((function(a){return a.date!==e})):[].concat(Object(m.a)(r),[n]),localStorage.setItem("favImages",JSON.stringify(l)),t(w(l))}catch(E){i=E.response.data,t(S(i.message))}case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()))},M="...",T="...",j=r.a.createElement(A,null);return f||null===g||(M=g.title,(h=g.url).includes("youtube")&&(I="invalid Image"),T=g.explanation),E&&(j=E),p&&(G=p.find((function(e){return e.date===c}))),r.a.createElement("section",{className:"homepage mt-3"},r.a.createElement("div",{className:"mb-3"},M),r.a.createElement("div",{className:"row gallery-container"},r.a.createElement(k,{side:"left",handleClick:function(){var e=y(c);l(e),i(_(c))}}),r.a.createElement("div",null,r.a.createElement("div",null,f||E||I?r.a.createElement("div",{className:"image loader-container"},j||I):r.a.createElement("img",{src:h,alt:"current",className:"image img-fluid"})),r.a.createElement("div",{className:"row action-container mt-3"},G?r.a.createElement(C,{customClass:"fas fa-heart favourite",handleClick:D}):r.a.createElement(C,{handleClick:D,customClass:"far fa-heart favourite"}),r.a.createElement("input",{type:"date",onChange:function(e){var a=e.target.value;l(a),i(_(a))},value:c,max:b()}))),r.a.createElement(k,{side:"right",handleClick:function(){var e,a=(e=c,N()(e).add(1,"day").format("YYYY-MM-DD"));a>b()?alert("invalid"):(l(a),i(_(c)))}})),r.a.createElement("div",{className:"description-container"},T))},D=t(8),M=t(37),T={loading:!1,imageDetails:null,favouriteImages:null,error:null},j=function(e){return I(e,{loading:!0})},x=function(e,a){return I(e,{imageDetails:a.imageDetails,loading:!1,error:null})},Y=function(e,a){return I(e,{error:a.error,loading:!1})},F=function(e,a){return I(e,{favouriteImages:a.images,loading:!1})},J=Object(D.c)({image:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_IMAGE_START":return j(e);case"GET_IMAGE_SUCCESS":return x(e,a);case"GET_IMAGE_FAILED":return Y(e,a);case"TOGGLE_FAVORITE_IMAGE":return F(e,a);default:return e}}}),R=[M.a],L=(t(73),function(e){var a=e.children,t=e.customClassName,n=e.clickHandler;return r.a.createElement("button",{className:"btn ".concat(t),onClick:n},a)}),V=(t(74),t(75),function(e){var a,t=e.image,n=e.title;return t.includes("youtube")&&(a="invalid Image"),r.a.createElement("div",{className:"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6"},a?r.a.createElement("div",{className:"fav-image-error"},a):r.a.createElement("img",{src:t,alt:"current",className:"img-fluid fav-image"}),r.a.createElement("div",{className:"fav-title"},n))}),H=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.image})).favouriteImages,t=r.a.createElement("div",{className:"text-center"},"No Favourite picture is available");return a&&null!==a&&(t=a.map((function(e,a){return r.a.createElement(V,{key:a,image:e.url,title:e.title})}))),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement(L,{customClassName:"btn-danger delete-fav mt-3 ml-auto",clickHandler:function(){e(function(){var e=Object(d.a)(v.a.mark((function e(a){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{localStorage.removeItem("favImages"),a(w([]))}catch(n){t=n.response.data,a(S(t))}case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}},"Delete All"),r.a.createElement("h3",null,"My Favourites"),r.a.createElement("div",{className:"row favourite-container mt-4"},t)))},U=function(e){var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d;return Object(D.e)(J,a(D.a.apply(void 0,R)))}();if(localStorage.favImages){var W=function(e){var a=JSON.parse(localStorage.getItem("favImages"))||[];return 0!==a.length&&a}();W&&U.dispatch(w(W))}var X=function(){return r.a.createElement(s.a,{store:U},r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(i.b,{to:"/",className:"logo"},"Nasa Astronomy Pic"),r.a.createElement("div",{className:"ml-auto"},r.a.createElement(i.b,{to:"/favourites"},"Favourites"))),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0},r.a.createElement(G,null)),r.a.createElement(o.a,{path:"/favourites",exact:!0},r.a.createElement(H,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.45e42407.chunk.js.map