'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Check, Star } from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(0);

  // Auto-rotate activities carousel
  useEffect(() => {
    const activityInterval = setInterval(() => {
      setCurrentActivity((prev) => 
        prev >= activities.length - 5 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(activityInterval);
  }, []);

  // Auto-rotate testimonials carousel
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev >= testimonials.length - 3 ? 0 : prev + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(testimonialInterval);
  }, []);

  const testimonials = [
    {
      image: "/02.jpg",
      text: "Meu filho melhorou 100% em apenas 2 semanas!"
    },
    {
      image: "/01.jpg", 
      text: "As atividades são maravilhosas e muito eficazes."
    },
    {
      image: "/02.jpg",
      text: "Recomendo para todas as mães e professoras!"
    }
  ];

  const activities = [
    "/Camada-6.webp",
    "/Camada-8.webp", 
    "/Camada-5.webp",
    "/Camada-7.webp",
    "/Camada-4.webp"
  ];

  const bonusItems = [
    {
      title: "Plano de Aula Interativo",
      originalPrice: "R$ 37",
      image: "/Camada-6.webp"
    },
    {
      title: "Caderno dos Números Divertido",
      originalPrice: "R$ 67", 
      image: "/Camada-8.webp"
    },
    {
      title: "Caderno das Cores",
      originalPrice: "R$ 67",
      image: "/Camada-5.webp"
    },
    {
      title: "Livro para Trabalhar Pré-Escrita",
      originalPrice: "R$ 57",
      image: "/Camada-7.webp"
    },
    {
      title: "100 Exercicios Extras de Grafomotricidade",
      originalPrice: "R$ 47",
      image: "/Camada-4.webp"
    },
    {
      title: "Fichas de Coordenação Motora - Recorte",
      originalPrice: "R$ 47",
      image: "/fichas.webp"
    },
    {
      title: "16 Fichas com Identificação",
      originalPrice: "R$ 57",
      image: "/16exercicios.webp"
    },
    {
      title: "Certificado de Conclusão Personalizado",
      originalPrice: "R$ 47",
      image: "/certificado.webp"
    }
  ];

  const benefits = [
    "✅ Exercícios para desenvolver a Leitura",
    "✅ Exercícios de formação de palavras",
    "✅ Exerícios de reconhecimento de sons e letras",
    "✅ Atividades para praticar a coordenação Motora",
    "✅ Atividades para praticar a pré-escrita e a escrita",
    "✅ Atividades para praticar a escrita",
    "✅ Atividades para praticar os números",
    "✅ Plano de Aula interativo passo a passo",
    "✅ E diversas outras atividades"
  ];

  const results = [
    "Se concentrar mais nas atividades",
    "Fazer menos birra, e dizer menos \"não consigo\"",
    "Criar uma maior independência e confiança",
    "Melhorar a escrita como consequência e não por obrigação",
    "E o mais importante: ela vai aprender a gostar de aprender"
  ];

  const faqs = [
    {
      question: "Como Recebo o Material?",
      answer: "Todo o conteúdo é enviado digitalmente através de um acesso por e-mail, com acesso imediato."
    },
    {
      question: "Preciso de Experiência Prévia?",
      answer: "Não! O método é fácil de entender e qualquer pessoa pode ajudar a criança a utilizar."
    },
    {
      question: "Posso Imprimir Quantas Vezes Quiser?",
      answer: "Sim! O material é seu e você pode imprimir quantas cópias precisar para garantir o progresso do seu filho."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <img src="/Book-Mockup-1024x718.webp" alt="Método NeuroLetras" className="mx-auto max-w-full h-auto rounded-lg shadow-lg" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight px-2">
            Acelere a alfabetização dos seus pequenos em tempo recorde, de forma divertida e eficaz
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 md:mb-8 px-2">
            Combo <span className="font-bold text-blue-600">Método NeuroLetras™</span> com mais de 2000 atividades prontas para acelerar a leitura, escrita e desenvolvimento dos seus filhos ou alunos
          </h2>

          <div className="mb-6 md:mb-8">
            <p className="text-lg md:text-xl text-gray-600 mb-1 md:mb-2">De</p>
            <p className="text-2xl md:text-3xl text-red-500 line-through">R$ 57</p>
            <p className="text-lg md:text-xl text-gray-600 mb-1 md:mb-2">por apenas</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">R$ 9,90</p>
          </div>

          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 mb-6 md:mb-8 w-full sm:w-auto">
            QUERO ADQUIRIR AS ATIVIDADES
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-700 text-sm md:text-base">
              <Check className="text-green-500 flex-shrink-0" />
              <span>Funciona pra crianças de 2 a 7 anos</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700 text-sm md:text-base">
              <Check className="text-green-500 flex-shrink-0" />
              <span>Mesmo que ainda não saiba ler ou escrever</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700 text-sm md:text-base">
              <Check className="text-green-500 flex-shrink-0" />
              <span>Mesmo que seja diagnosticada com TDAH e Autismo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Chega de ver seu filho ou aluno travar na hora de ler e escrever!{" "}
                <span className="text-blue-600">Evite bloqueios que podem atrapalhar toda a vida escolar.</span>
              </h2>
            </div>
            <div className="text-center">
              <img src="/novoneuro.webp" alt="Método NeuroLetras" className="mx-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Um kit de atividades 100% ilustrado, divertido e validado por pais e educadores, que une:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-left p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6">
            QUERO ADQUIRIR AS ATIVIDADES
          </Button>
        </div>
      </section>

      {/* Activities Carousel */}
      <section className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 px-2">
            Você vai receber diversas atividades como essas
          </h2>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentActivity * (window.innerWidth < 768 ? 50 : 20)}%)` }}
              >
                {activities.map((activity, index) => (
                  <div key={index} className="flex-shrink-0 w-1/2 md:w-1/5 px-2 md:px-3">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src={activity} 
                        alt={`Atividade ${index + 1}`} 
                        className="w-full h-32 md:h-48 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={() => setCurrentActivity(Math.max(0, currentActivity - 1))}
              className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => setCurrentActivity(Math.min(activities.length - (window.innerWidth < 768 ? 2 : 5), currentActivity + 1))}
              className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: activities.length - (window.innerWidth < 768 ? 1 : 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentActivity(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentActivity === index ? 'bg-orange-500 w-4 md:w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            É tudo muito prático, após clicar no botão dessa página você recebe os arquivos no seu e-mail e no WhatsApp
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold mb-2">Receba por E-mail</h3>
                <p className="text-gray-600">Acesso imediato na sua caixa de entrada</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold mb-2">Receba no WhatsApp</h3>
                <p className="text-gray-600">Links diretos no seu WhatsApp</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🖨️</span>
                </div>
                <h3 className="font-semibold mb-2">Imprima Quantas Vezes Quiser</h3>
                <p className="text-gray-600">Material ilimitado para praticar</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Calma aí que ainda não acabou...</h2>
          <h2 className="text-2xl font-bold text-blue-600 mb-12">
            LEVANDO HOJE VOCÊ RECEBERÁ TODOS ESSES BÔNUS GRATUITAMENTE AO LEVAR O PLANO PREMIUM
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {bonusItems.map((bonus, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <img src={bonus.image} alt={bonus.title} className="w-[275px] h-[462px] object-cover rounded-lg mx-auto mb-4" />
                  <CardTitle className="text-lg">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-500 line-through">{bonus.originalPrice}</p>
                  <Badge className="bg-green-500 text-white">HOJE: GRÁTIS</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6">
            ADQUIRIR O COMBO COMPLETO
          </Button>
        </div>
      </section>

      {/* Benefits Detailed Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Por que os exercícios do Método NeuroLetras funcionam?
          </h2>
          <h2 className="text-2xl font-bold text-blue-600 mb-12">VEJA OS BENEFÍCIOS</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">O aprendizado da escrita começa bem antes de formar letras...</h3>
              <p className="text-gray-600 mb-6">
                Com esses exercícios do método a criança desenvolve habilidades fundamentais que são a base para a alfabetização.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Com esse método, seu filho não treina apenas a mão, a escrita e a leitura,</h3>
              <p className="text-gray-600">
                ele desenvolve o cérebro pra aprender com mais facilidade e segurança.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">e em poucos dias ela vai:</h3>
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3 text-left">
                    <Check className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6">
            QUERO MEU FILHO LENDO E ESCREVENDO
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Quem já testou, aprova! Veja os depoimentos de mães e professoras encantadas com a evolução dos pequenos.
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentTestimonial * 33.33}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-1/3 px-4">
                    <Card className="h-full transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {testimonial.text.split(' ')[0].charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">Cliente Satisfeita</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setCurrentTestimonial(Math.min(testimonials.length - 3, currentTestimonial + 1))}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-orange-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preco" className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Recapitulando tudo o que você vai receber junto com as Atividades do Método Neuroletras
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Kit Básico */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">KIT BÁSICO</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-left">
                  <span className="text-green-500 text-xl">✅</span>
                  <span><strong>200 atividades</strong></span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>800 atividades bônus</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Plano de Aula Personalizado</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Caderno dos Números</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Caderno das Cores</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Livro Pré-Escrita</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>100 Exercícios Extras</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Fichas de Coordenação</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>16 Fichas com Identificação</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Certificado Personalizado</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-green-600 mb-2">R$ 9</p>
                <div className="border-t border-gray-300 my-4"></div>
                <p className="text-lg font-semibold text-gray-700">ACESSO IMEDIATO</p>
              </div>
              
              <Button variant="outline" className="w-full text-lg py-3 border-gray-300">
                escolher kit básico
              </Button>
            </div>

            {/* Kit Premium */}
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-2 text-lg font-bold">KIT PREMIUM</Badge>
              </div>
              
              {/* Imagem do book mockup menor */}
              <div className="mb-4">
                <img src="/Book-Mockup-1024x718.webp" alt="Kit Premium" className="w-32 md:w-40 mx-auto rounded-lg shadow-md" />
              </div>
              
              {/* Lista de bônus com mais destaque */}
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>+ de 1000 Atividades • Leitura e Escrita</strong> <span className="text-red-500 font-bold">R$ 97</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>Plano de Aula Personalizado</strong> <span className="text-red-500 font-bold">R$ 77</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>Caderno dos Números</strong> <span className="text-red-500 font-bold">R$ 67</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>Caderno das Cores</strong> <span className="text-red-500 font-bold">R$ 47</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>Livro Pré-Escrita</strong> <span className="text-red-500 font-bold">R$ 57</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>Exercícios de Grafomotricidade</strong> <span className="text-red-500 font-bold">R$ 67</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>Atividades de Coordenação Motora</strong> <span className="text-red-500 font-bold">R$ 37</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>Certificado Personalizado</strong> <span className="text-red-500 font-bold">R$ 27</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm md:text-base"><strong>+ Diversos Bônus extras</strong> <span className="text-red-500 font-bold">R$ 97</span></span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">R$ 37</p>
                <p className="text-lg text-gray-600 mb-2">ou 7X R$ 5,92</p>
                <div className="border-t border-gray-300 my-4"></div>
                <p className="text-lg font-semibold text-gray-700">ACESSO VITALÍCIO | ACESSO IMEDIATO</p>
              </div>
              
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3 mb-4 font-bold">
                QUERO O KIT COMPLETO
              </Button>
              
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span>✓</span>
                  <span>Compra SEGURA</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>✓</span>
                  <span>Satisfação GARANTIDA</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>✓</span>
                  <span>Privacidade PROTEGIDA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Garantia de Satisfação Total:</h2>
          <p className="text-lg text-gray-700 mb-8">
            Estamos tão confiantes na eficácia e qualidade do e-book "As Atividades de NEUROLETRAS" que oferecemos uma{" "}
            <span className="font-semibold">garantia de satisfação total.</span> Se, por qualquer motivo, você não estiver completamente satisfeito com sua compra nos primeiros 7 dias, basta entrar em contato conosco e faremos o reembolso integral do valor investido, sem questionamentos.
          </p>
          <img src="/selo-garantia-2.webp" alt="Selo de Garantia" className="mx-auto h-32" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Perguntas Frequentes</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6">
              QUERO ADQUIRIR AS ATIVIDADES
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}