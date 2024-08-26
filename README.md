RN项目学习笔记：

配合使用的是[**figma**](https://www.figma.com/design/kVEUd5MgKcBRjGrGPnhIlP/Social-Media-Mobile-App-(Community)?node-id=2-11&t=tYgRpxNbwt1BkN2w-0)原型软件，图标库使用的是[**FontAwasome**](https://fontawesome.com/)图标库。
   
FontAwasome可以很好的与RN项目契合，直接安装[**FontAwasome图标库依赖**](https://docs.fontawesome.com/web/use-with/react-native),在项目中直接引入FontAwesomeIcon组件，并在Icon属性中直接选择想要的图标。
   
使用style.js引入样式，在样式文件中，通过StyleSheet.create方法创建样式对象，暴露出去，以便在其他文件中直接引用。

# 1.无限滚动列表<FlatList/>。通过该组件的onEndReached状态监听属性，调动新数据的加入到要渲染的数据中，做到分页加载。
   
# 2.响应式UI，使用React-native中的Dimensions来获取不同设备的属性值，
   
1. 例如 Dimensions.get('screen')可以获取不同设备的屏幕的 fontScale，height，scale，width值。

2. 缩放函数scaling.js，通过判断屏幕的大小，给定一个基准，然后得出实际屏幕与基准的一个比例，外界元素通过缩放函数可以
   达到根据屏幕的大小缩放外界元素的给定大小（宽度，高度，字体大小）缩放规则如下：

3. 如果是横向的样式，采用横向缩放；如果是纵向的样式采用纵向的缩放；如果是字体大小行高，采用字体缩放规则；
   但如果是四个方向都生效的样式，建议使用横向缩放，因为纵向空间大，以横向为主。

4. 至于Android和iOS的样式区别，可以利用React-Native里的Platform变量，来确定当前设备的操作系统Platform.OS，以便切换不同的样式。模拟器状态栏的样式，通过React-native里的StatusBar组件设置。

# 3.导航navigator
1. Stack.Navigator栈式导航，通过Stack.screen,将要导航的组件设置为其属性component和name，component用于指定其组件，
name给该组件起一个别名用于导航（navigation.navigator('name')）。且为了防止别名出错，但无法发现，使用Routes对象，在路径名拼写出错的时候，会出现bug，容易检测。

2. Drawer.Navigator抽屉式导航，在页面左边隐藏一个抽屉式导航栏，在Drawer.Navigator里的任何一个页面都能通过该导航栏，跳转到其他页面。

3. MaterialTopTabNavigator顶部导航，与以上两个导航一样，通过name和component定义到导航的组件，还可以通过一系列属性，自定义顶部导航的样式。


