import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdown = `
# Cesar Ruiz

![Header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=200&section=header&text=Cesar%20Ruiz&fontSize=50&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Full%20Stack%20Developer%20%E2%80%A2%20AI%20Explorer&descAlignY=55&descSize=18)

## 👋 Hola, soy Cesar Ruiz
**Backend Developer • Node.js Enthusiast • Automation & AI Explorer**  
Construyo software elegante, eficiente y escalable. Me apasiona la automatización, la arquitectura limpia y la inteligencia artificial aplicada al desarrollo moderno.

[![Email](https://img.shields.io/badge/📧%20Email-cr8297408@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=EA4335)](mailto:cr8297408@gmail.com)
[![LinkedIn](https://img.shields.io/badge/💼%20LinkedIn-Cesar%20Ruiz-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0A66C2)](https://www.linkedin.com/in/cesarbackend)
[![GitHub](https://img.shields.io/badge/🐙%20GitHub-cr8297408-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=181717)](https://github.com/cr8297408)

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=cr8297408&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&text_color=C9D1D9&ring_color=58A6FF)
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=cr8297408&theme=tokyonight&hide_border=true&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B6B&currStreakLabel=C9D1D9)

## 🚀 Tech Stack

### 🧠 Backend Development
- ![Node.js](https://skillicons.dev/icons?i=nodejs) Node.js
- ![NestJS](https://skillicons.dev/icons?i=nestjs) NestJS
- ![Express](https://skillicons.dev/icons?i=express) Express
- ![TypeScript](https://skillicons.dev/icons?i=typescript) TypeScript
- ![GraphQL](https://skillicons.dev/icons?i=graphql) GraphQL

### 🗄️ Bases de Datos
- ![MySQL](https://skillicons.dev/icons?i=mysql) MySQL
- ![MongoDB](https://skillicons.dev/icons?i=mongodb) MongoDB
- ![DynamoDB](https://skillicons.dev/icons?i=dynamodb) DynamoDB
- ![Redis](https://skillicons.dev/icons?i=redis) Redis
- ![Cassandra](https://skillicons.dev/icons?i=cassandra) Cassandra

### 🛠️ DevOps & Arquitectura
- ![Docker](https://skillicons.dev/icons?i=docker) Docker
- ![Terraform](https://skillicons.dev/icons?i=terraform) Terraform
- ![AWS](https://skillicons.dev/icons?i=aws) AWS
- ![GH Actions](https://skillicons.dev/icons?i=githubactions) GH Actions

### 🎨 Frontend Development
- ![React](https://skillicons.dev/icons?i=react) React
- ![Next.js](https://skillicons.dev/icons?i=nextjs) Next.js
- ![Remix](https://skillicons.dev/icons?i=remix) Remix
- ![Tailwind](https://skillicons.dev/icons?i=tailwind) Tailwind

## 🧠 SmartCoder Labs – Agencia Automatizada por IA
**SmartCoderLabs** es una agencia de desarrollo de software automatizada, impulsada por agentes de IA que orquestan tareas como análisis, generación de código, testing, despliegue y documentación.

### ✨ Características Principales
- 🎯 Arquitectura basada en agentes: PM-Agent, TechLead-Agent, Dev-Agent, Test-Agent, Infra-Agent
- ⚙️ Scaffolder inteligente: Por stack (NestJS, Next.js, Flutter)
- 🔍 Testing automatizado: Con validación semántica (LLM Validator)
- 🚀 CI/CD serverless: En Vercel, Fly.io

[![Ver Proyecto](https://img.shields.io/badge/🌐%20Ver%20Proyecto-smart--coder--landing.vercel.app-667eea?style=for-the-badge&logoColor=white)](https://smart-coder-landing.vercel.app)

## 🧪 Otros Proyectos Relevantes
- 🏢 **Xell**: Plataforma SaaS para PYMEs, migrada a microservicios serverless con AWS Lambda.
- 💳 **88Pay**: Pasarela de pagos de alto riesgo con arquitectura desacoplada y monitoreo inteligente.
- 🏠 **Eliox**: Web scraper de información inmobiliaria con enfoque legal y de seguros.
- 🛒 **POS Modular**: Software para comercios offline/online con arquitectura híbrida documentada.

## 📚 Educación Continua
- 🎓 Ingeniería de Sistemas — UNAD (en curso)
- 🧠 Backend Web — Acámica + ProTalento
- 📘 Aprendizaje Continuo — Platzi (IA, arquitectura, DevOps)

## ✨ Filosofía
> "Elegancia + Automatización + Código limpio = Ingeniería que escala."

## 📫 Contacto
[![Email](https://img.shields.io/badge/📧%20Email-cr8297408@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=EA4335)](mailto:cr8297408@gmail.com)
[![LinkedIn](https://img.shields.io/badge/🔗%20LinkedIn-Cesar%20Ruiz-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0A66C2)](https://www.linkedin.com/in/cesarbackend)
[![GitHub](https://img.shields.io/badge/🐙%20GitHub-cr8297408-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=181717)](https://github.com/cr8297408)

¡Siempre abierto a colaborar en proyectos innovadores y desafiantes! 🚀

![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=100&section=footer)

![Profile views](https://komarev.com/ghpvc/?username=cr8297408&label=Profile%20views&color=667eea&style=for-the-badge)
`;

function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24, background: '#0d1117', color: '#c9d1d9', fontFamily: 'Segoe UI, sans-serif' }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
