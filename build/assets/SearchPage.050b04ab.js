var d=Object.defineProperty;var c=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var r=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,s=(o,e)=>{for(var t in e||(e={}))u.call(e,t)&&r(o,t,e[t]);if(c)for(var t of c(e))n.call(e,t)&&r(o,t,e[t]);return o};import{_,a as p}from"./index.69fc50e5.js";import{d as i,b as P,a as l,m as g,r as h,o as m,c as f,f as v,e as C}from"./vendor.7e8d65a9.js";const A=i(()=>p(()=>import("./Products.3d19259c.js"),["assets/Products.3d19259c.js","assets/Products.b48c69bb.css","assets/index.69fc50e5.js","assets/index.68f5975a.css","assets/vendor.7e8d65a9.js"])),G={name:"search-page",functional:!0,components:{Products:A},methods:s(s({},P({getProducts:"products/getProductsAction",getCategories:"products/getCategoriesAction",searchProducts:"search/searchProductsAction"})),l({clearProducts:"search/clearProductsMutation"})),computed:s({},g({getProductsFound:"search/getProductsFoundGetter",getProductsCount:"search/getProductsCountGetter",getQuery:"search/getQueryGetter"})),beforeRouteLeave(){this.clearProducts()}},y={class:"search_page"},$={class:"search_content"};function B(o,e,t,E,F,V){const a=h("products");return m(),f("div",y,[v("div",$,[C(a,{title:"\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432: "+this.getProductsCount,products:o.getProductsFound,class:"supplies",onGetProducts:o.searchProducts},null,8,["title","products","onGetProducts"])])])}var I=_(G,[["render",B],["__scopeId","data-v-c5dc0c06"]]);export{I as default};