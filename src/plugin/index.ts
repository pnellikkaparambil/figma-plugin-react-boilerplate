import { Messages } from '../models/message';
import { Handler } from './handler';

figma.showUI(__html__);
Handler.handleSelection();
figma.ui.onmessage = (msg) => {
  if (msg.type === Messages.CREATE_CIRCLE) {
    Handler.createCircle(msg);
  }
  // figma.closePlugin();
};
