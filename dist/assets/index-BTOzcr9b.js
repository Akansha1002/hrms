import{j as e,M as c}from"./index-Ds58fsWd.js";import{C as d}from"./Card-_UUXw6xw.js";import{T as i}from"./index-C82wlJ4H.js";import{c as u,u as p,f as r,g as x}from"./index-BXojlvMC.js";import{B as f}from"./Badge-BIdFxc11.js";import{T as g}from"./Tooltip-DV8uts-J.js";import{f as C}from"./index-ZML-Ogf2.js";import"./classNames-_hWUnAlB.js";const{Tr:l,Td:N,TBody:h,THead:j,Th:b}=i,D={Completed:0,Pending:1,"Not Mandatory":2},n={0:{label:"Completed",dotClass:"bg-emerald-500",textClass:"text-emerald-500"},1:{label:"Pending",dotClass:"bg-amber-500",textClass:"text-amber-500"}},T=({formName:a})=>{const o=c(),t=()=>{const s=a.toLowerCase().replace(/\s+/g,"-");o(`/concepts/customers/${s}`)};return e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(g,{title:"Edit",children:e.jsx("div",{className:"text-xl cursor-pointer select-none font-semibold",role:"button",onClick:t,children:e.jsx(C,{})})})})},m=u(),y=[m.accessor("formName",{header:"Form Name",cell:a=>{const{formName:o}=a.row.original;return e.jsx("div",{className:"heading-text font-semibold",children:o})}}),m.accessor("status",{header:"Status",cell:a=>{const o=a.row.original.status,t=D[o]??null;return t===null||!(t in n)?e.jsx("span",{className:"text-gray-500",children:"Unknown Status"}):e.jsxs("div",{className:"flex items-center",children:[e.jsx(f,{className:n[t].dotClass}),e.jsx("span",{className:`ml-2 rtl:mr-2 capitalize font-semibold ${n[t].textClass}`,children:n[t].label})]})}}),{header:"Action",id:"action",cell:a=>e.jsx(T,{formName:a.row.original.formName})}],P=({data:a=[]})=>{const o=p({data:a,columns:y,getCoreRowModel:x()});return e.jsxs(d,{children:[e.jsx("h4",{className:"mb-6",children:"Employee On Boarding"}),e.jsxs(i,{children:[e.jsx(j,{children:o.getHeaderGroups().map(t=>e.jsx(l,{children:t.headers.map(s=>e.jsx(b,{colSpan:s.colSpan,style:{width:`${s.getSize()}px`},children:r(s.column.columnDef.header,s.getContext())},s.id))},t.id))}),e.jsx(h,{children:o.getRowModel().rows.map(t=>e.jsx(l,{children:t.getVisibleCells().map(s=>e.jsx(N,{children:r(s.column.columnDef.cell,s.getContext())},s.id))},t.id))})]})]})},w=[{formName:"Employee Details",status:"Pending"},{formName:"Family Details",status:"Completed"},{formName:"Education Details",status:"Completed"},{formName:"Past Employment Details",status:"Completed"},{formName:"Bank Details",status:"Pending"},{formName:"Contact Details",status:"Completed"},{formName:"Emergency Contact",status:"Pending"},{formName:"Passport Details",status:"Completed"},{formName:"Driving License",status:"Pending"}],k=()=>e.jsx(e.Fragment,{children:e.jsx(P,{data:w})});export{k as default};
