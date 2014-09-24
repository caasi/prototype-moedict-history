(function(){
  var moment, t, Tag, roughHistory, i$, to$, i, prev, curr, $, React, ref$, ol, ul, li, div, span, a, small, h1, iframe, History, history, step, keys, x$, update;
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
    t('1994-09', '重編國語辭典初版', ['教育部']), t('1996-07', '重編國語辭典二版', ['教育部']), t('1997-03', '重編國語辭典三版', ['教育部']), t('1998-04', '重編國語辭典四版', ['教育部']), t('2007-12', '重編國語辭典四版 v2', ['教育部']), t('2011-07-07', 'CC BY-ND 授權的臺灣閩南語常用詞辭典', ['教育部'], 1), t('2012-06-13', '閩南語辭典加上附錄俗諺與音檔', ['教育部']), t('2013-01-26T10:13', '還文於民', ['@pingoo']), t('2013-01-26T17:30', 'scrap 2741 idioms as HTML', ['@tonyq', '@mno2'], 3), t('2013-01-27T00:37', 'design JSON schema from samples', ['@pingooo'], 3), t('2013-01-27T05:36', 'scrap 3000 characters as raw HTML', ['@au'], 3), t('2013-01-27T11:22', 'design SQL schema and API Server', ['@albb0920'], 3), t('2013-01-27T11:23', 'parse HTML into JSON & SQLite', ['@kcwu'], 3), t('2013-01-28', '眾包 OCR', ['沒有人'], 3), t('2013-01-29T12:51', 'XUL Desktop App', ['@racklin']), t('2013-01-30T23:15', 'OS X Dictionary', ['@yllan']), t('2013-02-01T02:53', 'Hán Nôm 字體', ['@YaoWei']), t('2013-02-01T04:45', '網頁版萌典加上 CC0 授權', ['@au'], 1), t('2013-02-01T13:54', '中文斷詞', ['@au'], 5), t('2013-02-01T15:18', 'iOS Client', ['@tomjpsun']), t('2013-02-02T03:10', 'Angular JS Client+Server', ['@viirya']), t('2013-02-02T17:13', 'Chrome Extension', ['@tonytonyjan']), t('2013-02-02T21:48', 'iOS Client', ['@pct']), t('2013-02-03T04:01', 'URI endpoints', ['@au'], 4), t('2013-02-03T18:09', 'WinRT Component', ['@ericsk']), t('2013-02-04T02:12', 'Sublime Text plugin', ['@zonble']), t('2013-02-05T01:27', 'iOS Offline App', ['@zonble']), t('2013-02-07T01:25', '資料集加上 CC0 授權', ['@kcwu'], 1), t('2013-02-07T11:35', 'Two-column layout for tablets', ['@hlb']), t('2013-02-08T13:19', 'Windows 8 App', ['@wenpei']), t('2013-02-12T10:35', 'iOS Client', ['@jamessa']), t('2013-02-21T19:06', 'Wildcard and part-of-word searching', ['@au', '@esor']), t('2013-03-23', '填寫閩南語字典辭典文字資料索取單', ['@au'], 2), t('2013-03-25', '台文眾包 OCR', ['沒有人'], 2), t('2013-03-27', '教育部的 xls 資料庫', ['教育部'], 2), t('2013-03-30', 'xls -> csv', ['@au'], 3), t('2013-04-08T01:20', 'Volume key on Android resizes fonts', ['@ivan']), t('2013-04-15', 'csv -> JSON', ['@au'], 3), t('2013-04-16T23:41', '花園明朝字體', [], 2), t('2013-04-29T18:22', '筆順動畫', ['@c9s', '@au']), t('2013-04-30T00:09', '萌典娘誕生', ['@miau715']), t('2013-05-19T13:06', '來自《國語辭典簡編本》語音資料上線', ['@au']), t('2013-05-23T21:31', '國台英德法跨語言萌典', ['@racklin']), t('2013-06-03T01:34', '抵制 SOPA ，熄燈一天', ['@au']), t('2013-06-08T19:14', '萌典客家語測試版上線', ['@a-tsioh', '@pektiong']), t('2013-06-29T15:41', 'Bootstrap 版萌典設計上線', ['@hlb']), t('2013-07-26T05:11', '使用 Fira Sans OpenType 字型', ['@espiekermann']), t('2013-07-30T17:18', '一筆一筆寫的筆順動畫', ['@c9s', '@au', '@caasi']), t('2013-08-06T19:46', '「您敢有聽著咱的歌」，對照萌典學台語', ['@au', '@pektiong']), t('2013-08-16T08:23', '跨瀏覽器的 HTML5 <@ruby>的「注音、拼音直橫混排」', ['@ethantw']), t('2013-08-31T01:01', '國語辭典分類索引', ['@devpoga', '@muanchiou']), t('2013-09-08T07:35', 'MeeGo Harmattan 版', ['@RSChiang']), t('2013-09-15T06:25', '部首表與部首檢索', ['@gugod']), t('2013-09-28T15:57', '萌典啄木鳥開始', ['@au']), t('2013-09-29T01:00', '萌典啄木鳥上線', ['@au', '@ETBlue']), t('2013-10-03T01:44', '啄木鳥初校完成', ['沒有人']), t('2013-10-15T03:22', '《兩岸常用詞典》開放資料整合進萌典', ['中華語文知識庫'], 3), t('2013-10-16T12:06', '啄木鳥交叉比對完成', ['沒有人']), t('2013-10-30T03:03', '字詞紀錄簿上線', ['@au']), t('2013-11-01T19:18', '字宙反應爐', ['@au', '@poga', '@caasi', '@miau715']), t('2013-11-12T19:22', '「辭典啄木鳥」活動的社會組首獎', ['沒有人']), t('2013-11-20T00:57', '萌典 Chrome 延伸套件', ['@wildjcrt']), t('2013-11-23', '第一次萌典松。決定保持規範性、合理使用、CC-BY-ND', ['沒有人', '教育部'], 1), t('2013-11-25T16:25', '阿美語萌典開始製作', ['@miaoski'], 2), t('2013-12-01T04:49', '萌典字圖分享', ['@au']), t('2013-12-15T', '全文檢索', ['@au']), t('2013-12-19T17:55', '注音直式+拼音橫式混合排列正式上線', ['@ethantw']), t('2013-12-26', '閩南語辭典按102年年度用字音讀修訂', ['教育部']), t('2014-01-12', '羅馬字檢索', ['@A_Tsioh']), t('2014-01-24', '成大學生讓機器人用筆畫資料寫春聯', ['@jserv', '蕭傳錡', '鄭煒翰']), (function(){
      var contributors;
      contributors = ['@au', '高照明副教授', '林慶隆主任', '丁彥平研究助理', '劉寶琦研究助理', '李韻如行政助理', '羅敦英專案助理', '魏邦儀專案助理', '許淑芬專案助理', '許淑芬專案助理'];
      return t('2014-03-12T14:00', '萌典與教育部會談語料庫授權與取得', contributors, 1);
    }.call(this)), t('2014-03-22T11:00', '第二次萌典松', ['沒有人']), t('2014-03-29T11:00', '第三次萌典松', ['沒有人']), t('2014-05-25T11:00', '第四次萌典松', ['沒有人']), t('2014-08-02T11:00', '第五次萌典松', ['沒有人']), t('2014-08-31T00:20', 'CindyLinz 把阿美語字典逐行切出來', ['@CindyLinz', '@miaoski'], 2), t('2014-09-02T22:30', '阿美語萌典一校', ['@miaoski', '沒有人'], 2), t('2014-09-20T00:11', '切換語言時保留對照詞上線', ['@au', '@octw']), t('2014-09-20T11:00', '第六次萌典松', ['沒有人']), t('2014-09-21T00:47', '加上了「歷代書體」按鈕', ['中華文化總會', '@polydoris'])
  ];
  for (i$ = 1, to$ = roughHistory.length; i$ < to$; ++i$) {
    i = i$;
    prev = roughHistory[i - 1];
    curr = roughHistory[i];
    prev.gap = curr.timestamp - prev.timestamp;
  }
  $ = require('jquery');
  React = require('react');
  ref$ = React.DOM, ol = ref$.ol, ul = ref$.ul, li = ref$.li, div = ref$.div, span = ref$.span, a = ref$.a, small = ref$.small, h1 = ref$.h1, iframe = ref$.iframe;
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
        idx: 0,
        modal: null
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
      var history, distance, ratio, i, event, hour, j, author, this$ = this;
      history = this.props.data;
      distance = this.props.now - history[this.state.idx].timestamp;
      ratio = distance / history[this.state.idx].gap;
      distance = -(this.state.idx + ratio) * 300 + 300;
      return div({
        className: 'moedict-history'
      }, a({
        className: 'button me',
        onClick: function(){
          return this$.setState({
            modal: this$.state.modal === 'me' ? null : 'me'
          });
        }
      }), a({
        className: 'button cc',
        onClick: function(){
          return this$.setState({
            modal: this$.state.modal === 'cc' ? null : 'cc'
          });
        }
      }), a({
        className: 'button osdc',
        onClick: function(){
          return this$.setState({
            modal: this$.state.modal === 'osdc' ? null : 'osdc'
          });
        }
      }), a({
        className: 'button dict',
        onClick: function(){
          return this$.setState({
            modal: this$.state.modal === 'dict' ? null : 'dict'
          });
        }
      }), a({
        className: 'button thx',
        onClick: function(){
          return this$.setState({
            modal: this$.state.modal === 'thx' ? null : 'thx'
          });
        }
      }), div({
        className: 'modal',
        style: {
          display: !this.state.modal ? 'none' : 'block'
        }
      }, (function(){
        switch (this.state.modal) {
        case 'me':
          return div({
            className: 'card caasi'
          }, h1(null, '講者'), div({
            className: 'pic'
          }), span({
            className: 'name'
          }, '卡西/黃冠霖'), a({
            className: 'id',
            href: 'https://twitter.com/caasih'
          }, '@caasih'));
        case 'cc':
          return div({
            className: 'card cube'
          }, h1(null, '服務單位'), div({
            className: 'pic'
          }), span({
            className: 'name'
          }, 'ChineseC', small(null, 'UBES')), a({
            className: 'id',
            href: 'http://www.chinesecubes.com/'
          }, '@chinesecubes'));
        case 'osdc':
          return div({
            className: 'osdc'
          }, iframe({
            width: 640,
            height: 480,
            src: '//www.youtube.com/embed/zW69DgaMHCk',
            frameborder: 0,
            allowfullscreen: true
          }));
        case 'dict':
          return div({
            className: 'card dict'
          }, h1(null, '雙馬尾'), div({
            className: 'pic'
          }), span({
            className: 'name'
          }, '萌典'), a({
            className: 'id',
            href: 'https://twitter.com/moedict'
          }, '@moedict'));
        case 'thx':
          return div({
            className: 'thx'
          }, div({
            className: 'qrcode'
          }), a({
            className: 'url',
            href: 'http://tinyurl.com/moedict-history'
          }, 'http://tinyurl.com/moedict-history'));
        }
      }.call(this))), div({
        className: 'now',
        style: {
          top: 300,
          opacity: this.state.modal ? 0.33 : 1
        }
      }, moment(this.props.now, 'X').format('YYYY-MM-DD HH:mm')), ol({
        className: 'history',
        style: {
          top: distance,
          opacity: this.state.modal ? 0.33 : 1
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
