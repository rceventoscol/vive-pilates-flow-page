
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Users, Award } from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/PMBDFKOF6N75G1', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Sobre <span className="font-medium">Vive Pilates Studio</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Un espacio dedicado a tu bienestar integral a través del método Pilates
        </p>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-12">
            Nuestra Historia
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              En Vive Pilates Studio creemos que cada cuerpo tiene su propia historia y necesidades únicas. 
              Nuestro enfoque personalizado nos permite adaptar cada sesión a tu condición física, objetivos 
              y limitaciones específicas.
            </p>
            <p>
              Desde nuestra apertura en Bucaramanga, nos hemos especializado en la rehabilitación 
              osteomuscular y el acondicionamiento físico de bajo impacto, ayudando a personas de todas 
              las edades a mejorar su calidad de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-16">
            Nuestros Valores
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-gray-900 mb-4">Cuidado Personal</h3>
                <p className="text-gray-600">
                  Cada cliente recibe atención individualizada y cuidado personalizado
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-gray-900 mb-4">Comunidad</h3>
                <p className="text-gray-600">
                  Creamos un ambiente acogedor donde todos se sienten bienvenidos
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-green-500 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-gray-900 mb-4">Excelencia</h3>
                <p className="text-gray-600">
                  Técnicas profesionales y resultados comprobados en cada sesión
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <MessageCircle className="h-12 w-12 text-purple-500 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-gray-900 mb-4">Comunicación</h3>
                <p className="text-gray-600">
                  Mantenemos una comunicación abierta y constante contigo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Agenda tu primera clase y descubre cómo el Pilates puede cambiar tu vida
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contactar ahora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
