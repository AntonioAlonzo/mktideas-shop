import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const FormsShop = ({ open, handleClose }) => {
	const [state, handleSubmit] = useForm("xyzzblrp");

	// Manejar el estado de apertura del dialog

	if (state.succeeded) {
		return (
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
				<div className="bg-white p-6 rounded-lg shadow-lg text-center">
					<p className="text-xl font-semibold text-green-600">
						¡Correo Enviado!
					</p>
				</div>
			</div>
		);
	}

	return (
		<React.Fragment className="w-30rem">
			{/*
			<Button variant="outlined" onClick={handleClickOpen}>
				Abrir Formulario
			</Button>
*/}
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				sx={{ "& .MuiDialogContent-root": { width: "40rem" } }}
			>
				<DialogTitle id="form-dialog-title" className="">
					Tu proyecto. <br /> Tu voz
				</DialogTitle>
				<DialogContent>
					<form
						onSubmit={handleSubmit}
						className="bg-white p-8 w-full max-w-4xl mx-auto"
					>
						<div className="mb-4">
							<label
								htmlFor="empresa"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Empresa
							</label>
							<input
								id="empresa"
								type="text"
								name="empresa"
								className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Nombre
							</label>
							<input
								id="nombre"
								type="text"
								name="nombre"
								className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Teléfono
							</label>
							<input
								id="telefono"
								type="tel"
								name="telefono"
								className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								name="email"
								required
								className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="descripcion"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Descripción
							</label>
							<textarea
								id="descripcion"
								name="descripcion"
								required
								className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							></textarea>
							<ValidationError
								prefix="Descripción"
								field="descripcion"
								errors={state.errors}
							/>
						</div>

						<DialogActions>
							<Button onClick={handleClose}>Cancelar</Button>
							<button
								type="submit"
								disabled={state.submitting}
								className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
							>
								{state.submitting ? "Enviando..." : "Enviar"}
							</button>
						</DialogActions>
					</form>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
};

export default FormsShop;
