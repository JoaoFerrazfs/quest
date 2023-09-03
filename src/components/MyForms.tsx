import React, { useState, useEffect } from "react";
import "./MyForms.css";

interface FormData {
  title: string;
  imageUrl: string;
}

// Função de mock para simular a resposta da API com 10 formulários diferentes
function mockApiCall(): Promise<FormData[]> {
  return new Promise((resolve) => {
    // Simular uma resposta da API após um curto período de tempo
    setTimeout(() => {
      const mockData: FormData[] = [];
      for (let i = 1; i <= 10; i++) {
        mockData.push({
          title: `Formulário ${i}`,
          imageUrl: `/img/forms/form${i}.webp`,
        });
      }
      resolve(mockData);
    }, 1000); // Simular um atraso de 1 segundo
  });
}

function MyForms() {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  useEffect(() => {
    // Fazer uma solicitação mockada (substituindo a solicitação real)
    mockApiCall()
      .then((data) => {
        // Atualizar o estado com os dados mockados
        setFormDataList(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API', error);
      });
  }, []);

  return (
    <div className="forms-container">
      <div className="forms-container-title">
        <h2>Meus Formulários</h2>
      </div>
      <div className="forms-container-scroll">
        <div className="forms">
          {formDataList.map((form, index) => (
            <div key={index} className="forms-custom-card card">
              <img
                src={form.imageUrl}
                className="card-img-top img-fluid"
                alt={`form${index + 1}`}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{form.title}</h5>
                <a href="#" className="btn btn-sm btn-primary">
                  Visualizar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyForms;
