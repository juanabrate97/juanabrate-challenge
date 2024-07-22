import { useState } from "react";
import "./scss/newTaskForm.scss";

export function NewTaskForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      title: formData.title === "",
      description: formData.description === "",
    };

    setErrors(newErrors);

    if (newErrors.title || newErrors.description) {
      return;
    }

    onSubmit(formData);

    setFormData({
      title: "",
      description: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="b-new_task_form">
        <div className="b-new_task_form-title">Añadir tarea</div>
        <div className="b-new_task_form-name_label">
          <label htmlFor="title">Nombre</label>
        </div>
        <input
          className={`b-new_task_form-name_input ${errors.title ? 'm-field_error' : ''}`}
          value={formData.title}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Nombre"
        />
        <div className="b-new_task_form-description_label">
          <label htmlFor="description">Descripción</label>
        </div>
        <textarea
          className={`b-new_task_form-description_input m-big_input ${errors.description ? 'm-field_error' : ''}`}
          value={formData.description}
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="Descripción"
        />
      </div>
      <div className="b-new_task_form-modal_footer">
        <button className="b-new_task_form-close_btn" onClick={onClose}>
          Cancelar
        </button>
        <button className="b-new_task_form-submit_btn" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
}
