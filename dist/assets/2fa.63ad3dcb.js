import{u as b,a as c,b4 as u,e as i,f as t,m as v,W as w,bf as x,a5 as I,I as S,B as $,Z as k,a3 as g,n as _,bd as C,aK as D,c1 as F}from"./index.c9144bbf.js";import{u as L}from"./useT.77fdabe9.js";const W=()=>{const{back:n}=b(),[d,l]=c(()=>u.post("/auth/2fa/generate")),r=L(),[a,p]=i(),f=async()=>{if(g().otp){_.warning(r("users.2fa_already_enabled")),n();return}const e=await l();C(e,p)},[s,h]=i("");f();const[y,m]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=a())==null?void 0:e.secret})}),o=async()=>{const e=await m();D(e,()=>{F({...g(),otp:!0}),n()})};return t(k,{get loading(){return d()},get children(){return t(v,{get when(){return a()},get children(){return t(w,{spacing:"$2",alignItems:"start",get children(){return[t(x,{get children(){return r("users.scan_qr")}}),t(I,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=a())==null?void 0:e.qr}}),t(S,{maxW:"$xs",get placeholder(){return r("users.input_code")},get value(){return s()},onInput:e=>h(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t($,{get loading(){return y()},onClick:o,get children(){return r("users.verify")}})]}})}})}})};export{W as default};
