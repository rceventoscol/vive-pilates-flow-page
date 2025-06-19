
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/PMBDFKOF6N75G1', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/vivepilatestudio', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/cec9b72e-69cc-480a-8b74-5afb29633453.png" 
              alt="Vive Pilates Studio" 
              className="w-32 h-auto mx-auto mb-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Bienvenido a <span className="font-medium">Vive Pilates Studio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
            Pilates para sanar, fortalecer y transformar tu cuerpo desde adentro.
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            Especialistas en técnica Pilates, rehabilitación osteomuscular y acondicionamiento físico de bajo impacto.
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            🗓️ Reservar tu clase
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center text-gray-900 mb-16">
            Nuestros servicios incluyen:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Clases de Pilates personalizadas
                </h3>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Rehabilitación osteomuscular
                </h3>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Acondicionamiento físico de bajo impacto
                </h3>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Programas adaptados según edad, lesión o necesidad
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center text-gray-900 mb-16">
            Horarios y contacto
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-medium text-gray-900">Horarios de atención</h3>
                </div>
                <div className="space-y-4 text-lg text-gray-600">
                  <p className="flex items-center">
                    <span className="mr-3">🕒</span>
                    <span><strong>Lunes a viernes:</strong> 6:00 a.m. – 8:00 p.m.</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">🕒</span>
                    <span><strong>Sábados:</strong> 7:00 a.m. – 1:00 p.m.</span>
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        <span className="mr-2">📍</span>
                        Calle 51#37-12 Local 1 piso, Bucaramanga, Santander
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">
                  Redes sociales y contacto
                </h3>
                
                <div className="space-y-6">
                  <Button
                    onClick={handleInstagramClick}
                    variant="outline"
                    size="lg"
                    className="w-full justify-start text-left hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
                  >
                    <Instagram className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                      <div className="flex items-center">
                        <span className="mr-2">📸</span>
                        <span className="font-medium">Instagram @vivepilatestudio</span>
                      </div>
                    </div>
                  </Button>
                  
                  <Button
                    onClick={handleWhatsAppClick}
                    variant="outline"
                    size="lg"
                    className="w-full justify-start text-left hover:bg-green-50 hover:border-green-300 transition-all duration-300"
                  >
                    <MessageCircle className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <div className="flex items-center">
                        <span className="mr-2">📲</span>
                        <span className="font-medium">WhatsApp directo para reservas</span>
                      </div>
                    </div>
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contactar ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto text-center px-6">
          <img 
            src="/lovable-uploads/cec9b72e-69cc-480a-8b74-5afb29633453.png" 
            alt="Vive Pilates Studio" 
            className="w-16 h-auto mx-auto mb-4 opacity-80"
          />
          <p className="text-gray-400">
            © 2024 Vive Pilates Studio. Transformando vidas a través del Pilates.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
