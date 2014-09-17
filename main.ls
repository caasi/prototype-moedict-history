###
# 萌典粗略年表
###
# 列出萌典開發時的重要時刻，標出與五顆星★ 開放資料的關聯
###
# Q: 為什麼不用 timeline.js ？
# A: 電腦跑不動 QQ
###

t = class Tag
  (@time, @title, @authors, @star = 0) ~>

rough-history =
  #   time        title                                 authors          5-star
  * t \1996       '重編國語辭典'                        <[教育部]>
  * t \2011       '臺灣閩南語常用詞辭典'                <[教育部]>
  * t \2013-01-26 '還文於民'                            <[@pingoo]>
  * t \2013-01-27 'scrap 2741 idioms as HTML'           <[@tonyq @mno2]> 3
  * t \2013-01-27 'scrap 3000 characters as raw HTML'   <[@au]>          3
  * t \2O13-01-27 'design JSON schema from samples'     <[@pingooo]>     2
  * t \2013-01-27 'design SQL schema from samples'      <[@albb0920]>    2
  * t \2013-01-27 'parse HTML into JSON & SQLite'       <[@kcwu]>        2
  * t \2013-01-28 '眾包 OCR'                            <[so many]>      2
  * t \0000-00-00 'XUL Desktop App'                     <[@racklin]>
  * t \0000-00-00 'OS X Dictionary'                     <[@yllan]>
  * t \0000-00-00 'Windows 8 App'                       <[@wenpei]>
  * t \0000-00-00 'iOS Client'                          <[@tomjpsun @jamessa @pct]>
  * t \0000-00-00 'iOS Offline App'                     <[@zonble]>
  * t \0000-00-00 'Rails API Server'                    <[@albb0920]>
  * t \0000-00-00 'Angular JS Client+Server'            <[@viirya]>
  * t \0000-00-00 'Chrome Extension'                    <[@tonytonyjan]>
  * t \0000-00-00 'Sublime Text plugin'                 <[@zonble]>
  * t \0000-00-00 'WinRT Component'                     <[@eriksk]>
  * t \0000-00-00 '合理使用與 CC0'                      <[@kcwu @au]>    1
  * t \0000-00-00 'URI endpoints'                       <[@au]>          4
  * t \0000-00-00 'Hán Nôm 字體'                        <[@YaoWei]>      2
  * t \0000-00-00 '花園明朝字體'                        <[]>             2
  * t \0000-00-00 '中文斷詞'                            <[]>             5
  * t \0000-00-00 'Wildcard and part-of-word searching' <[@esor]>
  * t \0000-00-00 'Two-column layout for tablets'       <[@hlb]>
  * t \0000-00-00 'Toggle between Pinyin and Bopomofo'  <[@matic]>
  * t \0000-00-00 'Volume key on Android resizes fonts' <[@ivan]>
  * t \2013-03-23 '填寫閩南語字典辭典文字資料索取單'    <[@au]>          2
  * t \2013-03-25 '台文眾包 OCR'                        <[so many]>      2
  * t \2013-03-27 '教育部的 xls 資料庫'                 <[教育部]>       2
  * t \2013-03-30 'xls2csv'                             <[@au]>          3
  * t \2013-04-15 'csv2JSON'                            <[@au]>          3
  * t \2013-11-23 '決定保持規範性、合理使用、CC-BY-ND'  <[教育部]>       1
  * t \0000-00-00 '萌典啄木鳥'                          <[so many]>
  * t \0000-00-00 '筆順動畫'                            <[]>
  * t \0000-00-00 '萌典娘'                              <[]>
  * t \0000-00-00 '字宙反應爐'                          <[]>
  * t \0000-00-00 '英法德字典'                          <[]>

console.log rough-history
