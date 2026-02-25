import{u as r}from"./DmfvTtO6.js";import{s as e}from"./BetCPq4p.js";import{T as a,t as n,v as s,a6 as i,a8 as u}from"./BFiXILS_.js";import"./C7v69Rok.js";var p=`
.p-radiobutton-group {
    display: inline-flex;
}
`,d={root:"p-radiobutton-group p-component"},m=a.extend({name:"radiobuttongroup",style:p,classes:d}),c={name:"BaseRadioButtonGroup",extends:e,style:m,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},l={name:"RadioButtonGroup",extends:c,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||r("radiobutton-group-")}};function f(t,o,g,h,v,$){return s(),n("div",u({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default")],16)}l.render=f;export{l as default};
