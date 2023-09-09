import { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import IconArrow from "../../../icons/IconArrow.tsx";
import SCForm from "./Form.styled.tsx";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({
    name: false,
    email: false,
    message: false,
  });

  async function send(data: Record<string, string>) {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      throw error;
    }
  }

  async function handle_submission(event: FormEvent) {
    event.preventDefault();

    const data: Record<string, string> = {};
    let hasEmpty;

    hasEmpty = false;

    for (let [key, value] of Object.entries(formData)) {
      data[key] = value.trim();
      hasEmpty ||= !data[key];
    }

    if (hasEmpty) {
      setErrors(
        Object.fromEntries(
          Object.entries(data).map(([key, value]) => [key, !value])
        )
      );

      return;
    }

    setIsSending(true);

    try {
      await send(data);

      toast.success("Message delivered! we'll get back to you shortly!");

      setFormData((prev) =>
        Object.fromEntries(Object.keys(prev).map((key) => [key, ""]))
      );
    } catch (error) {
      toast.error("Something went wrong! check your connection and try again!");
    } finally {
      setIsSending(false);
    }
  }

  function handle_change(event: ChangeEvent) {
    const { name, value } = event.target as HTMLInputElement;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  }

  return (
    <SCForm onSubmit={handle_submission}>
      <div className="fields">
        <label className="input-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`${errors.name ? "invalid" : ""}`}
            disabled={isSending}
            value={formData.name}
            onChange={handle_change}
          />
          <p className={`error ${errors.name ? "active" : ""}`}>
            Can't be empty!
          </p>
        </label>
        <label className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`${errors.email ? "invalid" : ""}`}
            disabled={isSending}
            value={formData.email}
            onChange={handle_change}
          />
          <p className={`error ${errors.email && "active"}`}>Can't be empty!</p>
        </label>
        <label className="text-area-container">
          <textarea
            name="message"
            placeholder="Message"
            className={`${errors.message ? "invalid" : ""}`}
            disabled={isSending}
            value={formData.message}
            onChange={handle_change}
          ></textarea>
          <p className={`error ${errors.message ? "active" : ""}`}>
            Can't be empty!
          </p>
        </label>
      </div>
      <button className="button-secondary" disabled={isSending}>
        <IconArrow />
      </button>
      <ToastContainer position="top-center" />
    </SCForm>
  );
}
