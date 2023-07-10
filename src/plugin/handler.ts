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
  };



  export const handleSelection = () => {
    const nodes: ReadonlyArray<SceneNode> = figma.currentPage.selection;
    // nodes.forEach((element) => {
    //   console.log('element', element.type);
    // });
    // check selected node is a text node
    if (nodes.length && nodes[0].type === 'TEXT') {
      // get the text from the node
      const textNode: TextNode = nodes[0] as TextNode;
      const text = textNode.characters;
      console.log(`
      fontSize: ${String(textNode.fontSize)},
      fontName: ${String(JSON.stringify(textNode.fontName))},
      text: ${text},
  `);

      // SEND MESSAGE BACK TO REACT UI
      figma.ui.postMessage({
        type: Messages.TEXT_SELECTED,
        message: `
          fontSize: ${String(textNode.fontSize)},
          fontName: ${String(JSON.stringify(textNode.fontName))},
          text: ${text},
      `,
      });
    }else{
      figma.ui.postMessage({
        type: Messages.TEXT_SELECTED,
        message: `
         Text Node Not Found
      `,
      });
    }

    // on node selection
    figma.on("selectionchange", () => {
      console.log("figma.currentPage.selection", figma.currentPage.selection);
      handleSelection()
    });
  };
}
