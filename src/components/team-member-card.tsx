import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  role: string;
}

export function TeamMemberCard({ name, role }: TeamMemberCardProps) {
  return (
    <Card className="text-center">
      <CardHeader className="items-center pb-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary">
          {name.charAt(0)}
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
}
