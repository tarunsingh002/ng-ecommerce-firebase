"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[592],{6551:(p,_,t)=>{t.d(_,{m:()=>i});var u=t(591),c=t(6738),n=t(6082);let i=(()=>{class d{constructor(r){this.pservice=r,this.cartChanged=new u.X(null),this.cart=[]}addToCart(r,s){this.cart.push({id:r,quantity:s}),this.cartChanged.next(this.cart),localStorage.setItem("cart",JSON.stringify(this.cart))}displayCartGetter(r){let s=this.pservice.getProducts();return r.map(e=>({product:s.find(h=>h.id===e.id),quantity:e.quantity}))}editCart(r){this.cart=r,this.cartChanged.next(this.cart),localStorage.setItem("cart",JSON.stringify(this.cart))}static#t=this.\u0275fac=function(s){return new(s||d)(c.LFG(n.M))};static#r=this.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},6631:(p,_,t)=>{t.d(_,{a:()=>o});var u=t(2986),c=t(4850),n=t(6738),i=t(914),d=t(2517);let o=(()=>{class r{constructor(a,e){this.authS=a,this.router=e}canActivate(a,e){return this.authS.User.pipe((0,u.q)(1),(0,c.U)(h=>h?!!h:this.router.createUrlTree(["/auth"])))}static#t=this.\u0275fac=function(e){return new(e||r)(n.LFG(i.e),n.LFG(d.F0))};static#r=this.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},3754:(p,_,t)=>{t.d(_,{f:()=>d});var u=t(4850),c=t(6738),n=t(529),i=t(6082);let d=(()=>{class o{constructor(s,a){this.http=s,this.pservice=a,this.api="https://ng-ecommerce-electronics-default-rtdb.firebaseio.com/"}addProduct(s){return this.http.post(`${this.api}/products.json`,s)}getProducts(){return this.http.get(`${this.api}/products.json`).pipe((0,u.U)(s=>{let a=[];for(let e in s)s.hasOwnProperty(e)&&a.push({...s[e],id:e});return this.pservice.addProducts(a),a}))}deleteProduct(s){return this.http.delete(`${this.api}/products/${s}.json`)}updateProduct(s,a){return this.http.patch(`${this.api}/products/${s}.json`,a)}static#t=this.\u0275fac=function(a){return new(a||o)(c.LFG(n.eN),c.LFG(i.M))};static#r=this.\u0275prov=c.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},6082:(p,_,t)=>{t.d(_,{M:()=>n});var u=t(591),c=t(6738);let n=(()=>{class i{constructor(){this.products=[],this.productsChanged=new u.X(null),this.searchedProductsChanged=new u.X(null)}addProduct(o){this.products.push(o),this.productsChanged.next(this.products)}addProducts(o){this.products=o,this.productsChanged.next(this.products)}getProducts(){return this.products}deleteProduct(o){this.products.splice(o,1),this.productsChanged.next(this.products)}static#t=this.\u0275fac=function(r){return new(r||i)};static#r=this.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},2361:(p,_,t)=>{t.d(_,{$:()=>o});var u=t(2868),c=t(6738),n=t(3754),i=t(6082),d=t(4471);let o=(()=>{class r{constructor(a,e,h){this.dservice=a,this.pservice=e,this.l=h}resolve(a,e){return this.l.isLoading.next(!0),this.dservice.getProducts().pipe((0,u.b)(()=>{this.l.isLoading.next(!1)}))}static#t=this.\u0275fac=function(e){return new(e||r)(c.LFG(n.f),c.LFG(i.M),c.LFG(d.b))};static#r=this.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);