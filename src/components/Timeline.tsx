import { CheckCircle2, Circle } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Timeline = () => {
  const { ref, isInView } = useInView();

  const milestones = [
    {
      quarter: "Q1 2024",
      title: "Protótipo Finalizado",
      description: "Conclusão do primeiro módulo médico",
      completed: true
    },
    {
      quarter: "Q2 2024",
      title: "Projeto Piloto",
      description: "Instalação em comunidade remota de Porto Velho",
      completed: true
    },
    {
      quarter: "Q3 2024",
      title: "Expansão Regional",
      description: "Implementação de 5 novos módulos",
      completed: false
    },
    {
      quarter: "Q4 2024",
      title: "Parcerias Estratégicas",
      description: "Alianças com governo e organizações de saúde",
      completed: false
    },
    {
      quarter: "2025",
      title: "Escala Nacional",
      description: "Expansão para outras regiões da Amazônia",
      completed: false
    }
  ];

  return (
    <section id="proximos-passos" className="py-20 snap-start bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Próximos Passos
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa jornada para revolucionar o acesso à saúde em áreas remotas
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-primary-light" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex gap-6 transition-all duration-700 delay-${100 + (index * 200)} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-lg ${
                    milestone.completed 
                      ? 'bg-gradient-to-br from-accent to-accent-light' 
                      : 'bg-gradient-to-br from-primary to-primary-light'
                  }`}>
                    {milestone.completed ? (
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    ) : (
                      <Circle className="h-8 w-8 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {milestone.quarter}
                      </span>
                      {milestone.completed && (
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                          Concluído
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
