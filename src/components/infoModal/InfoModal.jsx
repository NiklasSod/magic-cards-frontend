/* eslint-disable react/prop-types */
import { Modal } from "./Modal.style";

export default function InfoModal({ status, message }) {
  if (status === 200) {
    return (
      <Modal style={{ color: "green", textAlign: "center" }}>{message}</Modal>
    );
  }
  return <Modal style={{ color: "red", textAlign: "center" }}>{message}</Modal>;
}
