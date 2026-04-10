import {
  Layers,
  Server,
  MonitorSmartphone,
  ShieldCheck,
  BrainCircuit,
  Building2,
  Database,
  Headset,
  Wrench,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Layers,
  Server,
  MonitorSmartphone,
  ShieldCheck,
  BrainCircuit,
  Building2,
  Database,
  Headset,
  Wrench,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.iconName];

  return (
    <Card className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-silver/50">
      <CardHeader>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-silver/10">
          {Icon && <Icon size={24} className="text-silver" />}
        </div>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription className="pt-1">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-silver" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
