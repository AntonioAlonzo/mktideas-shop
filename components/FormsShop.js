import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "@mui/material/Button";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

const FormsShop = ({ open, handleClose, itemName }) => {
  const [state, handleSubmit] = useForm("xyzzblrp");

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg text-center">
          {/* Close Button */}
          <button
            onClick={handleClose} // Add your close logic here
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <p className="text-xl font-semibold text-green-600 p-10">
            ¡Correo Enviado!
          </p>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment className="md:w-[400rem] ">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        size="xl"
        className="p-0 rounded-none "
      >
        <DialogBody className="flex p-0 md:flex-row flex-col max-h-[90vh] overflow-y-auto">
          <div className="md:w-[100rem] bg-[#838383] text-white p-8 md:order-0 order-1">
            <p className="font-founders-grotesk text-[2rem]">
              Tu proyecto. <br /> Tu voz
            </p>
            <p className="w-[20rem] mb-[2rem] font-founders-grotesk">
              Completa nuestro formulario y aclara tus dudas para comenzar a dar
              vida a tus ideas.<br></br>
              ¡Estamos aquí para hacerlo posible!
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-4xl mx-auto bg-[#838383] text-white"
            >
              <input type="hidden" name="product" value={itemName} />

              <div className="mb-4">
                <label
                  htmlFor="empresa"
                  className="font-founders-grotesk block text-sm font-medium text-gray-700 mb-1 text-white"
                >
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  name="empresa"
                  className="font-founders-grotesk rounded-none bg-transparent border-t-0 border-x-0 border-b-white  w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ValidationError
                  prefix="Empresa"
                  field="empresa"
                  errors={state.errors}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="font-founders-grotesk block text-sm font-medium text-gray-700 mb-1 text-white"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  className="font-founders-grotesk rounded-none bg-transparent border-t-0 border-x-0 border-b-white w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ValidationError
                  prefix="Nombre"
                  field="nombre"
                  errors={state.errors}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="telefono"
                  className="font-founders-grotesk block text-sm font-medium text-gray-700 mb-1 text-white"
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  className="font-founders-grotesk rounded-none bg-transparent border-t-0 border-x-0 border-b-white w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ValidationError
                  prefix="Teléfono"
                  field="telefono"
                  errors={state.errors}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="font-founders-grotesk block text-sm font-medium text-gray-700 mb-1 text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="font-founders-grotesk rounded-none bg-transparent border-t-0 border-x-0 border-b-white w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="descripcion"
                  className="font-founders-grotesk block text-sm font-medium text-gray-700 mb-4 text-white"
                >
                  ¡Cuéntanos sobre tu proyecto!
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  required
                  className="font-founders-grotesk rounded-none bg-transparent resize-none border-b-white w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                <ValidationError
                  prefix="Descripción"
                  field="descripcion"
                  errors={state.errors}
                />
              </div>

              <button onClick={handleClose} className="text-white mr-[1rem]">
                Cancelar
              </button>
              <button
                type="submit"
                disabled={state.submitting}
                className="px-4 py-2 bg-transparent border rounded-[100px] px-[6rem] border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-700 transition disabled:bg-gray-400"
              >
                {state.submitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>

          <div
            style={{
              backgroundImage:
                "url('https://mktideas.agency/wp-content/uploads/2025/01/formbg.jpg')",
            }}
            className="md:w-[100rem] bg-form-background md:h-[800px] h-[0px] bg-center bg-cover md:order-1 order-0"
          ></div>
        </DialogBody>
      </Dialog>
    </React.Fragment>
  );
};

export default FormsShop;
