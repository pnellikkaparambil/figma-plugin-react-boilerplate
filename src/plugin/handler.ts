import { Messages } from '../models/message';

export namespace Handler {
  export const createCircle = (msg: any) => {
    const nodes = [];

    for (let i = 0; i < msg.count; i++) {
      const circle = figma.createEllipse();
      circle.x = i * 150;
      circle.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(circle);
      nodes.push(circle);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    // SEND MESSAGE BACK TO REACT UI
    figma.ui.postMessage({
      type: Messages.CREATE_CIRCLE,
      message: `Created ${msg.count} Circles`,
    });
  };
}
