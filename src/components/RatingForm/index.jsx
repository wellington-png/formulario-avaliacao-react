import InputMultipleChoice from "../InputMultipleChoice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from "./styles";


function RatingForm({ fields }) {
  const notify = () => {
    toast.success("Formulário enviado com sucesso")

  }
  return (
    <Form>
      {fields.map((field, index) => (
        <InputMultipleChoice
          key={index}
          pergunta={field.label}
          opcoes={field.options}
          name={field.name}

        />
      ))}

      <button className="btn-save" onClick={notify} type="submit">Enviar</button>
      <ToastContainer />
    </Form>
  );
}

export default RatingForm;