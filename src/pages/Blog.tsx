
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const Blog = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/PMBDFKOF6N75G1', '_blank');
  };

  const blogPosts = [
    {
      title: "Los Beneficios del Pilates para la Rehabilitación",
      excerpt: "Descubre cómo el Pilates puede ayudarte en tu proceso de recuperación de lesiones osteomusculares.",
      content: `El Pilates es una excelente herramienta para la rehabilitación porque:
      
• Fortalece los músculos profundos del core
• Mejora la postura y alineación corporal
• Reduce el dolor de espalda crónico
• Aumenta la flexibilidad de forma segura
• Mejora la coordinación y equilibrio

Los ejercicios de bajo impacto permiten trabajar sin sobrecargar las articulaciones, siendo ideal para personas en proceso de recuperación.`,
      readTime: "5 min"
    },
    {
      title: "Pilates vs. Gimnasio: ¿Cuál es mejor para ti?",
      excerpt: "Conoce las diferencias entre el Pilates y el entrenamiento tradicional de gimnasio.",
      content: `Diferencias clave:

PILATES:
• Enfoque en calidad sobre cantidad
• Movimientos controlados y precisos
• Fortalecimiento del core como base
• Mejora la flexibilidad y postura
• Menor riesgo de lesiones

GIMNASIO TRADICIONAL:
• Enfoque en fuerza y masa muscular
• Ejercicios de alto impacto
• Uso de pesos libres y máquinas
• Mayor quema calórica inmediata

El Pilates es ideal si buscas mejorar tu postura, recuperarte de lesiones o mantener un estilo de vida activo de forma segura.`,
      readTime: "4 min"
    },
    {
      title: "5 Ejercicios de Pilates que Puedes Hacer en Casa",
      excerpt: "Rutina básica de Pilates para principiantes que puedes realizar desde casa.",
      content: `Ejercicios básicos para comenzar:

1. THE HUNDRED: Activa tu core y mejora la circulación
2. ROLL UP: Fortalece abdominales y mejora la flexibilidad de la columna
3. LEG CIRCLES: Fortalece caderas y mejora la movilidad
4. PLANK: Fortalece todo el core y los hombros
5. SWAN: Fortalece la espalda y mejora la postura

Recuerda: La técnica es más importante que la intensidad. Realiza cada ejercicio con control y respiración consciente.

Para una práctica segura y efectiva, te recomendamos tomar clases con instructor certificado.`,
      readTime: "6 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Blog <span className="font-medium">Educativo</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Conoce más sobre Pilates, sus beneficios y cómo puede mejorar tu calidad de vida
        </p>
      </section>

      {/* Blog Posts */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime} de lectura</span>
                </div>
                
                <h2 className="text-2xl font-medium text-gray-900 mb-4">
                  {post.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {post.content}
                  </div>
                </div>
                
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Leer más</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-blue-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            ¿Tienes dudas sobre Pilates?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nuestros instructores están aquí para resolver todas tus preguntas
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Consultar por WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
