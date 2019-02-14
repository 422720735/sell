# React-Native(redux) 重构购物页面

### RN随着不断断更新迭代，目前0.58开发起来，在2018年里我们公司用RN重构了个酒店管理系统，开发一套代码就能同时运行在androis,ios上，

## 这是我业余时间完成一个购物车

- 这个购物车的添加商品删除商品等都交给了都交给redux管理。这样易于维护。
- - - -
![image](https://github.com/422720735/sell/blob/master/img-folder/ipone6_detail.png)
![image](https://github.com/422720735/sell/blob/master/img-folder/ipone6_detail.png)
![image](https://github.com/422720735/sell/blob/master/img-folder/iponex_index.png)
![image](https://github.com/422720735/sell/blob/master/img-folder/iponex_detail.png)

```javascript 1.8
let pauseBtn = UIButton(frame: CGRect(x: 50, y: HEIGHT-100, width: 100, height: 50))
        pauseBtn.addTarget(self, action: #selector(btnClick(_:)), for: .touchUpInside)
        pauseBtn.setTitle("暂停", for: .normal)
        pauseBtn.tag = 11
        pauseBtn.setTitleColor(UIColor.black, for: .normal)
    ``` 
#### 在官方自带的SafeAreaView上实现我们自己的兼容iPoneX