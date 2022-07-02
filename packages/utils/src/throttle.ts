interface IThrottleConfig {
  leading?: boolean
  trailing?: boolean
  interval?: number,
  resultCallback?: Function
}

const defaultThrottleConfig: IThrottleConfig = {
  leading: true,
  trailing: false,
  interval: 300
}

/**
 * 函数节流
 * @param {fn} 节流处理的函数
 * @param {config} 配置项
*/
export function throttle(fn: Function, config: IThrottleConfig) {
  let _lastTime = 0
  let _timer: NodeJS.Timeout = null
  const _config = { ...defaultThrottleConfig, ...config }
  const { leading, trailing, interval, resultCallback } = _config

  const _throttle = function (...args: any[]) {
    const _nowTime = new Date().getTime()

    //触发第一次
    if (_lastTime === 0 && !leading) _lastTime = _nowTime

    const _remainTime = interval - (_nowTime - _lastTime)

    //方法触发
    if (_remainTime <= 0) {
      if (_timer) {
        clearTimeout(_timer)
        _timer = null
      }

      const result = fn.apply(this, args)
      resultCallback && resultCallback(result)
      _lastTime = _nowTime
      return
    }

    //触发最后一次
    if (trailing && !_timer) {
      _timer = setTimeout(() => {
        _timer = null
        _lastTime = !leading ? 0 : new Date().getTime()
        const result = fn.apply(this, args)
        resultCallback && resultCallback(result)
      }, _remainTime)
    }
  }

  function cancel() { 
    if (_timer) clearTimeout(_timer)
    _timer = null
    _lastTime = 0
  }

  return {
    run: _throttle,
    cancel
  }
}
