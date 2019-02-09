/**
 * 导航跳转控制类，操作我们所以的跳转
 * */
export default class NavigationUtil {
    /*
    * 跳转到指定页面
    * */
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null');
            alert('NavigationUtil.navigation can not be null');
            return
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        );
    }

    /*
    * 返回上一页
    * */
    static goBack(navigation) {
        navigation.goBack();
    }


    /*
    * 重置到首页
    * */
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate("Main")
    }
}