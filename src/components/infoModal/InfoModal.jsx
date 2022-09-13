/* eslint-disable react/prop-types */
import { Modal } from "./Modal.style";

export default function InfoModal({ status, message }) {
  if (status === 200) {
    return <Modal style={{ color: "green" }}>{message}</Modal>;
  }
  return <Modal style={{ color: "red" }}>{message}</Modal>;
}
