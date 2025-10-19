import { Check, X, Minus } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Competitors = () => {
  const { ref, isInView } = useInView();

  const comparisonData = [
    {
      feature: "Custo de Implementação",
      portosaude: { value: "Baixo", status: "good" },
      traditional: { value: "Alto", status: "bad" },
      mobile: { value: "Médio", status: "medium" }
    },
    {
      feature: "Tempo de Instalação",
      portosaude: { value: "Dias", status: "good" },
      traditional: { value: "Meses/Anos", status: "bad" },
      mobile: { value: "Médio", status: "medium" }
    },
    {
      feature: "Mobilidade",
      portosaude: { value: "Alta", status: "good" },
      traditional: { value: "Nenhuma", status: "bad" },
      mobile: { value: "Alta", status: "good" }
    },
    {
      feature: "Qualidade Estrutural",
      portosaude: { value: "Alta", status: "good" },
      traditional: { value: "Alta", status: "good" },
      mobile: { value: "Baixa", status: "bad" }
    },
    {
      feature: "Escalabilidade",
      portosaude: { value: "Alta", status: "good" },
      traditional: { value: "Baixa", status: "bad" },
      mobile: { value: "Média", status: "medium" }
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <Check className="h-5 w-5 text-green-500" />;
      case "bad":
        return <X className="h-5 w-5 text-red-500" />;
      case "medium":
        return <Minus className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="concorrentes" className="min-h-screen snap-start flex flex-col items-center justify-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Por Que Escolher a Porto+Saúde?
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comparação com soluções tradicionais e alternativas do mercado
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold">Critério</th>
                  <th className="px-6 py-4 text-center font-semibold">Porto+Saúde</th>
                  <th className="px-6 py-4 text-center font-semibold text-primary-foreground/80">Unidades Tradicionais</th>
                  <th className="px-6 py-4 text-center font-semibold text-primary-foreground/80">Clínicas Móveis</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-t border-border hover:bg-muted/50 transition-colors duration-700 delay-${(index + 1) * 100} ${isInView ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <td className="px-6 py-4 font-medium text-card-foreground">{row.feature}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon(row.portosaude.status)}
                        <span className="font-semibold text-card-foreground">{row.portosaude.value}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2 opacity-70">
                        {getStatusIcon(row.traditional.status)}
                        <span className="text-muted-foreground">{row.traditional.value}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2 opacity-70">
                        {getStatusIcon(row.mobile.status)}
                        <span className="text-muted-foreground">{row.mobile.value}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitors;
