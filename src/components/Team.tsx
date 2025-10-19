import { useInView } from "@/hooks/use-in-view";
import { User } from "lucide-react";

const Team = () => {
  const { ref, isInView } = useInView();

  const teamMembers = [
    {
      name: "Dr. Ana Silva",
      role: "Diretora Médica",
      expertise: "Especialista em Medicina Comunitária"
    },
    {
      name: "Eng. Carlos Mendes",
      role: "Diretor de Operações",
      expertise: "Engenheiro Civil e Logística"
    },
    {
      name: "Maria Santos",
      role: "Gerente de Projetos",
      expertise: "Gestão de Saúde Pública"
    },
    {
      name: "José Oliveira",
      role: "Coordenador Técnico",
      expertise: "Infraestrutura e Equipamentos Médicos"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais experientes dedicados a levar saúde para onde ela é necessária
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 delay-${(index + 1) * 100} ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <User className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
