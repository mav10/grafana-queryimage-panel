import { PanelPlugin } from '@grafana/data';
import { ImageOptions, defaults } from './types';
import { ImagePanel } from './ImagePanel';
import { QueryEditor } from './QueryEditor';

export const plugin = new PanelPlugin<ImageOptions>(ImagePanel).setDefaults(defaults).setEditor(QueryEditor);
