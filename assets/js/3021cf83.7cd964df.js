(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[857],{9026:(a,e,i)=>{var t={"./accordions.json":2664,"./arcsliders.json":9329,"./bottomsheets.json":6196,"./buttons.json":6160,"./carousels.json":5130,"./changedItems.json":9171,"./charts.json":4702,"./dropdowns.json":6403,"./fullapps.json":9694,"./headers.json":5003,"./lists.json":5224,"./loaders.json":2765,"./misc.json":2639,"./onboardings.json":619,"./parallaxes.json":9840,"./sliders.json":3675,"./tabbars.json":3056};function r(a){var e=n(a);return i(e)}function n(a){if(!i.o(t,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return t[a]}r.keys=function(){return Object.keys(t)},r.resolve=n,a.exports=r,r.id=9026},1664:(a,e,i)=>{"use strict";i.r(e),i.d(e,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>k,metadata:()=>z,toc:()=>A});var t=i(6070),r=i(5710),n=i(758);const o=()=>{const[a,e]=(0,n.useState)(0);return(0,n.useEffect)((()=>{var a;const t=(a=i(9026)).keys().map(a).reduce(((a,e)=>a+e.length),0);e(t)}),[]),(0,t.jsx)("div",{children:(0,t.jsxs)("p",{children:["Number Of Components: ",(0,t.jsx)("strong",{children:a})]})})};var d=["second","minute","hour","day","week","month","year"];var m=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var u={},s=function(a,e){u[a]=e},c=[60,60,24,7,365/7/12,12];function h(a){return a instanceof Date?a:!isNaN(a)||/^\d+$/.test(a)?new Date(parseInt(a)):(a=(a||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(a))}var p=function(a,e,i){var t=function(a,e){return(+(e?h(e):new Date)-+h(a))/1e3}(a,i&&i.relativeDate);return function(a,e){for(var i=a<0?1:0,t=a=Math.abs(a),r=0;a>=c[r]&&r<c.length;r++)a/=c[r];return(a=Math.floor(a))>(0==(r*=2)?9:1)&&(r+=1),e(a,r,t)[i].replace("%s",a.toString())}(t,function(a){return u[a]||u.en_US}(e))};s("en_US",(function(a,e){if(0===e)return["just now","right now"];var i=d[Math.floor(e/2)];return a>1&&(i+="s"),[a+" "+i+" ago","in "+a+" "+i]})),s("zh_CN",(function(a,e){if(0===e)return["\u521a\u521a","\u7247\u523b\u540e"];var i=m[~~(e/2)];return[a+" "+i+"\u524d",a+" "+i+"\u540e"]}));const l=JSON.parse('{"lastCommitDate":"2024-07-15T22:08:08.194Z"}'),b=()=>{const[a,e]=(0,n.useState)(null);(0,n.useEffect)((()=>{(async()=>{try{if(l&&l.lastCommitDate){const a=new Date(l.lastCommitDate),i=p(a);e(`Last updated: ${i}`)}}catch(a){console.error("Failed to fetch last commit date:",a)}})()}),[]);return(0,t.jsx)("div",{children:a?(a=>{const e=a.split("Last updated: ");return e.length>1?(0,t.jsxs)("p",{children:["Last updated: ",(0,t.jsx)("strong",{children:e[1]})]}):(0,t.jsx)("p",{children:a})})(a):(0,t.jsx)("p",{children:"Loading last updated date..."})})};var g=i(5550),_=i(9171),I=i(1885);const w=()=>{const[a,e]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const a=setTimeout((()=>{e(!0)}),3e3);return()=>clearTimeout(a)}),[]);return _.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h2",{onClick:()=>{e(!a)},style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[a?(0,t.jsx)(I.xDt,{}):(0,t.jsx)(I.BZI,{}),"\xa0\u2728 Latest Added Components"]}),a&&(0,t.jsx)("div",{children:(0,t.jsx)(g.A,{items:_})})]})},k={id:"getting-started",title:"Welcome to React Native Animations Hub",sidebar_label:"Getting Started",description:"Discover React Native animations created by the community.",image:"/img/og.png",slug:"/"},y=void 0,z={id:"getting-started",title:"Welcome to React Native Animations Hub",description:"Discover React Native animations created by the community.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/awesome-react-native-ui/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Welcome to React Native Animations Hub",sidebar_label:"Getting Started",description:"Discover React Native animations created by the community.",image:"/img/og.png",slug:"/"},sidebar:"packages",next:{title:"Onboardings",permalink:"/awesome-react-native-ui/onboardings"}},v={},A=[{value:"\ud83c\udf1f Enjoying the Site?",id:"-enjoying-the-site",level:3},{value:"\ud83e\udd1d Want to Contribute?",id:"-want-to-contribute",level:3}];function f(a){const e={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Explore creative UI animations made with React Native by the community."}),"\n","\n",(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)(o,{}),(0,t.jsx)(b,{})]}),"\n",(0,t.jsx)(e.h3,{id:"-enjoying-the-site",children:"\ud83c\udf1f Enjoying the Site?"}),"\n",(0,t.jsxs)(e.p,{children:["If you find these animations useful, please consider giving our repository a ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"star"})})," on ",(0,t.jsx)(e.a,{href:"https://github.com/mrpmohiburrahman/awesome-react-native-ui",children:"GitHub"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"Your support helps us continue to grow and provide more high-quality content for the community!"}),"\n",(0,t.jsx)(w,{}),"\n",(0,t.jsx)(e.h3,{id:"-want-to-contribute",children:"\ud83e\udd1d Want to Contribute?"}),"\n",(0,t.jsxs)(e.p,{children:["We welcome contributions from the community! If you have created an awesome React Native animation, share it with us. Follow the contribution guidelines on our ",(0,t.jsx)(e.a,{href:"https://github.com/mrpmohiburrahman/awesome-react-native-ui?tab=readme-ov-file#contributing",children:"GitHub repository"})," to submit your animations."]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"Enjoy your visit!"})]})}function j(a={}){const{wrapper:e}={...(0,r.R)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(f,{...a})}):f(a)}},2664:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Dynamic Accordion","demo":"demo/accordions/dynamic_accordion_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/accordion","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},9329:a=>{"use strict";a.exports=JSON.parse('[{"caption":" Animated Gauge","demo":"demo/arcsliders/animated_gauge_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-gauge","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Arc Slider","demo":"demo/arcsliders/arc_slider_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/ArcSlider","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},6196:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Bottom Sheet","demo":"demo/bottomsheets/bottom_sheet_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/what-about-gestures/tree/main/03-full-bottom-sheet","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Reanimated Bottom Sheet","demo":"demo/bottomsheets/reanimated_bottom_sheet_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion-labs/reanimated-bottom-sheet-video","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"}]')},6160:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Animated Split Button","demo":"demo/buttons/animated_split_button_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/animate-with-reanimated/tree/main/21-animated-split-button","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Interpolation Button","demo":"demo/buttons/interpolation_button_andreev_danila.mp4","Author":"Andreev Danila","source":"https://github.com/andreev-danila/interpolation-button","twitterId":"dan_w1d1","githubId":"andreev-danila"},{"caption":"Morph Button","demo":"demo/buttons/morph_button_arunabh_verma.mp4","Author":"Arunabh Verma","source":"https://github.com/arunabhverma/rn-text-edit-menu-ui","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"react-native-cyberpunk-button","demo":"demo/buttons/react-native-cyberpunk-button_epicode.mp4","Author":"Epicode | 0xV","source":"https://github.com/msadura/react-native-cyberpunk-button","twitterId":"epicode_","githubId":"msadura"},{"caption":"Jelly button","demo":"demo/buttons/jelly_button_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/kacperkapusciak/reanimated-squishy-button","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Dial Button","demo":"demo/buttons/dial_button_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/dial-button","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Floating Button","demo":"demo/buttons/floating_button_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/floating-button","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Runny Border","demo":"demo/buttons/runny_border_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/runny-border","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Neumorphic Button","demo":"demo/buttons/neumorphic_button_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/NeumorphicButton","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},5130:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Wiggling Cards","demo":"demo/carousels/wiggling_cards_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/wiggling-cards","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Circular Carousel","demo":"demo/carousels/circular_carousel_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/animate-with-reanimated/tree/main/17-circular-carousel","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"}]')},9171:a=>{"use strict";a.exports=[]},4702:a=>{"use strict";a.exports=JSON.parse('[{"demo":"demo/charts/lineChart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/LineChart","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"demo":"demo/charts/barchart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/BarChart","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},6403:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Dropdown Menu","demo":"demo/dropdowns/dropdowns_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/animate-with-reanimated/tree/main/16-smooth-dropdown","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"}]')},9694:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Furniture App","demo":"demo/fullapps/furniture_app_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/Furniture_App","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},5003:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Apple Photos Inspired Header","demo":"demo/headers/apple_photos_inspired_header_arunabh_verma.mp4","Author":"Arunabh Verma","source":"https://github.com/arunabhverma/react-native-chrome-header","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"Chrome Header","demo":"demo/headers/chrome_header_arunabh_verma.mp4","Author":"Arunabh Verma","source":"https://github.com/arunabhverma/react-native-chrome-header","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"Sticky Header","demo":"demo/headers/sticky_header_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/sticky-header","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},5224:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Animated FlatList","demo":"demo/lists/animated_flatList_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/animate-with-reanimated/tree/main/15-animated-flatlist","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Swipeable Rows","demo":"demo/lists/swipeable_rows_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/swipeable-rows","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Expandable List","demo":"demo/lists/expandable_list_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/expanding-list","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},2765:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Generators","demo":"demo/loaders/generators_william_candillon.mp4","Author":"William Candillon","source":"https://github.com/wcandillon/can-it-be-done-in-react-native/tree/master/bonuses/skia-examples/src/Generators","twitterId":"wcandillon","linkedInId":"wcandillon","githubId":"wcandillon"},{"caption":"Animated Loader","demo":"demo/loaders/animated_loader_hewad_mubariz.mp4","Author":"Daniel Friyia","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-loader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"demo":"demo/loaders/morphingLoader.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},2639:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Flight Animation","demo":"demo/misc/flight_animation_lucas_lima.mp4","Author":"Lucas Lima ","source":"https://github.com/lklima/rn-flight-animation","twitterId":"lima_lucas3","linkedInId":"lucas-lima-5b9282182","githubId":"lklima"},{"caption":"Heart Beat Animation","demo":"demo/misc/heart_beat_animation_william_candillon.mp4","Author":"William Candillon","source":"https://github.com/wcandillon/can-it-be-done-in-react-native/tree/master/bonuses/skia-examples/src/Heartrate","twitterId":"wcandillon","linkedInId":"wcandillon","githubId":"wcandillon"},{"caption":"iOS UI","demo":"demo/misc/ios_ui_enes_ozturk.mp4","Author":"Enes \xd6zt\xfcrk","source":"https://github.com/enesozturk/react-native-ios","twitterId":"enesozturkdev","linkedInId":"enes-ozturk","githubId":"enesozturk"},{"caption":"Instagram iOS Page Transitions","demo":"demo/misc/instagram_ios_page_transitions_enes.mp4","Author":"Enes \xd6zt\xfcrk","source":"https://github.com/enesozturk/react-native-instagram","twitterId":"enesozturkdev","linkedInId":"enes-ozturk","githubId":"enesozturk"},{"caption":"Cards Swap","demo":"demo/misc/cards_swap_aashu_dubey.mp4","Author":"Aashu Dubey","source":"https://github.com/Aashu-Dubey/react-native-animation-samples/tree/cards_swap/src/cards_swap","twitterId":"aashudubey_ad","githubId":"Aashu-Dubey"},{"caption":"Custom Cursor/Caret","demo":"demo/misc/custom_cursor_caret_aashu_dubey.mp4","Author":"Aashu Dubey","source":"https://github.com/Aashu-Dubey/react-native-animation-samples/tree/main/src/samples/custom_caret","twitterId":"aashudubey_ad","githubId":"Aashu-Dubey"},{"caption":"Rope Physics","demo":"demo/misc/rope_physics_aashu_dubey.mp4","Author":"Aashu Dubey","source":"https://github.com/Aashu-Dubey/react-native-animation-samples/tree/main/src/samples/rope_physics","twitterId":"aashudubey_ad","githubId":"Aashu-Dubey"},{"caption":"Spread Cards Effect ( Color Swatch )","demo":"demo/misc/color_swatch_aashu_dubey.mp4","Author":"Aashu Dubey","source":"https://github.com/Aashu-Dubey/react-native-animation-samples/tree/main/src/samples/color_swatch","twitterId":"aashudubey_ad","githubId":"Aashu-Dubey"},{"caption":"Animated Toolbar","demo":"demo/misc/animated_toolbar_aashu_dubey.mp4","Author":"Aashu Dubey","source":"https://github.com/Aashu-Dubey/react-native-animation-samples/tree/main/src/samples/custom_toolbar","twitterId":"aashudubey_ad","githubId":"Aashu-Dubey"},{"caption":"Sphere Animation","demo":"demo/misc/sphere_animation_andreev_danila.mp4","Author":"Andreev Danila","source":"https://github.com/andreev-danila/sphere-svg-animation","twitterId":"dan_w1d1","githubId":"andreev-danila"},{"caption":"Skia Gesture","demo":"demo/misc/skia_gesture_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/react-native-skia-gesture/tree/main/example","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Skeleton","demo":"demo/misc/skeleton_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/animate-with-reanimated/tree/main/18-skeleton-animation","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Shake Animation","demo":"demo/misc/shake_animation_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/animate-with-reanimated/tree/main/20-shake-animation","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Grid Magnification","demo":"demo/misc/grid_magnification_aashu_dubey.mp4","Author":"Aashu Dubey","source":"https://github.com/Aashu-Dubey/react-native-animation-samples/tree/main/src/samples/grid_magnification#readme","twitterId":"aashudubey_ad","githubId":"Aashu-Dubey"},{"caption":"Grid Magnification","demo":"demo/misc/grid_magnification_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/exploring-skia/tree/main/grid-magnification","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Metaball Animation","demo":"demo/misc/metaball_animation_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/exploring-skia/tree/main/metaball","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Animated Gradient","demo":"demo/misc/animated_gradient_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/exploring-skia/tree/main/animated-gradient","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Text Input Inspired By X (Twitter)","demo":"demo/misc/text_input_inspired_by_x_twitter_arunabh_verma.mp4","Author":"Arunabh Verma","source":"https://github.com/arunabhverma/expo-x-input","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"Mention Input","demo":"demo/misc/mention_input_arunabh_verma.mp4","Author":"Arunabh Verma","source":"https://github.com/arunabhverma/expo-mention","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"Custom Menu","demo":"demo/misc/custom_menu_arunabh_verma.mp4","Author":"Arunabh Verma","source":"https://github.com/arunabhverma/expo-menu","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"Gallery Inspired Image Carousel","demo":"demo/misc/gallery_inspired_image_carousel_arunabh_verma.mp4","Author":"Arunabh Verma","source":"https://github.com/arunabhverma/expo-selection","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"Edge Panel","demo":"demo/misc/edge_panel_arunabh_verma.mp4","Author":"Arunabh Verma","source":"https://github.com/arunabhverma/expo-edge-panel","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"Masked Text","demo":"demo/misc/masked_text_yassire_mtioui.mp4","Author":"Yassire Mtioui","source":"https://github.com/Yassiremt/skia_animations/tree/main/src/animations/MaskedText","linkedInId":"yassire-mtioui-908950277","twitterId":"YMtioui","githubId":"Yassiremt"},{"caption":"Speech Visualization","demo":"demo/misc/speech_visualization_yassire_mtioui.mp4","Author":"Yassire Mtioui","source":"https://github.com/Yassiremt/skia_animations/tree/main/src/animations/SpeechVisualization","linkedInId":"yassire-mtioui-908950277","twitterId":"YMtioui","githubId":"Yassiremt"},{"caption":"Rotary Phone","demo":"demo/misc/rotary_phone_rn_skia_yassire_mtioui.mp4","Author":"Yassire Mtioui","source":"https://gist.github.com/eveningkid/bda4c848b90416e930a5621ac392dee6","linkedInId":"yassire-mtioui-908950277","twitterId":"YMtioui","githubId":"Yassiremt"},{"caption":"Shared Elements Transition","demo":"demo/misc/shared_elements_transition_evening_kid_arnaud_dellinger.mp4","Author":"Arnaud Dellinger ( evening kid )","source":"https://gist.github.com/eveningkid/bda4c848b90416e930a5621ac392dee6","linkedInId":"arnaud-dellinger","twitterId":"eveningkid","githubId":"eveningkid"},{"caption":"Animated Twitter Profile","demo":"demo/misc/animated_twitter_profile_ evening_kid_ arnaud_dellinger.mp4","Author":"Arnaud Dellinger ( evening kid )","source":"https://gist.github.com/eveningkid/a894c86db4ee1091611e9dc6a2470348","linkedInId":"arnaud-dellinger","twitterId":"eveningkid","githubId":"eveningkid"},{"caption":"react-native-snow-bg","demo":"demo/misc/react-native-snow-bg-epicode.mp4","Author":"Epicode | 0xV","source":"https://github.com/msadura/react-native-snow-bg","twitterId":"epicode_","githubId":"msadura"},{"caption":"Color Pixelated","demo":"demo/misc/color_pixelated_daehyeon_mun.mp4","Author":"Daehyeon Mun (\ubb38\ub300\ud604)","source":"https://github.com/daehyeonmun2021/react-native-animation-lab/tree/main/src/screens/color-pixelated","twitterId":"DaehyeonMun","linkedInId":"daehyeon-mun-5ba674164","githubId":"daehyeonmun2021"},{"caption":"Typography Metaball","demo":"demo/misc/typography_metaball_daehyeon_mun.mp4","Author":"Daehyeon Mun (\ubb38\ub300\ud604)","source":"https://github.com/daehyeonmun2021/react-native-animation-lab/tree/main/src/screens/typography-metaball","twitterId":"DaehyeonMun","linkedInId":"daehyeon-mun-5ba674164","githubId":"daehyeonmun2021"},{"caption":"Pixelated Image","demo":"demo/misc/pixelated_image_daehyeon_mun.mp4","Author":"Daehyeon Mun (\ubb38\ub300\ud604)","source":"https://github.com/daehyeonmun2021/react-native-animation-lab/tree/main/src/screens/pixelated-image","twitterId":"DaehyeonMun","linkedInId":"daehyeon-mun-5ba674164","githubId":"daehyeonmun2021"},{"caption":"Ripple Effect With React Native Skia","demo":"demo/misc/ripple_effect_daehyeon_mun.mp4","Author":"Daehyeon Mun (\ubb38\ub300\ud604)","source":"https://gist.github.com/daehyeonmun2021/21aea72f655da6c0ca8922191daade5e","twitterId":"DaehyeonMun","linkedInId":"daehyeon-mun-5ba674164","githubId":"daehyeonmun2021"},{"caption":"Phyllotaxis Spiral","demo":"demo/misc/phyllotaxis_spiral_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/Phyllotaxis","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Flappy Bird","demo":"demo/misc/flappy_bird_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/FlappyBird","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Firework","demo":"demo/misc/firework_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/Firework","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Fractal Tree","demo":"demo/misc/fractal_tree_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/FractalTree","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Starfield Simulation","demo":"demo/misc/starfield_simulation_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/Starfield","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Double Pendulum","demo":"demo/misc/double_pendulum_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/react-native-creative-animations/tree/main/src/Examples/DoublePendulum","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Shared Element Transitions Example","demo":"demo/misc/shared_element_transitions_example_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion/react-native-reanimated/blob/4fcda2939cf70c9bb83efe08b8814e48653b1fa3/app/src/examples/SharedElementTransitions/Profiles.tsx","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Gradient Shared Transition","demo":"demo/misc/gradient_shared_transition_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion-labs/gradient-shared-transitions-example","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Magic Curtain Effect","demo":"demo/misc/magic_curtain_effect_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/kacperkapusciak/expo-magic-curtain","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Fake Shared Element Transition","demo":"demo/misc/fake_shared_element_transition_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://github.com/aleqsio/sharedelement/blob/master/SharedElement.tsx","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"View Transition using Skia","demo":"demo/misc/view_transition_using_skia_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://gist.github.com/aleqsio/754b3a2b664b928f5c65d715b9452d77","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Townscaper","demo":"demo/misc/townscaper_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://github.com/aleqsio/expo-image-and-gesture-handler-demo","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Gradient Picker","demo":"demo/misc/gradient_picker_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://github.com/aleqsio/gradient-picker-reanimated","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Micro Interactoins","demo":"demo/misc/micro_interactions_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://x.com/aleqsio/status/1701164940629815741/photo/1","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Animated Cards","demo":"demo/misc/animated_cards_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-cards","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Animated Shapes","demo":"demo/misc/animated_shapes_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/animated-shapes","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Audio Input Visualizer","demo":"demo/misc/audio_input_visualizer_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/audio-input-visualizer","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Flippy Card","demo":"demo/misc/flippy_card_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/flippy-card","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Playing Cards","demo":"demo/misc/playing_cards_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/rating-wave","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Rating Wave","demo":"demo/misc/rating_wave_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/rating-wave","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Expandable FAB","demo":"demo/misc/expandable_fab_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/expandable-fab","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Micro Swipe Actions","demo":"demo/misc/micro_swipe_actions_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/micro-swipe-actions","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Genetic AI","demo":"demo/misc/geneticai_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/GeneticAI","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Bending Circle","demo":"demo/misc/bending_circle_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Chasing Bubble","demo":"demo/misc/chasing_bubble_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/MorphingLoader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Expo Pulse","demo":"demo/misc/expo_pulse_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/ExpoPulse","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Morphing Circle","demo":"demo/misc/morphing_circle_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/MorphingCircle","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Vital Sign Monitor","demo":"demo/misc/vital_sign_monitor_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/VitalSignMonitor","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Confetti","demo":"demo/misc/confetti_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/Confetti","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Gran Turismo Countdown","demo":"demo/misc/gran_turismo_countdown_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/BSides/GranTurismo","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Metaball Shader","demo":"demo/misc/metaball_shader_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/Shaders/MetaballShader","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Random Circle Shader","demo":"demo/misc/random_circle_shader_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/Shaders/RandomCircles","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Focus Animation","demo":"demo/misc/focus_animation_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/FocusAnimation","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Gradient Clock","demo":"demo/misc/gradient_clock_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/FocusAnimation","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"},{"caption":"Donut Chart","demo":"demo/misc/donut_chart_david_friyia.mp4","Author":"Daniel Friyia","source":"https://github.com/friyiajr/SkiaAnimationShowcase/tree/main/src/YouTube/DonutChart","twitterId":"wa2goose","linkedInId":"thefriyia","githubId":"friyiajr"}]')},619:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Onboarding Animation","demo":"demo/onboardings/onboarding_animation_alek_mikucki.mp4","Author":"Alek Mikucki","source":"https://github.com/aleqsio/onboarding-animation-example","twitterId":"aleqsio","linkedInId":"aleqsio","githubId":"aleqsio"},{"caption":"Bouncy Onboarding  ","demo":"demo/onboardings/bouncy_onboarding_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/BouncyOnboarding","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Circular Onboarding","demo":"demo/onboardings/circular_onboarding_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/circular-onboarding","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')},9840:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Parallax Effect","demo":"demo/parallaxes/parallax_cards_lucas_lima.mp4","Author":"Lucas Lima ","source":"https://github.com/lklima/rn-parallax-cards","twitterId":"lima_lucas3","linkedInId":"lucas-lima-5b9282182","githubId":"lklima"},{"caption":"Parallax Effect","demo":"demo/parallaxes/parallax_effect_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion-labs/reanimated-parallax","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"}]')},3675:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Fancy Slider","demo":"demo/sliders/fancy_slider_andreev_danila.mp4","Author":"Andreev Danila","source":"https://github.com/andreev-danila/fancy-slider","twitterId":"dan_w1d1","githubId":"andreev-danila"},{"caption":"Sensor Based Slider","demo":"demo/sliders/sensor_based_slider_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/software-mansion/react-native-reanimated/pull/4330/files","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"}]')},3056:a=>{"use strict";a.exports=JSON.parse('[{"caption":"Custom Segmented Control","demo":"demo/tabbars/custom_segmented_control_enzo_manuel_mangano_reactiive.mp4","Author":"Enzo Manuel Mangano ( Reactiive )","source":"https://github.com/enzomanuelmangano/animate-with-reanimated/tree/main/19-segmented-control","twitterId":"reactiive_","linkedInId":"enzomanuelmangano","githubId":"enzomanuelmangano"},{"caption":"Detachable Bottom Tab Bar","demo":"demo/tabbars/detachable_bottom_tab_bar_arunabh_verma.mp4","Author":"Arunabh Verma ","source":"https://github.com/arunabhverma/expo-bottom-tab-anim","twitterId":"iamarunabh","linkedInId":"arunabhv","githubId":"arunabhverma"},{"caption":"Spotify Tab","demo":"demo/tabbars/spotify_tab_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://snack.expo.dev/@alirezahadjar/spotify-tab","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Sticky Tabs","demo":"demo/tabbars/sticky_tabs_alireza_hadjar.mp4","Author":"Alireza Hadjar","source":"https://github.com/AlirezaHadjar/stickyTab","twitterId":"alireza_hadjar","linkedInId":"alireza-hadjar-526590197","githubId":"AlirezaHadjar"},{"caption":"Tab Bar Micro Interactions","demo":"demo/tabbars/tab_bar_micro_interactions_kacper_kapu\u015bciak.mp4","Author":"Kacper Kapu\u015bciak","source":"https://github.com/kacperkapusciak/reanimated-expo-router-tabs","twitterId":"kacperkapusciak","linkedInId":"kacperkapusciak","githubId":"kacperkapusciak"},{"caption":"Dynamic Tabs","demo":"demo/tabbars/dynamic_tabs_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/dynamic-tabs","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"},{"caption":"Direction Aware Tabs","demo":"demo/tabbars/direction_aware_tabs_hewad_mubariz.mp4","Author":"Hewad Mubariz","source":"https://github.com/hewad-mubariz/reactnative-50-days/tree/main/direction-aware-tabs","twitterId":"hewad_mubariz","linkedInId":"hewad-mubariz","githubId":"hewad-mubariz"}]')}}]);