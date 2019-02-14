# React-Native(redux) 重构购物页面

### RN随着不断断更新迭代，目前0.58开发起来，在2018年里我们公司用RN重构了个酒店管理系统，开发一套代码就能同时运行在androis,ios上，

##这是我业余时间完成一个购物车
- - - -
![image](https://github.com/422720735/sell/blob/master/img-folder/ipone6_detail.png)
![image](https://github.com/422720735/sell/blob/master/img-folder/ipone6_detail.png)
![image](https://github.com/422720735/sell/blob/master/img-folder/iponex_index.png)
![image](https://github.com/422720735/sell/blob/master/img-folder/iponex_detail.png)

` `` javascript
// 生成SafeAreaView   children是别的组件， 我们的组件嵌套它里面
    genSafeAreaViewPlus() {
    ` ``
        const {children, topColor, bottomColor, topInset, bottomInset} = this.props;
        ` ``
        return <View style={[styles.container, this.props.style]}>
        ` `` 
            {this.getTopArea(topColor, topInset)}
            ` ``
            {children}
            ` ``
            {this.getBottomArea(bottomColor, bottomInset)}
            ` ``
        </View>;
        ` ``
    }
    ` ``
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
    getTopArea(topColor, topInset) {
` ``
        return !DeviceInfo.isIPhoneX_deprecated || !topInset ? null
` ``
            : <View style={[styles.topArea, {backgroundColor: topColor}]}/>;
            ` ``
    }
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
        return enablePlus ? this.genSafeAreaViewPlus() : this.genSafeAreaView();
        ` ``
    }
    ` ``
    
#### 在官方自带的SafeAreaView上实现我们自己的兼容iPoneX