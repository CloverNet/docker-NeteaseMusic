(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77694d58"],{"0203":function(t,e,s){"use strict";s("95ae")},"0e95":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"list-songs "+(t.className||"")},[s("div",[t._l(t.songs,(function(e,i){return s("div",{key:e,class:"song-item "+(t.allSongs[e].url?"hasUrl":"disabled"),on:{click:function(s){return t.playMusic({id:e,arr:t.songs})}}},[t.showIndex?s("div",{staticClass:"song-order"},[t._v(t._s(i+1))]):t._e(),t.favSongMap[t.allSongs[e].platform]&&t.favSongMap[t.allSongs[e].platform][e]?s("div",{staticClass:"liked-item"}):t._e(),t.playNow.aId===e?s("div",{staticClass:"playing-bg",style:"width: "+100*t.playingPercent+"%"},[s("div",{staticClass:"wave-bg"}),s("div",{staticClass:"wave-bg2"})]):t._e(),t.countMap&&t.countMap[e]?s("div",{staticClass:"count-bg",style:"width: "+t.countMap[e].score+"%"}):t._e(),t.showCover?s("div",{staticClass:"song-album-img",style:"background-image: url('"+(t.allSongs[e].al&&t.allSongs[e].al.picUrl+"?param=50y50")+"')"}):t._e(),s("div",{staticClass:"song-name"},[t._v("\n        "+t._s(t.allSongs[e].name)+"\n\n        "),t.showCover&&t.allSongs[e].mvId?s("a",{staticClass:"inline-block ml_5 iconfont icon-mv",staticStyle:{"font-size":"14px","font-weight":"100"},attrs:{href:t.changeUrlQuery({id:t.allSongs[e].mvId,from:t.allSongs[e].platform},"#/mv",!1)}}):t._e()]),s("div",[s("div",{staticClass:"song-ar"},[!t.showCover&&t.allSongs[e].mvId?s("a",{staticClass:"inline-block mr_5 iconfont icon-mv",attrs:{href:t.changeUrlQuery({id:t.allSongs[e].mvId,from:t.allSongs[e].platform},"#/mv",!1)}}):t._e(),t._v("\n          "+t._s(t.allSongs[e].ar.map((function(t){return t.name})).join("/"))+"\n        ")]),s("div",{staticClass:"song-operation"},[t.favSongMap[t.allSongs[e].platform]?s("i",{class:"operation-icon operation-icon-1 iconfont icon-"+(Boolean(t.favSongMap[t.allSongs[e].platform][e])?"like":"unlike"),on:{click:function(s){return t.likeMusic(e)}}}):t._e(),"migu"!==t.allSongs[e].platform?s("i",{staticClass:"operation-icon operation-icon-2 iconfont icon-add",on:{click:function(s){return t.playlistTracks(e,"add","ADD_SONG_2_LIST")}}}):t._e(),t.allSongs[e].url&&t.playingList.map[e]?s("i",{staticClass:"operation-icon operation-icon-3 iconfont icon-list-reomve",on:{click:function(s){return t.removePlaying(e)}}}):t._e(),t.allSongs[e].url&&!t.playingList.map[e]?s("i",{staticClass:"operation-icon operation-icon-3 iconfont icon-list-add",on:{click:function(s){return t.addPlaying(e)}}}):t._e(),t.allSongs[e].url?s("i",{staticClass:"operation-icon operation-icon-4 iconfont icon-download",on:{click:function(s){return t.download(e)}}}):t._e(),t.countMap&&t.countMap[e]?s("span",{staticClass:"played-count-num"},[t._v(t._s(t.countMap[e].count))]):t._e()])])])})),0===(t.songs||[]).length?s("div",{staticClass:"text-center mt_40"},[t._v(t._s(t.emptyText||"没啥歌曲哟"))]):t._e()],2),(t.songs||[]).length?s("div",{staticClass:"fix-play-btn",on:{click:function(e){return t.playList(t.songs)}}},[s("i",{staticClass:"iconfont icon-play"}),s("span",{staticClass:"btn-txt"},[t._v("播放列表")])]):t._e()])},n=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),o=s("2f62"),r=s("ceb6"),c=s("f503"),l=s("0828");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={name:"song",props:{songs:Array,className:String,emptyText:String,countMap:Object,showIndex:Boolean,showCover:Boolean},computed:d({},Object(o["b"])({allSongs:"getAllSongs",playNow:"getPlaying",playingPercent:"getPlayingPercent",favSongMap:"getFavSongMap",playingList:"getPlayingList"})),methods:d(d({},c["a"]),{},{likeMusic:r["m"],download:r["e"],changeUrlQuery:l["a"],playlistTracks:function(t,e,s,i){window.event.stopPropagation(),this.$store.dispatch("setOperation",{data:{tracks:t,op:e},type:s,platform:i})}})},v=p,f=(s("0203"),s("2877")),g=Object(f["a"])(v,i,n,!1,null,null,null);e["a"]=g.exports},1511:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-page-container"},[t.uid?t._e():s("div",{staticClass:"login-container"},[s("div",{staticClass:"login-input-container mt_25 pt_30"},[s("div",{staticClass:"input-line"},[s("div",{staticClass:"input-label"},[t._v("\n            "+t._s("password"===t.type?"手机/邮箱":"手机")+"\n          ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),"password"===t.type?s("div",{staticClass:"input-line"},[s("div",{staticClass:"input-label"},[t._v("\n            密码\n          ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]):t._e(),"captcha"===t.type?s("div",{staticClass:"input-line"},[s("div",{staticClass:"input-label"},[t._v("\n            验证码\n          ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticStyle:{width:"165px"},attrs:{type:"text"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),s("div",{class:"code-btn "+(t.time>0&&"disabled"),on:{click:t.sendCaptcha}},[t._v("发送"+t._s(t.time>0?"（"+t.time+"s）":""))])]):t._e(),s("div",{class:"login-btn "+(("captcha"===t.type&&!t.code||"password"===t.type&&!t.password||!t.username)&&"disabled"),on:{click:t.login}},[t._v("登录网易云")])])]),t.uInfo.userId?s("div",{staticClass:"user-info-content"},[s("img",{staticClass:"user-avatar",attrs:{src:t.uInfo.avatarUrl,alt:""}}),s("div",{staticClass:"user-info-list"},[s("div",{staticClass:"user-info-txt user-info-name"},[s("span",{staticClass:"vat"},[t._v(t._s(t.uInfo.nickname))]),s("span",{staticClass:"user-signature"},[t._v(t._s(t.uInfo.signature))])]),s("div",{staticClass:"user-info-txt user-info-follow"},[s("span",{staticClass:"inline-block pointer",on:{click:function(e){t.selected="flow"}}},[t._v("关注 "+t._s(t.uInfo.follows))]),s("span",{staticClass:"inline-block ml_20 pointer",on:{click:function(e){t.selected="fans"}}},[t._v("粉丝 "+t._s(t.uInfo.followeds))])]),s("div",{staticClass:"user-info-txt user-info-listen pointer",on:{click:function(e){t.selected="history"}}},[t._v("听过 "+t._s(t.uInfo.listenSongs))]),s("div",{staticClass:"user-info-txt user-info-playlist"},[s("a",{attrs:{href:"#/playlist?id="+t.uInfo.userId+"&from=163"}},[t._v("歌单 "+t._s(t.uInfo.playlistCount)+" 个")])]),s("div",{staticClass:"user-info-txt user-info-level"},[t._v("Lv "+t._s(t.uInfo.level))]),s("div",{staticClass:"user-info-txt user-info-logout",on:{click:t.logout}},[s("i",{staticClass:"iconfont icon-logout"}),t._v(" 退出")])]),s("div",{staticClass:"user-right-list"},[s("div",{staticClass:"right-select-tab-list"},t._l(t.tabs,(function(e,i){return s("div",{key:e.icon,class:"tab-item-"+i+" c-"+e.color+" "+(t.selected===e.key&&"selected"),on:{click:function(s){t.selected=e.key}}},[s("i",{class:"iconfont icon-"+e.icon}),t._v("\n            "+t._s(e.val)+"\n          ")])})),0),"week"===t.selected||"history"===t.selected?s("SongList",{attrs:{songs:t.info[t.selected]||[],countMap:t.countMap[t.selected],"empty-text":"没听过没听过"}}):t._e(),"flow"===t.selected||"fans"===t.selected?s("div",{staticClass:"member-list",on:{scroll:function(e){return t.onScroll(".user-page-container .member-list")}}},[t._l(t.uInfo[t.selected+"List"],(function(e,i){return s("div",{key:e.userId+"-"+i,staticClass:"member-item"},[s("a",{attrs:{href:"#/user?id="+e.userId}},[s("img",{staticClass:"member-img",attrs:{src:("null"===String(e.avatarUrl)?"http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg":e.avatarUrl)+"?param=120y120"}}),s("div",{staticClass:"member-name"},[t._v(t._s(e.nickname))])])])})),t.uInfo[t.selected+"List"]&&0===t.uInfo[t.selected+"List"].length?s("div",{staticClass:"text-center mt_40"},[t._v("空空如也～")]):t._e()],2):t._e()],1)]):t._e()])},n=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("75fc")),o=(s("4917"),s("96cf"),s("3b8d")),r=s("bd86"),c=s("2f62"),l=s("27c5"),u=s("ceb6"),d=s("42e1"),p=s("1157"),v=s.n(p),f=s("0e95");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function b(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(Object(s),!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var m={name:"User",components:{Setting:l["a"],SongList:f["a"]},data:function(){return{username:"",password:"",code:"",type:"password",time:0,tabs:[{icon:"week",key:"week",color:"red",val:"最近常听"},{icon:"history",key:"history",color:"blue",val:"历史排行"},{icon:"flow",key:"flow",color:"yellow",val:"关注"},{icon:"fans",key:"fans",color:"green",val:"粉丝"}],info:{week:[],history:[]},countMap:{history:{},week:{},weekMax:0,historyMax:0},uInfo:{},selected:"week"}},computed:b({},Object(c["b"])({user:"getUser",allList:"getAllList",userList:"getUserList",allSongs:"getAllSongs",playNow:"getPlaying",playingPercent:"getPlayingPercent",favSongMap:"getFavSongMap"})),watch:{time:function(t){var e=this;t>0&&setTimeout((function(){e.time>0&&(e.time-=1)}),1e3)},username:function(){this.time=0},user:function(t){!t.userId||t.listenSongs&&t.nickname||this.$route.query.id||(this.uid=t.userId,this.getUserDetail(),this.getRecord(1))},selected:function(t){switch(t){case"week":return this.getRecord(1);case"history":return this.getRecord();case"flow":case"fans":return this.getMemberList(t)}},$route:function(){this.uid=this.$route.query.id,this.info={week:[],history:[]},this.uid||(this.uid=this.user.userId,this.uInfo={}),this.uid&&(this.getUserDetail(this.uid),this.getRecord(1))}},created:function(){this.user.userId&&(this.uid=this.user.userId),this.$route.query.id&&(this.uid=this.$route.query.id),this.uid!==this.uInfo.userId&&(this.getUserDetail(),this.getRecord(1)),this.$store.dispatch("updateShowCover",!1)},methods:{changeType:function(t){this.type=t},getUserDetail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.uid,t.next=3,Object(u["c"])({api:"GET_USER_DETAIL",data:{uid:e}});case 3:s=t.sent,i=s.level,n=s.listenSongs,a=s.profile,e===this.user.userId&&this.$store.dispatch("setUser",b(b({},a),{},{listenSongs:n,level:i})),this.uInfo=b(b({},a),{},{listenSongs:n,level:i}),["flow","fans"].indexOf(this.selected)>-1&&this.getMemberList(this.selected);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sendCaptcha:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["c"])({api:"CAPTCH_SENT",data:{phone:this.username}});case 2:e=t.sent,e&&(this.time=60);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),login:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s,i,n,a,o,r,c=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.username,s=this.password,i=this.code,n=this.type,"password"!==n){t.next=8;break}a={password:s},o="163_LOGIN_PHONE",e.match(/@/)?(o="163_LOGIN_EMAIL",a.email=e):a.phone=e,Object(u["c"])({api:o,data:a,method:"post"}).then((function(t){t?Object(u["n"])():c.$message.error("账号密码错误")}),(function(){return c.$message.error("账号密码错误")})),t.next=12;break;case 8:return t.next=10,Object(u["c"])({api:"CAPTCH_VERIFY",data:{phone:e,captcha:i}});case 10:r=t.sent,r&&(this.$message.success("登录成功"),Object(u["n"])());case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),logout:function(){var t=this;Object(u["c"])("163_LOGOUT").then((function(){var e=t.$store.dispatch;t.userList["163"]={},e("setUser",{}),e("setUserList",t.userList),e("updateFavSongMap",{163:{}}),t.uid="",t.uInfo={}}))},getRecord:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s,i,n,a,o,r,c=this,l=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=l.length>0&&void 0!==l[0]?l[0]:0,s=l.length>1&&void 0!==l[1]?l[1]:this.uid,s){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,Object(u["c"])({api:"SONG_RECORD",data:{uid:s,type:e,_p:"163"}});case 6:if(i=t.sent,i){t.next=9;break}return t.abrupt("return");case 9:return n=i.data,a=["history","week"][e],o=[],r=n.map((function(t){var e=t.song.aId,s=c.getNum(t.playCount);return c.countMap[a][e]={count:s?"".concat(s,"次"):"",score:t.score},o.push(e),t.song})),this.countMap["".concat(a,"Max")]=(n[0]||{count:0}).playCount,t.next=16,Object(u["l"])(r);case 16:this.info[a]=t.sent;case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getNum:function(t){return t>1e4?"".concat(Object(d["a"])(t/1e4,2),"w"):t>1e3?"".concat(Object(d["a"])(t/1e3,2),"k"):t},getMemberList:function(t){var e=this,s=this.uid;if(s){var i="".concat(t,"List");if(this.uInfo["".concat(t,"More")]||!this.uInfo[i]){var n=this.uInfo[i]||[];Object(u["c"])({api:{flow:"GET_FOLLOWS",fans:"GET_FOLLOWEDS"}[t],data:{uid:s,limit:30,offset:n.length}}).then((function(s){var o,c={flow:"follow",fans:"followeds"};e.uInfo=b(b({},e.uInfo),{},(o={},Object(r["a"])(o,i,[].concat(Object(a["a"])(n),Object(a["a"])(s[c[t]]))),Object(r["a"])(o,"".concat(t,"More"),s.more),o))}))}}},onScroll:function(t){var e=v()(t),s=e.height(),i=e.get(0).scrollHeight,n=e.scrollTop();i-s-n<150&&this.getMemberList(this.selected)},likeMusic:u["m"],playlistTracks:function(t,e,s){window.event.stopPropagation(),this.$store.dispatch("setOperation",{data:{tracks:t,op:e},type:s})},playMusic:function(t){var e=this.$store.dispatch,s=this.allSongs,i=this.info,n=this.selected,a=s[t];a.url&&(e("updatePlayNow",a),e("updatePlayingList",{list:i[n]}),e("updatePlayingStatus",!0))}}},_=m,h=(s("322f"),s("2877")),w=Object(h["a"])(_,i,n,!1,null,"5f6d3f94",null);e["default"]=w.exports},"1ece":function(t,e,s){"use strict";s("b3d5")},"27c5":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"setting-container"},[s("div",{staticClass:"setting-title"},[t._v("看得见的")]),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("\n        主页显示：\n      ")]),s("div",{staticClass:"input-content"},[s("el-radio-group",{model:{value:t.showHomeType,callback:function(e){t.showHomeType=e},expression:"showHomeType"}},[s("el-radio-button",{attrs:{label:"info"}},[t._v("歌曲信息")]),s("el-radio-button",{attrs:{label:"lyric"}},[t._v("歌词")])],1)],1)]),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("\n        先进模式：\n      ")]),s("div",{staticClass:"input-content"},[s("el-switch",{model:{value:t.useAudioContext,callback:function(e){t.useAudioContext=e},expression:"useAudioContext"}}),s("div",{staticClass:"input-explain"},[t._v("【仅针对网易云音源有效】关闭后停用AudioContext, 无法展示频谱图，但是能解决大部分无法播放的问题")])],1)]),t.useAudioContext?s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("\n        看见音乐：\n      ")]),s("div",{staticClass:"input-content"},[s("el-switch",{model:{value:t.showDrawMusic,callback:function(e){t.showDrawMusic=e},expression:"showDrawMusic"}})],1)]):t._e(),t.useAudioContext&&t.showDrawMusic?s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("\n        频谱设置：\n      ")]),s("div",{staticClass:"input-content"},[s("el-radio-group",{model:{value:t.drawMusicType,callback:function(e){t.drawMusicType=e},expression:"drawMusicType"}},[s("el-radio-button",{attrs:{label:"1"}},[t._v("低频 => 高频")]),s("el-radio-button",{attrs:{label:"2"}},[t._v("高频 => 低频 => 高频")])],1)],1)]):t._e(),t.useAudioContext&&t.showDrawMusic?s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("音频样式：")]),s("div",{staticClass:"input-content"},[s("el-radio-group",{model:{value:t.drawMusicStyle,callback:function(e){t.drawMusicStyle=e},expression:"drawMusicStyle"}},[s("el-radio-button",{attrs:{label:"rect"}},[t._v("柱状图")]),s("el-radio-button",{attrs:{label:"line"}},[t._v("曲线")]),s("el-radio-button",{attrs:{label:"particle"}},[t._v("泡泡")]),s("el-radio-button",{attrs:{label:"circle"}},[t._v("圈圈")]),s("el-radio-button",{attrs:{label:"circle2"}},[t._v("海螺")]),s("el-radio-button",{attrs:{label:"voice"}},[t._v("音柱")])],1)],1)]):t._e(),s("div",{staticClass:"setting-title"},[t._v("企鹅音乐Cookie")]),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("开启：")]),s("div",{staticClass:"input-content"},[s("el-switch",{model:{value:t.openSetQCookie,callback:function(e){t.openSetQCookie=e},expression:"openSetQCookie"}}),s("div",{staticClass:"input-explain"},[t._v("开启并设置Cookie后可以获得更多操作")])],1)]),t.openSetQCookie?s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("手动输入：")]),s("div",{staticClass:"input-content"},[s("el-input",{staticStyle:{width:"450px"},attrs:{type:"text",placeholder:"在 y.qq.com 控制台输入 document.cookie，将打印的字符串粘贴进来"},model:{value:t.inputCookie,callback:function(e){t.inputCookie=e},expression:"inputCookie"}}),s("el-button",{staticClass:"mt_10",on:{click:t.setCookie}},[t._v("设置")]),s("span",{staticClass:"input-explain pl_20"},[t._v("Cookie 数据仅存储在本地（不会获取 Cookie 的也可以借助下面的插件手动复制！）")])],1)]):t._e(),t.openSetQCookie?s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("半自动获取：")]),t._m(0)]):t._e(),s("div",{staticClass:"setting-title"},[t._v("播放设置")]),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("默认品质：")]),s("div",{staticClass:"input-content"},[s("el-radio-group",{model:{value:t.listenSize,callback:function(e){t.listenSize=e},expression:"listenSize"}},[s("el-radio-button",{attrs:{label:"128"}},[t._v("128k")]),s("el-radio-button",{attrs:{label:"320"}},[t._v("320k")]),s("el-radio-button",{attrs:{label:"flac"}},[t._v("无损")])],1),s("div",{staticClass:"input-explain"},[t._v("限定企鹅/咪咕音乐！")])],1)]),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("点击歌曲：")]),t._v("\n        歌单详情页点击歌曲时，\n        "),s("el-radio-group",{model:{value:t.PLAY_MUSIC_FROM_PLAYLIST,callback:function(e){t.PLAY_MUSIC_FROM_PLAYLIST=e},expression:"PLAY_MUSIC_FROM_PLAYLIST"}},[s("el-radio-button",{attrs:{label:"0"}},[t._v("仅将这首歌曲加入播放列表")]),s("el-radio-button",{attrs:{label:"1"}},[t._v("将播放列表替换为当前列表")])],1)],1),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("点击歌曲：")]),t._v("\n        歌曲列表（专辑、歌手、搜索等）点击歌曲时，\n        "),s("el-radio-group",{model:{value:t.PLAY_MUSIC_FROM_LIST,callback:function(e){t.PLAY_MUSIC_FROM_LIST=e},expression:"PLAY_MUSIC_FROM_LIST"}},[s("el-radio-button",{attrs:{label:"0"}},[t._v("仅将这首歌曲加入播放列表")]),s("el-radio-button",{attrs:{label:"1"}},[t._v("将播放列表替换为当前列表")])],1)],1)]),s("div",{staticClass:"setting-title"},[t._v("下载设置")]),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("下载歌词：")]),s("div",{staticClass:"input-content"},[s("el-switch",{model:{value:t.downLyric,callback:function(e){t.downLyric=e},expression:"downLyric"}})],1)]),t.downLyric?s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("歌词翻译：")]),s("div",{staticClass:"input-content"},[s("el-switch",{model:{value:t.downLyricTrans,callback:function(e){t.downLyricTrans=e},expression:"downLyricTrans"}})],1)]):t._e(),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("歌曲名：")]),s("div",{staticClass:"input-content"},[s("el-radio-group",{model:{value:t.downMusicName,callback:function(e){t.downMusicName=e},expression:"downMusicName"}},[s("el-radio-button",{attrs:{label:"0"}},[t._v("歌手-歌名")]),s("el-radio-button",{attrs:{label:"1"}},[t._v("歌名-歌手")]),s("el-radio-button",{attrs:{label:"2"}},[t._v("歌名")])],1)],1)]),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("默认品质：")]),s("div",{staticClass:"input-content"},[s("el-radio-group",{model:{value:t.downSize,callback:function(e){t.downSize=e},expression:"downSize"}},[s("el-radio-button",{attrs:{label:"128"}},[t._v("128k")]),s("el-radio-button",{attrs:{label:"320"}},[t._v("320k")]),s("el-radio-button",{attrs:{label:"flac"}},[t._v("无损")])],1),s("div",{staticClass:"input-explain"},[t._v("限定企鹅/咪咕音乐！")])],1)]),s("div",{staticClass:"input-row"},[s("div",{staticClass:"input-label"},[t._v("重复下载：")]),s("div",{staticClass:"input-content"},[s("el-radio-group",{model:{value:t.repeatDown,callback:function(e){t.repeatDown=e},expression:"repeatDown"}},[s("el-radio-button",{attrs:{label:"0"}},[t._v("自动过滤")]),s("el-radio-button",{attrs:{label:"1"}},[t._v("继续下载")])],1),s("div",{staticClass:"input-explain"},[t._v("下载中心的重新下载不受影响！")])],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-content"},[s("div",[s("div",[t._v("1、下载并解压 "),s("a",{attrs:{href:"http://music.jsososo.com/download/qqmusic_cookie_porter_1_1.zip",target:"_blank"}},[t._v("获取企鹅音乐Cookie的 Chrome 插件")])]),s("div",{staticClass:"mt_5"},[t._v("\n            2、打开新标签页输入 "),s("i",[t._v("chrome://extensions")]),t._v("，钩上右上角开发者模式，\n            点击左上角加载已解压的插件，选择刚才解压出的文件夹\n          ")]),s("div",{staticClass:"mt_5"},[t._v("\n            3、打开 "),s("a",{attrs:{href:"https://y.qq.com?forceUpdateCookie=1",target:"_blank"}},[t._v("https://y.qq.com")]),t._v(" 并登陆企鹅号即可自动获取\n          ")])]),s("div",{staticClass:"input-explain"},[t._v("Cookie 数据会存储于服务器")])])}],a=(s("8e6e"),s("456d"),s("28a5"),s("6b54"),s("96cf"),s("3b8d")),o=(s("c5f6"),s("ac6a"),s("bd86")),r=s("aa67"),c=s("ceb6");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"Setting",data:function(){return{showDrawMusic:"0"!==r["a"].get("showDrawMusic"),drawMusicType:r["a"].get("drawMusicType")||"1",drawMusicNum:r["a"].get("drawMusicNum")||"64",repeatDown:r["a"].get("repeatDown")||"0",downSize:r["a"].get("downSize")||"flac",drawMusicStyle:r["a"].get("drawMusicStyle")||"rect",listenSize:r["a"].get("listenSize")||"128",openSetQCookie:"0"!==r["a"].get("openSetQCookie"),useAudioContext:"0"!==r["a"].get("useAudioContext"),showHomeType:r["a"].get("showHomeType")||"info",inputCookie:"",downMusicName:r["a"].get("downMusicName")||"0",downLyric:"0"!==r["a"].get("downLyric",!1,"0"),downLyricTrans:"0"!==r["a"].get("downLyricTrans",!1,"0"),PLAY_MUSIC_FROM_PLAYLIST:r["a"].get("PLAY_MUSIC_FROM_PLAYLIST"),PLAY_MUSIC_FROM_LIST:r["a"].get("PLAY_MUSIC_FROM_LIST")}},watch:u({},function(){var t={};return[{key:"drawMusicType"},{key:"drawMusicNum"},{key:"repeatDown"},{key:"downSize"},{key:"listenSize"},{key:"drawMusicStyle"},{key:"downMusicName"},{key:"PLAY_MUSIC_FROM_PLAYLIST"},{key:"PLAY_MUSIC_FROM_LIST"},{key:"showHomeType"},{key:"downLyric",isNum:!0},{key:"downLyricTrans",isNum:!0},{key:"showDrawMusic",isNum:!0},{key:"openSetQCookie",isNum:!0},{key:"useAudioContext",isNum:!0}].forEach((function(e){var s=e.key,i=e.isNum;return t[s]=function(t){"showHomeType"===s&&window.VUE_APP.$store.dispatch("setHomeType",t),r["a"].set(s,i?Number(t):t)}})),t}()),methods:{setCookie:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new Date(Date.now()+864e5).toString(),t.prev=1,this.inputCookie.split("; ").forEach((function(t){document.cookie="".concat(t,"; expires=").concat(e,"; ")})),t.next=5,Object(c["a"])();case 5:if(s=t.sent,!s.success){t.next=10;break}this.$message.success("设置 Cookie 成功"),t.next=11;break;case 10:throw{message:"cookie wrong"};case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),this.$message.error("cookie 错误或过期");case 16:case"end":return t.stop()}}),t,this,[[1,13]])})));function e(){return t.apply(this,arguments)}return e}()}},p=d,v=(s("1ece"),s("2877")),f=Object(v["a"])(p,i,n,!1,null,"337134a2",null);e["a"]=f.exports},"322f":function(t,e,s){"use strict";s("b92f")},"95ae":function(t,e,s){},b3d5:function(t,e,s){},b92f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-77694d58.7a9d3918.js.map