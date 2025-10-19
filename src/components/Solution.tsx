import { Package, Truck, DollarSign, Clock } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Solution = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="solucao" className="min-h-screen snap-start flex flex-col items-center justify-center py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossa Solução Inovadora
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Módulos médicos em containers: portáteis, acessíveis e totalmente equipados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Package,
                title: "Módulos Compactos",
                description: "Containers totalmente equipados com tecnologia médica moderna e estrutura otimizada",
                delay: "delay-100"
              },
              {
                icon: Truck,
                title: "Alta Mobilidade",
                description: "Fácil transporte e instalação em qualquer localidade remota de Porto Velho",
                delay: "delay-200"
              },
              {
                icon: DollarSign,
                title: "Custo Acessível",
                description: "Solução econômica que reduz drasticamente os custos de infraestrutura",
                delay: "delay-200"
              },
              {
                icon: Clock,
                title: "Rápida Implantação",
                description: "Atendimento operacional em dias, não em meses ou anos",
                delay: "delay-300"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-700 ${item.delay} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                    <item.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
