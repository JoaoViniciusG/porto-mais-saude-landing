import { TrendingUp, Target, Users2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Market = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="mercado" className="min-h-screen snap-start flex flex-col items-center justify-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nosso Mercado
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atendemos regiões com grande extensão territorial e população descentralizada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Foco Regional</h3>
              <p className="text-muted-foreground">
                Porto Velho e região metropolitana com comunidades remotas
              </p>
            </div>

            <div className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Users2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Público-Alvo</h3>
              <p className="text-muted-foreground">
                Comunidades isoladas sem acesso regular a serviços médicos
              </p>
            </div>

            <div className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Potencial</h3>
              <p className="text-muted-foreground">
                Mercado em crescimento com demanda não atendida significativa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
