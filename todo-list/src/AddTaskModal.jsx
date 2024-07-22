import React from "react"
import ReactDom from "react-dom"
import "./scss/addTaskModal.scss"

export default function AddTaskModal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="b-add_task_modal-overlay" />
      <div className="b-add_task_modal">
        {React.cloneElement(children, { onClose })}
      </div>
    </>,
    document.getElementById("portal")
  )
}
