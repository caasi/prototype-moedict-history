###
# 萌典粗略年表
###
# 列出萌典開發時的重要時刻，標出與五顆星★ 開放資料的關聯
###
# Q: 為什麼不用 timeline.js ？
# A: 電腦跑不動 QQ
###

t = class Tag
  (@time = '', @title = '', @authors = [], @star = 0) ~>

rough-history =
  ### time        title                                 authors          5-star
  * t \1996       '重編國語辭典'                        <[教育部]>
  * t \2011       '臺灣閩南語常用詞辭典'                <[教育部]>
  * t \2013-01-26 '還文於民'                            <[@pingoo]>
  * t \2013-01-27 'scrap 2741 idioms as HTML'           <[@tonyq @mno2]> 3
  * t \2013-01-27 'scrap 3000 characters as raw HTML'   <[@au]>          3
  * t \2013-01-27 'design JSON schema from samples'     <[@pingooo]>     2
  * t \2013-01-27 'design SQL schema from samples'      <[@albb0920]>    2
  * t \2013-01-27 'parse HTML into JSON & SQLite'       <[@kcwu]>        2
  * t \2013-01-27 'Rails API Server'                    <[@albb0920]>
    # https://github.com/albb0920/dict-3du
  * t \2013-01-28 '眾包 OCR'                            <[so many]>      2
  * t \2013-01-29 'XUL Desktop App'                     <[@racklin]>
    # https://github.com/racklin/moe-dictionary-app
  * t \2013-01-30 'OS X Dictionary'                     <[@yllan]>
    # https://github.com/yllan/moedict-mac
  * t \2013-02-01 'Hán Nôm 字體'                        <[@YaoWei]>      2
    # https://github.com/audreyt/moedict-webkit/commit/b831afae448977e943cffdaf44aa0cb356828073
  * t \2013-02-01 '網頁版萌典加上 CC0 授權'             <[@au]>          1
    # https://github.com/audreyt/moedict-webkit/commit/70cde88ea7c7822a87b1ffae9ef97c91890bdcab
  * t \2013-02-01 'iOS Client'                          <[@tomjpsun]>
    # https://github.com/tomjpsun/3du.tw-ios
  * t \2013-02-02 'iOS Client'                          <[@pct]>
    # https://github.com/pct/moedict-ios-app
  * t \2013-02-02 'Chrome Extension'                    <[@tonytonyjan]>
    # https://github.com/tonytonyjan/hahadict
  * t \2013-02-02 'Angular JS Client+Server'            <[@viirya]>
    # https://github.com/viirya/moedict-web
  * t \2013-02-03 'URI endpoints'                       <[@au]>          4
    # https://github.com/audreyt/moedict-webkit/commit/d29371b94536c604157da929358f1d0e5f88f3c6
  * t \2013-02-03 'WinRT Component'                     <[@ericsk]>
    # https://github.com/ericsk/moedict-rt
  * t \2013-02-04 'Sublime Text plugin'                 <[@zonble]>
    # https://github.com/zonble/sublime_moedict
  * t \2013-02-05 'iOS Offline App'                     <[@zonble]>
    # https://github.com/zonble/MOEDict
  * t \2013-02-07 '資料集加上 CC0 授權'                 <[@kcwu]>        1
    # https://github.com/g0v/moedict-data/commit/67cd552606d4f9b6cc962213c4542adfc93e0ef5
  * t \2013-02-07 'Two-column layout for tablets'       <[@hlb]>
    # XXX: not sure
    # https://github.com/audreyt/moedict-webkit/commit/ad257ec126db13ad341bf4dc4e55e90bba8ed612
  * t \2013-02-08 'Windows 8 App'                       <[@wenpei]>
    # https://github.com/SarsTW/moedict-win8-app
  * t \2013-02-12 'iOS Client'                          <[@jamessa]>
    # https://github.com/jamessa/MoeDict
  * t \2013-02-21 'Wildcard and part-of-word searching' <[@esor]>
    # XXX: not sure
    # https://github.com/audreyt/moedict-webkit/commit/cbd150bfd3a520da90e54a1d312bfb6fa6094f70
  #* t \0000-00-00 '花園明朝字體'                        <[]>             2
  #* t \0000-00-00 '中文斷詞'                            <[]>             5
  #* t \0000-00-00 'Toggle between Pinyin and Bopomofo'  <[@matic]>
  * t \2013-03-23 '填寫閩南語字典辭典文字資料索取單'    <[@au]>          2
  * t \2013-03-25 '台文眾包 OCR'                        <[so many]>      2
  * t \2013-03-27 '教育部的 xls 資料庫'                 <[教育部]>       2
  * t \2013-03-30 'xls -> csv'                          <[@au]>          3
  * t \2013-04-08 'Volume key on Android resizes fonts' <[@ivan]>
    # https://github.com/audreyt/moedict-webkit/commit/feb5f7e1911446e10209c41f06de4fb0b5abf4bc
  * t \2013-04-15 'csv -> JSON'                         <[@au]>          3
  * t \2013-04-29 '筆順動畫'                            <[@c9s]>
    # https://github.com/c9s/zh-stroke-data/
  * t \2013-04-30 '萌典娘誕生'                          <[@miau715]>
    # https://github.com/audreyt/moedict-webkit/commit/0c69552f633e1ba45f9ef9049c4c02da6d0c9b05
  * t \2013-09-28 '萌典啄木鳥'                          <[@au and thousands]>
    # https://github.com/g0v/moedict-dodo
  * t \2013-11-01 '字宙反應爐'                          <[@au @poga @caasi @miau715]>
    # https://github.com/audreyt/moe/
  * t \2013-11-23 '決定保持規範性、合理使用、CC-BY-ND'  <[教育部]>       1
  #* t \0000-00-00 '英法德字典'                          <[]>

console.log rough-history

###
# main
require! moment
React = require 'react'

{ol, ul, li, div} = React.DOM

History = React.createClass do
  displayName: 'React.History'
  getDefaultProps: ->
    data: null
    scale: 1 / 1000
    now:  moment!unix!
  render: ->
    history = @props.data
    ol do
      className: 'history'
      for i, event of history
        timestamp = moment(event.time)unix!
        delta = @props.now - timestamp
        distance = switch
          | delta >= 0 => -Math.sqrt  delta * @props.scale
          | delta <  0 =>  Math.sqrt -delta * @props.scale
        console.log distance
        li do
          key: "event-#i"
          className: 'event'
          style:
            top: distance
          div do
            className: 'time'
            "#{event.time}: #timestamp"
          div do
            className: 'title'
            event.title
          ul do
            className: 'authors'
            for j, a of event.authors
              li do
                key: "author-#j"
                className: 'author', a
          div do
            className: 'star'
            event.star

React.renderComponent do
  History data: rough-history
  document.getElementById \app
