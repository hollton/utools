/**
 * ellipsis [限制文字添加省略号]
 * @param  {[Object]} options {
 *      target: null,限制文字的容器dom，需未设置height
 *      limitLine: 1,限制行数
 *      lineHeight: 20,文字行高
 *      showTitle: true,title显示全部内容
 *      symbol: '...',超出追加的内容
 *      charLimit: false,根据字符的长度限制
 *      charLength: 10, 最大字符长度，charLimit=true有效
 * }
 */

let cfgOption = {
    target: null,
    limitLine: 1,
    showTitle: true,
    lineHeight: 20,
    symbol: '...',
    charLimit: false,
    charLength: 10
}

let ellipsis = (options) => {
    Object.assign(cfgOption, options)
    if (!cfgOption.target) {
        return
    }
    if (cfgOption.showTitle) {
        cfgOption.target.setAttribute('title', _scope.getContent())
    }
    if (cfgOption.charLimit) {
        _scope.compareChat()
        return;
    }
    _scope.compareHeight()
};

let _scope = {
    getContent: () => {
        return cfgOption.target.innerHTML
    },
    setContent: content => {
        cfgOption.target.innerHTML = content
    },
    deleteContent: () => {
        let content = _scope.getContent()
        let curContent = content.substring(0, content.length - cfgOption.symbol.length - 1)
        curContent += cfgOption.symbol
        _scope.setContent(curContent)
        _scope.compareHeight()
    },
    getTargetHeight: () => {
        return cfgOption.target.clientHeight
    },
    compareHeight: () => {
        let curHeight = _scope.getTargetHeight()
        let lineHeight = cfgOption.limitLine * cfgOption.lineHeight
        if (curHeight > lineHeight) {
            _scope.deleteContent()
        }
    },
    compareChat: () => {
        let content = _scope.getContent()
        if (content.length > cfgOption.charLength) {
            let curContent = content.substring(0, cfgOption.charLength);
            _scope.setContent(curContent + cfgOption.symbol)
        }
    }
}

export default ellipsis;