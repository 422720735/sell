# React-Native(redux) 重构购物页面

### RN随着不断断更新迭代，目前0.58开发起来，在2018年里我们公司用RN重构了个酒店管理系统，开发一套代码就能同时运行在androis,ios上，

##这是我业余时间完成一个购物车
![Image text](https://raw.githubusercontent.com/422720735/sell/master/img-folder/ipone6_index.png?token=AfXgR85ZinTqzPNP1wt0opXvKcAVOR9gks5cZUEwwA%3D%3D)
![Image text](https://raw.githubusercontent.com/422720735/sell/master/img-folder/ipone6_detail.png?token=AfXgRyoWHeRUCPeIbd9Rr936zY1dhpuyks5cZUFwwA%3D%3D)
![Image text](https://raw.githubusercontent.com/422720735/sell/master/img-folder/iponex_index.png?token=AfXgR2eEd9lMW-679v6CRP4Udraeys5aks5cZUGbwA%3D%3D)
![Image text](https://raw.githubusercontent.com/422720735/sell/master/img-folder/iponex_detail.png?token=AfXgRytYEQweMQMWT53_k-jYYhK-UOlzks5cZUG4wA%3D%3D)

` ``
// 生成SafeAreaView   children是别的组件， 我们的组件嵌套它里面
` ``
    genSafeAreaViewPlus() {
    ` ``
        const {children, topColor, bottomColor, topInset, bottomInset} = this.props;
        ` ``
        return <View style={[styles.container, this.props.style]}>
        ` ``
            {/*顶部的安全区域*/}
            ` ``
            {this.getTopArea(topColor, topInset)}
            ` ``
            {/*我们的组件部分*/}
            ` ``
            {children}
            ` ``
            {/*底部的安全区域*/}
            ` ``
            {this.getBottomArea(bottomColor, bottomInset)}
            ` ``
        </View>;
        ` ``
    }
    ` ``
` ``
    // 获取系统的SafeAreaView
    ` ``
    genSafeAreaView() {
    ` ``
        return <SafeAreaView style={[styles.container, this.props.style]} {...this.props}>
        ` ``
            {this.props.children}
            ` ``
        </SafeAreaView>
        ` ``
    }
    ` ``
    // 顶部的安全区域
    ` ``
    getTopArea(topColor, topInset) {
    ` ``
               //  判断是不是全面屏 并且 是不是要显示全面屏
               ` ``
        return !DeviceInfo.isIPhoneX_deprecated || !topInset ? null
        ` ``
            : <View style={[styles.topArea, {backgroundColor: topColor}]}/>;
            ` ``
    }
    ` ``
    // 底部的安全区域
    ` ``
    getBottomArea(bottomColor, bottomInset) {
    ` ``
        return !DeviceInfo.isIPhoneX_deprecated || !bottomInset ? null
        ` ``
            : <View style={[styles.bottomArea, {backgroundColor: bottomColor}]}/>;
            ` ``
    }
` ``
    render() {
    ` ``
        const {enablePlus} = this.props;
        ` ``
        // 判断我们用自己封装的还是Rn自带的。
        ` ``
        return enablePlus ? this.genSafeAreaViewPlus() : this.genSafeAreaView();
        ` ``
    }
    ` ``
    
#### 在官方自带的SafeAreaView上实现我们自己的兼容iPoneX