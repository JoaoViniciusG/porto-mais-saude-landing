import { MapPin, Users, AlertCircle } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Problem = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="problema" className="min-h-screen flex flex-col items-center justify-center snap-start py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O Desafio da Saúde em Porto Velho
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milhares de pessoas em áreas remotas enfrentam dificuldades para acessar atendimento médico básico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center p-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Grande Extensão Territorial</h3>
              <p className="text-muted-foreground">
                Porto Velho possui vasta área territorial com comunidades isoladas
              </p>
            </div>

            <div className={`text-center p-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">População Descentralizada</h3>
              <p className="text-muted-foreground">
                Comunidades espalhadas dificultam o acesso aos centros de saúde
              </p>
            </div>

            <div className={`text-center p-6 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Falta de Infraestrutura</h3>
              <p className="text-muted-foreground">
                Construir unidades permanentes é caro e demorado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
