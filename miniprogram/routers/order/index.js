//index.js
const app = getApp()

Page({
    data: {
        result: ['0'],
    },
    onChange(event) {
        console.log(event)
        this.setData({
            result: event.detail,
        });
    },
})
