import React, {useEffect, useState} from 'react'
import {Row, Col, Divider, notification} from 'antd'
import InputBox from '../components/Input'
import Console from "../components/Console";
import Dashboard from '../components/Dashboard';
import {connect} from "../.umi/plugin-dva/exports";

const namespace = 'playground'

const regex = /<\/?.*?>/g

const activateNotification = (type, message = null, desc = null) => {
  switch (type) {
    case 'success':
      return notification['success']({
        message: message == null ? '任务执行成功' : message,
        description: desc == null ? '代码正在运行中……' : desc,
      })
    case 'info':
      return notification['info']({
        message: message == null ? '提示' : message,
        description: desc == null ? '虽然不知道发生了什么但是似乎很厉害的样子？' : desc,
      })
    case 'warning':
      return notification['warning']({
        message: message == null ? '警告' : message,
        description: desc == null ? '似乎有些不对劲' : desc,
      })
    case 'error':
      return notification['error']({
        message: message == null ? '错误' : message,
        description: desc == null ? '发生了一些错误' : desc,
      })
  }
}

const mapStateToProps = state => {
  const { answer, nextFrame, initialized, currentLength, answerLength, returnedError } = state[namespace]
  return {
    answer, nextFrame, initialized, currentLength, answerLength, returnedError
  }
}

const Main = (props) => {

  const [ code, setCode ] = useState("Input your code...")
  const [ idle, setIdle ] = useState(true)
  const [ disabled, setDisabled ] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("in setInterval: " + props.initialized)
      if (props.initialized !== 'true') {
        initialFetch()
      } else {
        getData()
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [props.initialized, props.nextFrame, props.answer, idle, disabled, ]) // 如果想要让setInterval和呼叫的函数里对应的变量发生改变，就要在数组里声明
  // setInterval相当于一个闭包，里面的变量如果不额外声明的话值是固定的

  const initialFetch = () => {
    props.dispatch({
      type: `${namespace}/initialFetch`,
      payload: '',
    })
  }

  const getData = () => {
    props.dispatch({
      type: `${namespace}/nextFrame`,
    })
    const { nextFrame, answer } = props
    if (nextFrame) {
      if (!idle && nextFrame.special === 'GEM') {
        console.log('Collected a gem')
        activateNotification('info', '消息', '捡到了一颗钻石。')
      }
      if (!idle && nextFrame.special === 'SWITCH') {
        console.log('Toggled a switch')
        activateNotification('info', '消息', '按下了一个开关。')
      }
    }
    if (!props.returnedError && !idle && answer.length === 0) {
      activateNotification('success', '任务执行成功', '程序执行完成。')
      setIdle(true)
    }
  }

  const onClickReset = () => {
    setDisabled(false)
    setCode("Input your code...")
    props.dispatch({
      type: `${namespace}/initialFetch`,
      payload: '',
    })
  }

  const onClickSubmit = (event) => {
    event.preventDefault()
    makeRequest()
  }

  const makeRequest = () => {
    console.log(code)
    props.dispatch({
      type: `${namespace}/handleSubmit`,
      payload: {
        code: code,
        grid: props.nextFrame.grid,
        portals: props.nextFrame.portals,
        locks: props.nextFrame.locks,
        players: props.nextFrame.players,
      },
    })
    if (props.answer !== []) {
      setIdle(false)
      setDisabled(true)
      // console.log('set idle to false')
    }
  }

  const onChange = (data) => {
    setCode(data)
  }

  const onClickAdd = (num, el) => {
    const start = el.selectionStart
    const end = el.selectionEnd
    const toAdd = [
      'isBlocked ', 'isBlockedLeft', 'isBlockedRight', 'isOnGem', 'isOnOpenedSwitch ', 'isOnClosedSwitch ', 'moveForward() \n',
      'turnLeft() \n', 'collectGem() \n', 'toggleSwitch() \n', 'print() ', 'for _ in 1 ... 3 { } ', 'while cond { } ',
      'repeat { } while cond ', 'func foo() -> Void { } ',
    ]
    setCode(code.substring(0, start) + toAdd[num] + code.substring(end, code.length))
  }

  const renderInput = (submit, reset, change, add, store, disabled) => {
    return <InputBox onSubmit={submit} onReset={reset} onChange={change} onAdd={add} store={store} disabled={disabled} />
  }

  const renderDashboard = (initialGem, grid, players, locks, curr, len, status) => {
    return <Dashboard initialGem={initialGem} grid={grid} players={players} locks={locks} current={curr} aLength={len} status={status}/>
  }

  const renderConsole = (output) => {
    return <Console output={output} />
  }

  const status = props.returnedError ? 'err' : (idle ? (disabled ? 'success' : 'idle' ) : (disabled ? 'processing' : 'impossible'))

  return (
    <div style={{
      minHeight: '600px',
      overflow: 'hidden',
    }}>
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          {renderInput(onClickSubmit, onClickReset, onChange, onClickAdd, code, disabled)}
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12} >
          <div style={{
            background: 'white',
            overflow: 'scroll',
            overflowWrap: 'break-word',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            border: '1px solid #e8e8e8',
          }}>
            <Row>
              {renderDashboard(
                props.nextFrame.initialGem,
                props.nextFrame.grid,
                props.nextFrame.players,
                props.nextFrame.locks,
                props.currentLength,
                props.answerLength,
                status)
              }
            </Row>
            <Row>
              {renderConsole(props.nextFrame.output)}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default connect(mapStateToProps)(Main)
