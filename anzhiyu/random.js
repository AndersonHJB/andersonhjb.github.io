var posts=["posts/d50a.html","posts/0.html","posts/daebc472.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"/img/link/04-hexo.io.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"/img/link/13-2-blog.anheyu.com.jpg","descr":"生活明朗，万物可爱","siteshot":"/img/link/13-blog.anheyu.com.jpg"},{"name":"VuePress Theme Hope","link":"https://theme-hope.vuejs.press/","avatar":"/img/link/14-vuepresshop.svg","descr":"一个具有强大功能的 vuepress 主题✨","siteshot":"/img/link/14-2-theme-hope.vuejs.press.jpg"},{"name":"AI悦创文档","link":"https://bornforthis.cn","avatar":"https://bornforthis.cn/aiyc.svg","descr":"悦创造就不同～","siteshot":"/img/link/01-bornforthis.cn.png","color":"vip","tag":"技术"},{"name":"AI悦创","link":"https://bornforthis.cn","avatar":"https://bornforthis.cn/aiyc.svg","descr":"你身边优质的编程私教","recommend":true},{"name":"陌颜Hao","link":"https://blog.imoyan.top/","avatar":"/img/link/05-blog.imoyan.top.jpg","descr":"愿永不忘初心！","color":"friends","tag":"生活"},{"name":"Naokuo","link":"https://www.naokuo.top","avatar":"/img/link/06-www.naokuo.top.png","descr":"请给我来亿碗三鲜面","color":"friends","tag":"访客"},{"name":"小旦","link":"https://satera.cn","avatar":"/img/link/07-satera.cn.png","descr":"SNTube Studio","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"/img/link/08-blog.anheyu.com.jpg","descr":"生活明朗，万物可爱","tag":"技术"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"/img/link/09-blog.leonus.cn.jpeg","descr":"进一寸有进一寸的欢喜。","tag":"技术"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"/img/link/10-blog.bsgun.cn.png","descr":"但愿日子清静抬头遇见的满是柔情","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"/img/link/11-akilar.top.jpg","descr":"欢迎光临糖果屋","tag":"技术"},{"name":"前尘小筑","link":"https://mnchen.cn/","avatar":"/img/link/12-mnchen.cn.jpg","descr":"虽多尘色染，犹见墨痕浓","tag":"技术"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"/img/link/15-blog.kouseki.cn.webp","descr":"愿岁并谢，与友长兮"},{"name":"落叶不随","link":"https://bloggersht.com.cn","avatar":"/img/link/02-bloggersht.com.cn.jpg","descr":"世界就在身后","recommend":false},{"name":"Verslamerrr","link":"https://verslamerrr.com/","avatar":"/img/link/03-verslamerrr.com.png","descr":"Verslamerrr","recommend":false}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };