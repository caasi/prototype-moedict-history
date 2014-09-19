(function(){
  var t, Tag, roughHistory, moment, React, ref$, ol, ul, li, div, History;
  t = Tag = (function(){
    Tag.displayName = 'Tag';
    var prototype = Tag.prototype, constructor = Tag;
    function Tag(time, title, authors, star){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.time = time != null ? time : '';
      this$.title = title != null ? title : '';
      this$.authors = authors != null
        ? authors
        : [];
      this$.star = star != null ? star : 0;
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    return Tag;
  }());
  roughHistory = [t('1996', '重編國語辭典', ['教育部']), t('2011', '臺灣閩南語常用詞辭典', ['教育部']), t('2013-01-26', '還文於民', ['@pingoo']), t('2013-01-27', 'scrap 2741 idioms as HTML', ['@tonyq', '@mno2'], 3), t('2013-01-27', 'scrap 3000 characters as raw HTML', ['@au'], 3), t('2013-01-27', 'design JSON schema from samples', ['@pingooo'], 2), t('2013-01-27', 'design SQL schema from samples', ['@albb0920'], 2), t('2013-01-27', 'parse HTML into JSON & SQLite', ['@kcwu'], 2), t('2013-01-27', 'Rails API Server', ['@albb0920']), t('2013-01-28', '眾包 OCR', ['so', 'many'], 2), t('2013-01-29', 'XUL Desktop App', ['@racklin']), t('2013-01-30', 'OS X Dictionary', ['@yllan']), t('2013-02-01', 'Hán Nôm 字體', ['@YaoWei'], 2), t('2013-02-01', '網頁版萌典加上 CC0 授權', ['@au'], 1), t('2013-02-01', 'iOS Client', ['@tomjpsun']), t('2013-02-02', 'iOS Client', ['@pct']), t('2013-02-02', 'Chrome Extension', ['@tonytonyjan']), t('2013-02-02', 'Angular JS Client+Server', ['@viirya']), t('2013-02-03', 'URI endpoints', ['@au'], 4), t('2013-02-03', 'WinRT Component', ['@ericsk']), t('2013-02-04', 'Sublime Text plugin', ['@zonble']), t('2013-02-05', 'iOS Offline App', ['@zonble']), t('2013-02-07', '資料集加上 CC0 授權', ['@kcwu'], 1), t('2013-02-07', 'Two-column layout for tablets', ['@hlb']), t('2013-02-08', 'Windows 8 App', ['@wenpei']), t('2013-02-12', 'iOS Client', ['@jamessa']), t('2013-02-21', 'Wildcard and part-of-word searching', ['@esor']), t('2013-03-23', '填寫閩南語字典辭典文字資料索取單', ['@au'], 2), t('2013-03-25', '台文眾包 OCR', ['so', 'many'], 2), t('2013-03-27', '教育部的 xls 資料庫', ['教育部'], 2), t('2013-03-30', 'xls -> csv', ['@au'], 3), t('2013-04-08', 'Volume key on Android resizes fonts', ['@ivan']), t('2013-04-15', 'csv -> JSON', ['@au'], 3), t('2013-04-29', '筆順動畫', ['@c9s']), t('2013-04-30', '萌典娘誕生', ['@miau715']), t('2013-09-28', '萌典啄木鳥', ['@au', 'and', 'thousands']), t('2013-11-01', '字宙反應爐', ['@au', '@poga', '@caasi', '@miau715']), t('2013-11-23', '決定保持規範性、合理使用、CC-BY-ND', ['教育部'], 1)];
  console.log(roughHistory);
  moment = require('moment');
  React = require('react');
  ref$ = React.DOM, ol = ref$.ol, ul = ref$.ul, li = ref$.li, div = ref$.div;
  History = React.createClass({
    displayName: 'React.History',
    getDefaultProps: function(){
      return {
        data: null,
        scale: 1 / 1000,
        now: moment().unix()
      };
    },
    render: function(){
      var history, i, event, timestamp, delta, distance, j, a;
      history = this.props.data;
      return ol({
        className: 'history'
      }, (function(){
        var ref$, results$ = [];
        for (i in ref$ = history) {
          event = ref$[i];
          timestamp = moment(event.time).unix();
          delta = this.props.now - timestamp;
          distance = (fn$.call(this));
          console.log(distance);
          results$.push(li({
            key: "event-" + i,
            className: 'event',
            style: {
              top: distance
            }
          }, div({
            className: 'time'
          }, event.time + ": " + timestamp), div({
            className: 'title'
          }, event.title), ul({
            className: 'authors'
          }, (fn1$())), div({
            className: 'star'
          }, event.star)));
        }
        return results$;
        function fn$(){
          switch (false) {
          case !(delta >= 0):
            return -Math.sqrt(delta * this.props.scale);
          case !(delta < 0):
            return Math.sqrt(-delta * this.props.scale);
          }
        }
        function fn1$(){
          var ref$, results$ = [];
          for (j in ref$ = event.authors) {
            a = ref$[j];
            results$.push(li({
              key: "author-" + j,
              className: 'author'
            }, a));
          }
          return results$;
        }
      }.call(this)));
    }
  });
  React.renderComponent(History({
    data: roughHistory
  }), document.getElementById('app'));
}).call(this);
