import{P as f,c as p,w as n,o as _,a as o,u as s,X as w,b as r,d,g,n as V,e as b}from"./app-2b0b168f.js";import{_ as v}from"./GuestLayout-1e48da8e.js";import{_ as t,a as m,b as i}from"./TextInput-296d1976.js";import{_ as y}from"./PrimaryButton-b94ab578.js";import"./ApplicationLogo-a64968b6.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=["onSubmit"],k={class:"mt-4"},$={class:"mt-4"},h={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},j={__name:"Register",setup(N){const e=f({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(c,a)=>(_(),p(v,null,{default:n(()=>[o(s(w),{title:"Register"}),r("form",{onSubmit:b(u,["prevent"])},[r("div",null,[o(t,{for:"name",value:"Name"}),o(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",k,[o(t,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",$,[o(t,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",h,[o(t,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",q,[o(s(g),{href:c.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),o(y,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{j as default};
