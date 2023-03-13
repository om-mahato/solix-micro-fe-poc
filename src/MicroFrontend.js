import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document, counterApp, students } = this.props;
    console.log('counterApp*****', counterApp)
    console.log('students*****', students)
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest['files']['main.js']}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history, counterApp, students, incrementContainerCounter } = this.props;

    window[`render${name}`] && window[`render${name}`](`${name}-container`, history, counterApp, students, incrementContainerCounter);
  };

  componentDidUpdate = () => {
    console.log('componentDidUpdate', this.props)
    this.renderMicroFrontend()
  }

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;