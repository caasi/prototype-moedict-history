###
# 萌典粗略年表
###
# 列出萌典開發時的重要時刻，標出與五顆星★ 開放資料的關聯
###
# Q: 為什麼不用 timeline.js ？
# A: 電腦跑不動 QQ
###
require! moment

t = class Tag
  (@time = '1970-01-01', @title = '', @authors = [], @star = 0) ~>
    @moment = moment @time
    @timestamp = @moment.unix!
    @gap = Infinity

rough-history =
  ### time              title                                 authors             5-star
  * t \1994-09          '重編國語辭典初版'                    <[教育部]>
  * t \1996-07          '重編國語辭典二版'                    <[教育部]>
  * t \1997-03          '重編國語辭典三版'                    <[教育部]>
  * t \1998-04          '重編國語辭典四版'                    <[教育部]>
  * t \2007-12          '重編國語辭典四版 v2'                 <[教育部]>
  * t \2011-07-07       '臺灣閩南語常用詞辭典'                <[教育部]>
  * t \2012-06-13       '閩南語辭典加上附錄俗諺與音檔'        <[教育部]>
  * t \2013-01-26T10:13 '還文於民'                            <[@pingoo]>
    # http://www.plurk.com/p/i25tcc
  * t \2013-01-26T17:30 'scrap 2741 idioms as HTML'           <[@tonyq @mno2]>    3
  * t \2013-01-27T00:37 'design JSON schema from samples'     <[@pingooo]>        3
  * t \2013-01-27T05:36 'scrap 3000 characters as raw HTML'   <[@au]>             3
  * t \2013-01-27T11:22 'design SQL schema and API Server'    <[@albb0920]>       3
  * t \2013-01-27T11:23 'parse HTML into JSON & SQLite'       <[@kcwu]>           3
    # https://github.com/albb0920/dict-3du/commit/12d2eaed3901096f977b3acbee20655056d11822
  * t \2013-01-28       '眾包 OCR'                            <[沒有人]>          3
  * t \2013-01-29T12:51 'XUL Desktop App'                     <[@racklin]>
    # https://github.com/racklin/moe-dictionary-app
  * t \2013-01-30T23:15 'OS X Dictionary'                     <[@yllan]>
    # https://github.com/yllan/moedict-mac
  * t \2013-02-01T02:53 'Hán Nôm 字體'                        <[@YaoWei]>
    # https://github.com/audreyt/moedict-webkit/commit/b831afae448977e943cffdaf44aa0cb356828073
  * t \2013-02-01T04:45 '網頁版萌典加上 CC0 授權'             <[@au]>             1
    # https://github.com/audreyt/moedict-webkit/commit/70cde88ea7c7822a87b1ffae9ef97c91890bdcab
  * t \2013-02-01T13:54 '中文斷詞'                            <[]>                5
    # https://github.com/audreyt/moedict-webkit/commit/0988a07b93f3ec90468679beb2eef7112ac607ee
  * t \2013-02-01T15:18 'iOS Client'                          <[@tomjpsun]>
    # https://github.com/tomjpsun/3du.tw-ios
  * t \2013-02-02T03:10 'Angular JS Client+Server'            <[@viirya]>
    # https://github.com/viirya/moedict-web
  * t \2013-02-02T17:13 'Chrome Extension'                    <[@tonytonyjan]>
    # https://github.com/tonytonyjan/hahadict
  * t \2013-02-02T21:48 'iOS Client'                          <[@pct]>
    # https://github.com/pct/moedict-ios-app
  * t \2013-02-03T04:01 'URI endpoints'                       <[@au]>             4
    # https://github.com/audreyt/moedict-webkit/commit/d29371b94536c604157da929358f1d0e5f88f3c6
  * t \2013-02-03T18:09 'WinRT Component'                     <[@ericsk]>
    # https://github.com/ericsk/moedict-rt
  * t \2013-02-04T02:12 'Sublime Text plugin'                 <[@zonble]>
    # https://github.com/zonble/sublime_moedict
  * t \2013-02-05T01:27 'iOS Offline App'                     <[@zonble]>
    # https://github.com/zonble/MOEDict
  * t \2013-02-07T01:25 '資料集加上 CC0 授權'                 <[@kcwu]>           1
    # https://github.com/g0v/moedict-data/commit/67cd552606d4f9b6cc962213c4542adfc93e0ef5
  * t \2013-02-07T11:35 'Two-column layout for tablets'       <[@hlb]>
    # https://github.com/audreyt/moedict-webkit/commit/ad257ec126db13ad341bf4dc4e55e90bba8ed612
    # XXX: not sure
  * t \2013-02-08T13:19 'Windows 8 App'                       <[@wenpei]>
    # https://github.com/SarsTW/moedict-win8-app
  * t \2013-02-12T10:35 'iOS Client'                          <[@jamessa]>
    # https://github.com/jamessa/MoeDict
  * t \2013-02-21T19:06 'Wildcard and part-of-word searching' <[@au @esor]>
    # https://github.com/audreyt/moedict-webkit/commit/cbd150bfd3a520da90e54a1d312bfb6fa6094f70
    # XXX: not sure
  #* t \0000-00-00 '英法德字典'                          <[]>
  #* t \0000-00-00 'Toggle between Pinyin and Bopomofo'  <[@matic]>
  * t \2013-03-23       '填寫閩南語字典辭典文字資料索取單'    <[@au]>             2
  * t \2013-03-25       '台文眾包 OCR'                        <[沒有人]>          2
  * t \2013-03-27       '教育部的 xls 資料庫'                 <[教育部]>          2
  * t \2013-03-30       'xls -> csv'                          <[@au]>             3
  * t \2013-04-08T01:20 'Volume key on Android resizes fonts' <[@ivan]>
    # https://github.com/audreyt/moedict-webkit/commit/feb5f7e1911446e10209c41f06de4fb0b5abf4bc
  * t \2013-04-15       'csv -> JSON'                         <[@au]>             3
  * t \2013-04-16T23:41 '花園明朝字體'                        <[]>                2
    # https://github.com/g0v/moedict-epub/commit/c747467bcadd3864387efc81326186e0334e93d7
  * t \2013-04-29T18:22 '筆順動畫'                            <[@c9s @au]>
    # https://github.com/c9s/zh-stroke-data/
  * t \2013-04-30T00:09 '萌典娘誕生'                          <[@miau715]>
    # https://github.com/audreyt/moedict-webkit/commit/0c69552f633e1ba45f9ef9049c4c02da6d0c9b05
  * t \2013-05-19T13:06 '來自《國語辭典簡編本》語音資料上線'  <[@au]>
    # https://twitter.com/moedict/status/335984900303888385
  * t \2013-05-23T21:31 '國台英德法跨語言萌典'                <[@racklin]>
    # https://twitter.com/moedict/status/337561473666654208
  * t \2013-06-03T01:34 '抵制 SOPA ，熄燈一天'                <[@au]>
    # https://twitter.com/moedict/status/341246465005481984
  * t \2013-06-08T19:14 '萌典客家語測試版上線'                <[@a-tsioh @pektiong]>
    # https://twitter.com/moedict/status/343325091272224769
  * t \2013-06-29T15:41 'Bootstrap 版萌典設計上線'            <[@hlb]>
    # https://twitter.com/moedict/status/350881618556227584
  * t \2013-07-26T05:11 '使用 Fira Sans OpenType 字型'        <[@espiekermann]>
    # https://twitter.com/moedict/status/360507639634997253
  * t \2013-07-30T17:18 '一筆一筆寫的筆順動畫'                <[@c9s @au @caasi]>
  * t \2013-08-06T19:46 '「您敢有聽著咱的歌」，對照萌典學台語' <[@au @pektiong]>
  * t \2013-08-16T08:23 '跨瀏覽器的 HTML5 <@ruby>的「注音、拼音直橫混排」'
    # https://twitter.com/moedict/status/368166023901356032
  * t \2013-08-31T01:01 '國語辭典分類索引'                    <[@devpoga @muanchiou]>
    # https://twitter.com/moedict/status/373490682763038720
  * t \2013-09-08T07:35 'MeeGo Harmattan 版'                  <[@RSChiang]>
    # https://twitter.com/RSChiang/status/376488922760507392
  * t \2013-09-15T06:25 '部首表與部首檢索'                    <[@gugod]>
    # https://twitter.com/moedict/status/379008142350106624
  * t \2013-09-28T15:57 '萌典啄木鳥開始'                      <[@au]>
    # https://github.com/g0v/moedict-dodo
  * t \2013-09-29T01:00 '萌典啄木鳥上線'                      <[@au @ETBlue]>
    # https://twitter.com/moedict/status/383999698484203520
  * t \2013-10-03T01:44 '啄木鳥初校完成'                      <[沒有人]>
    # https://twitter.com/moedict/status/385460295415517184
  * t \2013-10-15T03:22 '《兩岸常用詞典》開放資料整合進萌典'  <[中華語文知識庫]>  3
    # https://twitter.com/moedict/status/389836024618041344
  * t \2013-10-16T12:06 '啄木鳥交叉比對完成'                  <[沒有人]>
    # https://twitter.com/moedict/status/390146756765184000
  * t \2013-10-30T03:03 '字詞紀錄簿上線'                      <[@au]>
    # https://twitter.com/moedict/status/395264521238888448
  * t \2013-11-01T19:18 '字宙反應爐'                          <[@au @poga @caasi @miau715]>
    # https://github.com/audreyt/moe/
  * t \2013-11-12T19:22 '「辭典啄木鳥」活動的社會組首獎'      <[沒有人]>
    # https://twitter.com/moedict/status/400222163703058432
  * t \2013-11-20T00:57 '萌典 Chrome 延伸套件'                <[@wildjcrt]>
    # https://twitter.com/moedict/status/402843145806684160
  * t \2013-11-23       '第一次萌典松。決定保持規範性、合理使用、CC-BY-ND' <[沒有人 教育部]> 1
  * t \2013-11-25T16:25 '阿美語萌典開始製作'                  <[@miaoski]>        2
  * t \2013-12-01T04:49 '萌典字圖分享'                        <[@au]>
    # https://twitter.com/moedict/status/406887692866052096
  * t \2013-12-15T      '全文檢索'                            <[@au]>
    # https://twitter.com/moedict/status/411972788199510016
  * t \2013-12-19T17:55 '注音直式+拼音橫式混合排列正式上線'   <[@ethantw]>
    # https://twitter.com/moedict/status/413608407711502336
  * t \2013-12-26       '閩南語辭典按102年年度用字音讀修訂'   <[教育部]>
  * t \2014-01-12       '羅馬字檢索'                          <[@A_Tsioh]>
    # https://twitter.com/moedict/status/422325148369162240
  * t \2014-01-24       '成大學生讓機器人用筆畫資料寫春聯'    <[@jserv 蕭傳錡 鄭煒翰]>
    # https://twitter.com/moedict/status/426436928330674176
  * let
      contributors = <[
        @au 高照明副教授 林慶隆主任 丁彥平研究助理 劉寶琦研究助理 李韻如行政助理
        羅敦英專案助理 魏邦儀專案助理 許淑芬專案助理 許淑芬專案助理
      ]>
      t \2014-03-12T14:00 '萌典與教育部會談語料庫授權與取得', contributors, 1
  * t \2014-03-22T11:00 '第二次萌典松'                        <[沒有人]>
  * t \2014-03-29T11:00 '第二次萌典松'                        <[沒有人]>
  * t \2014-05-25T11:00 '第四次萌典松'                        <[沒有人]>
  * t \2014-08-02T11:00 '第五次萌典松'                        <[沒有人]>
  * t \2014-08-31T00:20 'CindyLinz 把阿美語字典逐行切出來'    <[ @CindyLinz
                                                                 @miaoski   ]>    2
    # http://logbot.godfat.org/channel/g0v.tw/2014-08-31/13
  * t \2014-09-02T22:30 '阿美語萌典一校'                      <[@miaoski 沒有人]> 2
  * t \2014-09-20T00:11 '切換語言時保留對照詞上線'            <[@au @octw]>
    # https://twitter.com/moedict/status/512997457152573442
  * t \2014-09-20T11:00 '第六次萌典松'                        <[沒有人]>
  * t \2014-09-21T00:47 '加上了「歷代書體」按鈕'              <[中華文化總會 @polydoris]>
    # https://twitter.com/moedict/status/513368747990458369

for i from 1 til rough-history.length
  prev = rough-history[i-1]
  curr = rough-history[i]
  prev.gap = curr.timestamp - prev.timestamp


###
# main
$     = require 'jquery'
React = require 'react'

{ol, ul, li, div, span, a, small, h1} = React.DOM

History = React.createClass do
  displayName: 'React.History'
  getDefaultProps: ->
    data: null
    now: 0
  getInitialState: ->
    idx: 0
    modal: null
  componentWillMount: ->
    @props.now = @props.data.0.timestamp
  componentWillReceiveProps: (props) ->
    props.now = @props.data.0.timestamp if @props.data.0.timestamp > props.now
    props.now = @props.data[*-1]timestamp if props.now >= @props.data[*-1]timestamp
    for i, event of @props.data
      break if event.timestamp > props.now
      @state.idx = +i
  next: ->
    return if @state.idx is @props.data.length - 1
    @setProps now: @props.data[@state.idx+1].timestamp
  prev: ->
    target = @props.data[@state.idx]timestamp
    return if @state.idx is 0 and @props.now is target
    @setProps now: if @props.now is target
      @props.data[@state.idx-1]timestamp
    else
      timestamp
  nextStep: ->
    now = @props.now
    @setProps now: now + @props.data[@state.idx].gap / 60
  prevStep: ->
    now = @props.now
    @setProps now: now - @props.data[@state.idx].gap / 60
  render: ->
    history = @props.data
    distance = @props.now - history[@state.idx]timestamp
    ratio = distance / history[@state.idx]gap
    distance = -(@state.idx + ratio) * 300 + 300
    div do
      className: 'moedict-history'
      a do
        className: 'button me'
        onClick: ~> @setState modal: if @state.modal is \me then null else \me
      a do
        className: 'button cc'
        onClick: ~> @setState modal: if @state.modal is \cc then null else \cc
      a do
        className: 'button thx'
        onClick: ~> @setState modal: if @state.modal is \thx then null else \thx
      a do
        className: 'button dict'
        onClick: ~> @setState modal: if @state.modal is \dict then null else \dict
      div do
        className: 'modal'
        style:
          display: if not @state.modal then 'none' else 'block'
        switch @state.modal
          | \me
            div do
              className: 'card caasi'
              h1 null '講者'
              div do
                className: 'pic'
              span do
                className: 'name'
                '卡西/黃冠霖'
              a do
                className: 'id'
                href: 'https://twitter.com/caasih'
                '@caasih'
          | \cc
            div do
              className: 'card cube'
              h1 null '服務單位'
              div do
                className: 'pic'
              span do
                className: 'name'
                'ChineseC'
                small null 'UBES'
              a do
                className: 'id'
                href: 'http://www.chinesecubes.com/'
                '@chinesecubes'
          | \dict
            div do
              className: 'card dict'
              h1 null '雙馬尾'
              div do
                className: 'pic'
              span do
                className: 'name'
                '萌典'
              a do
                className: 'id'
                href: 'https://twitter.com/moedict'
                '@moedict'
          | \thx
            div do
              className: 'thx'
              '謝謝您撥空聆聽！'
      div do
        className: 'now'
        style:
          top: 300
          opacity: if @state.modal then 0.33 else 1
        moment(@props.now, \X)format('YYYY-MM-DD HH:mm')
      ol do
        className: 'history'
        style:
          top: distance
          opacity: if @state.modal then 0.33 else 1
        for i, event of history
          hour = event.moment.hour!
          li do
            key: "event-#i"
            className: 'event'
            style:
              top: i * 300
              z-index: i
            div do
              className: 'time'
              event.moment.format switch
                | event.time.length is 4  => 'YYYY 年'
                | event.time.length is 7  => 'YYYY 年 MM 月'
                | event.time.length is 10 => 'YYYY 年 MM 月 DD 日'
                | otherwise               => 'YYYY 年 MM 月 DD 日 HH 時'
            div do
              className: 'title'
              event.title
            ul do
              className: 'authors'
              for j, author of event.authors
                li do
                  key: "author-#j"
                  className: 'author', author
            div do
              className: 'star-level'
              if event.star
                a do
                  href: "http://5stardata.info/tw/\#addendum#{event.star}"
                  target: \_blank
                  span do
                    className: 'stars'
                    "#{(for from 1 to event.star => \★)join ''}"
                  ' 星'

history = React.renderComponent do
  History data: rough-history
  document.getElementById \app

step = 60s * 30m
console.log step
keys = {}
$(window)
  ..on \keydown -> keys[it.keyCode] = on
  ..on \keyup   ->
    | it.keyCode is 34 => history.next!
    | it.keyCode is 33 => history.prev!
    keys[it.keyCode] = off
update = ->
  | keys[40] is on => history.nextStep!
  | keys[38] is on => history.prevStep!
  requestAnimationFrame update
requestAnimationFrame update
