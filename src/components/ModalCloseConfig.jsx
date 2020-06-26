import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

class ModalCloseConfig extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state
    const { handleDelete } = this.props

    return (
      <Form>
        <Button onClick={this.closeConfigShow(false, true)} floated="left" color="red" >
          Delete Account
          
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={handleDelete}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </Form>
    )
  }
}

export default ModalCloseConfig
