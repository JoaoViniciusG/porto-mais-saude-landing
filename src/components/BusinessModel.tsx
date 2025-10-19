import { Coins, TrendingDown, CheckCircle2, Zap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const BusinessModel = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="modelo" className="min-h-screen snap-start flex flex-col items-center justify-center py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Modelo de Negócios Sustentável
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eficiência operacional combinada com preços justos para máximo impacto social
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingDown,
                title: "Baixo Custo Operacional",
                description: "Containers reduzem custos de construção e manutenção",
                color: "from-primary to-primary-light",
                delay: "delay-100"
              },
              {
                icon: Zap,
                title: "Manufatura Eficiente",
                description: "Produção modular otimizada e escalável",
                color: "from-primary-light to-primary-lighter",
                delay: "delay-300"
              },
              {
                icon: Coins,
                title: "Cobrança Justa",
                description: "Preços acessíveis mantendo sustentabilidade financeira",
                color: "from-accent to-accent-light",
                delay: "delay-500"
              },
              {
                icon: CheckCircle2,
                title: "Escalabilidade",
                description: "Modelo replicável para outras regiões",
                color: "from-primary-lighter to-accent",
                delay: "delay-700"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 ${item.delay} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
