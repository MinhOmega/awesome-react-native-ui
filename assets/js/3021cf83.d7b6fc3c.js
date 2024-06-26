(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[857],{9026:(e,i,a)=>{var t={"./accordions.json":2664,"./arcsliders.json":9329,"./buttons.json":6160,"./charts.json":4702,"./headers.json":5003,"./lists.json":5224,"./loaders.json":2765,"./misc.json":2639,"./onboardings.json":619,"./tabbars.json":3056};function r(e){var i=o(e);return a(i)}function o(e){if(!a.o(t,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=o,e.exports=r,r.id=9026},5952:(e,i,a)=>{"use strict";a.r(i),a.d(i,{assets:()=>_,contentTitle:()=>l,default:()=>f,frontMatter:()=>w,metadata:()=>g,toc:()=>y});var t=a(6070),r=a(5710),o=a(758);const n=()=>{const[e,i]=(0,o.useState)(0);return(0,o.useEffect)((()=>{var e;const t=(e=a(9026)).keys().map(e).reduce(((e,i)=>e+i.length),0);i(t)}),[]),(0,t.jsx)("div",{children:(0,t.jsxs)("p",{children:["Number Of Components: ",(0,t.jsx)("strong",{children:e})]})})};var d=["second","minute","hour","day","week","month","year"];var s=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var m={},u=function(e,i){m[e]=i},c=[60,60,24,7,365/7/12,12];function h(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var b=function(e,i,a){var t=function(e,i){return(+(i?h(i):new Date)-+h(e))/1e3}(e,a&&a.relativeDate);return function(e,i){for(var a=e<0?1:0,t=e=Math.abs(e),r=0;e>=c[r]&&r<c.length;r++)e/=c[r];return(e=Math.floor(e))>(0==(r*=2)?9:1)&&(r+=1),i(e,r,t)[a].replace("%s",e.toString())}(t,function(e){return m[e]||m.en_US}(i))};u("en_US",(function(e,i){if(0===i)return["just now","right now"];var a=d[Math.floor(i/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]})),u("zh_CN",(function(e,i){if(0===i)return["\u521a\u521a","\u7247\u523b\u540e"];var a=s[~~(i/2)];return[e+" "+a+"\u524d",e+" "+a+"\u540e"]}));const p=()=>{const[e,i]=(0,o.useState)(null);(0,o.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.github.com/repos/mrpmohiburrahman/awesome-react-native-ui/commits?per_page=1"),a=await e.json();if(a&&a.length>0){const e=new Date(a[0].commit.committer.date),t=b(e);i(`Last updated: ${t}`)}}catch(e){console.error("Failed to fetch last commit date:",e)}})()}),[]);return(0,t.jsx)("div",{children:e?(e=>{const i=e.split("Last updated: ");return i.length>1?(0,t.jsxs)("p",{children:["Last updated: ",(0,t.jsx)("strong",{children:i[1]})]}):(0,t.jsx)("p",{children:e})})(e):(0,t.jsx)("p",{children:"Loading last updated date..."})})},w={id:"getting-started",title:"Welcome to React Native Animations Hub",sidebar_label:"Getting Started",description:"Discover React Native animations created by the community.",image:"/img/og.png",slug:"/"},l=void 0,g={id:"getting-started",title:"Welcome to React Native Animations Hub",description:"Discover React Native animations created by the community.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/awesome-react-native-ui/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Welcome to React Native Animations Hub",sidebar_label:"Getting Started",description:"Discover React Native animations created by the community.",image:"/img/og.png",slug:"/"},sidebar:"packages",next:{title:"Onboardings",permalink:"/awesome-react-native-ui/onboardings"}},_={},y=[{value:"\ud83c\udf1f Enjoying the Site?",id:"-enjoying-the-site",level:3},{value:"\ud83e\udd1d Want to Contribute?",id:"-want-to-contribute",level:3}];function I(e){const i={a:"a",h3:"h3",hr:"hr",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Explore creative UI animations made with React Native by the community."}),"\n","\n",(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)(n,{}),(0,t.jsx)(p,{})]}),"\n",(0,t.jsx)(i.h3,{id:"-enjoying-the-site",children:"\ud83c\udf1f Enjoying the Site?"}),"\n",(0,t.jsxs)(i.p,{children:["If you find these animations useful, please consider giving our repository a star on ",(0,t.jsx)(i.a,{href:"https://github.com/mrpmohiburrahman/awesome-react-native-ui",children:"GitHub"}),". Your support helps us continue to grow and provide more high-quality content for the community!"]}),"\n","\n",(0,t.jsx)(i.h3,{id:"-want-to-contribute",children:"\ud83e\udd1d Want to Contribute?"}),"\n",(0,t.jsxs)(i.p,{children:["We welcome contributions from the community! If you have created an awesome React Native animation, share it with us. Follow the contribution guidelines on our ",(0,t.jsx)(i.a,{href:"https://github.com/mrpmohiburrahman/awesome-react-native-ui?tab=readme-ov-file#contributing",children:"GitHub repository"})," to submit your animations."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.p,{children:"Enjoy your visit!"})]})}function f(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(I,{...e})}):I(e)}},2664:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Dynamic Accordion","demo":"demo/accordions/dynamic_accordion_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/accordion","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"}]')},9329:e=>{"use strict";e.exports=JSON.parse('[{"caption":" Animated Gauge","demo":"demo/arcsliders/animated_gauge_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-gauge","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Arc Slider","demo":"demo/arcsliders/arc_slider_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/ArcSlider","twitterId":"wa2goose","linkedInId":"thefriyia"}]')},6160:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Dial Button","demo":"demo/buttons/dial_button_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/dial-button","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Floating Button","demo":"demo/buttons/floating_button_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/floating-button","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Runny Border","demo":"demo/buttons/runny_border_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/runny-border","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Neumorphic Button","demo":"demo/buttons/neumorphic_button_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/NeumorphicButton","twitterId":"wa2goose","linkedInId":"thefriyia"}]')},4702:e=>{"use strict";e.exports=JSON.parse('[{"demo":"demo/charts/lineChart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/LineChart","twitterId":"wa2goose","linkedInId":"thefriyia"},{"demo":"demo/charts/barchart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/BarChart","twitterId":"wa2goose","linkedInId":"thefriyia"}]')},5003:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Sticky Header","demo":"demo/headers/sticky_header_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/sticky-header","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"}]')},5224:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Swipeable Rows","demo":"demo/lists/swipeable_rows_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/swipeable-rows","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Expandable List","demo":"demo/lists/expandable_list_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/expanding-list","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"}]')},2765:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Animated Loader","demo":"demo/loaders/animated_loader_hewad_mubariz.mp4","Author":"Daniel Friyia","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-loader","twitterId":"wa2goose","linkedInId":"thefriyia"},{"demo":"demo/loaders/morphingLoader.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia"}]')},2639:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Animated Cards","demo":"demo/misc/animated_cards_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-cards","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Animated Shapes","demo":"demo/misc/animated_shapes_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-shapes","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Audio Input Visualizer","demo":"demo/misc/audio_input_visualizer_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/audio-input-visualizer","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Flippy Card","demo":"demo/misc/flippy_card_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/flippy-card","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Playing Cards","demo":"demo/misc/playing_cards_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/rating-wave","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Rating Wave","demo":"demo/misc/rating_wave_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/rating-wave","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Expandable FAB","demo":"demo/misc/expandable_fab_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/expandable-fab","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Micro Swipe Actions","demo":"demo/misc/micro_swipe_actions_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/micro-swipe-actions","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Genetic AI","demo":"demo/misc/geneticai_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/GeneticAI","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Bending Circle","demo":"demo/misc/bending_circle_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Chasing Bubble","demo":"demo/misc/chasing_bubble_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Expo Pulse","demo":"demo/misc/expo_pulse_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/ExpoPulse","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Morphing Circle","demo":"demo/misc/morphing_circle_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/MorphingCircle","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Vital Sign Monitor","demo":"demo/misc/vital_sign_monitor_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/VitalSignMonitor","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Confetti","demo":"demo/misc/confetti_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/Confetti","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Gran Turismo Countdown","demo":"demo/misc/gran_turismo_countdown_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/GranTurismo","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Metaball Shader","demo":"demo/misc/metaball_shader_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/Shaders/MetaballShader","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Random Circle Shader","demo":"demo/misc/random_circle_shader_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/Shaders/RandomCircles","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Focus Animation","demo":"demo/misc/focus_animation_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/FocusAnimation","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Gradient Clock","demo":"demo/misc/gradient_clock_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/FocusAnimation","twitterId":"wa2goose","linkedInId":"thefriyia"},{"caption":"Donut Chart","demo":"demo/misc/donut_chart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/DonutChart","twitterId":"wa2goose","linkedInId":"thefriyia"}]')},619:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Bouncy Onboarding  ","demo":"demo/onboardings/bouncy_onboarding_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/BouncyOnboarding","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Circular Onboarding","demo":"demo/onboardings/circular_onboarding_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/circular-onboarding","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"}]')},3056:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Dynamic Tabs","demo":"demo/tabbars/dynamic_tabs_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/dynamic-tabs","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"},{"caption":"Direction Aware Tabs","demo":"demo/tabbars/direction_aware_tabs_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/direction-aware-tabs","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz"}]')}}]);