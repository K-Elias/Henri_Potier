__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[3]).connect(function(t){return{currentUser:r(d[0]).getViewer(t),feedStoryTray:r(d[1]).getFeedStoryTrayWithoutOwn(t)}},function(t){return{onWatchAllStories(n){t(r(d[2]).openReelsMedia(n,'reel_feed_timeline'))}}})(i(d[4]));e.default=t},12910592,[9699375,9961479,9961477,5,12910593]);
__d(function(g,r,i,a,m,e,d){"use strict";function t({feedStoryTray:t,onWatchAllClick:n}){return a(d[3]).createElement(a(d[3]).Fragment,null,a(d[3]).createElement(i(d[5]),{headerText:r(d[6]).STORIES_TEXT,linkTo:"#",onClick:n,placeholder:null==t,secondaryText:null!=t&&t.isEmpty()?null:r(d[6]).WATCH_ALL_TEXT}),a(d[3]).createElement(r(d[4]).Box,{marginTop:2},a(d[3]).createElement(i(d[7]),{useContainer:!0,visibleCount:3.5})))}Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const n=r(d[1]).isDesktop()&&!0===i(d[2])._("80","3",{silent:!0}),l=n?5:3,o=({children:t,marginBottom:n,marginTop:l})=>a(d[3]).createElement(r(d[4]).Box,{color:"ig-primary-background",dangerouslySetClassName:{__className:"b2rUF"},marginBottom:n,marginTop:l,shape:"rounded"},t),s=({children:t})=>a(d[3]).createElement("div",{className:"_8UZ6e"},t),c=52,u=550;var p=class extends a(d[3]).PureComponent{constructor(...t){super(...t),this.state={leftFixedPosition:null},this.$FeedSidebar1=(()=>{const t=u,n=!0===i(d[2])._("67","2");a(d[8]).measure(()=>{if(null==this.$FeedSidebar2)return;let l=null;(n||r(d[9]).canUseDOM&&window.pageYOffset>=c&&window.innerHeight>t)&&(l=this.$FeedSidebar2.getBoundingClientRect().left),a(d[8]).mutate(()=>{null!=this.$FeedSidebar2&&this.setState({leftFixedPosition:l})})})}),this.$FeedSidebar3=(t=>{t.preventDefault();const n=i(d[10])(this.props.feedStoryTray);n.isEmpty()||this.props.onWatchAllStories(n)})}componentDidMount(){this.$FeedSidebar1(),null!=this.props.onDisplayDone&&this.props.onDisplayDone()}render(){const{currentUser:c,feedStoryTray:u}=this.props,{leftFixedPosition:p}=this.state,h=n?s:o;return a(d[3]).createElement(a(d[3]).Fragment,null,a(d[3]).createElement(i(d[11]),{event:"scroll",handler:this.$FeedSidebar1,passive:!0,target:window}),a(d[3]).createElement(i(d[11]),{event:"resize",handler:this.$FeedSidebar1,passive:!0,target:window}),a(d[3]).createElement("div",{className:"XmSS_",ref:t=>this.$FeedSidebar2=t}),a(d[3]).createElement("div",{className:`COOzN ${null!=p?"MnWb5":""} ${r(d[1]).isDesktop()&&!0===i(d[2])._("67","2")?"YT6rB":""}`,style:{left:p}},a(d[3]).createElement("div",{className:`m0NAq ${n?"xrWdL":""}`},a(d[3]).createElement(i(d[12]),{isVerified:!1,name:i(d[10])(c.fullName),profilePictureUrl:i(d[10])(c.profilePictureUrl),username:i(d[10])(c.username)})),!n&&a(d[3]).createElement(o,{marginTop:1},a(d[3]).createElement(t,{feedStoryTray:u,onWatchAllClick:this.$FeedSidebar3})),a(d[3]).createElement(h,{marginBottom:3,marginTop:3},a(d[3]).createElement(i(d[5]),{headerText:r(d[13]).HEADER_TEXT,linkTo:r(d[14]).DISCOVER_PEOPLE_PATH,placeholder:null==u,secondaryText:r(d[15])(1657)}),a(d[3]).createElement(r(d[4]).Box,{marginBottom:1,marginStart:1},a(d[3]).createElement(i(d[13]),{analyticsContext:"desktop",avatarSize:"small",backgroundColor:n?'ig-secondary-background':void 0,borderlessFollowButton:!0,count:l,footer:null,header:null,hideName:!0,hideUpsells:!0,initialRenderCount:l,viewModule:r(d[16]).VIEW_MODULES.desktop_feed}))),a(d[3]).createElement(i(d[17]),{variant:i(d[17]).VARIANTS.sidebar})))}};e.default=p,e.FeedSidebarContainer=o,e.FeedSidebarEmptyContainer=s},12910593,[12910594,9699340,9699356,3,9699357,12910595,9961554,12910596,9961576,9502830,9699335,9961489,12910597,10092588,9699371,9699332,9961611,10092547]);
__d(function() {},12910594,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var o=o=>a(d[0]).createElement(r(d[1]).Box,{alignItems:"center",direction:"row",marginTop:3,paddingX:4,paddingY:1},a(d[0]).createElement(r(d[1]).Box,{flex:"grow"},a(d[0]).createElement(r(d[1]).Text.BodyEmphasized,{color:"ig-secondary-text"},o.headerText)),o.linkTo&&Boolean(o.secondaryText)&&!0===o.placeholder&&a(d[0]).createElement(r(d[1]).Text.Footnote,{color:"ig-secondary-text"},o.secondaryText),o.linkTo&&Boolean(o.secondaryText)&&!0!==o.placeholder&&a(d[0]).createElement(r(d[1]).Button,{borderless:!0,color:"ig-secondary-button",disabled:!!o.placeholder,href:o.linkTo,onClick:o.onClick},a(d[0]).createElement(r(d[1]).Text.FootnoteEmphasized,null,o.secondaryText)));e.default=o},12910595,[3,9699357]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[4]).connect(function(t){const n=r(d[0]).getSeenCountInStoryTray(t);return{broadcasts:r(d[1]).getBroadcastStoryTrayItems(t),hasOwnReel:r(d[0]).userHasReel(t,i(d[2])(t.users.viewerId)),isFullySeen:n=>{if(null!=n){const s=r(d[0]).getFirstUnseenReelItemIndex(t,n);return null!=s&&s<0}return!1},loadingId:t.stories.trayLoadingId,newReelCount:t.stories.feedTray&&t.stories.feedTray.count()-i(d[2])(n),reels:r(d[0]).getFeedStoryTrayWithoutOwn(t),seenReelCount:n,traySession:t.stories.traySession,viewerId:t.users.viewerId}},function(t){return{onLoadReel(n,s,o){t(r(d[3]).openReelsMedia(n,'reel_feed_timeline',s,o))}}})(i(d[5]));e.default=t},12910596,[9961479,12910598,9699335,9961477,5,12910599]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(1784),s=68,o=52,n=50,p=r(d[2]).CORE_CONSTANTS.AVATAR_SIZES.medium,l=4,y=10;class _ extends a(d[8]).PureComponent{constructor(...t){super(...t),this.$DesktopStoryTray3=(()=>{const t=this.props.broadcasts.size;return 0!==t&&r(d[3]).hasLiveInStories()?t:0}),this.$DesktopStoryTray4=(()=>{return 0!==this.props.broadcasts.size&&r(d[3]).hasLiveInStories()?this.props.broadcasts.sort((t,s)=>((null===t||void 0===t?void 0:t.ranked_position)||0)-((null===s||void 0===s?void 0:s.ranked_position)||0)).toList():null}),this.$DesktopStoryTray5=((t,s)=>{this.props.onLoadReel(i(d[4])(this.props.reels),t,s)}),this.$DesktopStoryTray6=((t,s)=>{const o=this.props.reels?this.props.reels.get(s-1):null;i(d[5]).log(()=>({a_pk:Number(t),has_my_reel:i(d[4])(this.props.hasOwnReel)?1:0,is_new_reel:this.props.isFullySeen(null===o||void 0===o?void 0:o.id)?0:1,new_reel_count:i(d[4])(this.props.newReelCount),pigeon_reserved_keyword_module:'reel_feed_timeline',reel_type:r(d[6]).getTypeForLogging(null===o||void 0===o?void 0:o.type),tray_position:s,tray_session_id:this.props.traySession,viewed_reel_count:i(d[4])(this.props.seenReelCount)})),r(d[6]).logStoriesEvent({event_name:'reel_tray_impression',containermodule:'reel_feed_timeline',source_of_action:'reel_feed_timeline',ig_userid:this.props.viewerId,tray_session_id:this.props.traySession,media_author:t,tray_position:s,has_my_reel:i(d[4])(this.props.hasOwnReel),new_reel_count:i(d[4])(this.props.newReelCount),viewed_reel_count:i(d[4])(this.props.seenReelCount)})}),this.$DesktopStoryTray7=((t,s)=>{i(d[5]).log(()=>({a_pk:Number(t.broadcast_owner),has_my_reel:i(d[4])(this.props.hasOwnReel)?1:0,is_new_reel:0,live_reel_count:this.$DesktopStoryTray3(),new_reel_count:i(d[4])(this.props.newReelCount),pigeon_reserved_keyword_module:'reel_feed_timeline',reel_type:r(d[7]).getReelTypeForLogging(t),tray_position:s,tray_session_id:this.props.traySession,viewed_reel_count:i(d[4])(this.props.seenReelCount)}))}),this.$DesktopStoryTray8=(({index:t,isVisible:s})=>{const o=this.$DesktopStoryTray4(),n=this.$DesktopStoryTray3();if(t<n&&null!=o){const n=o.get(t);return null!=n&&a(d[8]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[8]).createElement(i(d[9]),{avatarSize:this.$DesktopStoryTray1(),broadcast:n,condensed:this.props.useContainer,isVisible:s,onScrollEnter:this.$DesktopStoryTray7,trayPosition:t}))}const p=t-n,l=i(d[4])(this.props.reels).get(p),y=null===l||void 0===l?void 0:l.latestReelMedia;return null!=l&&a(d[8]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[8]).createElement(i(d[10]),{avatarSize:this.$DesktopStoryTray1(),condensed:this.props.useContainer,isVisible:s,lastUpdated:i(d[4])(y),onClick:this.$DesktopStoryTray5,onScrollEnter:this.$DesktopStoryTray6,reel:l,trayPosition:p}))}),this.$DesktopStoryTray9=(({index:t,isVisible:s})=>a(d[8]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[8]).createElement(i(d[11]),{avatarSize:this.$DesktopStoryTray1(),hideAvatarBorder:this.props.useContainer,rounded:this.props.useContainer})))}$DesktopStoryTray1(){return this.props.useContainer?p-y:n}$DesktopStoryTray2(){return this.props.useContainer?o:s}$DesktopStoryTray10(){null!=this.props.reels&&this.props.onDisplayDone()}componentDidMount(){this.$DesktopStoryTray10()}componentDidUpdate(){this.$DesktopStoryTray10()}render(){const{reels:s,useContainer:o,visibleCount:n}=this.props;if(null!=s&&s.isEmpty())return a(d[8]).createElement(r(d[2]).Box,{marginBottom:4,paddingX:o?4:0,paddingY:2},a(d[8]).createElement(r(d[2]).Text.Body,{color:"ig-secondary-text"},t));const p=this.$DesktopStoryTray2(),y=p*n,_=Math.ceil(y/p);return a(d[8]).createElement(r(d[2]).Box,{dangerouslySetClassName:{__className:o?"":"aD2cN"},marginStart:o?4:0},null==s?a(d[8]).createElement(i(d[12]),{containerSize:y,estimatedItemSize:p,initialRenderCount:_,itemCount:_,overscanCount:0,renderer:this.$DesktopStoryTray9}):a(d[8]).createElement(i(d[12]),{containerSize:y,estimatedItemSize:p,initialRenderCount:_,itemCount:s.count()+this.$DesktopStoryTray3(),overscanCount:l,renderer:this.$DesktopStoryTray8}))}}_.defaultProps={visibleCount:4.5,useContainer:!1};var h=i(d[13])('DesktopStoryTray',_);e.default=h,e.DESKTOP_TRAY_ROW_HEIGHT_CONDENSED=o,e.DESKTOP_STORY_TRAY_AVATAR_SIZE_CONDENSED=p,e.STORY_RING_PADDING=y},12910599,[12910600,9699332,9699357,12910601,9699335,12910602,9961487,12910603,3,12910604,12910605,12910606,9961667,10092613]);
__d(function() {},12910600,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({avatarSize:t,broadcast:s,condensed:n,isVisible:o,onScrollEnter:l,trayPosition:c}){const{cobroadcasters:u,muted:b,published_time:p}=s,y=r(d[0]).useDispatch(),f=r(d[1]).useCallback(()=>{y(r(d[2]).openLivePlayerFromStoryTray(s,'live_feed_timeline',c))},[s,y,c]),_=r(d[0]).useSelector(t=>r(d[3]).getDisplayedBroadcasters(t,s.id)),{primary:E}=_;r(d[1]).useEffect(()=>{o&&l(s,c)},[s,o,l,c]);const h=u.length>0?a(d[1]).createElement(r(d[4]).Box,{direction:"row"},a(d[1]).createElement(r(d[4]).Box,{marginEnd:1,maxWidth:132},a(d[1]).createElement(r(d[4]).Text,{display:"truncated",size:"body",weight:"semibold",zeroMargin:!0},E.username)),a(d[1]).createElement(r(d[4]).Text,{size:"body",weight:"semibold",zeroMargin:!0},r(d[5]).liveBroadcasters(u.length))):E.username;return a(d[1]).createElement(i(d[6]),{avatarSize:t,condensed:n,isLive:!0,isMuted:b,label:h,lastUpdated:p,onClick:f,profilePictureUrl:E.profile_pic_url,username:E.username})}},12910604,[5,3,12910607,12910598,9699357,12910608,12910609]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({avatarSize:t,clickTargetElementId:l,condensed:n,isLive:s,isMuted:c,label:u,lastUpdated:o,onClick:v,profilePictureUrl:E,username:_}){return a(d[1]).createElement("button",{className:`jZyv1 ${!0===c?"_6IL7z":""} ${!0===n?"H-yu6":""}`,onClick:v},a(d[1]).createElement(i(d[2]),{clickTargetElementId:l,isClickable:!1,isLink:!1,profilePictureUrl:E,showLivePulse:s,showLiveRing:s,size:t,storyEntrypoint:"reel_feed_timeline",username:_}),a(d[1]).createElement("div",{className:"_-3_95"},a(d[1]).createElement("div",{className:"lri3b"},a(d[1]).createElement("span",{className:"vqgRc"},u)),a(d[1]).createElement("div",{className:"dHGtX"},null!=o&&a(d[1]).createElement(i(d[3]),{className:"_4SLOU",isLong:!0,value:o}))),!0===s&&a(d[1]).createElement(i(d[4]),{fontSize:12,paddingX:3,paddingY:4}))}},12910609,[12910610,3,9961669,9961616,12910611]);
__d(function() {},12910610,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});let t=0;class s extends a(d[3]).PureComponent{constructor(...s){super(...s),this.$DesktopStoryTrayItem1=i(d[0])(s=>`DesktopStoryTrayItem_${t++}`),this.$DesktopStoryTrayItem3=(t=>{t.preventDefault(),this.props.onClick(this.props.reel.id,this.$DesktopStoryTrayItem1(this.props.reel.id))}),this.$DesktopStoryTrayItem2=(()=>{this.props.onScrollEnter(i(d[1])(this.props.reel.userId),this.props.trayPosition)})}componentDidMount(){this.props.isVisible&&this.$DesktopStoryTrayItem2()}componentDidUpdate(t){!t.isVisible&&this.props.isVisible&&this.$DesktopStoryTrayItem2()}render(){const{avatarSize:t,condensed:s,isMuted:o,isViewer:p,lastUpdated:n,profilePictureUrl:l,username:u}=this.props,c=p?r(d[2]).YOUR_STORY_TEXT:u;return a(d[3]).createElement(i(d[4]),{avatarSize:t,clickTargetElementId:this.$DesktopStoryTrayItem1(this.props.reel.id),condensed:s,isMuted:o,label:c,lastUpdated:n,onClick:this.$DesktopStoryTrayItem3,profilePictureUrl:l,username:u})}}s.defaultProps={avatarSize:50,condensed:!1};var o=r(d[7]).connect(function(t,s){const o=r(d[5]).getUserById(t,i(d[1])(s.reel.userId));return{isMuted:Boolean(s.reel.muted),isSeen:r(d[6]).isReelSeen(s.reel),isViewer:t.users.viewerId===s.reel.id,profilePictureUrl:i(d[1])(o.profilePictureUrl),username:i(d[1])(o.username)}})(s);e.default=o},12910605,[12910612,9699335,9961554,3,12910609,9699375,9961479,5]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var t=function({avatarSize:t,hideAvatarBorder:c,rounded:l}){return a(d[1]).createElement("div",{className:"aDZPy"},a(d[1]).createElement(i(d[2]),{className:"S9Gru",hideAvatarBorder:c,size:t}),a(d[1]).createElement("div",{className:"l9n6R"},a(d[1]).createElement("div",{className:`UhO_X ${l?"DC7KV":""}`}),a(d[1]).createElement("div",{className:`oP6Lh ${l?"DC7KV":""}`})))};e.default=t},12910606,[12910613,3,12910614]);
__d(function() {},12910613,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1]).isDesktop()&&!0===i(d[2])._("80","3",{silent:!0}),n=t?56:50;e.default=function({isVerified:l,name:c,profilePictureUrl:s,username:o}){const _=r(d[3]).useDispatch(),u=()=>_(r(d[4]).openAccountSwitcher(r(d[5]).FEED_PATH,'feed_sidebar')),E=!0===i(d[2])._("124","0",{silent:!0});return a(d[6]).createElement("div",{className:`nwXS6 ${t?"ON6Nq":""}`},a(d[6]).createElement(i(d[7]),{className:"_2NjG_",isLink:!0,profilePictureUrl:s,size:n,storyEntrypoint:"reel_feed_timeline",username:o}),a(d[6]).createElement("div",{className:`_0v2O4 ${t?"StX70":""}`},a(d[6]).createElement("div",{className:"SKguc"},a(d[6]).createElement(i(d[8]),{className:"gmFkV",href:E?void 0:r(d[9]).buildUserLink(o),onClick:E?u:void 0},o),l&&a(d[6]).createElement(r(d[10]).Box,{display:"inlineBlock",marginStart:2},a(d[6]).createElement(r(d[10]).VerifiedBadge,null)),!0===i(d[2])._("124","0")&&a(d[6]).createElement(r(d[10]).Box,{marginStart:1},a(d[6]).createElement(i(d[11]),{onClick:u,padding:0},a(d[6]).createElement(i(d[12]),{alt:r(d[13]).DOWN_CHEVRON_ALT,direction:"down",size:16})))),a(d[6]).createElement("div",{className:"f5Yes oL_O8"},c)))}},12910597,[12910615,9699340,9699356,5,9961999,9699371,3,9961669,9699336,9699353,9699357,9961813,9961549,9699347]);
__d(function() {},12910615,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const s=r(d[0])(1488),t=()=>a(d[1]).createElement(r(d[2]).Box,{paddingX:4,paddingY:3},a(d[1]).createElement(r(d[2]).Button,{borderless:!0,href:r(d[3]).DISCOVER_PEOPLE_PATH},r(d[0])(2720)));var l=i(d[7])('FetchingSuggestedUserList',({analyticsContext:l,avatarSize:n="medium",backgroundColor:o,borderlessFollowButton:u=!1,count:E,footer:c,header:U,hideName:_=!1,hideUpsells:S=!1,initialRenderCount:T=r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT,onDisplayDone:C,variant:L="LIST",viewModule:h})=>{const{isLoading:D,suggestedUserIds:v}=r(d[5]).useSelector(a(d[1]).useCallback(s=>({isLoading:s.suggestedUsers.isLoadingSuggestions,suggestedUserIds:s.suggestedUsers.ids.toArray()}),[]),r(d[5]).shallowEqual),F=r(d[5]).useDispatch(),b=a(d[1]).useCallback(s=>F(r(d[4]).loadSUL({suggestedCount:s})),[F]);return a(d[1]).useEffect(()=>{0===v.length&&b(r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT)},[b,v.length]),a(d[1]).useEffect(()=>{v.length>0&&C()},[C,v]),a(d[1]).createElement(a(d[1]).Fragment,null,a(d[1]).createElement(i(d[6]),{analyticsContext:l,avatarSize:n,backgroundColor:o,borderlessFollowButton:u,hideName:_,hideUpsells:S,initialRenderCount:T,isLoading:D,subHeader:void 0!==U?U:s,userIds:isNaN(E)?v.slice(0,r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT):v.slice(0,E),variant:L,viewModule:h}),'LIST'===L&&(void 0!==c?c:a(d[1]).createElement(t,null)))});e.default=l,e.HEADER_TEXT=s},10092588,[9699332,3,9699357,9699371,9962049,5,10092612,10092613]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var n=({analyticsContext:n,avatarSize:t="large",borderlessFollowButton:o=!1,backgroundColor:l="ig-primary-background",children:s,footer:c,hideName:u=!1,hideStoryRings:C=!1,hideUpsells:E=!1,initialRenderCount:_=r(d[0]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT,isLoading:p,subHeader:I,userIds:T,variant:f="LIST",viewModule:h})=>{const S={},{canFBConnect:v,canImportContacts:x}=r(d[1]).useSelector(a(d[2]).useCallback(n=>({canFBConnect:r(d[3]).shouldDisplayFacebookConnect(n),canImportContacts:r(d[4]).shouldRenderContactImportUpsell(n,'LIST_ITEM')}),[]),r(d[1]).shallowEqual),y=({followedByViewer:n,index:t,userId:o})=>{n||k('recommended_follow_button_tapped',o,t)},b=({index:n,userId:t})=>{k('recommended_username_tapped',t,n)},F=(n,t)=>{if(null!=T)for(let o=n;o<=t-1;++o){const n=T[o];S[n]||(k('recommended_user_impression',n,o),S[n]=!0)}},k=(t,o,l)=>{r(d[5]).logConnectionAction({eventName:t,position:l,targetId:o,containerModule:n,viewModule:h})};return'GRID'===f?a(d[2]).createElement(i(d[6]),{avatarSize:t,isLoading:p,onFollowClick:y,onUsernameClick:b,onVisibilityChange:F,subHeader:I,suffix:a(d[2]).createElement(i(d[7]),{href:r(d[8]).DISCOVER_PEOPLE_PATH}),userIds:T||[]}):a(d[2]).createElement(a(d[2]).Fragment,null,null!=I&&a(d[2]).createElement(r(d[9]).Box,{marginBottom:3,marginTop:4,paddingX:3},a(d[2]).createElement(r(d[9]).Text.Section,null,I)),a(d[2]).createElement(r(d[9]).Box,{color:l,paddingY:2},!E&&a(d[2]).createElement(a(d[2]).Fragment,null,r(d[10]).checkGraphDifferentiationQE()&&a(d[2]).createElement(i(d[11]),{analyticsContext:r(d[5]).CONNECTIONS_CONTAINER_MODULES.discover_people}),a(d[2]).createElement(i(d[12]),{analyticsContext:n,variant:"LIST_ITEM"}),(v&&r(d[10]).checkGraphDifferentiationQE()||x)&&a(d[2]).createElement(r(d[9]).Box,{paddingY:2},a(d[2]).createElement(r(d[9]).Divider,null))),a(d[2]).createElement(i(d[13]),{avatarSize:t,avatarTriggerAnalyticsContext:"suggested_user_avatar",borderlessFollowButton:o,hideName:u,hoverPositionType:"fixed",initialRenderCount:_,isLoading:Boolean(p),onFollowClick:y,onScrollChange:({index:n,userId:t})=>{S[t]||(k('recommended_user_impression',t,n),S[t]=!0)},onUsernameClick:b,userIds:T||[],usernameTriggerAnalyticsContext:"suggested_user"}),c))};e.default=n},10092612,[9962049,5,3,10092614,10092615,9961611,10092616,10092617,9699371,9699357,9699368,10092618,10092619,9961664]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0]).createSelector(t=>t.contactImport.ids,t=>t.toArray());e.getContactUserIDs=t,e.getContactUsers=(s=>(r(d[1]).getUsersByIds(s,t(s))||[]).map(t=>({user:t,relationship:r(d[2]).getRelationship(s.relationships,t.id)}))),e.shouldRenderContactImportUpsell=((t,s)=>{var c;const n=t.contactImport.canImportContacts,o=!t.contactImport.upsellStatus.get('chainingListUpsellDismissed'),l=!t.contactImport.upsellStatus.get('emptyFeedCarouselCardDismissed'),u=null===(c=t.settings.privacyAndSecurityData)||void 0===c?void 0:c.allowContactsSync.value;switch(s){case'CONTACTS_LIST':case'NO_CONTACTS':case'NUX':return n;case'LIST_ITEM':return n&&!u;case'EMPTY_FEED_CAROUSEL_CARD':return l&&n&&!u;case'CHAINING_LIST_ITEM':return o&&n&&!u;default:return!1}})},10092615,[9,9699375,9961480]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var n=n=>{const{isLoading:t,onFollowClick:l,onUsernameClick:o,onVisibilityChange:s,subHeader:c,suffix:u,userIds:f}=n,k=n=>{l&&l(n)},p=n=>{o&&o(n)};return t?a(d[0]).createElement(r(d[1]).Box,{alignItems:"center",marginTop:4,width:"100%"},a(d[0]).createElement(r(d[1]).Spinner,null)):a(d[0]).createElement(r(d[1]).Deck,{cardType:"USER",hasBlur:!0,headerText:c,onVisibilityChange:(n,t)=>{s&&s(n,t)},suffix:u},f.map((n,t)=>a(d[0]).createElement(i(d[2]),{id:n,key:t,onFollowClick:k,onUsernameClick:p,position:t})))};e.default=n},10092616,[3,9699357,10092622]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var l=l=>{const{analyticsContext:n,id:s,onFollowClick:t,position:o}=l,{relationship:u,user:c}=r(d[0]).useSelector(a(d[1]).useCallback(n=>({relationship:r(d[2]).getRelationship(n.relationships,l.id),user:r(d[3]).getUserById(n,l.id)}),[l.id]),r(d[0]).shallowEqual),{profilePictureUrl:p,suggestionDescription:f,username:C}=c;return null==p||null==f||null==C?null:a(d[1]).createElement(r(d[4]).UserCard,{button:a(d[1]).createElement(i(d[5]),{analyticsContext:n,onClick:()=>{null!=t&&u&&t({index:o,userId:s,followedByViewer:r(d[2]).followedByViewer(u)})},relationship:u,userId:c.id}),isVerified:c.isVerified,onUsernameClick:()=>{l.onUsernameClick({index:o,userId:s})},src:p,subtitle:f,username:C})};e.default=l},10092622,[5,3,9961480,9699375,9699357,9961610]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=t=>a(d[2]).createElement(i(d[3]),{className:"HUW1v hUQXy",href:t.href,onClick:t.onClick,params:t.params},r(d[4])(1038));e.default=t},10092617,[9699329,10092623,3,9699336,9699332]);
__d(function() {},10092623,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t='connect_to_facebook',n=r(d[0])(36),o=r(d[0])(2248),c=r(d[0])(639);var l=l=>{const{canFBConnect:s,isLoading:u}=r(d[1]).useSelector(a(d[2]).useCallback(t=>({canFBConnect:r(d[3]).shouldDisplayFacebookConnect(t),isLoading:r(d[3]).isInitialLoad(t)}),[]),r(d[1]).shallowEqual),[C,E]=a(d[2]).useState(!1),_=r(d[4]).parseQueryParams();return null!=_[t]&&_[t].length>0&&(i(d[5]).replace(i(d[5]).location.pathname),E(!0)),C?a(d[2]).createElement(r(d[6]).Toast,{duration:1500,onClose:()=>E(!1)},r(d[7]).FACEBOOK_COMPLETED):s&&a(d[2]).createElement(r(d[6]).ListItem,{action:a(d[2]).createElement(r(d[6]).Button,{disabled:u,loading:u,onClick:()=>r(d[8]).redirectToFBOAuth(`${i(d[5]).location.pathname}?${t}=true`,l.analyticsContext)},c),icon:a(d[2]).createElement(r(d[6]).BorderedIcon,{alt:n,color:"facebook",icon:r(d[6]).ICONS.FACEBOOK_CIRCLE_FILLED_24,size:r(d[6]).CORE_CONSTANTS.AVATAR_SIZES.medium}),subtitle:o,title:a(d[2]).createElement(r(d[6]).Text.BodyEmphasized,null,n),truncateText:!1})};e.default=l},10092618,[9699332,5,3,10092614,10092545,9699333,9699357,10092624,9699368]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(2083),s=r(d[0])(3252),o=r(d[0])(946),n=r(d[0])(1568),c=r(d[0])(55),C=r(d[0])(2760),I=r(d[0])(1822),l=r(d[0])(2996),E=r(d[0])(2851),T=r(d[0])(957),_=()=>i(d[1])._("24")&&a(d[2]).createElement(r(d[3]).Text.Footnote,{color:"ig-secondary-text",textAlign:"left"},T,a(d[2]).createElement(i(d[4]),{href:r(d[5]).CONTACT_IMPORT_DATA_POLICY_PATH},' ',r(d[6]).LEARN_MORE,'.'));class p extends a(d[2]).Component{constructor(t){super(t),this.$ImportContacts1=(()=>{i(d[7])(this.props.history).push(r(d[5]).DISCOVER_PEOPLE_SUGGESTTED_PATH)}),this.$ImportContacts4=(()=>{i(d[7])(this.props.history).push(r(d[5]).DISCOVER_PEOPLE_CONTACTS_PATH)}),this.$ImportContacts5=(()=>{const{onDismissed:t,variant:s}=this.props;'CHAINING_LIST_ITEM'===s?r(d[8]).getUserPreferences().setItem('showContactImportFeedUnitUpsell',!1):'EMPTY_FEED_CAROUSEL_CARD'===s&&r(d[8]).getUserPreferences().setItem('showContactImportEmptyFeedCarouselUpsell',!1),t&&t()}),this.state={showLegalDialog:!1}}$ImportContacts2(){const{shouldRender:t,variant:s}=this.props;switch(s){case'CHAINING_LIST_ITEM':case'CONTACTS_LIST':case'EMPTY_FEED_CAROUSEL_CARD':case'NO_CONTACTS':case'NUX':return t;case'LIST_ITEM':return t&&this.$ImportContacts3();default:return!1}}$ImportContacts3(){const{analyticsContext:t}=this.props;switch(t){case r(d[9]).CONNECTIONS_CONTAINER_MODULES.discover_people:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.newsfeed_you:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.self_following:return!0;case r(d[9]).CONNECTIONS_CONTAINER_MODULES.follow_requests:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.self_followers:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.feed_timeline:default:return!1}}$ImportContacts6(){const{variant:t}=this.props;switch(t){case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(2517),icon:r(d[3]).ICONS.CONTACT_IMPORT_SM,size:r(d[3]).CORE_CONSTANTS.AVATAR_SIZES.medium});case'CHAINING_LIST_ITEM':case'CONTACTS_LIST':case'EMPTY_FEED_CAROUSEL_CARD':case'NUX':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(2517),icon:r(d[3]).ICONS.CONTACT_IMPORT,size:62});case'NO_CONTACTS':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(1014),icon:r(d[3]).ICONS.USER_OUTLINE_24_GREY9,size:62});default:return null}}$ImportContacts7(){const{variant:s}=this.props;switch(s){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return I;case'CONTACTS_LIST':case'NUX':return t;case'NO_CONTACTS':return n;default:return null}}$ImportContacts8(){const{variant:t}=this.props;switch(t){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return l;case'CONTACTS_LIST':case'NUX':return o;case'NO_CONTACTS':return c;default:return null}}$ImportContacts9(){const{isProcessing:t,variant:o}=this.props;switch(o){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).Button,{fullWidth:'CHAINING_LIST_ITEM'===o,loading:t,onClick:()=>{this.setState({showLegalDialog:!0})}},E);case'CONTACTS_LIST':case'NUX':return a(d[2]).createElement(r(d[3]).Button,{fullWidth:!0,large:!0,loading:t,onClick:this.props.onImportContacts},s);case'NO_CONTACTS':return a(d[2]).createElement(r(d[3]).Button,{borderless:!0,onClick:this.$ImportContacts1},C);default:return null}}$ImportContacts10(){const{analyticsContext:t,hideAction:o,isProcessing:n,isSmallScreen:c,variant:C}=this.props;switch(C){case'NUX':return a(d[2]).createElement(i(d[10]),{bodyText:this.$ImportContacts8(),buttonText:s,headerText:this.$ImportContacts7(),hideAction:o,icon:this.$ImportContacts6(),isProcessing:n,onButtonClick:this.props.onImportContacts});case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).Box,{marginBottom:1},a(d[2]).createElement(r(d[3]).ListItem,{action:this.$ImportContacts9(),icon:this.$ImportContacts6(),subtitle:this.$ImportContacts8(),title:a(d[2]).createElement(r(d[3]).Text.BodyEmphasized,null,this.$ImportContacts7())}));case'CHAINING_LIST_ITEM':return a(d[2]).createElement(i(d[11]),{analyticsContext:t,icon:this.$ImportContacts6(),isSmallScreen:i(d[7])(c),onClick:this.$ImportContacts4,onDismissed:this.$ImportContacts5,primaryCta:this.$ImportContacts9(),primaryText:a(d[2]).createElement(r(d[3]).Box,{marginBottom:2},a(d[2]).createElement(r(d[3]).Text.BodyEmphasized,null,this.$ImportContacts7())),secondaryText:a(d[2]).createElement(r(d[3]).Box,{marginBottom:3},a(d[2]).createElement(r(d[3]).Text.Footnote,{color:"ig-secondary-text"},this.$ImportContacts8()))});case'EMPTY_FEED_CAROUSEL_CARD':return a(d[2]).createElement(r(d[12]).UpsellCard,{body:this.$ImportContacts8(),button:this.$ImportContacts9(),header:this.$ImportContacts7(),icon:this.$ImportContacts6(),onDismiss:this.$ImportContacts5});default:return a(d[2]).createElement(r(d[3]).Box,{alignItems:"center",justifyContent:"center",marginTop:15},a(d[2]).createElement(r(d[3]).Box,{alignItems:"center",justifyContent:"center",padding:9},a(d[2]).createElement(r(d[3]).Box,{paddingY:3},this.$ImportContacts6()),a(d[2]).createElement(r(d[3]).Box,{paddingY:3},a(d[2]).createElement(r(d[3]).Text.Headline2,null,this.$ImportContacts7())),a(d[2]).createElement(r(d[3]).Box,{paddingY:3},a(d[2]).createElement(r(d[3]).Text.Body,{color:"ig-secondary-text",textAlign:"center"},this.$ImportContacts8())),a(d[2]).createElement(r(d[3]).Box,{paddingY:3,width:"100%"},this.$ImportContacts9()),a(d[2]).createElement(r(d[3]).Box,{paddingY:4},a(d[2]).createElement(_,null))))}}render(){return this.$ImportContacts2()?a(d[2]).createElement(a(d[2]).Fragment,null,this.$ImportContacts10(),this.state.showLegalDialog&&a(d[2]).createElement(i(d[13]),{hideIcon:!1,onClose:()=>{this.setState({showLegalDialog:!1})},onConfirm:this.props.onImportContacts})):null}}p.defaultProps={hideAction:!1,redirectToContactsPage:!0,isSmallScreen:!1,variant:'CONTACTS_LIST'};var S=r(d[17]).withRouter(r(d[18]).connect(function(t,s){return{isProcessing:t.contactImport.requestInFlight,shouldRender:r(d[14]).shouldRenderContactImportUpsell(t,i(d[7])(s.variant))}},function(t,s){const{redirectToContactsPage:o,variant:n}=s;return{onDismissed(){'CHAINING_LIST_ITEM'===n?t({type:r(d[15]).CI_CHAINING_LIST_UPSELL_DISMISSED}):'EMPTY_FEED_CAROUSEL_CARD'===n&&t({type:r(d[15]).CI_EMPTY_FEED_CAROUSEL_UPSELL_DISMISSED})},onImportContacts(){t(r(d[16]).importContacts({redirectToContactsPage:void 0===o||o}))}}})(p));e.default=S,e.IMPORT_CONTACTS_LEGAL_DISCLAIMER=T,e.LegalDisclaimer=_},10092619,[9699332,9699362,3,9699357,9961550,9699371,9699347,9699335,10092625,9961611,10092626,10092627,10092628,10092629,10092615,10092630,10092631,6,5]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=class extends a(d[3]).Component{constructor(...t){super(...t),this.$FollowChainingListItem2=(t=>{const{onDismissed:n}=this.props;this.$FollowChainingListItem1('dismiss'),n&&n(),t.stopPropagation()}),this.$FollowChainingListItem3=(()=>{const{onClick:t}=this.props;this.$FollowChainingListItem1('other'),t&&t()})}$FollowChainingListItem1(t){this.props.analyticsContext&&r(d[2]).logAction_DEPRECATED('chainingClick',{source:this.props.analyticsContext,target:t})}render(){const{icon:t,isSmallScreen:n,onDismissed:o,primaryCta:s,primaryText:l,secondaryText:c}=this.props;return a(d[3]).createElement("div",{className:"_41KYi",onClick:this.$FollowChainingListItem3,role:"button",tabIndex:"-1"},a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",padding:n?4:5,width:"100%"},o&&a(d[3]).createElement("button",{alt:r(d[5])(3527),className:"fUzmR",onClick:this.$FollowChainingListItem2},a(d[3]).createElement("div",{className:`${n?"coreSpriteDismissSmall":""} ${n?"":"coreSpriteDismissLarge"}`})),a(d[3]).createElement(r(d[4]).Box,{marginBottom:n?2:5},t),a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row",justifyContent:"center",marginBottom:1,width:"100%"},l),a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row",justifyContent:"center",marginBottom:n?2:3,width:"100%"},c),s))}};e.default=t},10092627,[9699330,10092633,9699365,3,9699357,9699332]);
__d(function() {},10092633,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t={AVATAR:{HEIGHT:88,WIDTH:88},CARD:{HEIGHT:344,WIDTH:236},IMAGE:{HEIGHT:74,WIDTH:74}},n=({children:n,dangerouslySetClassName:l,onClick:o})=>a(d[1]).createElement("div",{className:null===l||void 0===l?void 0:l.__className,onClick:o,role:"link",tabIndex:"0"},a(d[1]).createElement(r(d[2]).Box,{alignItems:"center",color:"ig-primary-background",dangerouslySetClassName:{__className:"R-Yxq"},flex:"grow",height:t.CARD.HEIGHT,padding:1,width:t.CARD.WIDTH},n)),l=i(d[3])(({body:l,button:o,dangerouslySetClassName:s,header:c,icon:E,onDismiss:I})=>a(d[1]).createElement(n,{dangerouslySetClassName:s},a(d[1]).createElement(r(d[2]).Box,{alignItems:"center",dangerouslySetClassName:{__className:"_6d4V5"},height:t.AVATAR.HEIGHT,justifyContent:"center",marginTop:11,shape:"circle",width:t.AVATAR.WIDTH},E),a(d[1]).createElement(r(d[2]).Box,{padding:3},a(d[1]).createElement(r(d[2]).Text.Headline2,{textAlign:"center"},c)),I&&a(d[1]).createElement(r(d[2]).Box,{position:"absolute",right:!0},a(d[1]).createElement(r(d[2]).IconButton,{alt:r(d[4])(2532),icon:r(d[2]).ICONS.GREY_CLOSE,onClick:I})),a(d[1]).createElement(r(d[2]).Box,{flex:"grow",paddingX:3},a(d[1]).createElement(r(d[2]).Text.Body,{color:"ig-secondary-text",textAlign:"center"},l)),a(d[1]).createElement(r(d[2]).Box,{marginBottom:5},o)));var o=i(d[3])(n);e.default=o,e.SIZES=t,e.UpsellCard=l},10092628,[10092634,3,9699357,10092635,9699332]);
__d(function() {},10092634,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(){r(d[0]).openURL(r(d[1]).CONTACT_IMPORT_DATA_POLICY_PATH)}function o(){const{pixelRatio:t}=i(d[2])();return t>=1.5?"/static/images/ci/contacts-facepile-2x.jpg/ca81c1e43461.jpg 2x":"/static/images/ci/contacts-facepile-1x.jpg/df9b3f3bde41.jpg"}Object.defineProperty(e,'__esModule',{value:!0});const n=n=>a(d[3]).createElement(r(d[4]).Dialog,{body:r(d[5])(3036),media:!n.hideIcon&&a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",justifyContent:"center",width:"100%"},a(d[3]).createElement("img",{alt:r(d[5])(3592),srcSet:o()})),onModalClose:n.onClose,title:r(d[5])(1032)},n.onConfirm&&a(d[3]).createElement(r(d[4]).DialogItem,{color:"ig-primary-button",onClick:n.onConfirm},r(d[6]).GET_STARTED),a(d[3]).createElement(r(d[4]).DialogItem,{color:n.onConfirm?'ig-secondary-button':'ig-primary-button',onClick:t},r(d[6]).LEARN_MORE),a(d[3]).createElement(r(d[4]).DialogItem,{onClick:n.onClose},r(d[6]).CLOSE_TEXT));n.defaultProps={hideIcon:!0};var c=n;e.default=c},10092629,[9961623,9699371,9961638,3,9699357,9699332,9699347]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(){const[t,n]=r(d[0]).useState(r(d[1]).fetchWindowOrientation()),[o,w]=r(d[0]).useState(window.devicePixelRatio),[s,u]=r(d[0]).useState(window.innerHeight),[c,l]=r(d[0]).useState(window.innerWidth);return r(d[0]).useEffect(()=>{const t=()=>{n(r(d[1]).fetchWindowOrientation),w(window.devicePixelRatio),u(window.innerHeight),l(window.innerWidth)};let o=!1,s=null;if(r(d[3]).isDesktop()){const t=()=>{w(window.devicePixelRatio),s=setTimeout(t,1e3)};t()}const c=i(d[4]).add(window,'resize',()=>{o||(o=!0,r(d[2]).measure(()=>{try{t()}finally{o=!1}}))});return()=>{r(d[3]).isDesktop()&&clearTimeout(s),c.remove()}},[]),{orientation:t,pixelRatio:o,viewportHeight:s,viewportWidth:c}}},9961638,[3,9961643,9961576,9699340,9961521]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=65;class n extends a(d[0]).PureComponent{constructor(...t){super(...t),this.$UserList1=a(d[0]).createRef(),this.$UserList2=(t=>{const{onFollowClick:n}=this.props;n&&n(t)}),this.$UserList3=(({index:t,isVisible:n})=>{const{analyticsContext:s,avatarSize:o,avatarTriggerAnalyticsContext:l,borderlessFollowButton:c,entryPoint:u,hideName:h,hoverPositionType:p,isLoading:y,userIds:C,usernameTriggerAnalyticsContext:L}=this.props;return 0===C.length?y?a(d[0]).createElement(r(d[1]).ListItemPlaceholder,{key:t,size:o}):null:a(d[0]).createElement(i(d[2]),{analyticsContext:s,avatarSize:o,avatarTriggerAnalyticsContext:l,borderlessFollowButton:c,entryPoint:u,hideFollowButton:this.props.hideFollowButton,hideName:h,hideStoryRings:this.props.hideStoryRings,hoverPositionType:p||'absolute',id:C[t],isVisible:n,key:C[t],onFollowClick:this.$UserList2,onScrollEnter:this.$UserList4,onUsernameClick:this.$UserList5,position:t,usernameTriggerAnalyticsContext:L})}),this.$UserList4=(t=>{const{onScrollChange:n}=this.props;n&&n(t)}),this.$UserList5=(t=>{const{onUsernameClick:n}=this.props;n&&n(t)})}componentDidUpdate(t){null!=this.$UserList1.current&&this.props.userIds.length===this.props.initialRenderCount&&0===t.userIds.length&&this.$UserList1.current.forceUpdate()}render(){const{containerSize:n,initialRenderCount:s,isLoading:o,onScroll:l,userIds:c}=this.props;return a(d[0]).createElement(a(d[0]).Fragment,null,a(d[0]).createElement(i(d[3]),{containerSize:n,estimatedItemSize:t,initialRenderCount:s,itemCount:c.length||s,onScroll:l,ref:this.$UserList1,renderer:this.$UserList3}),c.length>0&&o&&a(d[0]).createElement(r(d[1]).Box,{alignItems:"center",marginTop:4},a(d[0]).createElement(r(d[1]).Spinner,{size:"medium"})))}}n.defaultProps={avatarTriggerAnalyticsContext:null,borderlessFollowButton:!1,containerSize:'auto',entryPoint:'unknown',hideFollowButton:!1,hideName:!1,hideStoryRings:!1,hoverPositionType:null,initialRenderCount:10,isLoading:!1,usernameTriggerAnalyticsContext:null};var s=n;e.default=s},9961664,[3,9699357,9961666,9961667]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=({onClick:t,user:l})=>{const{isVerified:n,username:o}=l;return void 0===o?null:a(d[1]).createElement(i(d[2]),{href:r(d[3]).buildUserLink(o),onClick:t,title:o},a(d[1]).createElement(r(d[4]).Box,{direction:"row"},a(d[1]).createElement(r(d[4]).Text.BodyEmphasized,{dangerouslySetClassName:{__className:"rWtOq"},display:"truncated"},a(d[1]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row"},o,!0===n&&a(d[1]).createElement(r(d[4]).Box,{marginStart:2},a(d[1]).createElement(r(d[4]).VerifiedBadge,{size:"small"}))))))};var l=r(d[13]).connect(function(t,l){return{relationship:r(d[5]).getRelationship(t.relationships,l.id),user:r(d[12]).getUserById(t,l.id),viewer:r(d[12]).getViewer(t)}})(({analyticsContext:l,avatarSize:n="medium",avatarTriggerAnalyticsContext:o=null,borderlessFollowButton:s,entryPoint:u,hideFollowButton:c,hideName:p,hideStoryRings:y,hoverPositionType:C=null,id:E,isVisible:x,onFollowClick:f,onScrollEnter:v,onUsernameClick:S,position:T,relationship:k,user:w,usernameTriggerAnalyticsContext:A=null,viewer:h})=>{var I;const b=r(d[4]).usePreviousValue(x),B=r(d[1]).useCallback(()=>{f&&k&&f({index:T,userId:E,followedByViewer:r(d[5]).followedByViewer(k)})},[E,f,T,k]),_=r(d[1]).useCallback(()=>{v({index:T,userId:E})},[E,v,T]),V=r(d[1]).useCallback(()=>{S({index:T,userId:E})},[E,S,T]);r(d[1]).useEffect(()=>{!0!==b&&x&&_()},[_,x,b]);const N=!c&&(null===h||void 0===h?void 0:h.id)!==w.id,P=y?a(d[1]).createElement(i(d[6]),{profilePictureUrl:i(d[7])(w.profilePictureUrl),size:r(d[4]).CORE_CONSTANTS.AVATAR_SIZES[n],username:w.username}):a(d[1]).createElement(i(d[8]),{profilePictureUrl:i(d[7])(w.profilePictureUrl),size:r(d[4]).CORE_CONSTANTS.AVATAR_SIZES[n],storyEntrypoint:u,username:w.username});return a(d[1]).createElement(r(d[4]).ListItem,{action:N?a(d[1]).createElement(i(d[9]),{analyticsContext:l,borderless:s,onClick:B,relationship:k,userId:w.id,useSmallText:s}):void 0,context:w.suggestionDescription,icon:null!=C&&null!=o?a(d[1]).createElement(i(d[10]),{display:"block",positionType:C,triggerAnalyticsContext:o,userId:w.id},P):P,subtitle:p?null:w.fullName,title:null!=C&&null!=A?a(d[1]).createElement(i(d[11]),{color:"ig-primary-text",onClick:V,positionType:C,triggerAnalyticsContext:A,userId:w.id,username:null!==(I=null===w||void 0===w?void 0:w.username)&&void 0!==I?I:''}):a(d[1]).createElement(t,{onClick:V,user:w}),truncateText:!1})});e.default=l},9961666,[9961668,3,9699336,9699353,9699357,9961480,9699338,9699335,9961669,9961610,9961670,9961671,9699375,5]);
__d(function() {},9961668,[]);