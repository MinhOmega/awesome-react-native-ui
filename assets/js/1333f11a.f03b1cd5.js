"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[880],{9508:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=o(6070),n=o(5710),h=o(3576),r=o(8544);const s={title:"BottomSheet v4 is here!",description:"BottomSheet v4 comes with rewritten implementation to provide more stability, performance, and more features.",slug:"bottom-sheet-v4",authors:[{name:"Mo Gorhom",title:"Author",url:"https://github.com/gorhom",image_url:"https://github.com/gorhom.png"}],tags:["v4"],keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",hide_table_of_contents:!1},d=void 0,a={permalink:"/awesome-react-native-ui/blog/bottom-sheet-v4",source:"@site/blog/2021-08-30-bottom-sheet-v4.mdx",title:"BottomSheet v4 is here!",description:"BottomSheet v4 comes with rewritten implementation to provide more stability, performance, and more features.",date:"2021-08-30T00:00:00.000Z",tags:[{inline:!0,label:"v4",permalink:"/awesome-react-native-ui/blog/tags/v-4"}],readingTime:2.94,hasTruncateMarker:!1,authors:[{name:"Mo Gorhom",title:"Author",url:"https://github.com/gorhom",image_url:"https://github.com/gorhom.png",imageURL:"https://github.com/gorhom.png"}],frontMatter:{title:"BottomSheet v4 is here!",description:"BottomSheet v4 comes with rewritten implementation to provide more stability, performance, and more features.",slug:"bottom-sheet-v4",authors:[{name:"Mo Gorhom",title:"Author",url:"https://github.com/gorhom",image_url:"https://github.com/gorhom.png",imageURL:"https://github.com/gorhom.png"}],tags:["v4"],keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",hide_table_of_contents:!1},unlisted:!1},l={authorsImageUrls:[void 0]},c=[{value:"Features",id:"features",level:2},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Pull to Refresh",id:"pull-to-refresh",level:3},{value:"Detach Sheet / Modal",id:"detach-sheet--modal",level:3},{value:"Footer Component",id:"footer-component",level:3},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Removed",id:"removed",level:4},{value:"Changes",id:"changes",level:4},{value:"Changelog",id:"changelog",level:2},{value:"Refactored",id:"refactored",level:4},{value:"Added",id:"added",level:4},{value:"Fixed",id:"fixed",level:4},{value:"Special thanks",id:"special-thanks",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Today I am releasing the ",(0,i.jsx)(t.code,{children:"BottomSheet v4"}),", with a rewritten implementation to provide more stability, performance, and more features."]}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.p,{children:["In this release, I have rewritten the implementation to 100% utilize ",(0,i.jsx)(t.code,{children:"Reanimated v2"})," hooks and variables instead of using the JS once. This allows for more customization and provides more stability overall."]}),"\n",(0,i.jsx)(t.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,i.jsx)(r.C,{title:"React Native Bottom Sheet Keyboard Handling",url:(0,h.Ay)("video/bottom-sheet-keyboard-handling-preview.mp4")}),"\n",(0,i.jsxs)(t.p,{children:["Keyboard handling was released with ",(0,i.jsx)(t.code,{children:"v3"}),", however, there were some issues that pushed this release. Now the keyboard handling is enabled by default and provides more options to customize the behavior, a new prop ",(0,i.jsx)(t.code,{children:"android_keyboardInputMode"})," is introduced to handle the ",(0,i.jsx)(t.code,{children:"Android"})," keyboard appearance config ",(0,i.jsx)(t.code,{children:"windowSoftInputMode"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Read more about ",(0,i.jsx)(t.a,{href:"/keyboard-handling",children:"Keyboard Handling"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"pull-to-refresh",children:"Pull to Refresh"}),"\n",(0,i.jsx)(r.C,{title:"React Native Bottom Sheet Pull to Refresh",url:(0,h.Ay)("video/bottom-sheet-pull-to-refresh-preview.mp4")}),"\n",(0,i.jsxs)(t.p,{children:["One of the earliest feature request that was submitted to repo ",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/issues/66",children:"Pull to refresh"})," by ",(0,i.jsx)(t.a,{href:"https://github.com/gudberg",children:"gudberg"}),". There was an attempt to implement it on ",(0,i.jsx)(t.code,{children:"v3"})," & ",(0,i.jsx)(t.code,{children:"v2"})," but I was hit with their limitations, until now."]}),"\n",(0,i.jsxs)(t.p,{children:["This feature is enabled by default, users need to provide ",(0,i.jsx)(t.code,{children:"refreshing"})," & ",(0,i.jsx)(t.code,{children:"onRefresh"})," to any of the ",(0,i.jsx)(t.a,{href:"/scrollables",children:"Scrollables"})," and voila!"]}),"\n",(0,i.jsxs)(t.p,{children:["Read more about ",(0,i.jsx)(t.a,{href:"/pull-to-refresh",children:"Pull to Refresh"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"detach-sheet--modal",children:"Detach Sheet / Modal"}),"\n",(0,i.jsx)(r.C,{title:"React Native Bottom Sheet Detach Modal",url:(0,h.Ay)("video/bottom-sheet-detach-preview.mp4")}),"\n",(0,i.jsxs)(t.p,{children:["Another powerful addition to ",(0,i.jsx)(t.code,{children:"BottomSheet"})," & ",(0,i.jsx)(t.code,{children:"BottomSheetModal"})," is the ability to detach the sheet from the bottom - so no more bottom sheet \ud83d\ude05 -, which allows users to come up with lots of creative choices and customization to the sheet position."]}),"\n",(0,i.jsxs)(t.p,{children:["Read more about ",(0,i.jsx)(t.a,{href:"/detach-modal",children:"Detach Sheet / Modal"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"footer-component",children:"Footer Component"}),"\n",(0,i.jsx)(r.C,{title:"React Native Bottom Sheet Custom Footer",url:(0,h.Ay)("video/bottom-sheet-footer-preview.mp4")}),"\n",(0,i.jsxs)(t.p,{children:["Lastly, I have added a new prop ",(0,i.jsx)(t.code,{children:"footerComponent"})," to ",(0,i.jsx)(t.code,{children:"BottomSheet"})," & ",(0,i.jsx)(t.code,{children:"BottomSheetModal"})," to allow users to stick their custom component to the bottom of the sheet even when the keyboard is shown."]}),"\n",(0,i.jsxs)(t.p,{children:["Read more about ",(0,i.jsx)(t.a,{href:"/custom-footer",children:"Footer Component"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,i.jsx)(t.h4,{id:"removed",children:"Removed"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Removed ",(0,i.jsx)(t.code,{children:"animationEasing"})," from ",(0,i.jsx)(t.code,{children:"BottomSheet"})," props."]}),"\n",(0,i.jsxs)(t.li,{children:["Removed ",(0,i.jsx)(t.code,{children:"animationDuration"})," from ",(0,i.jsx)(t.code,{children:"BottomSheet"})," props."]}),"\n",(0,i.jsxs)(t.li,{children:["Removed ",(0,i.jsx)(t.code,{children:"closeOnPress"})," from ",(0,i.jsx)(t.code,{children:"BottomSheetBackdrop"})," props."]}),"\n",(0,i.jsxs)(t.li,{children:["Removed ",(0,i.jsx)(t.code,{children:"dismissOnClose"})," from ",(0,i.jsx)(t.code,{children:"BottomSheetModal"})," props."]}),"\n",(0,i.jsxs)(t.li,{children:["Removed ",(0,i.jsx)(t.code,{children:"enableFlashScrollableIndicatorOnExpand"})," from ",(0,i.jsx)(t.code,{children:"BottomSheet"})," props."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"changes",children:"Changes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"snapPoints"})," prop is no longer accepting ",(0,i.jsx)(t.code,{children:"0"})," as a value."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"animateOnMount"})," props default value is ",(0,i.jsx)(t.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsxs)(t.p,{children:["Here are the highlight change log of ",(0,i.jsx)(t.code,{children:"v4"})]}),"\n",(0,i.jsx)(t.h4,{id:"refactored",children:"Refactored"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["create one generic scrollable component (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/pull/442",children:(0,i.jsx)(t.code,{children:"#442"})}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["converted all internal state/memoized variables to reanimated shared values. (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/pull/430",children:(0,i.jsx)(t.code,{children:"#430"})}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["updated handling animated heights (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/pull/451",children:(0,i.jsx)(t.code,{children:"#451"})}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"added",children:"Added"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["added pull to refresh implementation (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/016a01f3705c83c9903a3e28c875e7b90424a128",children:"016a01f"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added enable pan down to close (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/pull/437",children:(0,i.jsx)(t.code,{children:"#437"})}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added snap to position (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/pull/443",children:(0,i.jsx)(t.code,{children:"#443"})}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added footer component (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/pull/457",children:(0,i.jsx)(t.code,{children:"#457"})}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added pre-integrated VirtualizedList component (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/2d4d69d8881a3cbe452f5e46157e2b9702528206",children:"2d4d69d"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added keyboard input mode for android (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/069c4b6742630dc5fa7d4763a5c4dc6bfec439cc",children:"069c4b6"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added detached bottom sheet (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/pull/487",children:(0,i.jsx)(t.code,{children:"#487"})}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added onClose callback to BottomSheet (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/ee64545ce0e7609fb383f1473773c8481a0bc7aa",children:"ee64545"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added backgroundStyle, handleStyle & handleIndicatorStyle to bottom sheet (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/221176546fd59ed0c9d79fe7f0350eda24dd8550",children:"2211765"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["added forceClose to BottomSheet methods (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/3dd5796eb722e4e579de7b2439d224a5e0238b55",children:"3dd5796"}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"fixed",children:"Fixed"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["fixed sheet positioning on modals (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/ee573e9463836301d9736c3e5d86b2b363f9fb14",children:"ee573e9"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["fixed prevent animatedPosition from becoming undefined (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/400d7b93caa0a46f678db2978e7e5f95cc87ee99",children:"400d7b9"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["fixed on mount flicker on fixed sheet (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/48c49888b95dc88abf320d4d7590f43806e0bd59",children:"48c4988"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["fixed updated keyboard height in container calculation (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/2599f6cf46af0f95812e34670de5a7cae5d44fd9",children:"2599f6c"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["fixed re-snap to current position when snap points get updated (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/bb8e202af05dc6beeb108cfa1680401374ac58ad",children:"bb8e202"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["fixed handle initial closed sheet (",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/commit/4bc40d93da05dcff664ce939a9944416b9e91359",children:"4bc40d9"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Read the full ",(0,i.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet/blob/master/CHANGELOG.md",children:"change log"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"special-thanks",children:"Special thanks"}),"\n",(0,i.jsx)(t.p,{children:"Thanks to all users for testing and reporting issues. Without your help, this library wouldn't progress this much \u2764\ufe0f"}),"\n",(0,i.jsxs)(t.p,{children:["Special thanks to ",(0,i.jsx)(t.a,{href:"https://github.com/kickbk",children:"@kickbk"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/vonovak",children:"@vonovak"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/likern",children:"@likern"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/nandorojo",children:"@nandorojo"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/axeldelafosse",children:"@axeldelafosse"})," & ",(0,i.jsx)(t.a,{href:"https://github.com/skdev24",children:"@skdev24"})," for testing & contributing to this release."]}),"\n",(0,i.jsxs)(t.p,{children:["Finally, thanks to ",(0,i.jsx)(t.a,{href:"http://swmansion.com/",children:"Software Mansion"})," for powering this library with ",(0,i.jsx)(t.code,{children:"Reanimated"})," & ",(0,i.jsx)(t.code,{children:"Gesture Handler"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},7247:(e,t,o)=>{o.d(t,{A:()=>h});o(758);const i="video_cxDu";var n=o(6070);const h=e=>{let{title:t,url:o}=e;return(0,n.jsx)("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:t,className:i,children:(0,n.jsx)("source",{src:o,type:"video/mp4"})})}},8544:(e,t,o)=>{o.d(t,{C:()=>i.A});var i=o(7247)}}]);