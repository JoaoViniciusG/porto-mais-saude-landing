import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const CallToAction = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary via-primary-light to-accent/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Faça Parte Desta Transformação
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Juntos podemos levar saúde de qualidade para quem mais precisa. Entre em contato e descubra como participar.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-light shadow-accent text-lg px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              Entrar em Contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Agendar Reunião
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white/90">
            <div className={`transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="text-4xl font-bold mb-2 text-accent">100+</div>
              <p className="text-sm">Famílias Impactadas</p>
            </div>
            <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="text-4xl font-bold mb-2 text-accent">5</div>
              <p className="text-sm">Comunidades Atendidas</p>
            </div>
            <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="text-4xl font-bold mb-2 text-accent">24/7</div>
              <p className="text-sm">Disponibilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
