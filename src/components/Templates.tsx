import React, { useState, useEffect } from "react";
import "./Templates.css";

interface TemplateData {
  title: string;
  imageUrl: string;
}

// Função de mock para simular a resposta da API com 10 resultados diferentes
function mockApiCall(): Promise<TemplateData[]> {
  return new Promise((resolve) => {
    // Simular uma resposta da API após um curto período de tempo
    setTimeout(() => {
      const mockData: TemplateData[] = [];
      for (let i = 1; i <= 10; i++) {
        mockData.push({
          title: `Formulário ${i} mockado`,
          imageUrl: `/img/templates/template${i}.webp`,
        });
      }
      resolve(mockData);
    }, 1000); // Simular um atraso de 1 segundo
  });
}

function Templates() {
  const [templateDataList, setTemplateDataList] = useState<TemplateData[] | null>(null);

  useEffect(() => {
    // Fazer uma solicitação mockada (substituindo a solicitação real)
    mockApiCall()
      .then((data) => {
        // Atualizar o estado com os dados mockados
        setTemplateDataList(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API', error);
      });
  }, []);

  return (
    <div className="templates">
      <div className="template-title">
        <h2>Temas</h2>
      </div>
      <div className="template-scroll">
        <div className="template-container">
          {templateDataList && templateDataList.map((template, index) => (
            <div key={index} className="custom-card card">
              <img
                src={template.imageUrl}
                className="card-img-top img-fluid"
                alt={`template${index + 1}`}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{template.title}</h5>
                <a href="#" className="btn btn-sm btn-primary">
                  Experimente
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Templates;
