(function(){
  var moment, t, Tag, roughHistory, i$, to$, i, prev, curr, $, React, ref$, ol, ul, li, div, span, a, History, history, step, keys, x$, update;
  moment = require('moment');
  t = Tag = (function(){
    Tag.displayName = 'Tag';
    var prototype = Tag.prototype, constructor = Tag;
    function Tag(time, title, authors, star){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.time = time != null ? time : '1970-01-01';
      this$.title = title != null ? title : '';
      this$.authors = authors != null
        ? authors
        : [];
      this$.star = star != null ? star : 0;
      this$.moment = moment(this$.time);
      this$.timestamp = this$.moment.unix();
      this$.gap = Infinity;
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    return Tag;
  }());
  roughHistory = [
    t('1994-09', '重編國語辭典初版', ['教育部']), t('1996-07', '重編國語辭典二版', ['教育部']), t('1997-03', '重編國語辭典三版', ['教育部']), t('1998-04', '重編國語辭典四版', ['教育部']), t('2007-12', '重編國語辭典四版 v2', ['教育部']), t('2011-07-07', '臺灣閩南語常用詞辭典', ['教育部']), t('2012-06-13', '閩南語辭典加上附錄俗諺與音檔', ['教育部']), t('2013-01-26T10:13', '還文於民', ['@pingoo']), t('2013-01-26T17:30', 'scrap 2741 idioms as HTML', ['@tonyq', '@mno2'], 3), t('2013-01-27', 'parse HTML into JSON & SQLite', ['@kcwu'], 2), t('2013-01-27T00:37', 'design JSON schema from samples', ['@pingooo'], 2), t('2013-01-27T05:36', 'scrap 3000 characters as raw HTML', ['@au'], 3), t('2013-01-27T11:22', 'design SQL schema and API Server', ['@albb0920'], 2), t('2013-01-28', '眾包 OCR', ['沒有人'], 2), t('2013-01-29T12:51', 'XUL Desktop App', ['@racklin']), t('2013-01-30T23:15', 'OS X Dictionary', ['@yllan']), t('2013-02-01T02:53', 'Hán Nôm 字體', ['@YaoWei'], 2), t('2013-02-01T04:45', '網頁版萌典加上 CC0 授權', ['@au'], 1), t('2013-02-01T13:54', '中文斷詞', [], 5), t('2013-02-01T15:18', 'iOS Client', ['@tomjpsun']), t('2013-02-02T03:10', 'Angular JS Client+Server', ['@viirya']), t('2013-02-02T17:13', 'Chrome Extension', ['@tonytonyjan']), t('2013-02-02T21:48', 'iOS Client', ['@pct']), t('2013-02-03T04:01', 'URI endpoints', ['@au'], 4), t('2013-02-03T18:09', 'WinRT Component', ['@ericsk']), t('2013-02-04T02:12', 'Sublime Text plugin', ['@zonble']), t('2013-02-05T01:27', 'iOS Offline App', ['@zonble']), t('2013-02-07T01:25', '資料集加上 CC0 授權', ['@kcwu'], 1), t('2013-02-07T11:35', 'Two-column layout for tablets', ['@hlb']), t('2013-02-08T13:19', 'Windows 8 App', ['@wenpei']), t('2013-02-12T10:35', 'iOS Client', ['@jamessa']), t('2013-02-21T19:06', 'Wildcard and part-of-word searching', ['@esor']), t('2013-03-23', '填寫閩南語字典辭典文字資料索取單', ['@au'], 2), t('2013-03-25', '台文眾包 OCR', ['沒有人'], 2), t('2013-03-27', '教育部的 xls 資料庫', ['教育部'], 2), t('2013-03-30', 'xls -> csv', ['@au'], 3), t('2013-04-08T01:20', 'Volume key on Android resizes fonts', ['@ivan']), t('2013-04-15', 'csv -> JSON', ['@au'], 3), t('2013-04-16T23:41', '花園明朝字體', [], 2), t('2013-04-29T18:22', '筆順動畫', ['@c9s', '@au', '@caasi']), t('2013-04-30T00:09', '萌典娘誕生', ['@miau715']), t('2013-09-28T15:57', '萌典啄木鳥', ['@au', '沒有人']), t('2013-11-01T19:18', '字宙反應爐', ['@au', '@poga', '@caasi', '@miau715']), t('2013-11-23', '決定保持規範性、合理使用、CC-BY-ND', ['教育部'], 1), t('2013-11-25T16:25', '阿美語萌典開始製作', ['@miaoski'], 2), t('2013-12-26', '閩南語辭典按102年年度用字音讀修訂', ['教育部']), (function(){
      var contributors;
      contributors = ['@au', '高照明副教授', '林慶隆主任', '丁彥平研究助理', '劉寶琦研究助理', '李韻如行政助理', '羅敦英專案助理', '魏邦儀專案助理', '許淑芬專案助理', '許淑芬專案助理'];
      return t('2014-03-12T14:00', '萌典與教育部會談語料庫授權與取得', contributors, 1);
    }.call(this)), t('2014-08-31T00:20', 'CindyLinz 把阿美語字典逐行切出來', ['@CindyLinz', '@miaoski'], 2), t('2014-09-02T22:30', '阿美語萌典一校', ['@miaoski', '沒有人'], 2)
  ];
  for (i$ = 1, to$ = roughHistory.length; i$ < to$; ++i$) {
    i = i$;
    prev = roughHistory[i - 1];
    curr = roughHistory[i];
    prev.gap = curr.timestamp - prev.timestamp;
  }
  $ = require('jquery');
  React = require('react');
  ref$ = React.DOM, ol = ref$.ol, ul = ref$.ul, li = ref$.li, div = ref$.div, span = ref$.span, a = ref$.a;
  History = React.createClass({
    displayName: 'React.History',
    getDefaultProps: function(){
      return {
        data: null,
        now: 0
      };
    },
    getInitialState: function(){
      return {
        idx: 0
      };
    },
    componentWillMount: function(){
      return this.props.now = this.props.data[0].timestamp;
    },
    componentWillReceiveProps: function(props){
      var ref$, i, event, results$ = [];
      if (this.props.data[0].timestamp > props.now) {
        props.now = this.props.data[0].timestamp;
      }
      if (props.now >= (ref$ = this.props.data)[ref$.length - 1].timestamp) {
        props.now = (ref$ = this.props.data)[ref$.length - 1].timestamp;
      }
      for (i in ref$ = this.props.data) {
        event = ref$[i];
        if (event.timestamp > props.now) {
          break;
        }
        results$.push(this.state.idx = +i);
      }
      return results$;
    },
    next: function(){
      if (this.state.idx === this.props.data.length - 1) {
        return;
      }
      return this.setProps({
        now: this.props.data[this.state.idx + 1].timestamp
      });
    },
    prev: function(){
      var target;
      target = this.props.data[this.state.idx].timestamp;
      if (this.state.idx === 0 && this.props.now === target) {
        return;
      }
      return this.setProps({
        now: this.props.now === target ? this.props.data[this.state.idx - 1].timestamp : timestamp
      });
    },
    nextStep: function(){
      var now;
      now = this.props.now;
      return this.setProps({
        now: now + this.props.data[this.state.idx].gap / 60
      });
    },
    prevStep: function(){
      var now;
      now = this.props.now;
      return this.setProps({
        now: now - this.props.data[this.state.idx].gap / 60
      });
    },
    render: function(){
      var history, distance, ratio, i, event, hour, j, author;
      history = this.props.data;
      distance = this.props.now - history[this.state.idx].timestamp;
      ratio = distance / history[this.state.idx].gap;
      distance = -(this.state.idx + ratio) * 300 + 300;
      return div({
        className: 'moedict-history'
      }, div({
        className: 'now',
        style: {
          top: 300
        }
      }, moment(this.props.now, 'X').format('YYYY-MM-DD HH:mm')), ol({
        className: 'history',
        style: {
          top: distance
        }
      }, (function(){
        var ref$, results$ = [];
        for (i in ref$ = history) {
          event = ref$[i];
          hour = event.moment.hour();
          results$.push(li({
            key: "event-" + i,
            className: 'event',
            style: {
              top: i * 300,
              marginLeft: hour * 0.5 + "rem",
              zIndex: i
            }
          }, div({
            className: 'time'
          }, event.moment.format((fn$()))), div({
            className: 'title'
          }, event.title), ul({
            className: 'authors'
          }, (fn1$())), div({
            className: 'star-level'
          }, event.star ? a({
            href: "http://5stardata.info/tw/#addendum" + event.star,
            target: '_blank'
          }, span({
            className: 'stars'
          }, (fn2$()).join('') + ""), ' 星') : void 8)));
        }
        return results$;
        function fn$(){
          switch (false) {
          case event.time.length !== 4:
            return 'YYYY 年';
          case event.time.length !== 7:
            return 'YYYY 年 MM 月';
          case event.time.length !== 10:
            return 'YYYY 年 MM 月 DD 日';
          default:
            return 'YYYY 年 MM 月 DD 日 HH 時';
          }
        }
        function fn1$(){
          var ref$, results$ = [];
          for (j in ref$ = event.authors) {
            author = ref$[j];
            results$.push(li({
              key: "author-" + j,
              className: 'author'
            }, author));
          }
          return results$;
        }
        function fn2$(){
          var i$, to$, results$ = [];
          for (i$ = 1, to$ = event.star; i$ <= to$; ++i$) {
            results$.push('★');
          }
          return results$;
        }
      }())));
    }
  });
  history = React.renderComponent(History({
    data: roughHistory
  }), document.getElementById('app'));
  step = 60 * 30;
  console.log(step);
  keys = {};
  x$ = $(window);
  x$.on('keydown', function(it){
    return keys[it.keyCode] = true;
  });
  x$.on('keyup', function(it){
    switch (false) {
    case it.keyCode !== 34:
      history.next();
      break;
    case it.keyCode !== 33:
      history.prev();
    }
    return keys[it.keyCode] = false;
  });
  update = function(){
    switch (false) {
    case keys[40] !== true:
      history.nextStep();
      break;
    case keys[38] !== true:
      history.prevStep();
    }
    return requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}).call(this);
