(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[857],{9026:(e,a,i)=>{var t={"./accordions.json":2664,"./arcsliders.json":9329,"./bottomsheets.json":6196,"./buttons.json":6160,"./changedItems.json":9171,"./charts.json":4702,"./fullapps.json":9694,"./headers.json":5003,"./lists.json":5224,"./loaders.json":2765,"./misc.json":2639,"./onboardings.json":619,"./sliders.json":3675,"./tabbars.json":3056};function r(e){var a=o(e);return i(a)}function o(e){if(!i.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=o,e.exports=r,r.id=9026},4125:(e,a,i)=>{"use strict";i.r(a),i.d(a,{assets:()=>f,contentTitle:()=>y,default:()=>v,frontMatter:()=>_,metadata:()=>z,toc:()=>A});var t=i(6070),r=i(5710),o=i(758);const d=()=>{const[e,a]=(0,o.useState)(0);return(0,o.useEffect)((()=>{var e;const t=(e=i(9026)).keys().map(e).reduce(((e,a)=>e+a.length),0);a(t)}),[]),(0,t.jsx)("div",{children:(0,t.jsxs)("p",{children:["Number Of Components: ",(0,t.jsx)("strong",{children:e})]})})};var n=["second","minute","hour","day","week","month","year"];var s=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var u={},c=function(e,a){u[e]=a},m=[60,60,24,7,365/7/12,12];function h(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var p=function(e,a,i){var t=function(e,a){return(+(a?h(a):new Date)-+h(e))/1e3}(e,i&&i.relativeDate);return function(e,a){for(var i=e<0?1:0,t=e=Math.abs(e),r=0;e>=m[r]&&r<m.length;r++)e/=m[r];return(e=Math.floor(e))>(0==(r*=2)?9:1)&&(r+=1),a(e,r,t)[i].replace("%s",e.toString())}(t,function(e){return u[e]||u.en_US}(a))};c("en_US",(function(e,a){if(0===a)return["just now","right now"];var i=n[Math.floor(a/2)];return e>1&&(i+="s"),[e+" "+i+" ago","in "+e+" "+i]})),c("zh_CN",(function(e,a){if(0===a)return["\u521a\u521a","\u7247\u523b\u540e"];var i=s[~~(a/2)];return[e+" "+i+"\u524d",e+" "+i+"\u540e"]}));const l=JSON.parse('{"lastCommitDate":"2024-07-06T14:23:57.664Z"}'),b=()=>{const[e,a]=(0,o.useState)(null);(0,o.useEffect)((()=>{(async()=>{try{if(l&&l.lastCommitDate){const e=new Date(l.lastCommitDate),i=p(e);a(`Last updated: ${i}`)}}catch(e){console.error("Failed to fetch last commit date:",e)}})()}),[]);return(0,t.jsx)("div",{children:e?(e=>{const a=e.split("Last updated: ");return a.length>1?(0,t.jsxs)("p",{children:["Last updated: ",(0,t.jsx)("strong",{children:a[1]})]}):(0,t.jsx)("p",{children:e})})(e):(0,t.jsx)("p",{children:"Loading last updated date..."})})};var g=i(2720),w=i(9171),I=i(1885);const k=()=>{const[e,a]=(0,o.useState)(!1);(0,o.useEffect)((()=>{const e=setTimeout((()=>{a(!0)}),3e3);return()=>clearTimeout(e)}),[]);return w.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h2",{onClick:()=>{a(!e)},style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[e?(0,t.jsx)(I.xDt,{}):(0,t.jsx)(I.BZI,{}),"\xa0\u2728 Latest Added Components"]}),e&&(0,t.jsx)("div",{children:(0,t.jsx)(g.A,{items:w})})]})},_={id:"getting-started",title:"Welcome to React Native Animations Hub",sidebar_label:"Getting Started",description:"Discover React Native animations created by the community.",image:"/img/og.png",slug:"/"},y=void 0,z={id:"getting-started",title:"Welcome to React Native Animations Hub",description:"Discover React Native animations created by the community.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/awesome-react-native-ui/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Welcome to React Native Animations Hub",sidebar_label:"Getting Started",description:"Discover React Native animations created by the community.",image:"/img/og.png",slug:"/"},sidebar:"packages",next:{title:"Onboardings",permalink:"/awesome-react-native-ui/onboardings"}},f={},A=[{value:"\ud83c\udf1f Enjoying the Site?",id:"-enjoying-the-site",level:3},{value:"\ud83e\udd1d Want to Contribute?",id:"-want-to-contribute",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Explore creative UI animations made with React Native by the community."}),"\n","\n",(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)(d,{}),(0,t.jsx)(b,{})]}),"\n",(0,t.jsx)(a.h3,{id:"-enjoying-the-site",children:"\ud83c\udf1f Enjoying the Site?"}),"\n",(0,t.jsxs)(a.p,{children:["If you find these animations useful, please consider giving our repository a ",(0,t.jsx)(a.strong,{children:(0,t.jsx)(a.code,{children:"star"})})," on ",(0,t.jsx)(a.a,{href:"https://github.com/mrpmohiburrahman/awesome-react-native-ui",children:"GitHub"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"Your support helps us continue to grow and provide more high-quality content for the community!"}),"\n",(0,t.jsx)(k,{}),"\n",(0,t.jsx)(a.h3,{id:"-want-to-contribute",children:"\ud83e\udd1d Want to Contribute?"}),"\n",(0,t.jsxs)(a.p,{children:["We welcome contributions from the community! If you have created an awesome React Native animation, share it with us. Follow the contribution guidelines on our ",(0,t.jsx)(a.a,{href:"https://github.com/mrpmohiburrahman/awesome-react-native-ui?tab=readme-ov-file#contributing",children:"GitHub repository"})," to submit your animations."]}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(a.p,{children:"Enjoy your visit!"})]})}function v(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},2664:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Dynamic Accordion","demo":"demo/accordions/dynamic_accordion_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/accordion","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},9329:e=>{"use strict";e.exports=JSON.parse('[{"caption":" Animated Gauge","demo":"demo/arcsliders/animated_gauge_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-gauge","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Arc Slider","demo":"demo/arcsliders/arc_slider_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/ArcSlider","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},6196:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Reanimated Bottom Sheet","demo":"demo/bottomsheets/reanimated_bottom_sheet_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion-labs/reanimated-bottom-sheet-video","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"}]')},6160:e=>{"use strict";e.exports=JSON.parse('[{"caption":"react-native-cyberpunk-button","demo":"demo/buttons/react-native-cyberpunk-button_epicode.mp4","Author":"Epicode | 0xV","source":"https://github.com/msadura/react-native-cyberpunk-button","twitterId":"epicode_","githubId":"msadura"},{"caption":"Jelly button","demo":"demo/buttons/jelly_button_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/kacperkapusciak/reanimated-squishy-button","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Dial Button","demo":"demo/buttons/dial_button_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/dial-button","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Floating Button","demo":"demo/buttons/floating_button_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/floating-button","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Runny Border","demo":"demo/buttons/runny_border_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/runny-border","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Neumorphic Button","demo":"demo/buttons/neumorphic_button_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/NeumorphicButton","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},9171:e=>{"use strict";e.exports=[]},4702:e=>{"use strict";e.exports=JSON.parse('[{"demo":"demo/charts/lineChart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/LineChart","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"demo":"demo/charts/barchart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/BarChart","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},9694:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Furniture App","demo":"demo/fullapps/furniture_app_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/Furniture_App","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},5003:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Sticky Header","demo":"demo/headers/sticky_header_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/sticky-header","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},5224:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Swipeable Rows","demo":"demo/lists/swipeable_rows_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/swipeable-rows","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Expandable List","demo":"demo/lists/expandable_list_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/expanding-list","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},2765:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Animated Loader","demo":"demo/loaders/animated_loader_hewad_mubariz.mp4","Author":"Daniel Friyia","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-loader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"demo":"demo/loaders/morphingLoader.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},2639:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Shared Elements Transition","demo":"demo/misc/shared_elements_transition_evening_kid_arnaud_dellinger.mp4","Author":"Arnaud Dellinger ( evening kid )","source":"https://gist.github.com/eveningkid/bda4c848b90416e930a5621ac392dee6","linkedInId":"arnaud-dellinger","twitterId":"eveningkid","githubId":"eveningkid"},{"caption":"Animated Twitter Profile","demo":"demo/misc/animated_twitter_profile_ evening_kid_ arnaud_dellinger.mp4","Author":"Arnaud Dellinger ( evening kid )","source":"https://gist.github.com/eveningkid/a894c86db4ee1091611e9dc6a2470348","linkedInId":"arnaud-dellinger","twitterId":"eveningkid","githubId":"eveningkid"},{"caption":"react-native-snow-bg","demo":"demo/misc/react-native-snow-bg-epicode.mp4","Author":"Epicode | 0xV","source":"https://github.com/msadura/react-native-snow-bg","twitterId":"epicode_","githubId":"msadura"},{"caption":"Color Pixelated","demo":"demo/misc/color_pixelated_daehyeon_mun.mp4","Author":"Daehyeon Mun (\ubb38\ub300\ud604)","source":"https://github.com/daehyeonmun2021/react-native-animation-lab/tree/main/src/screens/color-pixelated","twitterId":"DaehyeonMun","linkedInId":"daehyeon-mun-5ba674164","githubId":"daehyeonmun2021"},{"caption":"Typography Metaball","demo":"demo/misc/typography_metaball_daehyeon_mun.mp4","Author":"Daehyeon Mun (\ubb38\ub300\ud604)","source":"https://github.com/daehyeonmun2021/react-native-animation-lab/tree/main/src/screens/typography-metaball","twitterId":"DaehyeonMun","linkedInId":"daehyeon-mun-5ba674164","githubId":"daehyeonmun2021"},{"caption":"Pixelated Image","demo":"demo/misc/pixelated_image_daehyeon_mun.mp4","Author":"Daehyeon Mun (\ubb38\ub300\ud604)","source":"https://github.com/daehyeonmun2021/react-native-animation-lab/tree/main/src/screens/pixelated-image","twitterId":"DaehyeonMun","linkedInId":"daehyeon-mun-5ba674164","githubId":"daehyeonmun2021"},{"caption":"Ripple Effect With React Native Skia","demo":"demo/misc/ripple_effect_daehyeon_mun.mp4","Author":"Daehyeon Mun (\ubb38\ub300\ud604)","source":"https://gist.github.com/daehyeonmun2021/21aea72f655da6c0ca8922191daade5e","twitterId":"DaehyeonMun","linkedInId":"daehyeon-mun-5ba674164","githubId":"daehyeonmun2021"},{"caption":"Phyllotaxis Spiral","demo":"demo/misc/phyllotaxis_spiral_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/Phyllotaxis","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Flappy Bird","demo":"demo/misc/flappy_bird_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/FlappyBird","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Firework","demo":"demo/misc/firework_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/Firework","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Fractal Tree","demo":"demo/misc/fractal_tree_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/FractalTree","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Starfield Simulation","demo":"demo/misc/starfield_simulation_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/Starfield","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Double Pendulum","demo":"demo/misc/double_pendulum_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/DoublePendulum","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Shared Element Transitions Example","demo":"demo/misc/shared_element_transitions_example_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion/react-native-reanimated/blob/4fcda2939cf70c9bb83efe08b8814e48653b1fa3/app/src/examples/SharedElementTransitions/Profiles.tsx","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Gradient Shared Transition","demo":"demo/misc/gradient_shared_transition_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion-labs/gradient-shared-transitions-example","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Magic Curtain Effect","demo":"demo/misc/magic_curtain_effect_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/kacperkapusciak/expo-magic-curtain","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Parallax Effect","demo":"demo/misc/parallax_effect_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion-labs/reanimated-parallax","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Fake Shared Element Transition","demo":"demo/misc/fake_shared_element_transition_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://github.com/aleqsio/sharedelement/blob/master/SharedElement.tsx","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"View Transition using Skia","demo":"demo/misc/view_transition_using_skia_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://gist.github.com/aleqsio/754b3a2b664b928f5c65d715b9452d77","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Townscaper","demo":"demo/misc/townscaper_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://github.com/aleqsio/expo-image-and-gesture-handler-demo","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Gradient Picker","demo":"demo/misc/gradient_picker_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://github.com/aleqsio/gradient-picker-reanimated","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Micro Interactoins","demo":"demo/misc/micro_interactions_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://x.com/aleqsio/status/1701164940629815741/photo/1","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Animated Cards","demo":"demo/misc/animated_cards_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-cards","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Animated Shapes","demo":"demo/misc/animated_shapes_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-shapes","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Audio Input Visualizer","demo":"demo/misc/audio_input_visualizer_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/audio-input-visualizer","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Flippy Card","demo":"demo/misc/flippy_card_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/flippy-card","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Playing Cards","demo":"demo/misc/playing_cards_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/rating-wave","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Rating Wave","demo":"demo/misc/rating_wave_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/rating-wave","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Expandable FAB","demo":"demo/misc/expandable_fab_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/expandable-fab","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Micro Swipe Actions","demo":"demo/misc/micro_swipe_actions_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/micro-swipe-actions","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Genetic AI","demo":"demo/misc/geneticai_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/GeneticAI","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Bending Circle","demo":"demo/misc/bending_circle_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Chasing Bubble","demo":"demo/misc/chasing_bubble_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Expo Pulse","demo":"demo/misc/expo_pulse_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/ExpoPulse","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Morphing Circle","demo":"demo/misc/morphing_circle_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/MorphingCircle","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Vital Sign Monitor","demo":"demo/misc/vital_sign_monitor_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/VitalSignMonitor","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Confetti","demo":"demo/misc/confetti_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/Confetti","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Gran Turismo Countdown","demo":"demo/misc/gran_turismo_countdown_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/GranTurismo","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Metaball Shader","demo":"demo/misc/metaball_shader_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/Shaders/MetaballShader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Random Circle Shader","demo":"demo/misc/random_circle_shader_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/Shaders/RandomCircles","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Focus Animation","demo":"demo/misc/focus_animation_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/FocusAnimation","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Gradient Clock","demo":"demo/misc/gradient_clock_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/FocusAnimation","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Donut Chart","demo":"demo/misc/donut_chart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/DonutChart","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},619:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Onboarding Animation","demo":"demo/onboardings/onboarding_animation_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://github.com/aleqsio/onboarding-animation-example","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Bouncy Onboarding  ","demo":"demo/onboardings/bouncy_onboarding_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/BouncyOnboarding","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Circular Onboarding","demo":"demo/onboardings/circular_onboarding_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/circular-onboarding","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},3675:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Sensor Based Slider","demo":"demo/sliders/sensor_based_slider_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion/react-native-reanimated/pull/4330/files","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"}]')},3056:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Spotify Tab","demo":"demo/tabbars/spotify_tab_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://snack.expo.dev/@alirezahadjar/spotify-tab","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Sticky Tabs","demo":"demo/tabbars/sticky_tabs_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/stickyTab","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Tab Bar Micro Interactions","demo":"demo/tabbars/tab_bar_micro_interactions_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/kacperkapusciak/reanimated-expo-router-tabs","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Dynamic Tabs","demo":"demo/tabbars/dynamic_tabs_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/dynamic-tabs","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Direction Aware Tabs","demo":"demo/tabbars/direction_aware_tabs_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/direction-aware-tabs","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')}}]);