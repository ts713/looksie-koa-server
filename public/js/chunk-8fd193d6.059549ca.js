(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fd193d6"],{"0a48":function(e,t,n){},2607:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-horizontal",{scopedSlots:e._u([{key:"navbar",fn:function(e){var t=e.toggleVerticalMenuActive;return[n("app-navbar-horizontal-layout-brand"),n("navbar",{attrs:{"toggle-vertical-menu-active":t}})]}}])},[n("router-view")],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"horizontal-layout",class:[e.layoutClasses],staticStyle:{height:"inherit"},attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[n("b-navbar",{staticClass:"header-navbar navbar-shadow align-items-center navbar-brand-center navbar-fixed",class:{"fixed-top":"xl"!==e.$store.getters["app/currentBreakPoint"]},style:{backgroundColor:"static"===e.navbarType&&e.scrolledTo&&"light"===e.skin?"white":null,boxShadow:"static"===e.navbarType&&e.scrolledTo?"rgba(0, 0, 0, 0.05) 0px 4px 20px 0px":null},attrs:{toggleable:!1}},[e._t("navbar",[n("app-navbar-horizontal-layout-brand"),n("app-navbar-horizontal-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})],{toggleVerticalMenuActive:e.toggleVerticalMenuActive})],2),n("div",{staticClass:"horizontal-menu-wrapper"},[e.isNavMenuHidden?e._e():n("div",{staticClass:"header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block",class:[e.navbarMenuTypeClass]},[n("horizontal-nav-menu")],1),n("vertical-nav-menu",{staticClass:"d-block d-xl-none",attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)})],1),n("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),n("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[n(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,n){return{key:n,fn:function(t){return[e._t(n,null,null,t)]}}}))],null,!0)})],1),n("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",[n("app-footer")])],2),e._t("customizer")],2)},o=[],l=n("3033"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-container d-flex content align-items-center"},[n("ul",{staticClass:"nav navbar-nav d-xl-none"},[n("li",{staticClass:"nav-item"},[n("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[n("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),n("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"},[n("bookmarks")],1),n("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[n("locale"),n("dark-Toggler",{staticClass:"d-none d-lg-block"}),n("search-bar"),n("cart-dropdown"),n("notification-dropdown"),n("user-dropdown")],1)],1)},c=[],u=n("aa59"),v=n("042b"),d=n("6957"),p=n("e2f5"),m=n("9f5c"),f=n("809a"),b=n("8a2e"),h=n("5c02"),g=n("eef9"),w={components:{BLink:u["a"],BNavbarNav:v["a"],Bookmarks:d["a"],Locale:p["a"],DarkToggler:m["a"],SearchBar:f["a"],CartDropdown:b["a"],NotificationDropdown:h["a"],UserDropdown:g["a"]},props:{toggleVerticalMenuActive:{type:Function,default:function(){}}}},C=w,O=n("2877"),k=Object(O["a"])(C,s,c,!1,null,null,null),y=k.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-header d-xl-block d-none"},[n("ul",{staticClass:"nav navbar-nav"},[n("li",{staticClass:"nav-item"},[n("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"brand-logo"},[n("b-img",{attrs:{src:e.appLogoImage,alt:"logo"}})],1),n("h2",{staticClass:"brand-text mb-0"},[e._v(" "+e._s(e.appName)+" ")])])],1)])])},M=[],_=n("4918"),j=n("1dff"),z={components:{BLink:u["a"],BImg:_["a"]},setup:function(){var e=j["c"].app,t=e.appName,n=e.appLogoImage;return{appName:t,appLogoImage:n}}},N=z,H=Object(O["a"])(N,A,M,!1,null,null,null),x=H.exports,L=n("62cb"),I=n("b8f2"),V=n("d0b9"),T=n("a6f4"),$=function(){var e=Object(T["ref"])(null),t=function(){e.value=window.scrollY};return window.addEventListener("scroll",t),Object(T["onUnmounted"])((function(){window.removeEventListener("scroll",t)})),{scrolledTo:e}},G=n("1ae3"),B=n("e08f"),D=n("0d19"),E=n("4360");function R(e,t,n){var a=Object(T["computed"])((function(){return E["a"].getters["app/currentBreakPoint"]})),i=Object(T["computed"])((function(){var i=[];return"xl"===a.value?i.push("horizontal-menu"):(i.push("vertical-overlay-menu"),i.push(n.value?"menu-open":"menu-hide")),i.push("navbar-".concat(e.value)),"sticky"===t.value&&i.push("footer-fixed"),"static"===t.value&&i.push("footer-static"),"hidden"===t.value&&i.push("footer-hidden"),i})),r=Object(T["computed"])((function(){return"sticky"===e.value?"fixed-top":"static"===e.value?"":"hidden"===e.value?"d-none":"floating-nav"})),o=Object(T["computed"])((function(){return"static"===t.value?"footer-static":"hidden"===t.value?"d-none":""}));return{layoutClasses:i,navbarMenuTypeClass:r,footerTypeClass:o}}var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-container main-menu-content"},[n("horizontal-nav-menu-items",{attrs:{items:e.navMenuItems}})],1)},S=[],q=[{header:"Pages",icon:"FileIcon",children:[{title:"Home",route:"home",icon:"HomeIcon"},{title:"Second Page",route:"second-page",icon:"FileIcon"}]}],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav navbar-nav",attrs:{id:"main-menu-navigation"}},e._l(e.items,(function(t){return n(e.resolveNavComponent(t),{key:t.header||t.title,tag:"component",attrs:{item:t}})})),1)},U=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuHeaderLink(e.item)?n("li",{staticClass:"nav-item",class:{"sidebar-group-active active":e.isActive}},[n("b-link",{staticClass:"nav-link",attrs:{to:{name:e.item.route}}},[n("feather-icon",{attrs:{size:"14",icon:e.item.icon}}),n("span",[e._v(e._s(e.t(e.item.title)))])],1)],1):e._e()},J=[],Y=n("42cb"),X=n("185c"),K=n("5959");function Q(e){var t=Object(T["ref"])(!1),n=function(){t.value=Object(K["b"])(e)};return{isActive:t,updateIsActive:n}}var Z={watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}},ee={components:{BLink:u["a"]},mixins:[Z],props:{item:{type:Object,required:!0}},setup:function(e){var t=Q(e.item),n=t.isActive,a=t.updateIsActive,i=Object(Y["a"])(),r=i.t,o=Object(X["a"])(),l=o.canViewHorizontalNavMenuHeaderLink;return{isActive:n,updateIsActive:a,canViewHorizontalNavMenuHeaderLink:l,t:r}}},te=ee,ne=Object(O["a"])(te,W,J,!1,null,null,null),ae=ne.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuHeaderGroup(e.item)?n("li",{staticClass:"dropdown nav-item",class:{"sidebar-group-active active open":e.isActive,show:e.isOpen},on:{mouseenter:function(){return e.updateGroupOpen(!0)},mouseleave:function(){return e.updateGroupOpen(!1)}}},[n("b-link",{staticClass:"nav-link dropdown-toggle d-flex align-items-center"},[n("feather-icon",{attrs:{size:"14",icon:e.item.icon}}),n("span",[e._v(e._s(e.t(e.item.header)))])],1),n("ul",{staticClass:"dropdown-menu"},e._l(e.item.children,(function(t){return n(e.resolveHorizontalNavMenuItemComponent(t),{key:t.title,tag:"component",attrs:{item:t}})})),1)],1):e._e()},re=[];function oe(e){var t=Object(T["ref"])(!1),n=function(e){t.value=e},a=Object(T["ref"])(!1),i=function(){a.value=Object(K["a"])(e.children)};return{isOpen:t,isActive:a,updateGroupOpen:n,updateIsActive:i}}var le={watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}},se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewVerticalNavMenuGroup(e.item)?n("li",{staticClass:"dropdown dropdown-submenu",class:{show:e.isOpen,disabled:e.item.disabled,"sidebar-group-active active open":e.isActive,openLeft:e.openChildDropdownOnLeft},on:{mouseenter:function(){return e.updateGroupOpen(!0)},mouseleave:function(){return e.updateGroupOpen(!1)}}},[n("b-link",{staticClass:"dropdown-item",class:{"dropdown-toggle":e.item.children},attrs:{href:"#"},on:{click:function(){return e.updateGroupOpen(!e.isOpen)}}},[n("feather-icon",{attrs:{icon:e.item.icon||"CircleIcon"}}),n("span",{staticClass:"menu-title"},[e._v(e._s(e.t(e.item.title)))])],1),n("ul",{ref:"refChildDropdown",staticClass:"dropdown-menu"},e._l(e.item.children,(function(t){return n(e.resolveNavItemComponent(t),{key:t.header||t.title,ref:"groupChild",refInFor:!0,tag:"component",attrs:{item:t}})})),1)],1):e._e()},ce=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuLink(e.item)?n("li",{class:{active:e.isActive,disabled:e.item.disabled}},[n("b-link",e._b({staticClass:"dropdown-item"},"b-link",e.linkProps,!1),[n("feather-icon",{attrs:{icon:e.item.icon||"CircleIcon",size:"24"}}),n("span",{staticClass:"menu-title"},[e._v(e._s(e.t(e.item.title)))])],1)],1):e._e()},ve=[];function de(e){var t=Object(T["ref"])(!1),n=Object(K["c"])(e),a=function(){t.value=Object(K["b"])(e)};return{isActive:t,linkProps:n,updateIsActive:a}}var pe={watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}},me={components:{BLink:u["a"]},mixins:[pe],props:{item:{type:Object,required:!0}},setup:function(e){var t=de(e.item),n=t.isActive,a=t.linkProps,i=t.updateIsActive,r=Object(Y["a"])(),o=r.t,l=Object(X["a"])(),s=l.canViewHorizontalNavMenuLink;return{isActive:n,linkProps:a,updateIsActive:i,canViewHorizontalNavMenuLink:s,t:o}}},fe=me,be=Object(O["a"])(fe,ue,ve,!1,null,null,null),he=be.exports;function ge(e){var t=Object(T["ref"])(null),n=Object(T["ref"])(!1),a=Object(T["ref"])(!1),i=function(e){a.value=e,e?Object(T["nextTick"])((function(){var e=t.value.offsetWidth,a=window.innerWidth-16,i=t.value.getBoundingClientRect(),r=i.left,o=r+e-a;n.value=o>0;var l=t.value.getBoundingClientRect().top,s=t.value.getBoundingClientRect().height;if(window.innerHeight-l-s-28<1){var c=window.innerHeight-l-70;t.value.style.maxHeight="".concat(c,"px"),t.value.style.overflowY="auto",t.value.style.overflowX="hidden"}})):n.value=!1},r=Object(T["ref"])(!1),o=function(){r.value=Object(K["a"])(e.children)};return{isOpen:a,isActive:r,updateGroupOpen:i,updateIsActive:o,refChildDropdown:t,openChildDropdownOnLeft:n}}var we={watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}},Ce={name:"HorizontalNavMenuGroup",components:{HorizontalNavMenuLink:he,BLink:u["a"]},mixins:[we],props:{item:{type:Object,required:!0}},setup:function(e){var t=ge(e.item),n=t.refChildDropdown,a=t.isActive,i=t.isOpen,r=t.updateGroupOpen,o=t.updateIsActive,l=t.openChildDropdownOnLeft,s=Object(Y["a"])(),c=s.t,u=Object(X["a"])(),v=u.canViewVerticalNavMenuGroup;return{refChildDropdown:n,openChildDropdownOnLeft:l,resolveNavItemComponent:K["d"],isOpen:i,isActive:a,updateGroupOpen:r,updateIsActive:o,canViewVerticalNavMenuGroup:v,t:c}}},Oe=Ce,ke=Object(O["a"])(Oe,se,ce,!1,null,null,null),ye=ke.exports,Ae={components:{BLink:u["a"],HorizontalNavMenuGroup:ye,HorizontalNavMenuLink:he},mixins:[le],props:{item:{type:Object,required:!0}},setup:function(e){var t=oe(e.item),n=t.isActive,a=t.updateIsActive,i=t.isOpen,r=t.updateGroupOpen,o=Object(Y["a"])(),l=o.t,s=Object(X["a"])(),c=s.canViewHorizontalNavMenuHeaderGroup;return{isOpen:i,isActive:n,updateGroupOpen:r,updateIsActive:a,resolveHorizontalNavMenuItemComponent:K["d"],canViewHorizontalNavMenuHeaderGroup:c,t:l}}},Me=Ae,_e=Object(O["a"])(Me,ie,re,!1,null,null,null),je=_e.exports,ze={components:{HorizontalNavMenuHeaderLink:ae,HorizontalNavMenuHeaderGroup:je},props:{items:{type:Array,required:!0}},setup:function(){var e=function(e){return e.children?"horizontal-nav-menu-header-group":"horizontal-nav-menu-header-link"};return{resolveNavComponent:e}}},Ne=ze,He=Object(O["a"])(Ne,F,U,!1,null,null,null),xe=He.exports,Le={components:{HorizontalNavMenuItems:xe},setup:function(){return{navMenuItems:q}}},Ie=Le,Ve=(n("e77f"),Object(O["a"])(Ie,P,S,!1,null,null,null)),Te=Ve.exports,$e=n("2c28"),Ge=n("32b8"),Be={watch:{$route:function(){this.$store.state.app.windowWidth<j["a"].xl&&(this.isVerticalMenuActive=!1)}}},De={components:{AppBreadcrumb:l["a"],AppNavbarHorizontalLayout:y,AppNavbarHorizontalLayoutBrand:x,AppFooter:L["a"],HorizontalNavMenu:Te,BNavbar:V["a"],LayoutContentRendererDefault:G["a"],LayoutContentRendererLeft:B["a"],LayoutContentRendererLeftDetached:D["a"],VerticalNavMenu:$e["a"]},mixins:[Be],computed:{layoutContentRenderer:function(){var e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}},setup:function(){var e=Object(I["a"])(),t=e.skin,n=e.navbarType,a=e.footerType,i=e.routerTransition,r=e.isNavMenuHidden,o=Object(Ge["a"])(n,a),l=o.isVerticalMenuActive,s=o.toggleVerticalMenuActive,c=o.overlayClasses,u=o.resizeHandler;u(),window.addEventListener("resize",u),Object(T["onUnmounted"])((function(){window.removeEventListener("resize",u)}));var v=R(n,a,l),d=v.navbarMenuTypeClass,p=v.layoutClasses,m=v.footerTypeClass,f=$(),b=f.scrolledTo;return{skin:t,layoutClasses:p,navbarType:n,navbarMenuTypeClass:d,isNavMenuHidden:r,routerTransition:i,footerTypeClass:m,scrolledTo:b,isVerticalMenuActive:l,toggleVerticalMenuActive:s,overlayClasses:c}}},Ee=De,Re=(n("c9bd"),Object(O["a"])(Ee,r,o,!1,null,null,null)),Pe=Re.exports,Se=n("cb50"),qe={components:{LayoutHorizontal:Pe,Navbar:Se["a"],AppNavbarHorizontalLayoutBrand:x},data:function(){return{}}},Fe=qe,Ue=Object(O["a"])(Fe,a,i,!1,null,null,null);t["default"]=Ue.exports},"3c2b":function(e,t,n){},c9bd:function(e,t,n){"use strict";n("0a48")},e77f:function(e,t,n){"use strict";n("3c2b")}}]);
//# sourceMappingURL=chunk-8fd193d6.059549ca.js.map