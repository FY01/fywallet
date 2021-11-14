import React, { Component } from 'react'

import {Button} from 'antd'

class App extends Component {
    render() {
        return (
            <Button type='primary' onClick={this.handleClick}>getting start</Button>
        )
    }
}
export default App
