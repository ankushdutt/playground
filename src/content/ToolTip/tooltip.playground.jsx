import * as React from "react";
import { Tile, Tooltip, Text } from "react-native-elements";
import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";
import Modal from "modal-react-native-web";

const ToolTipPlayground = () => {
  const params = useView({
    componentName: "Tooltip",
    props: {
      popover: {
        value: `<Text>PopOver Content</Text>`,
        type: PropTypes.ReactNode,
      },
      children: {
        value: `<Text>Hello, There</Text>`,
      },
      ModalComponent: {
        value: `Modal`,
        type: PropTypes.Object,
      },
      width: {
        value: 200,
        type: PropTypes.Number
      },
      withPointer: {
        value: false,
        type: PropTypes.Boolean
      },
      toggleOnPress: {
        value: false,
        type: PropTypes.Boolean
      },
      containerStyle: {
        value: `{backgroundColor: '#BDBDBD', marginTop: '125px'}`,
        type: PropTypes.Object
      },
      withPointer: {
        value: false,
        type: PropTypes.Boolean
      }
    },
    scope: {
      Tooltip,
      Text,
      Modal,
    },
    imports: {
      "react-native-elements": {
        named: ["Tooltip", "Text"],
      },
      "modal-react-native-web": {
        default: "Modal",
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default ToolTipPlayground;
