import React, { useState } from 'react';
import './App.css';
import Profile from './components/Perfil';
import ExperienceList from './components/ExperienceList';
import { TipoAPI } from './types/TipoAPI';
import EducationList from './components/EducationList';
import ContactList from './components/ContactList';

function App() {

  const fakeAPI: TipoAPI = {
    perfil:
    {
      nome: 'Bruno Santos',
      ocupacao: 'Developer',
      resumo: 'Hortolândia- SP, 27 anos, Brasileiro',
      perfilProfissional: 'Recém-formado em Engenharia de Telecomunicações, sou apaixonado por aprender novas tecnologias, aplicar inovação, otimizar processos e fazer parte de um propósito maior. Nos últimos anos tenho trabalhado com atendimento ao cliente e estratégia de negócios. Também sou um desenvolvedor entusiasta de front-end e SQL.',
    }

    ,
    contatos: [
      {
        id: 1,
        tipo: 'TELEFONE',
        contato: '19 9 9595-9595',
        link: 'http://wa.me/5519995959595'
      },
      {
        id: 2,
        tipo: 'E-MAIL',
        contato: 'bm.santos@outlook.com',
        link: 'mailto:bm.santos@outlook.com'
      },
      {
        id: 3,
        tipo: 'LINKEDIN',
        contato: 'b-santos',
        link: 'https://www.linkedin.com/in/b-santos'
      },
      {
        id: 4,
        tipo: 'GITHUB',
        contato: 'bm-santos',
        link: 'https://github.com/bm-santos'
      }
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'Pontifícia Universidade Católica de Campinas',
        curso: 'Bacharelado em Engenharia de Telecomunicações',
        periodo: '2013 a 2020'
      },
      {
        id: 2,
        instituicao: 'Australian Pacific College',
        curso: 'Diploma of Project Management',
        periodo: 'Set/2017 a Maio/2019'
      },
      {
        id: 3,
        instituicao: 'Impact English College',
        curso: 'General English Language Course',
        periodo: 'Mar/2017 a Jul/2017'
      },
      {
        id: 4,
        instituicao: 'ETECSAL - Escola Técnica Salesiana',
        curso: 'Técnico em Mecatrônica',
        periodo: '2010 a 2011'
      },
      {
        id: 5,
        instituicao: 'Centro Profissionalizante Dom Bosco',
        curso: 'Eletricidade Industrial e Introdução à Automação',
        periodo: '2008 a 2009'
      }
    ],
    experiencia: [
      {
        id: 1,
        cargo: 'Desenvolvimento de Negócios',
        periodo: 'Desde Ago/2019',
        empresa: 'Neuralmind',
        local: 'Campinas, Brasil',
        conteudo: 'Condução do funil de vendas, reuniões com clientes e elaboração de propostas comerciais, apoio à definição e implementação de melhorias das estratégias comerciais e de marketing, prospecção de clientes em eventos e feiras.'
      },
      {
        id: 2,
        cargo: 'Garçom',
        periodo: '2017 a 2019',
        empresa: 'Black Hide Steakhouse by Gambaro',
        local: 'Brisbane, Austrália',
        conteudo: 'Atendimento, anotação dos pedidos, preparação de bebidas, limpeza do local, recepção dos clientes.'
      },
      {
        id: 3,
        cargo: 'Técnico de ensaios',
        periodo: '2011 a 2017',
        empresa: 'IBEC – Instituto Brasileiro de Ensaios de Conformidade',
        local: 'Hortolândia, Brasil',
        conteudo: 'Realização de ensaios elétricos, mecânicos e de inspeção em equipamentos médicos para certificação da ANVISA para a Norma ABNT NBR IEC 60601, emissão de relatórios de ensaios, atendimento direto ao cliente, participação em processos de auditoria do laboratório para obtenção de novas acreditações junto ao Inmetro.'
      },
      {
        id: 4,
        cargo: 'Auxiliar Administrativo',
        periodo: 'Jan/2011 a Ago/2011',
        empresa: 'Núcleo SOFTEX Campinas',
        local: 'Campinas, Brasil',
        conteudo: 'Envio e recebimento de correspondências, elaboração de relatórios, controle de compras, atualização de arquivos e cadastros, prestação de informações ao público.'
      }
    ]
  }

  const [resposta] = useState(fakeAPI)

  return (
    <main>
      <Profile dados={resposta.perfil} />
      <aside>
        <ContactList contatos={resposta.contatos} />
        <EducationList educacao={resposta.educacao} />
      </aside>
      <ExperienceList experiencia={resposta.experiencia} />
    </main>
  );
}

export default App;
