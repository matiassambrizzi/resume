import {ResumeData} from "./components/Resume/Resume";

export const matiDataGerman: ResumeData = {
  header: {
    title: "MATIAS SAMBRIZZI",
    picture: "https://www.posadagotan.com/wp-content/uploads/2019/03/Posada-Gotan-Vivir-Mati.jpg",
    subtilte: `
                STUDENT DER ELEKTROTECHNIK
                (UBA) - SR. FULL STACK
                ENTWICKLER
            `
  },
  body: {
    left: [
      {
        title: "AUSBILDUNG",
        component: {
          type: "text",
          data: `
                Elektrotechnik an der 
                Universität von Buenos Aires (UBA). 
                März 2014 - heute
              `
        },
      },
      {
        title: "SPRACHEN",
        component: {
          type: "text",
          data: `
            Englisch
            Französisch
          `
        }
      },
      {
        title: "KONTAKT",
        component: {
          type: "text",
          data: ""
        }
      },
      {
        title: `PROGRAMMIERSPRACHEN 
              UND TOOLS`,
        component: {
          type: "text",
          data: `
            C, C++, Python, LATEX, HTML, CSS, 
            Javascript, Linux, SQL, Typescript, 
            React, Kotlin, Ktor, Kafka, Hasura, 
            Funktionale Programmierung, Solidity,
            Microsoft Office Suite, Notion, Slack, Github.
          `
        }
      }
    ],
    right: [
      {
        title: `BERUFLICHES 
              PROFIL`,
        component: {
          type: "text",
          data: `
            Engagiert und optimistisch, ich lerne gerne und 
            teile mein Wissen gerne mit dem Team. Ich bin in der Lage, sowohl selbstgesteuertes Lernen als auch das Lernen von Kollegen zu bewältigen. 
            Ich arbeite effizient in Gruppen und bei der Problemlösung. 
            Ich bin begeistert von technologischer Innovation und 
            halte mich ständig in diesem Bereich auf dem Laufenden.
          `
        }
      },
      {
        title: `BERUFSERFAHRUNG`,
        component: {
          type: "list",
          data: [
            {
              type: "item",
              data: {
                title: "UNILEVER FOOD SOLUTIONS, Buenos Aires",
                data: `
                  Aufgaben: Verkaufsanalyse, Abgleich von Preis- und Lagerinformationen, Erstellung von Excel-Tabellen zur Vergleich der Zahlen, mit Alarmsystem für Abweichungen.
                `,
                subtilte: "Praktikum, Marketingabteilung, Februar 2014 - April 2014."
              }
            },
            {
              type: "item",
              data: {
                title: "IMT ATLANTIQUE, Frankreich",
                subtilte: "Praktikum, Netzwerkabteilung, September 2019 - Februar 2020.",
                data: `
                  Aufgaben: Montage und Konfiguration von Ladestationen für Elektrofahrzeuge OPENevse. Design und Bau eines Schaltkreises zur Kommunikation zwischen einem Elektrofahrzeug und der Ladestation. Vorbereitung von Präsentationen, um den Fortschritt dem Team zu zeigen.
                `
              }
            },
            {
              type: "item",
              data: {
                title: "BRIKEN, Buenos Aires",
                subtilte: "Vollzeitarbeit als Full Stack Entwickler, September 2020 - heute.",
                data: `
                  Aufgaben: Design, Implementierung und Wartung einer White-Label-Finanzblockchain-Plattform mit Funktionen wie Token-Handel und Crowdfunding. Design und Implementierung von Prozessen, Integration mit internen und externen Diensten.
                `
              }
            }
          ]
        }
      }
    ]
  }
};

export const matiDataEnglish: ResumeData = {
  header: {
    title: "MATIAS SAMBRIZZI",
    picture: "https://www.posadagotan.com/wp-content/uploads/2019/03/Posada-Gotan-Vivir-Mati.jpg",
    subtilte: `
                ELECTRONIC ENGINEERING STUDENT 
                (UBA) - SR. FULL STACK
                DEVELOPER 
            `
  },
  body: {
    left: [
      {
        title: "EDUCATION",
        component: {
          type: "text",
          data: `
                Electronic Engineering at 
                University of Buenos Aires (UBA). 
                March 2014 - Present
              `
        },
      },
      {
        title: "LANGUAGES",
        component: {
          type: "text",
          data: `
            English
            French
          `
        }
      },
      {
        title: "CONTACT",
        component: {
          type: "text",
          data: ""
        }
      },
      {
        title: `PROGRAMMING LANGUAGES 
              AND TOOLS`,
        component: {
          type: "text",
          data: `
            C, C++, Python, LATEX, HTML, CSS, 
            Javascript, Linux, SQL, Typescript, 
            React, Kotlin, Ktor, Kafka, Hasura, 
            Functional Programming, Solidity,
            Microsoft Office Suite, Notion, Slack, Github.
          `
        }
      }
    ],
    right: [
      {
        title: `PROFESSIONAL 
              PROFILE`,
        component: {
          type: "text",
          data: `
            Committed and optimistic, I enjoy learning and 
            sharing my knowledge with the team. I am adept at 
            both self-directed learning and learning from peers. 
            I work efficiently in groups and in problem-solving. 
            I am passionate about technological innovation and 
            constantly stay updated in this field.
          `
        }
      },
      {
        title: `PROFESSIONAL
              EXPERIENCE`,
        component: {
          type: "list",
          data: [
            {
              type: "item",
              data: {
                title: "UNILEVER FOOD SOLUTIONS, Buenos Aires",
                data: `
                  Responsibilities: Sales analysis, cross-referencing price and stock information, 
                  creating Excel spreadsheets to compare figures, with alert system for discrepancies.
                `,
                subtilte: "Internship, Marketing Department, February 2014 - April 2014."
              }
            },
            {
              type: "item",
              data: {
                title: "IMT ATLANTIQUE, France",
                subtilte: "Internship, Network Department, September 2019 - February 2020.",
                data: `
                  Responsibilities: Assembly and configuration of electric vehicle charging station OPENevse. 
                  Design and construction of a circuit enabling communication between an electric vehicle and the charging station. 
                  Preparation of presentations to showcase progress to the team.
                `
              }
            },
            {
              type: "item",
              data: {
                title: "BRIKEN, Buenos Aires",
                subtilte: "Full-time work as a full stack developer, September 2020 - Present.",
                data: `
                  Responsibilities: Design, implementation, and maintenance of a white-label financial blockchain platform, 
                  featuring functionalities like token trading and crowdfunding. Design and implementation of processes, 
                  Integration with internal and external services.
                `
              }
            }
          ]
        }
      }
    ]
  }
}

export const matiDataSpanish: ResumeData = {
  header: {
    title: "MATIAS SAMBRIZZI",
    picture: "https://www.posadagotan.com/wp-content/uploads/2019/03/Posada-Gotan-Vivir-Mati.jpg",
    subtilte: `
                ESTUDIANTE DE INGENIERIA 
                ELECTRONICA (UBA) - SR. FULL STACK
                DEVELOPER 
            `

  },
  body: {
    left: [
      {
        title: "EDUCACION",
        component: {
          type: "text",
          data: `
                Ingeniería Electrónica en la 
                Universidad de Buenos Aires (UBA). 
                Marzo 2014 - Actualidad
              `
        },
      },
      {
        title: "IDIOMAS",
        component: {
          type: "text",
          data: `
            Ingles
            Frances
          `
        }
      },
      {
        title: "CONTACTO",
        component: {
          type: "text",
          data: ""
        }
      },
      {
        title: `LENGUAJES DE 
              PROGRAMACIÓN Y 
              HERRAMIENTAS`,
        component: {
          type: "text",
          data: `
            C, C++, Python, LATEX, HTML, CSS, 
            Javascript, Linux, SQL, Typescript, 
            React, Kotlin, Ktor, Kafka, Hasura, 
            Programación funcional, Solidity,
            Paquete Office, Notion, Slack, Github.
          `
        }
      }
    ],
    right: [
      {
        title: `PERFIL 
              PROFESIONAL`,
        component: {
          type: "text",
          data: `
            Comprometido y optimista, me gusta aprender y 
            compartir mis conocimientos con el equipo de trabajo. 
            Soy capaz de aprender tanto de forma autodidacta como 
            así también por parte de mis pares. Trabajo de forma 
            eficiente en grupo y en la búsqueda de soluciones. 
            Me apasiona la innovación tecnológica y constantemente 
            me estoy actualizo en este ámbito.
          `
        }
      },
      {
        title: `EXPERIENCIA
              PROFESIONAL`,
        component: {
          type: "list",
          data: [
            {
              type: "item",
              data: {
                title: "UNILEVER FOOD SOLUTIONS, Buenos Aires",
                data: `
                  Mis responsabilidades: Análisis de ventas, cruza de información de precio y stock, 
                  armado de planillas excel para comparar las cifras, con sistema de alarma en caso de diferencias.
                `,
                subtilte: "Internship, Departamento de Marketing, Febrero 2014 - Abril 2014."
              }
            },
            {
              type: "item",
              data: {
                title: "IMT ATLANTIQUE, Francia",
                subtilte: "Internship. Departamento de redes. Septiembre 2019 - Febrero 2020.",
                data: `
                  Mis responsabilidades: Ensamble y configuración de la estación de 
                  carga para autos eléctricos OPENevse. Diseño y construcción de un circuto que 
                  permite la comunicación entre un auto eléctrico y la estación de carga. 
                  Elaboración de presentaciones para mostrar avances al equipo.
                `
              }
            },
            {
              type: "item",
              data: {
                title: "BRIKEN, Buenos Aires",
                subtilte: "Trabajo fulltime como desarrolador full stack. Septiembre 2020- Actualidad.",
                data: `
                  Mis responsabilidades: Diseño, Implementación y 
                  manenimiento de plataforma blockchain financiera marca blanca, 
                  con funcionalidades como la compra y venta de tokens y crowfunding. 
                  Diseño e implementación de procesos, Implementación de integraciones 
                  con servicios internos y externos. 
                `
              }
            }
          ]
        }
      }
    ]
  }
}
