import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

export function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <Card className="text-center">
      <CardHeader className="items-center pb-2">
        <div className="w-full overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="h-72 w-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
}
