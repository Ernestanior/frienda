export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/note/index',
    'pages/room/index',
    'pages/user/index',
    'pages/game/index',
    'pages/noteList/index',
    'pages/gender/index',

  ],
  // tabBar:{
  //   custom:true,
  //   color:"#8a8a8a",
  //   selectedColor:"#ff0000",
  //   backgroundColor:"#fafafa",
  //   borderStyle:"black",
  //   list:[
  //     {
  //       pagePath: 'pages/index/index',
  //       selectedIconPath: 'assets/tabbar/home-fill.png',
  //       iconPath: 'assets/tabbar/home.png',
  //       text: '首页'
  //     },
  //     {
  //       pagePath: 'pages/game/index',
  //       selectedIconPath: 'assets/tabbar/menu-fill.png',
  //       iconPath: 'assets/tabbar/menu.png',
  //       text: '组局'
  //     },
  //     {
  //       pagePath: 'pages/room/index',
  //       selectedIconPath: 'assets/tabbar/shop-fill.png',
  //       iconPath: 'assets/tabbar/shop.png',
  //       text: '房间'
  //     },
  //     {
  //       pagePath: 'pages/user/index',
  //       selectedIconPath: 'assets/tabbar/user-fill.png',
  //       iconPath: 'assets/tabbar/user.png',
  //       text: '个人中心'
  //     }
  //   ]
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
