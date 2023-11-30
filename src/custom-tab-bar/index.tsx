import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.less'

export default class Index extends Component {
    state = {
        selected: 0,
        color: '#aaa',
        selectedColor: '#0675c4',
        list: [
            {
                pagePath: '/pages/index/index',
                selectedIconPath: '../assets/tabbar/home-fill.png',
                iconPath: '../assets/tabbar/home.png',
                text: '首页'
            },
            {
                pagePath: '/pages/room/index',
                selectedIconPath: '../assets/tabbar/menu-fill.png',
                iconPath: '../assets/tabbar/menu.png',
                text: '分类'
            },
            {
                pagePath: '/pages/game/index',
                selectedIconPath: '../assets/tabbar/shop-fill.png',
                iconPath: '../assets/tabbar/shop.png',
                text: '购物车'
            },
            {
                pagePath: '/pages/user/index',
                selectedIconPath: '../assets/tabbar/user-fill.png',
                iconPath: '../assets/tabbar/user.png',
                text: '个人中心'
            }
        ]
    }

    switchTab(index, url) {
        this.setSelected(index)
        Taro.switchTab({ url })
    }

    setSelected (idx: number) {
        this.setState({
            selected: idx
        })
    }

    render() {
        const { list, selected, color, selectedColor } = this.state

        return (
            <CoverView className='tab-bar'>
                <CoverView className='tab-bar-border'></CoverView>
                {list.map((item, index) => {
                    return (
                        <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
                            <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
                            <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
                        </CoverView>
                    )
                })}
            </CoverView>
        )
    }
}
