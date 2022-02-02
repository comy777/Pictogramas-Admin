import React from 'react';
import {View, Modal} from 'react-native';
import Btn from './Btn';
import useContextProduct from '../hooks/useContextProduct';
import {modalStyles} from '../styles/modalStyles';

interface Props {
  onPressLeft: () => void;
  onPressRight: () => void;
  titleRight: string;
  titleLeft: string;
}

const ModalScreen = ({
  onPressLeft,
  onPressRight,
  titleLeft,
  titleRight,
}: Props) => {
  const {modal, restoreModal} = useContextProduct();
  return (
    <View>
      <Modal visible={modal} animationType="fade" hardwareAccelerated>
        <View style={modalStyles.modal}>
          <View style={modalStyles.container}>
            <View style={modalStyles.btnContainer}>
              <Btn title={titleLeft} onPress={onPressLeft} />
              <Btn title={titleRight} onPress={onPressRight} />
            </View>
            <Btn title="Cerrar" onPress={restoreModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
