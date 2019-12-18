import React, { PureComponent } from 'react';
import { FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { ImageOptions } from './types';

export class QueryEditor extends PureComponent<PanelEditorProps<ImageOptions>> {
  onDefaultImageChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, path: target.value });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Display</h5>
        <FormField
          label="Failed Image"
          labelWidth={10}
          inputWidth={20}
          type="text"
          onChange={this.onDefaultImageChanged}
          value={options.path || ''}
        />
      </div>
    );
  }
}
