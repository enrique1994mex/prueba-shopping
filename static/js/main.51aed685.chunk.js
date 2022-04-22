(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a(4),o=a(9),i=a(20),s=a(7);function u(e,t){return e.products}function m(e,t){return e.products.find((function(e){return e.id===t.id}))}var d={items:[],currency:"MEX"};function p(e,t){return Object(s.a)(Object(s.a)({},e),{},{items:[].concat(Object(i.a)(e.items),[t.productId])})}function E(e,t){return Object(s.a)(Object(s.a)({},e),{},{items:e.items.filter((function(e){return e!==t.productId}))})}function f(e){return{type:"cart/REMOVE",payload:{productId:e}}}function v(e,t){return-1!==e.cart.items.indexOf(t.id)}function b(e,t){return e.cart.items.map((function(t){return m(e,{id:t})}))}function g(e,t){return e.cart.currency}function N(e,t){return e.cart.items.reduce((function(t,a){return t+1.16*m(e,{id:a}).price}),0)}var h={shopping:[],userInfo:null};function O(e,t){return Object(s.a)(Object(s.a)({},e),{},{userInfo:t.user})}function y(e){return Object(s.a)(Object(s.a)({},e),{},{userInfo:null,shopping:null})}function j(e,t){return e.user.userInfo}var _=a(6),w=a(1),I=function(e){var t=e.name,a=e.price,n=e.currency,c=e.onClick;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-danger btn-xs",onClick:c},"X"),r.a.createElement("span",{className:"cart-item__name"},t)),r.a.createElement("div",{className:"cart-item__price"},a," ",n))},C=function(e){var t=e.items,a=e.total,n=e.currency,c=e.removeFromCart;return r.a.createElement("div",null,r.a.createElement("h3",null,"Shopping Cart"),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-body"},t.length>0&&r.a.createElement("div",{className:"cart__body"},t.map((function(e){return r.a.createElement(I,Object.assign({key:e.id},e,{onClick:function(){return c(e.id)}}))}))),0===t.length&&r.a.createElement("div",{className:"alert alert-info"},"Cart is empty"),r.a.createElement("div",{className:"cart__total"},"Total(+IVA): ",a," ",n),r.a.createElement(_.b,{to:"/purchase",className:"btn bg-primary btn-block btn-lg"},"Comprar")))))},k=(a(35),C),S=Object(l.b)((function(e,t){return{items:b(e),currency:g(e),total:N(e)}}),(function(e){return{removeFromCart:function(t){return e(f(t))}}}))(k),T=a(17),X=a(18),M=a(21),U=a(19),D=function(e){Object(M.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props,a=t.id,n=t.addToCart,r=t.removeFromCart;t.isInCart?r(a):n(a)},e}return Object(X.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.price,n=e.currency,c=e.image,l=e.isInCart;return r.a.createElement("div",{className:"product thumbnail"},r.a.createElement("img",{src:c,alt:"product"}),r.a.createElement("div",{className:"caption"},r.a.createElement("h3",null,t),r.a.createElement("div",{className:"product__price"},a," ",n),r.a.createElement("div",{className:"product__button-wrap"},r.a.createElement("button",{className:l?"btn btn-danger":"btn btn-primary",onClick:this.handleClick},l?"Remove":"Add"))))}}]),a}(n.Component),P=(a(36),D),L=Object(l.b)((function(e,t){return{isInCart:v(e,t)}}),(function(e){return{addToCart:function(t){return e({type:"cart/ADD",payload:{productId:t}})},removeFromCart:function(t){return e(f(t))}}}))(P),A=function(e){var t=e.products;return r.a.createElement("div",null,r.a.createElement("h3",null,"Products"),r.a.createElement("ul",{className:"product-list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"product-list__item"},r.a.createElement(L,e))}))))},F=(a(37),A),V=Object(l.b)((function(e,t){return{products:u(e)}}))(F),G=a(5),R=[{role:"user",modules:[{id:1,option:"Tienda"},{id:2,option:"Productos"},{id:3,option:"Ventas"}]},{role:"admin",modules:[{id:1,option:"Usuarios"},{id:2,option:"Productos"},{id:3,option:"Administraci\xf3n"}]}],x=Object(l.b)((function(e,t){return{userInfo:j(e)}}),(function(e){return{logoutToUser:function(){return e({type:"user/LOGOUT"})}}}))((function(e){var t=e.userInfo,a=e.logoutToUser;if(t)var c=R.filter((function(e){return e.role===t.role}));var l=Object(n.useState)(!1),o=Object(G.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(!1),m=Object(G.a)(u,2),d=m[0],p=m[1],E="dropdown-menu".concat(i?" show":""),f="collapse navbar-collapse".concat(d?" show":"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-default",role:"navigation"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#navbar-1",onClick:function(){return p(!d)}},r.a.createElement("span",{className:"sr-only"},"Menu"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(_.b,{to:"/",className:"navbar-brand"},"Virtual Shop")),r.a.createElement("div",{className:f,id:"navbar-1"},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",{className:"active"},r.a.createElement(_.b,{to:"/"},"Home")),null!==t?r.a.createElement("li",{className:"dropdown",onClick:function(){return s(!i)}},r.a.createElement("a",{className:"dropdown-toggle","data-toggle":"dropdown"},t.username," ",r.a.createElement("b",{className:"caret"})),r.a.createElement("ul",{className:E},c[0].modules.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(_.b,{to:"/"},e.option))})),r.a.createElement("li",{className:"divider"}),r.a.createElement("li",{onClick:a},r.a.createElement(_.b,{to:"/"},"Logout")))):r.a.createElement("li",null,r.a.createElement(_.b,{to:"/login"},"Login"))))))}));function J(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(x,null),t,r.a.createElement("footer",null,r.a.createElement("small",null,"powered by ",r.a.createElement("a",{href:"http://www.kikoya.mx/"},"Kikoya"))))}var q=function(){return r.a.createElement(J,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Virtual Shop"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(V,null)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(S,null)))))},B=[{id:1,username:"GUEST",role:"user",password:"123456"},{id:2,username:"GUEST ADMIN",role:"admin",password:"1234567"}],H=Object(l.b)((function(e,t){return{userInfo:j(e)}}),(function(e){return{loginToUser:function(t){return e(function(e){return{type:"user/LOGIN",payload:{user:e}}}(t))}}}))((function(e){var t=e.userInfo,a=e.loginToUser,c=Object(w.f)(),l=Object(n.useState)(""),o=Object(G.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(""),m=Object(G.a)(u,2),d=m[0],p=m[1];Object(n.useEffect)((function(){t&&c("/")}),[t,c]);return r.a.createElement(J,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("form",{onSubmit:function(e){B.forEach((function(e){e.password===d&&(a(e),c("/"))})),c("/login"),e.preventDefault()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputEmail"},"Email"),r.a.createElement("input",{type:"email",value:i,onChange:function(e){var t=e.target;s(t.value)},className:"form-control",id:"InputEmail",placeholder:"Enter email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputPassword"},"Password"),r.a.createElement("input",{type:"password",value:d,onChange:function(e){var t=e.target;p(t.value)},className:"form-control",id:"InputPassword",placeholder:"Password",required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg center-block"},"Sign in"))))))})),K=Object(l.b)((function(e,t){return{items:b(e),currency:g(e),total:N(e),userInfo:j(e)}}))((function(e){var t=e.items,a=e.total,c=e.currency,l=e.userInfo,o=Object(w.f)();return Object(n.useEffect)((function(){l||o("/login")}),[l,o]),r.a.createElement(J,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"purchase-title"},"Compras"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8 purchase-items"},r.a.createElement("div",{className:"purchase-items__titles"},"Name"),r.a.createElement("div",{className:"purchase-items__titles"},"Price"),t.length>0&&r.a.createElement("div",{className:"purchase-items__products"},t.map((function(e){return r.a.createElement("div",{className:"purchase-items__products__name",key:e.id},e.name)}))),t.length>0&&r.a.createElement("div",{className:"purchase-items__products"},t.map((function(e){return r.a.createElement("div",{key:e.id},e.price)})))),r.a.createElement("div",{className:"col-sm-4 purchase-total"},r.a.createElement("div",{className:"purchase-total__price"},"Pago total: ",a," ",c)))))})),z=(a(38),K),Q=function(){return r.a.createElement(_.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",element:r.a.createElement(q,null)}),r.a.createElement(w.a,{path:"/login",element:r.a.createElement(H,null)}),r.a.createElement(w.a,{path:"/purchase",element:r.a.createElement(z,null)})))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null))},Y=[{id:1,name:"Ohrensessel Josslyn",price:499.99,currency:"MEX",image:"images/01.jpg"},{id:2,name:"Sessel Sofie",price:249.99,currency:"MEX",image:"images/02.jpg"},{id:4,name:"Schlafsessel Rovigo",price:239.99,currency:"MEX",image:"images/04.jpg"},{id:6,name:"Sessel Little",price:119.99,currency:"MEX",image:"images/06.jpg"},{id:5,name:"Sessel Peacock",price:599.99,currency:"MEX",image:"images/05.jpg"},{id:3,name:"Sessel Anna",price:149.99,currency:"MEX",image:"images/03.jpg"}],Z=(a(39),Object(o.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"cart/ADD":return p(e,t.payload);case"cart/REMOVE":return E(e,t.payload);default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"user/LOGIN":return O(e,t.payload);case"user/LOGOUT":return y(e);default:return e}}})),$=Object(o.c)(Z,{products:Y},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(c.render)(r.a.createElement(l.a,{store:$},r.a.createElement(W,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.51aed685.chunk.js.map