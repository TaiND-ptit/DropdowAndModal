import { Modal } from "antd";
import styled from 'styled-components';
export const ModalAnt = styled(Modal)`
    .ant-btn-default{
        display: ${(props) => (props.hiddenCancel ? 'inline-block' : 'none')};
    }

`

