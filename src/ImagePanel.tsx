import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { ImageOptions } from 'types';

interface Props extends PanelProps<ImageOptions> {}

export class ImagePanel extends PureComponent<Props> {
  render() {
    const { data, width, height, options } = this.props;
    const imgSource = data.series[0] && data.series[0].fields[0].values.get(0);

    if (data.state === 'Error') {
      return (
        <div
          style={{
            position: 'relative',
            width,
            height,
          }}
        >
          <img src={options.path} style={{ width, height }} />
        </div>
      );
    }

    if (data.state !== 'Done') {
      return <h1 style={{ textAlign: 'center', verticalAlign: 'center' }}>Loading ...</h1>;
    }

    if (imgSource) {
      return (
        <div
          style={{
            position: 'relative',
            width,
            height,
          }}
        >
          <img src={imgSource} style={{ width, height }} />
        </div>
      );
    }

    return <h1 style={{ textAlign: 'center', verticalAlign: 'center' }}>Could not get image source</h1>;
  }
}
