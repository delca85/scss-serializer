const KEY = '__jest-scss__';

type tVal = {
  type: string;
  children: tVal[];
  props: tValProps;
  [KEY]: boolean;
};

type tValProps = {
  className: string;
};

const getNodes = (node: tVal, nodes: tVal[] = []) => {
  if (typeof node === 'object') {
    nodes.push(node);
  }

  if (node.children) {
    Array.from(node.children).forEach((child) => getNodes(child, nodes));
  }

  return nodes;
};

const markNodes = (nodes: tVal[]) =>
  nodes.forEach((node) => (node[KEY] = true));

const getClassNames = (nodes: tVal[]): string[] => {
  const classNames: string[] = [];
  nodes.reduce((acc, { props }) => {
    if (props.className) {
      acc.push(props.className);
    }
    return acc;
  }, classNames);
  return classNames;
};

module.exports = {
  test: (val: tVal) => {
    return true;
  },
  //@ts-ignore
  serialize: (val: tVal, config, indentation, depth, refs, printer) => {
    console.log(`val`, val);
    // @ts-ignore
    // console.log(`val`, val.toJSON(), val.getInstance());
    // console.log(`config`, config);
    // console.log(`indentation`, indentation);
    // console.log(`depth`, depth);
    // console.log(`refs`, refs);
    // console.log(`printer`, printer);
    const nodes = getNodes(val);
    nodes.forEach(console.log);
    markNodes(nodes);
    const classNames = getClassNames(nodes);
    console.log(`classNames`, classNames);
    return '';
  },
};
