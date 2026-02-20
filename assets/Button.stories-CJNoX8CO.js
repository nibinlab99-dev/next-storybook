import{j as e}from"./jsx-runtime-Bs_7yqRw.js";import"./iframe-DaCMuqIX.js";import"./preload-helper-PPVm8Dsz.js";const ae=({className:r})=>e.jsxs("svg",{className:`animate-spin ${r}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),oe={primary:{base:"bg-button-primary-fill text-button-primary-text border border-button-primary-stroke",hover:"hover:bg-button-primary-fill-hover hover:border-button-primary-stroke-hover",hoverStatic:"bg-button-primary-fill-hover border-button-primary-stroke-hover text-button-primary-text",disabled:"bg-button-primary-fill-disabled border-button-primary-stroke-disabled text-button-primary-text cursor-not-allowed"},secondary:{base:"bg-button-secondary-fill text-button-secondary-text border border-button-secondary-stroke",hover:"hover:bg-button-secondary-fill-hover hover:border-button-secondary-stroke-hover",hoverStatic:"bg-button-secondary-fill-hover border-button-secondary-stroke-hover text-button-secondary-text",disabled:"bg-button-secondary-fill-disabled border-button-secondary-stroke-disabled text-button-secondary-text-disabled cursor-not-allowed"},tertiary:{base:"bg-button-tertiary-fill text-button-tertiary-text border border-button-tertiary-stroke",hover:"hover:text-button-tertiary-text-hover border border-button-tertiary-stroke",hoverStatic:"text-button-tertiary-text-hover border border-button-tertiary-stroke",disabled:"text-button-tertiary-text-disabled cursor-not-allowed border border-button-tertiary-stroke"}},se={sm:"px-sm py-xs text-xs leading-5 rounded-sm h-8",md:"px-md py-xs text-sm leading-6 rounded-md h-9",lg:"px-md py-sm text-base leading-7 rounded-md h-11"},ne={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-5 h-5"},ie={sm:"gap-1",md:"gap-1.5",lg:"gap-2"};function t({children:r,variant:J="primary",size:N="md",disabled:K=!1,isLoading:P=!1,showAsHover:Q=!1,leftIcon:V,rightIcon:W,className:Y="",...ee}){const R=oe[J],z=K||P;let C;z?C=R.disabled:Q?C=R.hoverStatic:C=`${R.base} ${R.hover}`;const re=["inline-flex items-center justify-center font-regular border",se[N],ie[N],C,Y].join(" "),k=ne[N],te=P?e.jsx(ae,{className:k}):V?e.jsx("span",{className:`inline-flex shrink-0 ${k}`,children:V}):null;return e.jsxs("button",{className:re,disabled:z,...ee,children:[te,r,W&&!P&&e.jsx("span",{className:`inline-flex shrink-0 ${k}`,children:W})]})}t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showAsHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const H=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"})}),a=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{fillRule:"evenodd",d:"M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z",clipRule:"evenodd"})}),Z=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{fillRule:"evenodd",d:"M17 10a.75.75 0 0 0-.75-.75H5.612l4.158-3.96a.75.75 0 1 0-1.04-1.08l-5.5 5.25a.75.75 0 0 0 0 1.08l5.5 5.25a.75.75 0 1 0 1.04-1.08L5.612 10.75H16.25A.75.75 0 0 0 17 10Z",clipRule:"evenodd"})}),T=r=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:[e.jsx("path",{d:"M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"}),e.jsx("path",{d:"M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"})]}),q=r=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:[e.jsx("path",{d:"M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z"}),e.jsx("path",{d:"M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"})]}),_=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",clipRule:"evenodd"})}),$=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"})}),E=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})}),O=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{fillRule:"evenodd",d:"M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.519.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z",clipRule:"evenodd"})}),U=r=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:[e.jsx("path",{d:"m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"}),e.jsx("path",{d:"M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"})]}),X=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{fillRule:"evenodd",d:"M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",clipRule:"evenodd"})}),F=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})}),G=r=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...r,children:e.jsx("path",{fillRule:"evenodd",d:"M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0v2.43l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",clipRule:"evenodd"})});H.__docgenInfo={description:"",methods:[],displayName:"PlusIcon"};a.__docgenInfo={description:"",methods:[],displayName:"ArrowRightIcon"};Z.__docgenInfo={description:"",methods:[],displayName:"ArrowLeftIcon"};T.__docgenInfo={description:"",methods:[],displayName:"DownloadIcon"};q.__docgenInfo={description:"",methods:[],displayName:"UploadIcon"};_.__docgenInfo={description:"",methods:[],displayName:"SearchIcon"};$.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"};E.__docgenInfo={description:"",methods:[],displayName:"XMarkIcon"};O.__docgenInfo={description:"",methods:[],displayName:"TrashIcon"};U.__docgenInfo={description:"",methods:[],displayName:"EditIcon"};X.__docgenInfo={description:"",methods:[],displayName:"SettingsIcon"};F.__docgenInfo={description:"",methods:[],displayName:"ChevronDownIcon"};G.__docgenInfo={description:"",methods:[],displayName:"LoadingIcon"};const M={none:void 0,plus:e.jsx(H,{}),arrowRight:e.jsx(a,{}),arrowLeft:e.jsx(Z,{}),download:e.jsx(T,{}),upload:e.jsx(q,{}),search:e.jsx(_,{}),check:e.jsx($,{}),xMark:e.jsx(E,{}),trash:e.jsx(O,{}),edit:e.jsx(U,{}),settings:e.jsx(X,{}),chevronDown:e.jsx(F,{}),loading:e.jsx(G,{})},pe={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:"A button component styled with Figma design tokens via TailwindCSS. Supports left and right icons."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"The visual style variant of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg"],description:"The size of the button",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},isLoading:{control:"boolean",description:"Show loading spinner and disable the button",table:{defaultValue:{summary:"false"}}},showAsHover:{control:"boolean",description:"Show button in permanent hover state (for documentation)",table:{defaultValue:{summary:"false"}}},leftIcon:{control:"select",options:Object.keys(M),mapping:M,description:"Icon to display on the left side of the button text",table:{defaultValue:{summary:"none"}}},rightIcon:{control:"select",options:Object.keys(M),mapping:M,description:"Icon to display on the right side of the button text",table:{defaultValue:{summary:"none"}}},children:{control:"text",description:"The content of the button"},className:{table:{disable:!0}},onClick:{table:{disable:!0}},type:{table:{disable:!0}},style:{table:{disable:!0}}},args:{children:"Button"}},o={args:{variant:"primary",children:"Primary Button"}},s={args:{variant:"primary",children:"Primary Hover",showAsHover:!0}},n={args:{variant:"primary",children:"Primary Disabled",disabled:!0}},i={args:{variant:"secondary",children:"Secondary Button"}},d={args:{variant:"secondary",children:"Secondary Hover",showAsHover:!0}},c={args:{variant:"secondary",children:"Secondary Disabled",disabled:!0}},l={args:{variant:"tertiary",children:"Tertiary Button"}},p={args:{variant:"tertiary",children:"Tertiary Hover",showAsHover:!0}},m={args:{variant:"tertiary",children:"Tertiary Disabled",disabled:!0}},u={args:{variant:"primary",children:"Loading...",isLoading:!0}},h={args:{variant:"secondary",children:"Processing...",isLoading:!0}},y={args:{variant:"tertiary",children:"Loading...",isLoading:!0}},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",isLoading:!0,children:"Saving..."}),e.jsx(t,{variant:"secondary",isLoading:!0,children:"Processing..."}),e.jsx(t,{variant:"tertiary",isLoading:!0,children:"Loading..."})]})},g={args:{size:"sm",children:"Small"}},x={args:{size:"md",children:"Medium"}},f={args:{size:"lg",children:"Large"}},b={args:{variant:"primary",children:"Add Item",leftIcon:e.jsx(H,{})}},w={args:{variant:"primary",children:"Continue",rightIcon:e.jsx(a,{})}},j={args:{variant:"primary",children:"Download",leftIcon:e.jsx(T,{}),rightIcon:e.jsx(a,{})}},I={args:{variant:"secondary",children:"Search",leftIcon:e.jsx(_,{})}},B={args:{variant:"tertiary",children:"Learn more",rightIcon:e.jsx(a,{})}},S={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"})]})},A={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"})]})},L={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontWeight:600},children:"Primary"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"primary",children:"Default"}),e.jsx(t,{variant:"primary",showAsHover:!0,children:"Hover"}),e.jsx(t,{variant:"primary",disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontWeight:600},children:"Secondary"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"secondary",children:"Default"}),e.jsx(t,{variant:"secondary",showAsHover:!0,children:"Hover"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontWeight:600},children:"Tertiary"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"tertiary",children:"Default"}),e.jsx(t,{variant:"tertiary",showAsHover:!0,children:"Hover"}),e.jsx(t,{variant:"tertiary",disabled:!0,children:"Disabled"})]})]})]})},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontWeight:600},children:"Left Icon"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"primary",leftIcon:e.jsx(H,{}),children:"Add"}),e.jsx(t,{variant:"secondary",leftIcon:e.jsx(_,{}),children:"Search"}),e.jsx(t,{variant:"tertiary",leftIcon:e.jsx(T,{}),children:"Download"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontWeight:600},children:"Right Icon"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"primary",rightIcon:e.jsx(a,{}),children:"Next"}),e.jsx(t,{variant:"secondary",rightIcon:e.jsx(a,{}),children:"Continue"}),e.jsx(t,{variant:"tertiary",rightIcon:e.jsx(a,{}),children:"Learn more"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontWeight:600},children:"Both Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"primary",leftIcon:e.jsx(T,{}),rightIcon:e.jsx(a,{}),children:"Download"}),e.jsx(t,{variant:"secondary",leftIcon:e.jsx(H,{}),rightIcon:e.jsx(a,{}),children:"Add & Continue"})]})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...o.parameters?.docs?.source},description:{story:"The default primary button style",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Hover',
    showAsHover: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Primary button in hover state",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Disabled',
    disabled: true
  }
}`,...n.parameters?.docs?.source},description:{story:"Primary button in disabled state",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...i.parameters?.docs?.source},description:{story:"Secondary button with outline style",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Hover',
    showAsHover: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Secondary button in hover state",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Disabled',
    disabled: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Secondary button in disabled state",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...l.parameters?.docs?.source},description:{story:"Tertiary button with minimal styling",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Hover',
    showAsHover: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Tertiary button in hover state",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Disabled',
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Tertiary button in disabled state",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Loading...',
    isLoading: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Primary button in loading state",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Processing...',
    isLoading: true
  }
}`,...h.parameters?.docs?.source},description:{story:"Secondary button in loading state",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Loading...',
    isLoading: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Tertiary button in loading state",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
            <Button variant="primary" isLoading>Saving...</Button>
            <Button variant="secondary" isLoading>Processing...</Button>
            <Button variant="tertiary" isLoading>Loading...</Button>
        </div>
}`,...v.parameters?.docs?.source},description:{story:"All loading states comparison",...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...g.parameters?.docs?.source},description:{story:"Small size button",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium'
  }
}`,...x.parameters?.docs?.source},description:{story:"Medium size button (default)",...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large'
  }
}`,...f.parameters?.docs?.source},description:{story:"Large size button",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Add Item',
    leftIcon: <PlusIcon />
  }
}`,...b.parameters?.docs?.source},description:{story:"Button with icon on the left",...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Continue',
    rightIcon: <ArrowRightIcon />
  }
}`,...w.parameters?.docs?.source},description:{story:"Button with icon on the right",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Download',
    leftIcon: <DownloadIcon />,
    rightIcon: <ArrowRightIcon />
  }
}`,...j.parameters?.docs?.source},description:{story:"Button with icons on both sides",...j.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Search',
    leftIcon: <SearchIcon />
  }
}`,...I.parameters?.docs?.source},description:{story:"Secondary button with left icon",...I.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Learn more',
    rightIcon: <ArrowRightIcon />
  }
}`,...B.parameters?.docs?.source},description:{story:"Tertiary button with right icon",...B.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
        </div>
}`,...S.parameters?.docs?.source},description:{story:"All button variants side by side for comparison",...S.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
}`,...A.parameters?.docs?.source},description:{story:"All button sizes side by side for comparison",...A.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
            <div>
                <h4 style={{
        marginBottom: '8px',
        fontWeight: 600
      }}>Primary</h4>
                <div style={{
        display: 'flex',
        gap: '12px'
      }}>
                    <Button variant="primary">Default</Button>
                    <Button variant="primary" showAsHover>Hover</Button>
                    <Button variant="primary" disabled>Disabled</Button>
                </div>
            </div>
            <div>
                <h4 style={{
        marginBottom: '8px',
        fontWeight: 600
      }}>Secondary</h4>
                <div style={{
        display: 'flex',
        gap: '12px'
      }}>
                    <Button variant="secondary">Default</Button>
                    <Button variant="secondary" showAsHover>Hover</Button>
                    <Button variant="secondary" disabled>Disabled</Button>
                </div>
            </div>
            <div>
                <h4 style={{
        marginBottom: '8px',
        fontWeight: 600
      }}>Tertiary</h4>
                <div style={{
        display: 'flex',
        gap: '12px'
      }}>
                    <Button variant="tertiary">Default</Button>
                    <Button variant="tertiary" showAsHover>Hover</Button>
                    <Button variant="tertiary" disabled>Disabled</Button>
                </div>
            </div>
        </div>
}`,...L.parameters?.docs?.source},description:{story:"All button states (default, hover, disabled) for each variant",...L.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
            <div>
                <h4 style={{
        marginBottom: '8px',
        fontWeight: 600
      }}>Left Icon</h4>
                <div style={{
        display: 'flex',
        gap: '12px'
      }}>
                    <Button variant="primary" leftIcon={<PlusIcon />}>Add</Button>
                    <Button variant="secondary" leftIcon={<SearchIcon />}>Search</Button>
                    <Button variant="tertiary" leftIcon={<DownloadIcon />}>Download</Button>
                </div>
            </div>
            <div>
                <h4 style={{
        marginBottom: '8px',
        fontWeight: 600
      }}>Right Icon</h4>
                <div style={{
        display: 'flex',
        gap: '12px'
      }}>
                    <Button variant="primary" rightIcon={<ArrowRightIcon />}>Next</Button>
                    <Button variant="secondary" rightIcon={<ArrowRightIcon />}>Continue</Button>
                    <Button variant="tertiary" rightIcon={<ArrowRightIcon />}>Learn more</Button>
                </div>
            </div>
            <div>
                <h4 style={{
        marginBottom: '8px',
        fontWeight: 600
      }}>Both Icons</h4>
                <div style={{
        display: 'flex',
        gap: '12px'
      }}>
                    <Button variant="primary" leftIcon={<DownloadIcon />} rightIcon={<ArrowRightIcon />}>Download</Button>
                    <Button variant="secondary" leftIcon={<PlusIcon />} rightIcon={<ArrowRightIcon />}>Add & Continue</Button>
                </div>
            </div>
        </div>
}`,...D.parameters?.docs?.source},description:{story:"All icon variations for comparison",...D.parameters?.docs?.description}}};const me=["Primary","PrimaryHover","PrimaryDisabled","Secondary","SecondaryHover","SecondaryDisabled","Tertiary","TertiaryHover","TertiaryDisabled","Loading","SecondaryLoading","TertiaryLoading","AllLoadingStates","Small","Medium","Large","WithLeftIcon","WithRightIcon","WithBothIcons","SecondaryWithIcon","TertiaryWithIcon","AllVariants","AllSizes","AllStates","AllIconVariations"];export{D as AllIconVariations,v as AllLoadingStates,A as AllSizes,L as AllStates,S as AllVariants,f as Large,u as Loading,x as Medium,o as Primary,n as PrimaryDisabled,s as PrimaryHover,i as Secondary,c as SecondaryDisabled,d as SecondaryHover,h as SecondaryLoading,I as SecondaryWithIcon,g as Small,l as Tertiary,m as TertiaryDisabled,p as TertiaryHover,y as TertiaryLoading,B as TertiaryWithIcon,j as WithBothIcons,b as WithLeftIcon,w as WithRightIcon,me as __namedExportsOrder,pe as default};
