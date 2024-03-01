export default defineAppConfig({
  pages: [
    'pages/user/index',
    'pages/createActivity/index',
    'pages/index/index',
    'pages/match/index',
    'pages/orderDetail/index',
    'pages/pay/index',
    'pages/merchant/index',
    'pages/activity/index',
    'pages/comment/index',
    'pages/note/index',
    'pages/room/index',
  ],
  tabBar:{
    custom:true,
    color:"#8a8a8a",
    selectedColor:"#ff0000",
    backgroundColor:"#fafafa",
    borderStyle:"black",
    list:[
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'assets/tabbar/home-fill.png',
        iconPath: 'assets/tabbar/home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/match/index',
        selectedIconPath: 'assets/tabbar/menu-fill.png',
        iconPath: 'assets/tabbar/menu.png',
        text: '配对'
      },
      // {
      //   pagePath: 'pages/activity/index',
      //   selectedIconPath: 'assets/tabbar/shop-fill.png',
      //   iconPath: 'assets/tabbar/shop.png',
      //   text: '房间'
      // },
      {
        pagePath: 'pages/user/index',
        selectedIconPath: 'assets/tabbar/user-fill.png',
        iconPath: 'assets/tabbar/user.png',
        text: '个人中心'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
