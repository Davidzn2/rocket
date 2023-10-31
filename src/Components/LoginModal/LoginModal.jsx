import { useState } from "react";
import Modal from "react-modal";
import { register } from "../../utils/auth";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const LoginModal = ({ modalIsOpen, setIsOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    const fullName = data.get("fullName");

    register(email, password, fullName)
      .then((res) => {
        console.log(res);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="relative">
        <button
          className="absolute top-0 right-0 p-2 text-red-500 font-bold"
          onClick={closeModal}
        >
          x
        </button>
        <h2 className="text-black font-bold block">Ingresar</h2>
        <form action="" className="grid gap-2 mt-5" onSubmit={onSubmit}>
          <p className="block text-gray-600">
            Para votar debes registrarte o iniciar sesión
          </p>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="p-1 border"
            placeholder="Nombre Completo"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="p-1 border"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="p-1 border"
            placeholder="Contraseña"
          />
          <button
            className="shadow-lg mt-2 bg-black text-white p-1 rounded-md font-bold"
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
