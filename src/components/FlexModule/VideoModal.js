import AriaModal from 'react-aria-modal';
import autobind from 'lib/autobind';
import React from 'react';

class VideoModal extends React.Component {
  constructor(...args) {
    super(...args);
    autobind(this);
    this.state = { active: false };
  }

  openModal() {
    this.setState({ active: true });
  }

  closeModal() {
    this.setState(
      { hasEntered: false },
      () => {
        setTimeout(() => {
          this.setState({
            active: false,
          });
        }, 300);
      },
    );
  }

  onEnter() {
    this.setState({ hasEntered: true });
  }

  render() {
    const youtubeId = this.props.link.match(/v=([\d\w]+)/)[1] || '';
    let modalClassName = 'modal-content--animated';
    let underlayClassName = 'flex-module__video-modal-bg modal-underlay--animated';
    if (this.state.hasEntered) {
      modalClassName += ' modal-content--animated--has-entered';
      underlayClassName += ' modal-underlay--animated--has-entered';
    }
    return (
      <div className="flex-module__video-modal">
        <button id="home-open-video-modal-button" className="flex-module__play-btn" onClick={this.openModal}>Play</button>
        {this.state.active && (
          <AriaModal
            underlayColor="rgba(255,255,255,0.75)"
            underlayClass={underlayClassName}
            onEnter={this.onEnter}
            onExit={this.closeModal}
            titleText="Youtube embed"
            focusDialog
            verticallyCenter
          >
            <div className={`iframe-wrap iframe-wrap--modal ${modalClassName}`}>
              <button id="home-close-video-modal-button" className="flex-module__close-btn" onClick={this.closeModal}>Close</button>
              <iframe src={`https://www.youtube.com/embed/${youtubeId}?rel=0&controls=0&showinfo=0&autoplay=true`} frameBorder="0" />
            </div>
          </AriaModal>
        )}
      </div>
    );
  }
}

export default VideoModal;
